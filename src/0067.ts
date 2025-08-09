export function addBinary(a: string, b: string): string {
    const na = BigInt("0b" + a)
    const nb = BigInt("0b" + b)
    return (na + nb).toString(2)
}
