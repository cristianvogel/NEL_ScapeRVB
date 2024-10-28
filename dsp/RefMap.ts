
import invariant from 'invariant';

export class RefMap {
  private readonly __map: Map<string, any[]>;
  private _core: any;

  constructor(core: any) {
    this.__map = new Map();
    this._core = core;
  }
  
  get _map(): Map<string, any[]> {
    return this.__map;
  }

  get size(): number {
    return this.__map.size;
  }

  get keys(): IterableIterator<string> {
    return this.__map.keys();
  }

  has(name: string): boolean {
    invariant(this.__map.has(name), `Ref ${name} not found`);
    return this.__map.has(name);
  }

  getOrCreate(name: string, type: string, props: any, children: any): any {
    if (!this.__map.has(name)) {
      let ref = this._core.createRef(type, props, children);
      this.__map.set(name, ref);
    }
    const mapValue: any[] | undefined = this.__map.get(name);
    if (mapValue) {
      invariant(mapValue[0], `Node not found for ref ${name}`);
      return mapValue[0];
    } else {
      // handle the undefined case - perhaps throw an error or return a default value
    }
  }

  get(name: string): any {
    const mapValue = this.__map.get(name);
    if (mapValue) {
      invariant(mapValue[0], `Ref ${name} not found`);
      return mapValue[0];
    } else {
      // handle the undefined case - perhaps throw an error or return a default value
    }
  }

  update(name: string, props: any) {
    const value = this.__map.get(name);
    invariant(value, `Trying to update a ref to ${name} that doesn't exist`);
    if (value !== undefined) {
      let [node, setter] = value;
      setter(props);
    } else {
      // handle the case where `name` is not in the map
    }
  }
}
