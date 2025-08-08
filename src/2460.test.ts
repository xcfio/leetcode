import { describe, it, expect } from "vitest"
import { applyOperations } from "./2460"

describe("2460. Apply Operations to an Array", () => {
    it("Example 1", () => {
        const nums = [1, 2, 2, 1, 1, 0]
        expect(applyOperations(nums)).toEqual([1, 4, 2, 0, 0, 0])
    })

    it("Example 2", () => {
        const nums = [0, 1]
        expect(applyOperations(nums)).toEqual([1, 0])
    })
})
