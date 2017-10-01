export const mergeArrays = (...arrays) => {
  arrays = arrays.filter(a => a !== undefined);
  return Array.from(new Set([].concat(...arrays)));
};

export const capitalize = (s = ' ') => s[0].toUpperCase() + s.slice(1);