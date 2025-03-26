export const priceFormat = (rate: number, currency: string = "TZS"): string => {
  // Handle invalid or undefined rates
  if (!rate || isNaN(rate)) {
    return `0 ${currency}`;
  }

  // Use Intl.NumberFormat for locale-aware formatting with thousands separators
  const formatter = new Intl.NumberFormat("en-TZ", {
    style: "decimal", // Just the number (no currency symbol, as we'll add TZS manually)
    minimumFractionDigits: 0, // No decimals for TZS (whole numbers)
    maximumFractionDigits: 0,
  });

  // Format the number and append the currency
  return `${currency} ${formatter.format(rate)}`;
};