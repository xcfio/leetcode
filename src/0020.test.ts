import { describe, it, expect } from "vitest"
import { isValid } from "./0020"

describe("20. Valid Parentheses", () => {
    it("should return true for valid parentheses", () => {
        expect(isValid("()")).toBe(true)
        expect(isValid("()[]{}")).toBe(true)
        expect(isValid("{[]}")).toBe(true)
    })

    it("should return false for invalid parentheses", () => {
        expect(isValid("(]")).toBe(false)
        expect(isValid("([)]")).toBe(false)
        expect(isValid("]")).toBe(false)
    })

    it("should return true for empty string", () => {
        expect(isValid("")).toBe(true)
    })
})
