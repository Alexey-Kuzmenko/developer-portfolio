export function throwCustomError(target: string, errMessage: string): never {
    throw new Error(`Unexpected error in: ${target}, error message: ${errMessage}`);
}
