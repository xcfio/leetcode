export function containsDuplicate(nums: number[]): boolean {
    const map = new Map<number, number>()
    for (const num of nums) map.set(num, (map.get(num) ?? 0) + 1)
    return Array.from(map.values()).some((count) => count > 1)
}
