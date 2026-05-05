<h1 align="center">Game Idea Validator for Market Potential</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
![Issues](https://img.shields.io/github/issues/MllGll/game-idea-validator)
![Pull Requests](https://img.shields.io/github/issues-pr/MllGll/game-idea-validator)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

<div align="center">

![demo_screen](./public/demo-screen.png)

</div>

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Support](#support)
- [Authors](#authors)
- [License](#license)

## Description

During planning and market research, independent developers and small teams often need a lightweight way to stress-test game ideas for commercial viability. **Game Idea Validator** targets that gap; it comes from interest in game development as both enthusiast practice and learning.

The app is a browser-based questionnaire that supports critical evaluation of game concepts from a primarily profit-oriented angle. Questions cover distinct dimensions of the product; a structured scoring system (total out of 20, with qualitative bands) helps reason about market value and relative success potential. Criteria reflect factors such as popularity, relevance, and target-audience interest.

The interface is available in English and Portuguese (default follows the browser language). Critiques and suggestions to improve the evaluation method are welcome—see [Support](#support).

## Features

- Enter a project name and step through yes/no questions with optional examples for each item.
- Move forward and backward through the flow; one follow-up question appears only when relevant answers are given.
- Receive a numeric score (max 20), a labeled potential band, and a short disclaimer about interpreting results.
- Open a panel that lists how each question contributes points.
- Switch language from the footer without reloading.
- Restart the flow to evaluate another idea.

### Scoring rules

Each question focuses on different aspects of the product; this scoring system helps measure market value and success potential. Factors such as popularity, relevance, and audience interest were taken into account.

- **Is the product internationally known?** If yes, +5 points.
- **Has the product been trending in recent years in other media?** If yes, +3 points.
- **Has the product's theme or genre been trending in recent years?** If yes, +2 points.
- **Is there a recently released game focused on the product? (Last 5 years)** If no, +3 points.
  - **Did it reach a large audience or receive positive feedback?** (Only if the previous question was answered yes.) If no, +1 point.
- **Is there demand for a game about the product?** If yes, +3 points.
- **Is the product's target audience in other media large?** If yes, +1 point.
- **Is the target audience for a game about the product large?** If yes, +3 points.

## Tech Stack

**Frontend**

- React 18
- Vite (SWC React plugin)
- NextUI
- Tailwind CSS
- Framer Motion
- i18next / react-i18next
- Lucide React (icons)

**Tooling / Infrastructure**

- Biome (formatter and linter)
- PostCSS and Autoprefixer
- `gh-pages` for publishing the production build

## Getting Started

### Installation

```bash
git clone https://github.com/MllGll/game-idea-validator.git
cd game-idea-validator
npm install
```

### Running the project

```bash
npm run dev
```

Open the local URL printed in the terminal (Vite dev server).

## Contributing

1. Open an issue to describe the change or bug.
2. Fork the repository and create a branch for your work.
3. Submit a pull request referencing the issue when applicable.

## Support

Report problems and feature requests via [GitHub Issues](https://github.com/MllGll/game-idea-validator/issues) first.

**Marcello Gallante** — [marcellogallante@gmail.com](mailto:marcellogallante@gmail.com)

## Authors

**Marcello Gallante**

- GitHub: [https://github.com/MllGll](https://github.com/MllGll)

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
