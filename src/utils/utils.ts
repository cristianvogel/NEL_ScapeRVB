import { clamp, EPS, easeIn2 } from "@thi.ng/math";

// 1 -> 1
// 0.5 -> 0
// 0 -> 1
export function remapPosition(value: number): number {
  const clampedValue = clamp( value, EPS, 1);
  return easeIn2( 1 - (1 - 2 * Math.abs(clampedValue - 0.5)));
}

export function  sumArray  (arr: number[]): number  {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
};