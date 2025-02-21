export const extractNumbersAndAlphabets = (data) => {
    let numbers = [];
    let alphabets = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[A-Za-z]$/.test(item)) {
            alphabets.push(item);
        }
    });

    let highestAlphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

    return { numbers, alphabets, highestAlphabet };
};
