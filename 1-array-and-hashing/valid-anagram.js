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

// function isAnagram(s, t) {
//   for (let i = 0; i < t.length; i++) {
//     let coincidence = false;
//     for (let j = 0; j < s.length; j++) {
//       if (t[i] === s[j] && !coincidence) {
//         coincidence = true;
//         s = s.substring(0, j) + s.substring(j + 1, s.length);
//         console.log(i, t);
//         console.log(j, s);
//       }
//     }
//     if (!coincidence) return false;
//   }
//   return true;
// }
//
s = "anagram";
t = "nagaram";
console.log(isAnagram(s, t));
