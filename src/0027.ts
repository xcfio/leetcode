export function removeElement(nums: number[], val: number): number {
    const short = nums.map((x) => (x === val ? "_" : x)).sort()
    for (let i = 0; i < short.length; i++) (nums[i] as any) = short[i]
    return short.filter((x) => x !== "_").length
}
