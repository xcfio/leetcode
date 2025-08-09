import { describe, it, expect } from "vitest"
import { longestValidParentheses } from "./0032"

describe("32. Longest Valid Parentheses", () => {
    it("Example 1", () => {
        const s = "(()"
        expect(longestValidParentheses(s)).toBe(2)
    })

    it("Example 2", () => {
        const s = ")()())"
        expect(longestValidParentheses(s)).toBe(4)
    })

    it("Example 3", () => {
        const s = ""
        expect(longestValidParentheses(s)).toBe(0)
    })

    it("Extra test - all valid", () => {
        const s = "()()()()"
        expect(longestValidParentheses(s)).toBe(s.length)
    })

    it("Extra test - no valid", () => {
        const s = "((((("
        expect(longestValidParentheses(s)).toBe(0)
    })

    it("Extra test - mixed", () => {
        const s = "())((())"
        expect(longestValidParentheses(s)).toBe(4)
    })
})
