import { describe, it, expect } from "vitest"
import { removeElement } from "./0027"

describe("27. Remove Element", () => {
    it("example 1: removes 3s", () => {
        const nums = [3, 2, 2, 3]
        const val = 3
        const k = removeElement(nums, val)

        expect(k).toBe(2)
        // The first two elements should be 2
        expect(nums.slice(0, k).sort()).toEqual([2, 2])
    })

    it("example 2: removes 2s", () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2]
        const val = 2
        const k = removeElement(nums, val)

        expect(k).toBe(5)
        // The first five elements should contain 0,0,1,3,4 in any order
        const firstFiveSorted = nums.slice(0, k).sort((a, b) => a - b)
        expect(firstFiveSorted).toEqual([0, 0, 1, 3, 4])
    })
})
