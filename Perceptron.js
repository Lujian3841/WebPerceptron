// ==========================
// 5x5 Perceptron: L vs T
// FULL ASSIGNMENT VERSION
// ==========================

// --------------------------
// MODEL PARAMETERS
// --------------------------
let weights = new Array(25).fill(0);
let bias = 0;
const lr = 0.1;

// --------------------------
// GRID SETUP
// --------------------------
const grid = document.getElementById("grid");

for (let i = 0; i < 25; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.addEventListener("click", () => {
    cell.classList.toggle("active");
    predict();
  });

  grid.appendChild(cell);
}

// --------------------------
// BASE SHAPES
// --------------------------

// L = 1
const L = [
  1,0,0,0,0,
  1,0,0,0,0,
  1,0,0,0,0,
  1,0,0,0,0,
  1,1,1,1,1
];

// T = 0
const T = [
  1,1,1,1,1,
  0,0,1,0,0,
  0,0,1,0,0,
  0,0,1,0,0,
  0,0,1,0,0
];

// --------------------------
// DATA AUGMENTATION (ANNOTATION)
// --------------------------

// copy array
function clone(arr) {
  return [...arr];
}

// add noise = simulates human annotation variation
function addNoise(shape, rate = 0.08) {
  return shape.map(v => {
    if (Math.random() < rate) {
      return v === 1 ? 0 : 1;
    }
    return v;
  });
}

// generate dataset
let trainingData = [];

// create annotated samples
function generateSamples(shape, label, count) {
  for (let i = 0; i < count; i++) {
    trainingData.push({
      input: addNoise(clone(shape)),
      label: label
    });
  }
}

// --------------------------
// REQUIRED: 100+ SAMPLES
// --------------------------
generateSamples(L, 1, 60);  // L class
generateSamples(T, 0, 60);  // T class

// --------------------------
// PERCEPTRON FUNCTIONS
// --------------------------
function activate(sum) {
  return sum >= 0 ? 1 : 0;
}

function predictInput(input) {
  let sum = bias;

  for (let i = 0; i < weights.length; i++) {
    sum += weights[i] * input[i];
  }

  return activate(sum);
}

// --------------------------
// TRAINING
// --------------------------
function train() {
  for (let epoch = 0; epoch < 40; epoch++) {
    for (let data of trainingData) {
      let prediction = predictInput(data.input);
      let error = data.label - prediction;

      for (let i = 0; i < weights.length; i++) {
        weights[i] += lr * error * data.input[i];
      }

      bias += lr * error;
    }
  }
}

train();

// --------------------------
// LIVE INPUT FROM GRID
// --------------------------
function getGridInput() {
  const cells = document.querySelectorAll(".cell");
  return Array.from(cells).map(c =>
    c.classList.contains("active") ? 1 : 0
  );
}

// --------------------------
// LIVE PREDICTION
// --------------------------
function predict() {
  const input = getGridInput();
  const result = predictInput(input);

  document.getElementById("result").innerText =
    result === 1 ? "Prediction: L" : "Prediction: T";
}

// --------------------------
// CLEAR GRID
// --------------------------
function clearGrid() {
  document.querySelectorAll(".cell").forEach(c =>
    c.classList.remove("active")
  );

  predict();
}

// initial prediction
predict();