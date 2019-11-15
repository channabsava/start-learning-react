export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";
export function increment(text) {
  console.log(text);
  return {
    type: INCREMENT_COUNT,
    text
  };
}
export function decrement(text) {
  return {
    type: DECREMENT_COUNT
  };
}
