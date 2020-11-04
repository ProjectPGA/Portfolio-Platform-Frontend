export interface FormatOptions {
    numberOfDecimals: number | null;
    locale: string;
}

export const formatNumber: (
    value: string | number,
    options: FormatOptions
) => string = (value, { numberOfDecimals, locale }) => {
    const valueString = value.toString();
    const valueParts = valueString.split('.');
    const previousDecimalPrecision =
        valueParts.length > 1 ? valueParts[1].length : 0;
    const actualNumberOfDecimals: number =
        typeof numberOfDecimals !== 'number'
            ? previousDecimalPrecision
            : numberOfDecimals;
    return new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: actualNumberOfDecimals,
        maximumFractionDigits: actualNumberOfDecimals,
    }).format(value as number);
};
