# :zap: Next API Data

* A Next.js React cryptocurrency api app.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Next API Data](#zap-next-api-data)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Lists prices of cryptocurrencies, depending on setup of API http request.
* Next.js is for server-rendered react apps. It has automatic code splitting, simple page-based routing, built-in CSS support and hot reloading.

## :camera: Screenshots

![Example screenshot](./img/data.png).

## :signal_strength: Technologies

* [Node.js v12](https://nodejs.org/) javascript runtime using the [Chrome V8 engine](https://v8.dev/).
* [React v17](https://reactjs.org/) Javascript library.
* [Next v10](https://nextjs.org/) minimalist framework for rendering react apps on the server.

## :floppy_disk: Setup

* `npm run dev` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `npm run build` Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## :computer: Code Examples

* extract of `index.js` - function to get API data.

```javascript

// async await function to get crypto currency prices - no API key required.
Index.getInitialProps = async function() {
  const res = await fetch
  ('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

  return {
    bpi: data.bpi
  };
}

```

## :clipboard: Status & To-Do List

* Status: in work
* To-Do: nothing.

## :clap: Inspiration

* [Traversy Media: Next.js Crash Course 2021](https://www.youtube.com/watch?v=mTz0GXj8NN0)
* [CoinDesk Bitcoin Price Index API](https://www.coindesk.com/api)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
