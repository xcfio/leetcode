import { describe, it, expect } from "vitest"
import { addBinary } from "./0067"

describe("67. Add Binary", () => {
    it("Example 1", () => {
        expect(addBinary("11", "1")).toBe("100")
    })

    it("Example 2", () => {
        expect(addBinary("1010", "1011")).toBe("10101")
    })

    it("Both zeros", () => {
        expect(addBinary("0", "0")).toBe("0")
    })

    it("One number is zero", () => {
        expect(addBinary("0", "101")).toBe("101")
    })

    it("Longer binary numbers", () => {
        expect(addBinary("1111", "1111")).toBe("11110")
    })
})
