# React TypeScript Component Library Guide 🚀

## Testing / developing component library

* Create new components in the `./library/` folder.
* Simply use the components (like regular files) from the `App.tsx` example app and test using `npm start`.

## Building your component library

* Edit the file `library/package.json` with details
* Make sure to export your components from the `./library/index.ts` file.
* When done run `npm run build-library` _(Important note: requires a bash console, powershell or cmd will not work)_. This will convert the typescript files into `.js` files and add `.d.ts` files.

## Publishing your component library to npm

* When ready to publish to npm run: `npm run publish-library`
