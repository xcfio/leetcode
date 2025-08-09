export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b)
    const mid = arr.length / 2

    return arr.length % 2 ? arr[Math.floor(mid)] : (arr[mid - 1] + arr[mid]) / 2
}
