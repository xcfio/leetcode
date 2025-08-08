import { describe, it, expect } from "vitest"
import { twoSum } from "../src/1"

describe("twoSum", () => {
    it("should return [0, 1] when nums = [2,7,11,15] and target = 9", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    })

    it("should return [1, 2] when nums = [3,2,4] and target = 6", () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    })

    it("should return [0, 1] when nums = [3,3] and target = 6", () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1])
    })

    it("should return [] if no two numbers add up to the target", () => {
        expect(twoSum([1, 2, 3], 7)).toEqual([])
    })
})
