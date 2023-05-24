const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value ? value : []));
  } catch {
    throw new Error();
  }
};

const get = (key) => {
  try {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : null;
  } catch {
    throw new Error();
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { save, get };
