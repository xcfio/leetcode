export function reverseWords(s: string): string {
    return s
        .split(" ")
        .reverse()
        .filter((x) => x !== "")
        .join(" ")
}
