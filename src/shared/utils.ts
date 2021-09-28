export const getMinutesFromMilliseconds = (miliseconds: number): number => {
  return Math.ceil(miliseconds / 1000);
}