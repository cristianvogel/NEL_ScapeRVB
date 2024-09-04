/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/libs/cgl/pixelreader/pixelreader.js

class PixelReader
{
    constructor()
    {
        this.pixelData = null;
        this._finishedFence = true;
        this._size = 0;
        this._pbo = null;
    }

    _fence(cgl)
    {
        const gl = cgl.gl;
        this._finishedFence = false;
        return new Promise(function (resolve, reject)
        {
            if (cgl.aborted) return;
            let sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
            if (!sync) return;
            gl.flush(); // Ensure the fence is submitted.

            function check()
            {
                if (cgl.aborted) return;
                const status = gl.clientWaitSync(sync, 0, 0);

                if (status == gl.WAIT_FAILED)
                {
                    console.error("fence wait failed");
                    if (reject) reject();
                }
                else
                if (status == gl.TIMEOUT_EXPIRED)
                {
                    // console.log("TIMEOUT_EXPIRED");
                    return setTimeout(check, 0);
                }
                else
                if (status == gl.CONDITION_SATISFIED)
                {
                    // console.log("CONDITION_SATISFIED");
                    resolve();
                    gl.deleteSync(sync);
                }
                else if (status == gl.ALREADY_SIGNALED)
                {
                    // console.log("already signaled");
                    resolve();
                    gl.deleteSync(sync);
                }
                else
                {
                    console.log("unknown fence status", status);
                }
            }

            // setTimeout(check, 3);
            check();
        });
    }


    read(cgl, fb, pixelFormat, x, y, w, h, finishedcb)
    {
        if (CABLES.UI)
            if (!CABLES.UI.loaded || performance.now() - CABLES.UI.loadedTime < 1000) return;

        if (!this._finishedFence) return;

        const gl = cgl.gl;
        let bytesPerItem = 1;

        if (cgl.aborted) return;
        if (!fb) return;

        if (pixelFormat === CGL.Texture.TYPE_FLOAT) pixelFormat = CGL.Texture.PFORMATSTR_RGBA32F;
        // let isFloatingPoint = pixelFormat == CGL.Texture.TYPE_FLOAT; // old parameter was "textureType", not iots pixelformat, keeping this for compatibility...

        let isFloatingPoint = CGL.Texture.isPixelFormatFloat(pixelFormat);

        if (isFloatingPoint)bytesPerItem = 4;
        if (CGL.Texture.isPixelFormatHalfFloat(pixelFormat)) bytesPerItem = 2;

        const pixelInfo = CGL.Texture.setUpGlPixelFormat(cgl, pixelFormat);
        const numItems = pixelInfo.numColorChannels * w * h;

        if (w == 0 || h == 0 || numItems == 0) return;

        if (!this._pixelData || this._size != numItems * bytesPerItem)
        {
            if (isFloatingPoint) this._pixelData = new Float32Array(numItems * bytesPerItem);
            else this._pixelData = new Uint8Array(numItems);

            this._size = numItems * bytesPerItem;
        }

        let channelType = gl.UNSIGNED_BYTE;
        if (isFloatingPoint)channelType = gl.FLOAT;

        if (this._size == 0 || !this._pixelData)
        {
            console.error("readpixel size 0", this._size, w, h);
            return;
        }

        if (this._finishedFence)
        {
            this._pbo = gl.createBuffer();
            gl.bindBuffer(gl.PIXEL_PACK_BUFFER, this._pbo);
            gl.bufferData(gl.PIXEL_PACK_BUFFER, this._pixelData.byteLength, gl.DYNAMIC_READ);
            gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
            gl.bindBuffer(gl.PIXEL_PACK_BUFFER, this._pbo);
            cgl.profileData.profileFencedPixelRead++;
            gl.readPixels(
                x, y, w, h, gl.RGBA, pixelInfo.glDataType, 0
                // x, y, w, h, pixelInfo.glDataFormat, pixelInfo.glDataType, 0
            );

            gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
        let startLength = this._pixelData.byteLength;

        if (this._finishedFence && this._pbo)
            this._fence(cgl).then((error) =>
            {
                this._wasTriggered = false;
                this._finishedFence = true;

                if (!error && this._pixelData && this._pixelData.byteLength == startLength)
                {
                    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, this._pbo);
                    gl.getBufferSubData(gl.PIXEL_PACK_BUFFER, 0, this._pixelData);
                    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);

                    if (finishedcb) finishedcb(this._pixelData);
                }
                gl.deleteBuffer(this._pbo);
                this._pbo = null;
            });

        return true;
    }
}



;// CONCATENATED MODULE: ./src/libs/cgl/pixelreader/index.js


CGL.PixelReader = PixelReader;

((this.CGL = this.CGL || {}).COREMODULES = this.CGL.COREMODULES || {}).Pixelreader = __webpack_exports__.Pixelreader;
/******/ })()
;