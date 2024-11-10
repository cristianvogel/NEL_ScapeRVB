
import { NodeRepr_t } from '@elemaudio/core';
import invariant from 'invariant';
import {RefProps} from "../src/types";


export class RefMap {

    private readonly _map: Map<string, any>;
    private _core: any;
    private _vfsKeys: Array<string> = [];

    constructor(core: any) {
        this._map = new Map();
        this._core = core;
        this._vfsKeys = [];
    }
    get vfsKeys() {
        return this._vfsKeys;
    }
    set vfsKeys(keys: Array<string>) {
        this._vfsKeys = keys;
    }
    get map() {
        return this._map;
    }

    get size() {
        return this._map.size;
    }

    get keys() {
        return this._map.keys();
    }

    has(name: string) {
        invariant(this._map.has(name), `Ref ${name} not found`);
        return this._map.has(name);
    }

    getOrCreate(name: string, type: string, props: RefProps, children: NodeRepr_t[]) {
        if (!this._map.has(name)) {
            let ref = this._core.createRef(type, props, children);
            this._map.set(name, ref);
        }
        invariant(this._map.get(name)[0], `Node not found for ref ${name}`);
        return this._map.get(name)[0];
    }

    get(name: string) {
        invariant(this._map.has(name), `Ref ${name} not found`);
        return this._map.get(name)[0];
    }

    update(name: string, props: RefProps ) {
        invariant(this._map.has(name), `Trying to update a ref to ${name} that doesn't exist`);
        let [node, setter] = this._map.get(name);
        setter(props);
    }
}