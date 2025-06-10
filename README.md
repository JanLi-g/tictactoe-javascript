# Node.js Hello World with SCSS

A simple Node.js application that displays a "Hello World" message with SCSS styling.

## Project Structure

```
.
├── index.js                # Main server file
├── package.json            # Project configuration
├── public                  # Static assets
│   ├── css                 # Compiled CSS (generated from SCSS)
│   └── js                  # JavaScript files
├── src                     # Source files
│   └── scss                # SCSS source files
│       └── style.scss      # Main SCSS file
└── views                   # HTML templates
    └── index.html          # Main HTML file
```

## Features

- Express.js web server
- SCSS styling with express-dart-sass
- Automatic SCSS compilation during server runtime
- Simple "Hello World" page with animations

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running the Application

### Production

```bash
npm start
```

### Development (with auto-restart)

```bash
npm run dev
```

Then open your browser and navigate to http://localhost:3001

## Manual SCSS Compilation

If you prefer to compile SCSS files manually or if the automatic compilation isn't working, you can use these commands:

```bash
# Compile SCSS files once
npm run scss

# Watch SCSS files for changes and compile automatically
npm run scss:watch
```

## How It Works

- The Express.js server serves the static HTML file from the views directory
- SCSS files in src/scss are automatically compiled to CSS when requested via express-dart-sass middleware
- The compiled CSS is served from public/css
- Alternatively, you can manually compile SCSS files using the provided npm scripts
