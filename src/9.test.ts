import { describe, it, expect } from "vitest"
import { isPalindrome } from "./9"

describe("9. Palindrome Number", () => {
    it("should return true for 121", () => {
        expect(isPalindrome(121)).toBe(true)
    })

    it("should return false for -121", () => {
        expect(isPalindrome(-121)).toBe(false)
    })

    it("should return false for 10", () => {
        expect(isPalindrome(10)).toBe(false)
    })

    it("should return true for 0", () => {
        expect(isPalindrome(0)).toBe(true)
    })
})
