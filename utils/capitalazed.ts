export function Capitalazed(words:string[]): string[] {
    const newWords = []
    words.map( e => newWords.push(e.charAt(0).toUpperCase() + e.slice(1)))
    return newWords
}