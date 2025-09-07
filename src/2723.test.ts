import { describe, it, expect } from "vitest"
import { addTwoPromises } from "./2723"

describe("2723. Add Two Promises", () => {
    it("Example 1", async () => {
        await expect(addTwoPromises(Promise.resolve(2), Promise.resolve(2))).resolves.toBe(4)
    })

    it("Example 2", async () => {
        await expect(addTwoPromises(Promise.resolve(5), Promise.resolve(10))).resolves.toBe(15)
    })

    it("Handles delayed promises", async () => {
        const p1 = new Promise<number>((res) => setTimeout(() => res(3), 100))
        const p2 = new Promise<number>((res) => setTimeout(() => res(7), 200))
        await expect(addTwoPromises(p1, p2)).resolves.toBe(10)
    })

    it("Handles negative numbers", async () => {
        await expect(addTwoPromises(Promise.resolve(-1), Promise.resolve(6))).resolves.toBe(5)
    })
})
