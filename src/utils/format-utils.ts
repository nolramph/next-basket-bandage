//TODO: Potentially can be converted to a multi currency formatter once we have more currencies in the app
export const formatToUSD = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number)
}
