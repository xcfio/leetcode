export function reverseStr(s: string, k: number): string {
    const arr = s.split("")

    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i
        let right = Math.min(i + k - 1, arr.length - 1)

        while (left < right) {
            ;[arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }

    return arr.join("")
}
