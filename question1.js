function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input must be an array");
        } else {
            const filteredWords = arr.filter(item => typeof item === 'string').map(item => item.toLowerCase());
            resolve(filteredWords);
        }
    });
}

// Example usage:
lowerCaseWords([1, 'HELLO', 'WORLD', true, 'JavaScript'])
    .then(result => console.log(result))  // Output: ['hello', 'world', 'javascript']
    .catch(error => console.error(error));
