export const getValorCuotaMensual = (prestamo: number, periodo: number, tasa: number) => {
    let tasaMensual = (tasa / 100);
    let total = prestamo * (tasaMensual / (1 - Math.pow((1 + tasaMensual), -periodo)));
    return total;
}


export const getValorInteresMensual = (prestamo: number, periodo: number, tasa: number) => {
    let valorCuotaMensual = getValorCuotaMensual(prestamo, periodo, tasa);

    return ((valorCuotaMensual * periodo) - prestamo);
}
