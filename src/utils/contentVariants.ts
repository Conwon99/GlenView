/**
 * Shared helpers for deterministically picking content variants per slug,
 * so location/service pages don't repeat the same phrasing verbatim.
 */

export function hashKey(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/** Deterministically pick one item from arr based on key+salt. */
export function pickVariant<T>(arr: T[], key: string, salt: string): T {
  if (arr.length === 0) throw new Error("pickVariant: empty array");
  return arr[hashKey(key + salt) % arr.length];
}
