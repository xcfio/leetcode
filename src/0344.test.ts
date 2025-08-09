import { describe, it, expect } from "vitest"
import { reverseString } from "./0344"

describe("344. Reverse String", () => {
    it("Example 1", () => {
        const s = ["h", "e", "l", "l", "o"]
        reverseString(s)
        expect(s).toEqual(["o", "l", "l", "e", "h"])
    })

    it("Example 2", () => {
        const s = ["H", "a", "n", "n", "a", "h"]
        reverseString(s)
        expect(s).toEqual(["h", "a", "n", "n", "a", "H"])
    })

    it("Empty array", () => {
        const s: string[] = []
        reverseString(s)
        expect(s).toEqual([])
    })

    it("Single character", () => {
        const s = ["a"]
        reverseString(s)
        expect(s).toEqual(["a"])
    })
})
