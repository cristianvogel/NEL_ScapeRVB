/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ../shared/client/src/logger.js
/* eslint-disable no-console */

class Logger
{
    constructor(initiator)
    {
        this.initiator = initiator;
    }

    stack(t)
    {
        console.info("[" + this.initiator + "] ", t);
        console.log((new Error()).stack);
    }

    groupCollapsed(t)
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent) console.log("[" + this.initiator + "]", ...arguments);

        console.groupCollapsed("[" + this.initiator + "] " + t);
    }

    table(t)
    {
        console.table(t);
    }

    groupEnd()
    {
        console.groupEnd();
    }

    error()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments)) || !CABLES.logSilent)
            console.error("[" + this.initiator + "]", ...arguments);
    }

    errorGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments);
    }

    warn()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 1 }, ...arguments)) || !CABLES.logSilent)
            console.warn("[" + this.initiator + "]", ...arguments);
    }

    verbose()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    info()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.info("[" + this.initiator + "]", ...arguments);
    }

    log()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    logGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments);
    }

    userInteraction(text)
    {
        // this.log({ "initiator": "userinteraction", "text": text });
    }
}

;// CONCATENATED MODULE: ./src/libs/cgl/pixelreader/pixelreader.js


class PixelReader
{
    constructor()
    {
        this._log = new Logger("LoadingStatus");

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
                    // this._log.log("TIMEOUT_EXPIRED");
                    return setTimeout(check, 0);
                }
                else
                if (status == gl.CONDITION_SATISFIED)
                {
                    // this._log.log("CONDITION_SATISFIED");
                    resolve();
                    gl.deleteSync(sync);
                }
                else if (status == gl.ALREADY_SIGNALED)
                {
                    // this._log.log("already signaled");
                    resolve();
                    gl.deleteSync(sync);
                }
                else
                {
                    this._log.log("unknown fence status", status);
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
            if (isFloatingPoint) this._pixelData = new Float32Array(numItems);
            else this._pixelData = new Uint8Array(numItems);

            this._size = numItems * bytesPerItem;
        }

        let channelType = gl.UNSIGNED_BYTE;
        if (isFloatingPoint)channelType = gl.FLOAT;

        if (this._size == 0 || !this._pixelData)
        {
            this._log.error("readpixel size 0", this._size, w, h);
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

            if (this._size != numItems * bytesPerItem)
                this._log.error("buffer size invalid", numItems, w, h, bytesPerItem);

            // const altFormat = gl.getParameter(gl.IMPLEMENTATION_COLOR_READ_FORMAT);
            // const altType = gl.getParameter(gl.IMPLEMENTATION_COLOR_READ_TYPE);

            gl.readPixels(
                // x, y, w, h, altFormat, altType, 0
                x, y, w, h, pixelInfo.glDataFormat, pixelInfo.glDataType, 0
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