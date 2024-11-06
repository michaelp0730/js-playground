import './style.css';
import {
    arrayFrom,
    arrayAt,
    arrayConcat,
    arrayEvery,
    arrayFilter,
    arrayFind,
    arrayFindIndex,
    arrayForEach,
    arrayJoin,
    arrayMap,
    arrayPop,
    arrayReduce,
    arrayShift,
    arraySlice,
    arraySort,
    arraySplice,
    arrayUnshift,
} from "./arrayFunctions.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>JS Playground</h1>
    <p>Open the browser console to view the output from each JS function</p>
  </div>
`

// arrayFrom();
arrayAt();
arrayConcat();
arrayEvery();
arrayFilter();
arrayFind();
arrayFindIndex();
arrayForEach();
arrayJoin();
arrayMap();
arrayPop();
arrayReduce();
arrayShift();
arraySlice();
arraySort();
arraySplice();
arrayUnshift();