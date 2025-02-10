const truncateString = (str) => {
  if (str.length > 11) {
    return str.slice(0, 11) + "...";
  }
  return str;
};

const formatPrice = (num) => {
  return `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

export { truncateString, formatPrice };
