
export const calculateEstimates = (quantity, {colorsFront, colorsBack, baseShirtPrice}) => {
  const shirtCost = parseInt(quantity) * parseFloat(baseShirtPrice);
  const colorCost = (1.6 * parseInt(quantity)) + (((parseInt(colorsFront) + parseInt(colorsBack)) - 1) * .83);
  const prepAndCleanup = 60 + ((parseInt(colorsFront) + parseInt(colorsBack)) * 25);
  return parseFloat((shirtCost + colorCost + prepAndCleanup) / quantity).toFixed(2);
}