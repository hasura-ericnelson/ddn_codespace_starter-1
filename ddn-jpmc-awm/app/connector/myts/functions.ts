
/**
 * @readonly Calculate the overall performance of a client's portfolio by analyzing the gains and losses from their positions
 */
export function portfolioPerformance(positions: Position[])  {
  let totalGainLoss = 0;
  let totalInvested = 0;

  const numPositions = positions.length;
  positions.forEach(position => {
    const gainLoss = position.baseSettledMarketValueAmount - position.baseAdjustedCostAmount;
    totalGainLoss += gainLoss;
    totalInvested += position.baseAdjustedCostAmount;
  });

  const percentageReturn = formatPercentage((totalGainLoss / totalInvested));
  return { numPositions, totalGainLoss, percentageReturn };
};





/**
 * @readonly Calculates the total of all transactions' baseGrossAmount
 */
export function processTransactionsTotal(transactions: Transaction[]): number {
  const initialValue = 0;
  const sumWithInitial = transactions.reduce(
    (accumulator, currentValue) => accumulator + currentValue.baseGrossAmount,
    initialValue,
  );
  return sumWithInitial;
}




/**
 * @readonly Formats a number as a percentage
 */
export function processPositions(positions: Position[]): number {
  return 42
}









/** 
 * 
 * Helper and testing
 * 
 */

/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export function hello(name?: string) {
  return `hello there ${name ?? "world"}`;
}


/**
 * @readonly Formats a number as a percentage
 */
export function formatPercentage(num?: number): string {
  // let pct = `${num}% lol`
  if (typeof num !== 'number' || isNaN(num)) {
    return `${num} is not valid input.  Only numbers can be formatted to a percentage`;  // Returns '0.00%' if input is undefined, null, or not a number
  }
  
  const pct = num.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2
  });
  
  return pct;
}








// Types
export interface Transaction {
  baseGrossAmount: number;
  accountNumber:   string;
  instrumentCode:  string;
}
export interface Position {
  accountBaseCurrency:          string;
  accountNumber:                string;
  baseAdjustedCostAmount:       number;
  baseExpectedIncomeAmount:     number;
  baseMarketPrice:              number;
  baseSettledMarketValueAmount: number;
  baseTradedMarketValueAmount:  number;
  companyName:                  {
    raw: string;
  }[];
  instrumentCode:               string;
}
