## Suggested changes to the design and further work on the implementation

  - Style: I think I need to use sass variables in order to have an app theme, doing that we get a more reusable stylesheet structure
  - Global State: I didn't use Global state, I was getting the organization data around the app, having a global state I can get the organization data once and reuse it around the app.
  - I'm not managing the http errors, would be a goog idea show an error message to the user and then improve the UX.
  - i18n: I didn't use localization files, I think is something that every application has to have because it gets you a more organized app.
  - Warnings: I know I have some lint warnings I have to fix
  - UX: Have a loading indicator would be nice in order to show the user the app is doing something.