export function CheckFunction(arrayCheck, check) {
  const even = (element) => element === check;

  return arrayCheck.some(even);
}
