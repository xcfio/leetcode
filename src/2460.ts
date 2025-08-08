export function applyOperations(nums: number[]): number[] {
    let array: Array<number> = []

    let shouldContinue = false
    for (let i = 0; i < nums.length; i++) {
        if (shouldContinue) {
            shouldContinue = false
            continue
        }

        const e = nums[i]
        const ne = nums[i + 1]

        if (ne && ne === e) {
            array.push(ne + e)
            shouldContinue = true
        } else {
            array.push(e)
        }
    }

    array = array.filter((x) => x !== 0)
    while (array.length < nums.length) array.push(0)
    return array
}
