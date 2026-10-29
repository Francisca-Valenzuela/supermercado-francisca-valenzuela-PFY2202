// Un producto se considera con stock bajo cuando tiene menos unidades que este umbral
export const UMBRAL_STOCK_BAJO = 20;

export function estaConStockBajo(stock) {
  return stock < UMBRAL_STOCK_BAJO;
}