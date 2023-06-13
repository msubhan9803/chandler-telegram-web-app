export const getUnderscorePascalCase = (text: string) => {
  const parsedText = text
    .split("_")
    .map(
      (word: any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
  return parsedText;
};
