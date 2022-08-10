/* Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

https://leetcode.com/problems/koko-eating-bananas/ */

//Approach: Binary Search
//Time: O(log(Math.max(...piles)) * n) | Space: O(1)
//where n is number of piles

const minEatingSpeed = (piles, k) => {
    let left = 1, right = Math.max(...piles), minSpeed = right;
    while (left <= right) {
        let currentSpeed = Math.floor((left + right) / 2);
        let time = getTime(piles, currentSpeed);
        if (time <= k) {
            minSpeed = Math.min(minSpeed, currentSpeed);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return minSpeed;
}

const getTime = (piles, speed) => {
    let hours = 0;
    for (const pile of piles) {
        hours += Math.ceil(pile / speed);
    }
    return hours;
}