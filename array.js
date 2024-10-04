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

export function arrayConcat() {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['d', 'e', 'f'];
    const concattedArr = arr1.concat(arr2);
    console.log('arrayConcat arr1: ', arr1);
    console.log('arrayConcat arr2: ', arr2);
    console.log('arrayConcat concatted: ', concattedArr);
}

export function arrayEvery() {
    const numsArr = [1, 4, 17, 3, 19, 12, 8, 21];
    const isBelowThreshold = currentValue => currentValue < 25;
    console.log('arrayEvery numsArr: ', numsArr);
    console.log('arrayEvery isBelowThreshold 25: ', numsArr.every(isBelowThreshold));
}

export function arrayFilter() {
    const names = ['Jessica', 'Michael', 'Ava', 'Elise', 'Enzo'];
    const filteredNames = names.filter(name => name.length > 4);
    console.log('arrayFilter names: ', names);
    console.log('arrayFilter filteredNames: ', filteredNames);
}

export function arrayFind() {
    const nums = [1, 2, 4, 8, 16, 32];
    const found = nums.find(num => num > 10);
    console.log('arrayFind nums: ', nums);
    console.log('arrayFind first num > 10: ', found);
}

export function arrayFindIndex() {
    const nums = [1, 2, 4, 8, 16, 32];
    const found = nums.findIndex(num => num > 10);
    console.log('arrayFind nums: ', nums);
    console.log('arrayFind first index of num > 10: ', found);
}

export function arrayForEach() {
    const letters = ['a', 'b', 'c'];
    console.log('arrayForEach letters: ', letters);
    letters.forEach(x => console.log(x));
}

export function arrayJoin() {
    const words = ['Fire', 'Air', 'Water'];
    console.log('arrayJoin words: ', words);
    console.log('arrayJoin Default: ', words.join());
    console.log('arrayJoin empty space: ', words.join(''));
    console.log('arrayJoin dash: ', words.join('-'));
}

export function arrayMap() {
    const nums = [1, 2, 3, 4, 5];
    console.log('arrayMap nums: ', nums);
    const mappedNums = nums.map(x => x * 2);
    console.log('arrayMap num * 2', mappedNums);
}

export function arrayPop() {
    const names = ['Jessica', 'Michael', 'Ava', 'Elise', 'Enzo'];
    console.log('arrayPop names: ', names);
    const popped = names.pop();
    console.log('arrayPop names after pop(): ', names);
    console.log('arrayPop popped name: ', popped);
}

export function arrayReduce() {
    const nums = [1, 2, 3, 4];
    const initialVal = 5;
    const sumWithInitial = nums.reduce((accumulator, currentVal) => accumulator + currentVal, initialVal);
    console.log(`arrayReduce initialVal: ${initialVal} - nums: ${nums}`)
    console.log('arrayReduce sumWithInitial: ', sumWithInitial);
}

export function arrayShift() {
    const nums = [1, 2, 3];
    console.log('arrayShift nums: ', nums);
    const firstNum = nums.shift();
    console.log('arrayShift firstNum: ', firstNum);
    console.log('arrayShift nums after shift: ', nums);
}

export function arraySlice() {
    const names = ['Jessica', 'Michael', 'Ava', 'Elise', 'Enzo'];
    console.log('arraySlice names: ', names);
    const sliced = names.slice(2, 4);
    console.log('arraySlice at positions 2,4: ', sliced);
}

export function arraySort() {
    const names = ['Jessica', 'Michael', 'Ava', 'Elise', 'Enzo'];
    console.log('arraySort names: ', names);
    const sorted = names.sort();
    console.log('arraySort sorted names: ', sorted);
}

export function arraySplice() {
    const names = ['Jessica', 'Michael', 'Ava', 'Elise', 'Enzo'];
    console.log('arraySplice names: ', names);
    const spliced = names.splice(2, 4);
    console.log('arraySplice spliced at 2, 4', spliced);
    console.log('arraySplice names after splice: ', names);
}

export function arrayUnshift() {
    const nums = [2, 3, 4];
    console.log('arrayUnshift nums: ', nums);
    const unshiftedNums = nums.unshift(0, 1);
    console.log('arrayUnshift unshifted nums with 0, 1: ', nums);
}