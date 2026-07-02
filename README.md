# Web Perceptron

A browser-based machine learning demo that classifies a 5x5 grid drawing as either an **L** or a **T** using a simple perceptron model.

## Overview

This project demonstrates the core idea behind a perceptron classifier in a visual and interactive way. The user clicks cells in a 5x5 grid, and the page predicts whether the drawing is closer to an L or a T.

The model is intentionally simple so the learning process is easy to understand. It uses hand-defined base shapes, generates noisy training examples, trains a perceptron in JavaScript, and updates the prediction live as the user changes the grid.

## Features

- Interactive 5x5 drawing grid
- Live browser-based prediction
- 120 generated training samples
- Noise-based sample generation to simulate variation
- Simple perceptron training loop
- Lightweight HTML, CSS, and JavaScript implementation

## Skills Demonstrated

- Machine learning fundamentals
- Binary classification
- Perceptron training logic
- JavaScript DOM interaction
- Front-end UI development
- Explaining ML concepts through an interactive demo

## Project Files

- `index.html` — page structure and UI
- `style.css` — grid and page styling
- `perceptron.js` — dataset generation, perceptron training, and prediction logic

## How It Works

1. The project defines two base 5x5 shapes: one L and one T.
2. It generates multiple slightly noisy versions of each shape.
3. A perceptron trains on those examples.
4. The user clicks cells on the grid.
5. The model predicts whether the active grid pattern is closer to an L or a T.

## How to Run

Clone or download the repository and open `index.html` in a web browser.

No server or build step is required.

## Portfolio Notes

This project is useful as a small, easy-to-demo example of machine learning fundamentals. It pairs well with larger infrastructure or security projects because it shows range across web development and AI/ML basics.

## Future Improvements

- Add a visual display of model weights
- Add a reset/retrain button
- Add GitHub Pages deployment
- Add screenshots or an animated demo
- Expand to more letters or symbols
