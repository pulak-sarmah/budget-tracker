export const currencies = [
  {
    value: "USD",
    label: "$ Dollar",
    locale: "en-US",
  },
  {
    value: "RUPEE",
    label: "₹ Rupee",
    locale: "en-IN",
  },
  {
    value: "YEN",
    label: "¥ Yen",
    locale: "ja-JP",
  },
  {
    value: "EURO",
    label: "€ Euro",
    locale: "de-DE",
  },
  {
    value: "POUND",
    label: "£ Pound",
    locale: "en-GB",
  },
  {
    value: "RUBLE",
    label: "₽ Ruble",
    locale: "ru-RU",
  },
];

export type Currency = (typeof currencies)[0];
