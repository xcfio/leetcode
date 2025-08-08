import { describe, it, expect } from "vitest"
import { longestCommonPrefix } from "./14"

describe("longestCommonPrefix", () => {
    it("Example 1: returns 'fl' for ['flower','flow','flight']", () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
    })

    it("Example 2: returns '' for ['dog','racecar','car']", () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
    })
})
