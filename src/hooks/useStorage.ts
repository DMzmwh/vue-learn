const useStorage = () => {
  const setItem = <T>(key: string, val: T) => {
    localStorage.setItem(key, JSON.stringify(val));
  };
  const getItem = <T>(key: string, defaultVal?: T) => {
    const vl = localStorage.getItem(key);
    if (!vl) {
      return defaultVal || ({} as { [key: string]: unknown });
    }
    try {
      const pvl = JSON.parse(vl);
      return pvl;
    } catch (e) {
      return defaultVal || ({} as { [key: string]: unknown });
    }
  };
  const delItem = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    setItem,
    getItem,
    delItem,
  };
};

export default useStorage;
