function compareAmount(amount, yesterdayAmount, measurement) {
  if (amount > yesterdayAmount) {
    return `${(amount - yesterdayAmount)
      .toFixed(2)
      .replace(/0\s*$/, "")} ${measurement} 늘었어요`;
  } else if (amount < yesterdayAmount) {
    return `${(yesterdayAmount - amount)
      .toFixed(2)
      .replace(/0\s*$/, "")} ${measurement} 줄었어요`;
  } else {
    return "결과가 동일해요";
  }
}

export default compareAmount;
