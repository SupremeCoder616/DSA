function getVowelsCount(str) {
  let count = 0;
  let vawels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (vawels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// console.log(getVowelsCount("KArtik"));
