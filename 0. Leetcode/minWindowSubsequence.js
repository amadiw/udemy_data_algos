/*
Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.

Example 1:

Input:
S = "abcdebdde", T = "bde"
Output: "bcde"
Explanation:
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of T in the window must occur in order. */

const minWindowSubsequence = (S, T) => {
  let subStr = "" //need to declare empty str to return
  let j = 0
  let minWindow = S.length + 1

  //loop through S (string)
  for (let i = 0; i < S.length; i++) {
    if (S[i] === T[j]) {
      j++
      //continues iterating both i & j as i is in for loop
      if (j === T.length) {
        let end = i + 1
        j--
        //once j pointer reaches end of substring T, needs to start reversing and end of window is set to i + 1 (element to right of i pointer)

        while (j >= 0) {
          if (S[i] === T[j]) {
            j--
          }
          i--
        }
        i++
        j++
        if (minWindow > end - i) {
          minWindow = end - i
          subStr = S.substring(i, end)
        }
      }
    }
  }
  return subStr
}


const S = 'abcdebdde'
const T = 'bde'

console.log(minWindowSubsequence(S, T))
