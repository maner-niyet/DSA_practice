/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
Problem: https://leetcode.com/problems/median-of-two-sorted-arrays/
Explanations:
1. https://www.youtube.com/watch?v=q6IEA26hvXc&ab_channel=NeetCode
2. https://www.youtube.com/watch?v=yD7wV8SyPrc&list=WL&index=7&ab_channel=KeertiPurswani
*/

//Approach: Binary Search
//Time: O(log(Math.min(n, m))) | Space: O (1)
//where n and m are nums1.length and nums2.length
const findMedianSortedArrays = (nums1, nums2) => {
    const total = nums1.length + nums2.length,
        half = Math.floor(total / 2),
        A = nums1.length < nums2.length ? nums1 : nums2,
        B = nums1.length < nums2.length ? nums2 : nums1;
    let left = 0, right = A.length - 1;
    while (true) {
        let i = Math.floor((left + right) / 2),
        j = half - i - 2,
        aLeft = i >= 0 ? A[i] : -Infinity,
        aRight = i + 1 < A.length ? A[i + 1] : Infinity,
        bLeft = j >= 0 ? B[j] : -Infinity,
        bRight = j + 1 < B.length ? B[j + 1] : Infinity;
        if (aLeft <= bRight && bLeft <= aRight) {
            if (total % 2) {
                return Math.min(aRight, bRight);
            } else {
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
            }
        } else if (aLeft > bRight) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
};