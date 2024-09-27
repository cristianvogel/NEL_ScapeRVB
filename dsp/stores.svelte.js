export const VFSKeysNative = vfsKeys( DEFAULT_VFS_KEYS );
function vfsKeys(initial) {
  let current = $state(initial);
  return {
    get keys() {
      return current;
    },
    get count() {
      return current.length;
    },
    get current() {
      return current;
    },
    update(newValues) {
      current = newValues;
    },
    prune() {
     // not implemented
    }
  };
}