export function currencyFormatter(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function numberFormatter(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
