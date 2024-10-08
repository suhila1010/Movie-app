export const {format: formatVote} = Intl.NumberFormat("en-GB", {
  notation: "compact",
  maximumFractionDigits: 1,
});
export function formatTime(minutes) {
  const seconds = minutes * 60;
  let secondsLeft = seconds;

  // hours
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  // mins
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  return `${hours ? `${hours}h` : ""} ${mins}min`;
}
