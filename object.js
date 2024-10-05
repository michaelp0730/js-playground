import './style.css';
import {
  objectAssign,
  objectCreate,
  objectEntries,
  objectIs,
  objectKeys,
  objectValues,
} from "./objectFunctions.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>JS Playground</h1>
    <p>Open the browser console to view the output from each JS function</p>
  </div>
`

objectAssign();
objectCreate();
objectEntries();
objectIs();
objectKeys();
objectValues();