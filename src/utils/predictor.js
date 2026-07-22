export function getChance(rank, cutoff) {
  rank = Number(rank);

  if (rank <= cutoff) {
    return "GREEN";
  }

  if (rank <= cutoff + 1000) {
    return "YELLOW";
  }

  return "RED";
}