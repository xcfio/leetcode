import { describe, it, expect } from "vitest"
import { removeDuplicates } from "./0026"

describe("26. Remove Duplicates from Sorted Array", () => {
    it("Example 1", () => {
        const nums = [1, 1, 2]
        const k = removeDuplicates(nums)

        expect(k).toBe(2)
        expect(nums.slice(0, k)).toEqual([1, 2])
    })

    it("Example 2", () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
        const k = removeDuplicates(nums)

        expect(k).toBe(5)
        expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4])
    })
})
