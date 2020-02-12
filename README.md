# MemeViewerWeb

[View live demo on StackBlitz](https://stackblitz.com/github/PawelGajo/meme-wiever-web)

A simple application that retrieves img sources from the server. [Server repo here](https://github.com/PawelGajo/meme-viewer).
The server is scraping sources from pages defined in the `pagesConfig.js`.
At this moment: `mistrzowie.org jbzd.com.pl kwejk.pl`.
App uses the [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll) package, which allows to auto fetching and loading the next images when a page is scrolled down.

## Development server

Run `npm install` to add all dependencies to your project.

Run your server and change url in `memes-api.service` or just leave repl.it server url.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`


