/**
 * Convert Minutes to Hours and Minutes
 * `m` => `hh:mm`
 *
 * Example: `toHoursAndMinutes(90)` => 👉️ `01:30`
 *
 * @see https://bobbyhadz.com/blog/javascript-convert-minutes-to-hours-and-minutes
 */
export function toHoursAndMinutes(totalMinutes: number) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

export function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}
