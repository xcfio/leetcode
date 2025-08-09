import { describe, it, expect } from "vitest"
import { containsDuplicate } from "./0217"

describe("217. Contains Duplicate", () => {
    it("Example 1 - duplicates present", () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
    })

    it("Example 2 - no duplicates", () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
    })

    it("Example 3 - duplicates present", () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
    })

    it("Empty array", () => {
        expect(containsDuplicate([])).toBe(false)
    })

    it("Single element", () => {
        expect(containsDuplicate([42])).toBe(false)
    })
})
