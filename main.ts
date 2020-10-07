
export function Add(numbers: string) : number{
    const result: number = 0;
    if (!numbers) {
        return result
    }
    const shouldChangeDelimiter = numbers.charAt(0) === '/' ? true : false;

    const delimiter = shouldChangeDelimiter ? numbers.charAt(3) : ',';

    const numbersToProcess = shouldChangeDelimiter ? numbers.substring(5) : numbers;

    const replaceLinebreaksWithCommas = numbersToProcess.replace('\n', delimiter);

    const intNumbers = replaceLinebreaksWithCommas.split(delimiter).map(item => parseInt(item));

    return intNumbers.reduce((a,b) => a + b);

}