const truncateString = (str) => {
  if (str.length > 11) {
    return str.slice(0, 11) + "...";
  }
  return str;
};

const formatPrice = (num) => {
  return `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const categoriesList = [
  {
    value: 1,
    label: "Promociones",
  },
  {
    value: 2,
    label: "Platos individuales",
  },
  {
    value: 3,
    label: "Ensaladas & Bowls",
  },
  {
    value: 4,
    label: "Familiares",
  },
  {
    id: 5,
    label: "Panadería",
  },
  {
    value: 6,
    label: "Postres",
  },
  {
    value: 7,
    label: "Aperitivos",
  },
  {
    value: 8,
    label: "Desayunos & Brunch",
  },
  {
    value: 9,
    label: "Empanadas",
  },
  {
    value: 10,
    label: "Bebestibles",
  },
  {
    value: 11,
    label: "Dulces y snacks",
  },
  {
    value: 12,
    label: "Pastelería",
  },
];

export { truncateString, formatPrice, categoriesList };
