export function arrayFrom() {
    const str = 'foo';
    console.log('arrayFrom str: ', str);
    const arr = Array.from(str);
    console.log('arrayFrom arr: ', arr);
}

export function arrayAt() {
    const arr = [14, 26, 79, 33, 127, 42, 16];
    console.log('arrayAt arr: ', arr);
    console.log('arrayAt 2: ', arr.at(2));
    console.log('arrayAt -2: ', arr.at(-2));
}