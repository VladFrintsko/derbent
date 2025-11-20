export const formatCurrency = (
  value?: number | null,
  locale = "uk-UA",
  currency = "UAH",
) => {
  if (value === undefined || value === null) {
    return undefined;
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
};

export const normalizePhone = (phone: string) =>
  phone.replace(/[^\d+]/g, "");

