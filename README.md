# :zap: Next API Data

* Next.js displays data from a [PocketBase](https://pocketbase.io/) SQL database.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/next-api-data?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/next-api-data?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/next-api-data?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/next-api-data?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Next API Data](#zap-next-api-data)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General Info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General Info

* Allows blog posts to be created and stored in a SQL database.
* Responsive layout so it can be used on a PC or mobile
* Blog page: Partial posts (title and category) are displayed and clicking on a partial post displays the entire post
* To be made into a SAAS app

## :camera: Screenshots

![Example screenshot](./img/data.png).

## :signal_strength: Technologies

* [Next v13](https://nextjs.org/) minimalist framework for rendering react apps on the server.
* [React v18](https://reactjs.org/) Javascript library.
* [Pocketbase v0.7.1](https://pocketbase.io/) SQL backend, [documentation](https://www.npmjs.com/package/pocketbase)
* [Tailwind CSS v3](https://tailwindcss.com/docs/guides/nextjs)
* [clsx](https://www.npmjs.com/package/clsx) utility for constructing className strings conditionally.
* [Hero SVG Icons](https://heroicons.com/)

## :floppy_disk: Setup

* Download [Pocketbase](https://pocketbase.io/docs/)
* `./pocketbase serve` to run database, access the Admin dashboard UI and create admin account
* I created a collection called `blog` with `title, content, category` fields, all set to public access
* `npm run dev` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `npm run build` builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## :computer: Code Examples

* extract of tba

```typescript
tba
```

## :clipboard: Status & To-Do List

* Status: Working database access, responsive navbar.
* To-Do: Add Tailwind table/card grid, card detail back button, category filter

## :clap: Inspiration

* [PocketBase documentation](https://pocketbase.io/docs/)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
