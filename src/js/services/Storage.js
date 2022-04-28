class LocalStorage {
  static set(key, value) {
    if (typeof key !== 'string') {
      throw new Error('key must be string value');
    }

    // setItem for localStorage
    // eslint-disable-next-line no-undef
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
    if (typeof key !== 'string') {
      throw new Error('key must be string value');
    }

    // getItem for localStorage
    // eslint-disable-next-line no-undef
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  }

  static remove(key) {
    if (typeof key !== 'string') {
      throw new Error('key must be string value');
    }

    // removeItem for localStorage
    // eslint-disable-next-line no-undef
    localStorage.removeItem(key);
  }
}

export default LocalStorage;
