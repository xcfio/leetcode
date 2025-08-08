import { describe, it, expect } from "vitest"
import { romanToInt } from "./13"

describe("13. Roman to Integer", () => {
    it('should return 3 for "III"', () => {
        expect(romanToInt("III")).toBe(3)
    })

    it('should return 58 for "LVIII"', () => {
        expect(romanToInt("LVIII")).toBe(58)
    })

    it('should return 1994 for "MCMXCIV"', () => {
        expect(romanToInt("MCMXCIV")).toBe(1994)
    })

    it('should return 9 for "IX"', () => {
        expect(romanToInt("IX")).toBe(9)
    })

    it('should return 40 for "XL"', () => {
        expect(romanToInt("XL")).toBe(40)
    })
})
