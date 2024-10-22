export const formatNumberHashtag = (index: number) => {
  if (index < 10) return `#00${index}`;
  if (index < 100) return `#0${index}`;
  return `#${index}`;
};
