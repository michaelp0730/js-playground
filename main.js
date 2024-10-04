import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
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
} from "./array.js";

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>JS Playground</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">Click on the Vite logo to learn more</p>
    <p>Open the browser console to view the output from each JS function</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
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