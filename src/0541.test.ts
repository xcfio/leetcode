import { describe, it, expect } from "vitest"
import { reverseStr } from "./0541"

describe("541. Reverse String II", () => {
    it("Example 1", () => {
        const s = "abcdefg"
        const k = 2
        expect(reverseStr(s, k)).toBe("bacdfeg")
    })

    it("Example 2", () => {
        const s = "abcd"
        const k = 2
        expect(reverseStr(s, k)).toBe("bacd")
    })

    it("Short string, k greater than length", () => {
        const s = "abc"
        const k = 5
        expect(reverseStr(s, k)).toBe("cba")
    })

    it("Exact multiples", () => {
        const s = "abcdefghij"
        const k = 3
        expect(reverseStr(s, k)).toBe("cbadefihgj")
    })

    it("Empty string", () => {
        const s = ""
        const k = 2
        expect(reverseStr(s, k)).toBe("")
    })
})
