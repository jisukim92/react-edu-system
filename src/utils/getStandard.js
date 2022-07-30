function getStandard(amount, highStandard, lowStandard) {
  if (amount > highStandard) {
    return "표준이상";
  } else if (amount < lowStandard) {
    return "표준이하";
  } else {
    return "표준";
  }
}

export default getStandard;
