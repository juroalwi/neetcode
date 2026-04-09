function isAnagram(s, t) {
  const charStock = {};

  for (let i = 0; i < s.length; i++) {
    if (!charStock[s[i]]) charStock[s[i]] = 1;
    else charStock[s[i]]++;
  }

  for (let i = 0; i < t.length; i++) {
    if (!charStock[t[i]] || charStock[t[i]] === 0) return false;
    else charStock[t[i]]--;
  }
  return true;
}

s = "anagram";
t = "nagaram";
console.log(isAnagram(s, t));
