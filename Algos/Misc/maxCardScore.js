var maxScore = function(cardPoints, k) {
  //loop through k elements and sum
  //if k = cardPoints.length, return sum
  //use sliding window to find max

  let sum = 0

  for (let i = 0; i < k; i++) {
      sum += cardPoints[i]
  }

  if (k === cardPoints.length) return sum

  let l = k - 1
  let r = cardPoints.length - 1
  let max = sum

  while (l >= 0) {
      sum += cardPoints[r--]
      sum -= cardPoints[l--]

      if (sum > max) max = sum
  }
return max
};
