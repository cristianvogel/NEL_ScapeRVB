/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


const StandaloneElectron = class
{
    constructor(op)
    {
        this.hello = "world";

        op.isElectron = () =>
        {
            return CABLES.platform.frontendOptions.isStandalone;
        };
    }
};

CABLES.StandaloneElectron = StandaloneElectron;

((this.CABLES = this.CABLES || {}).COREMODULES = this.CABLES.COREMODULES || {}).Standalone_electron = __webpack_exports__.Cables;
/******/ })()
;