# Lesson Plan

## DOM APIs

Motivation: we can navigate the browser using JavaScript alone.

* Introduce the old `location` object in the console and demo `location.reload()`.
* Introduce the newer History API and demo its `go`, `back`, `forward` and `pushState` methods.
* With the History API we can manipulate the pathname of the URL without causing browser reload.
* We cannot use the History API alone in React because components wouldn't know to re-render.
* In SPAs with front-end routing, the pathname in the URL becomes part of application state.
* Instead of pointing to a resource on the server, the pathname of the URL keeps track of what should display.

## React Router Demo

* The React Router lib is in the project already, but demo `npm install react-router-dom`.
* Inside the `design-files` folder find the designs of all the screens.
* As you walk through the designs explain how the pathname in the URL governs what renders.
* There are several steps in different files to complete for this guided project.
* Use the global search with the search term `👉 STEP` to find the steps throughout the codebase.
* Starting at `👉 STEP 1` follow the instructions in the comments.

## Links of Interest for Students

* [The History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
* [React Router Docs](https://reactrouter.com/web/guides/quick-start)
