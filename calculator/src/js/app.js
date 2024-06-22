// select

const result = document.getElementById("result");

const width = document.getElementById("width");
const breadth = document.getElementById("breadth");

const calculateBtn = document.getElementById("calculateBtn");

const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");

const history = document.getElementById("history");


// main process
const area = (w, b) => w * b;

// event
calculateBtn.onclick = () => {
  // process
  const w = width.valueAsNumber;
  const b = breadth.valueAsNumber;
  const a = area(w, b);

  result.innerText = `${w} ft * ${b} ft = ${a} sqft`;

  width.value = "";
  breadth.value = "";
};

clearBtn.onclick = () => {
  history.innerText = "";
};

addBtn.onclick = () => {
  history.innerHTML += `<li class="border-b-2 border-neutral-300 py-2">${result.innerText}</li>`;
  result.innerText = "";
};
