# GoogleFontLoader

This is a _really_ simple component that can automatically handle loading Google fonts for you.

You simply pass it a config array and it will load the fonts for you by appending a `<link />` tag to the document head. It will update itself if the config changes, and will remove itself on unmount.

## Installation

Install with either yarn or npm:

```
yarn add react-google-font-loader
npm install --save react-google-font-loader
```

## Usage

```JavaScript
// Import the Component, you can call it whatever you like.
import GoogleFontLoader from 'react-google-font-loader';

const App = () => (
  <>
    {/* Use it! */}
    <GoogleFontLoader fonts={[
      {
        font: 'Roboto',
        weights: [400],
      },
      {
        font: 'Roboto Mono',
        weights: [400, 700],
      },
    ]} />

    <p style={{ fontFamily: 'Roboto Mono, monospaced' }}>This will be in Roboto Mono!</p>
    <p style={{ fontFamily: 'Roboto, sans-serif' }}>This will be in Roboto!</p>
  </>
);
```

## Props

The Component takes one prop: `fonts`. It should be an array of objects describing the fonts you want to load.

```JavaScript
[
    {
        font: 'Roboto Mono', // The name of the font on Google Fonts.
        weights: [400, 700], // An array of weights you want to load.
    },
    // ...
    // You can include as many of these objects as you want.
]
```
