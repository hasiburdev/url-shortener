import { getRandomStringLength } from "./random-string-length";

export const generateRandomString = (): string => {
  const hash = Math.random().toString(36).slice(2);
  const stringLength = getRandomStringLength() || 4;
  const shortString = hash.slice(0, stringLength);
  return shortString;
};
