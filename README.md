# Next Boilerplate

## Getting Started

First, install dependencies:

```bash
yarn install
```

Run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Working with PWA

To configure the app to work with PWA is necessary to add 
[**Next PWA**](https://www.npmjs.com/package/next-pwa): 

```bash
yarn add next-pwa
```

The current version of Next PWA (5.0.6) requires Webpack 4, so to this current version of NextJS (10.0.7) 
it's necessary to run:
  
```bash
yarn add webpack@4
```

Add this code to the `next.config.js` file (if not exists it should be created in the root):

```js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPwa = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
};
```

Add [manifest.json file](https://developer.mozilla.org/pt-BR/docs/Web/Manifest) to `/public` and 
add `<link rel="manifest" href="/manifest.json">` to `/src/pages/_app.tsx`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
