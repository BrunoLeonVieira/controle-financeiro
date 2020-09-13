const formatted = Intl.NumberFormat("pt-BR");
const formattedMonetary = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formattedPercent = Intl.NumberFormat("pt-BR", {
  style: "percent",
  maximumFractionDigits: 2,
});

function formatNumber(value) {
  return formatted.format(value);
}

function formatMonetaryValue(value) {
  return formattedMonetary.format(value);
}

function formatPercentage(value) {
  return formattedPercent.format(value);
}

export { formatNumber, formatMonetaryValue, formatPercentage };
