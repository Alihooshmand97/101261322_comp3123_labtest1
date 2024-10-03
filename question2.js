// Method that resolves after 500ms
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved after 500ms");
        }, 500);
    });
}

// Method that rejects after 500ms
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Rejected after 500ms");
        }, 500);
    });
}

// Call both promises and handle results
resolvedPromise()
    .then(result => console.log(result))  // Output: Resolved after 500ms
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));  // Output: Rejected after 500ms
