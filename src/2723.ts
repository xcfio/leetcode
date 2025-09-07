type P = Promise<number>

export async function addTwoPromises(promise1: P, promise2: P): P {
    return (await Promise.all([promise1, promise2])).reduce((a, b) => a + b)
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
