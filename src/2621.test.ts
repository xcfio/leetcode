import { describe, it, expect } from "vitest"
import { sleep } from "./2621"

describe("2621. Sleep", () => {
    it("Example 1: sleep 100ms", async () => {
        const start = Date.now()
        await sleep(100)
        const duration = Date.now() - start
        expect(duration).toBeGreaterThanOrEqual(100)
    }, 10000)

    it("Example 2: sleep 200ms", async () => {
        const start = Date.now()
        await sleep(200)
        const duration = Date.now() - start
        expect(duration).toBeGreaterThanOrEqual(200)
    }, 10000)
})
