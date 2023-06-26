export function formatDate(date: Date): string {
  return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
}
