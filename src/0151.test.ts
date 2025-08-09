import { describe, it, expect } from "vitest"
import { reverseWords } from "./0151"

describe("151. Reverse Words in a String", () => {
    it("should reverse words in a simple string", () => {
        expect(reverseWords("the sky is blue")).toBe("blue is sky the")
    })

    it("should handle multiple spaces between words", () => {
        expect(reverseWords("  hello   world  ")).toBe("world hello")
    })

    it("should handle single word", () => {
        expect(reverseWords("word")).toBe("word")
    })

    it("should handle spaces only", () => {
        expect(reverseWords("   ")).toBe("")
    })

    it("should handle leading and trailing spaces", () => {
        expect(reverseWords("  a good   example  ")).toBe("example good a")
    })
})
