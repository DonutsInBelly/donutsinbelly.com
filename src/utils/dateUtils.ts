export function formatDate(date: Date): string {
  return `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  }`;
}
