import { describe, it, expect } from "vitest"
import { findMedianSortedArrays } from "./0004"

describe("4 .Median of Two Sorted Arrays", () => {
    it("Example 1: even total length", () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0)
    })

    it("Example 2: odd total length", () => {
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5)
    })

    it("One array empty, other with odd length", () => {
        expect(findMedianSortedArrays([], [5])).toBe(5)
    })

    it("One array empty, other with even length", () => {
        expect(findMedianSortedArrays([], [5, 15])).toBe(10)
    })

    it("Different sizes", () => {
        expect(findMedianSortedArrays([1, 2, 5], [3, 4, 6, 7, 8])).toBe(4.5)
    })

    it("Repeating numbers", () => {
        expect(findMedianSortedArrays([1, 2, 2], [2, 3, 4])).toBe(2)
    })
})
