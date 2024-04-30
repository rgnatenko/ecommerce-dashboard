type Args = { totalSum: number, givenSum: number }

const calculatePercentage = ({ totalSum, givenSum }: Args)  =>{
  if (totalSum === 0) {
    throw new Error('Total sum cannot be zero.');
  }

  return `${((totalSum / givenSum) * 100).toFixed(2)}%`;
};

export default calculatePercentage;
