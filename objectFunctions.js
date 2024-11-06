export function objectAssign() {
    const target = {a: 1, b: 2};
    const source = {b: 4, c: 5};
    console.log('objectAssign target: ', target);
    console.log('objectAssign source: ', source);
    const returnedTarget = Object.assign(target, source);
    console.log('objectAssign target after assignment: ', target);
    console.log('returnedTarget === target: ', returnedTarget === target);
}

export function objectCreate() {
    const person = {
        isHuman: false,
        printIntroduction: function () {
            console.log(`My name is ${this.name}. Am I human? ${this.isHuman}. Created with Object.create().`);
        },
    };

    const me = Object.create(person);

    me.name = 'Michael'; // "name" is a property set on "me", but not on "person"
    me.isHuman = true; // Inherited properties can be overwritten

    me.printIntroduction();
}

export function objectEntries() {
    const obj1 = {
        a: 'something',
        b: 42,
    };
    console.log('objectEntries obj: ', obj1);

    for (const [key, val] of Object.entries(obj1)) {
        console.log(`${key} - ${val}`);
    }
}

export function objectIs() {
    console.log('objectIs 1, "1": ', Object.is(1, '1'));
    console.log('objectIs NaN, NaN: ', Object.is(NaN, NaN));
    console.log('objectIs 0, -0: ', Object.is(0, -0));
    console.log('objectIs [1,2], [1,2]: ', Object.is([1, 2], [1, 2]));
    console.log('objectIs "yes", "yes": ', Object.is("yes", "yes"));
}

export function objectKeys() {
    const obj = {
        a: 'something',
        b: 42,
        c: false,
    };

    console.log('objectKeys obj: ', obj);
    console.log('Object.keys(obj): ', Object.keys(obj));
}

export function objectValues() {
    const obj = {
        a: 'something',
        b: 42,
        c: false,
    };

    console.log('objectValues obj: ', obj);
    console.log('Object.values(obj): ', Object.values(obj));
}