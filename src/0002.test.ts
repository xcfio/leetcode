import { describe, it, expect } from "vitest"
import { addTwoNumbers, ListNode } from "./0002"

function createList(arr: number[]): ListNode | null {
    let dummy = new ListNode(0)
    let current = dummy
    for (const num of arr) {
        current.next = new ListNode(num)
        current = current.next
    }
    return dummy.next
}

function listToArray(node: ListNode | null): number[] {
    const arr: number[] = []
    while (node) {
        arr.push(node.val)
        node = node.next
    }
    return arr
}

describe("2. Add Two Numbers", () => {
    it("Example 1", () => {
        const l1 = createList([2, 4, 3])
        const l2 = createList([5, 6, 4])
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([7, 0, 8])
    })

    it("Example 2", () => {
        const l1 = createList([0])
        const l2 = createList([0])
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([0])
    })

    it("Example 3", () => {
        const l1 = createList([9, 9, 9, 9, 9, 9, 9])
        const l2 = createList([9, 9, 9, 9])
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1])
    })
})
