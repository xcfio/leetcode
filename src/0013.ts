const map = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
])

export function romanToInt(s: string): number {
    const num: Array<number> = []

    s = s.replaceAll("IV", "IIII")
    s = s.replaceAll("IX", "VIIII")
    s = s.replaceAll("XL", "XXXX")
    s = s.replaceAll("XC", "LXXXX")
    s = s.replaceAll("CD", "CCCC")
    s = s.replaceAll("CM", "DCCCC")

    for (const letter of s) num.push(map.get(letter) ?? 0)
    return num.reduce((pv, nv) => pv + nv)
}
