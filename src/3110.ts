export function scoreOfString(s: string): number {
    const score: Array<number> = []
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i)
        const n = s.charCodeAt(i + 1)

        if (!n) break
        score.push(c > n ? c - n : n - c)
    }

    return score.length ? score.reduce((x, y) => x + y) : 0
}
