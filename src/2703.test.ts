import { describe, it, expect } from "vitest"
import { argumentsLength } from "./2703"

describe("2703. Return Length of Arguments Passed", () => {
    it("Example 1", () => {
        expect(argumentsLength(5)).toBe(1)
    })

    it("Example 2", () => {
        expect(argumentsLength({}, null, "3")).toBe(3)
    })
})
