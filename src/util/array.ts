export function limitOffset<T>(
  listItem: T[],
  limit: number,
  offset: number
): T[] {
  if (!listItem) return [];

  const length = listItem.length;

  if (!length) {
    return [];
  }
  if (offset > length - 1) {
    return [];
  }

  const start = Math.min(length - 1, offset);
  const end = Math.min(length, offset + limit);

  return listItem.slice(start, end);
}
