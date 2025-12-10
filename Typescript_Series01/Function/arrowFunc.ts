const getHello = (s: string): string => {
    return ""
}

const hero = ['thor', 'spiderMan']
hero.map((hero) => {
    return `hero is ${hero}`
})

function consoleError(errMsg: string): void {
    console.log(errMsg);
}

function handleError(errMsg: string): never {
    throw new Error(errMsg)
}

export { }