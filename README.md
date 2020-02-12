# MemeViewerWeb

[View live demo on StackBlitz](https://stackblitz.com/github/PawelGajo/meme-wiever-web)

a simple application that retrieves img url's from the server ( [Server repo](https://github.com/PawelGajo/meme-viewer).
Server is scraping img src from pages defined in the pagesConfig.js in server repo.
At this moment:
	* apples
	* oranges
	* pears
App uses the [ngx-infinite-scroll package](https://www.npmjs.com/package/ngx-infinite-scroll) which allows to automatic fetching and loading next images when page is scrolled down.

## Development server

Run `npm install` to add all dependencies to your project.

Run your server and change url in memes-api.service or just leave repl.it server url.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`



Have fun!
