const truncateString = (str) => {
  if (str.length > 11) {
    return str.slice(0, 11) + '...';
  }
  return str;
};

export { truncateString };
