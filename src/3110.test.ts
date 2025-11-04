import { describe, it, expect } from "vitest"
import { scoreOfString } from "./3110"

describe("3110. Score of a String", () => {
    it("should return 0 for single character string", () => {
        expect(scoreOfString("a")).toBe(0)
    })

    it("should return correct score for simple string", () => {
        // |'a' - 'b'| = 1, |'b' - 'c'| = 1 → total = 2
        expect(scoreOfString("abc")).toBe(2)
    })

    it("should handle non-consecutive characters", () => {
        // |'h' - 'e'| = 3, |'e' - 'l'| = 7, |'l' - 'l'| = 0, |'l' - 'o'| = 3 → total = 13
        expect(scoreOfString("hello")).toBe(13)
    })

    it("should handle repeated characters", () => {
        expect(scoreOfString("zzzzz")).toBe(0)
    })

    it("should handle mixed characters", () => {
        expect(scoreOfString("az")).toBe(25)
    })
})
