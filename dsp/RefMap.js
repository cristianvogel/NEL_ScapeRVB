import invariant from 'invariant';


export class RefMap {
  constructor(core) {
    this._map = new Map();
    this._core = core;
  }

  getOrCreate(name, type, props, children) {
    if (!this._map.has(name)) {
      let ref = this._core.createRef(type, props, children);
      this._map.set(name, ref);
    }
    invariant(this._map.get(name)[0], `Node not found for ref ${name}`);
    return this._map.get(name)[0];
  }

  update(name, props) {
    invariant(this._map.has(name), `Trying to update a ref to ${name} that doesn't exist`);
    let [node, setter] = this._map.get(name);
    setter(props);
  }
}
