export const numberWithCommas = (x: number, separator: string = ","): string => {
    var parts = x.toString().split(separator);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(",");
}