export function removeDuplicates(nums: number[]): number {
    const map = new Map<number, number>()
    for (const num of nums) map.set(num, (map.get(num) ?? 0) + 1)

    const array: Array<number | "_"> = Array.from(map.keys())
    for (let i = 0; i < nums.length; i++) nums[i] = (array[i] ?? "_") as any
    return map.size
}
