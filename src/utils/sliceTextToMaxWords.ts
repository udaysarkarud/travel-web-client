const sliceTextToMaxWords = (text: string, maxWords: number) => {
  const words = text.split(" ");
  const slicedWords = words.slice(0, maxWords);
  const slicedText = slicedWords.join(" ") + " ...";
  return slicedText;
};

export default sliceTextToMaxWords;
