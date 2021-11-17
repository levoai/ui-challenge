- It was necessary to implement the hide and show the Failed Tests and Passed Tests panel, it could be implemented with a hook:

    const [open, setOpen] = useState<boolean>(true);

And a conditional, that when it says open it shows a div
But I was thinking of doing it with headless.ui which has components that are accessibility friendly
https://headlessui.dev/react/disclosure

- There are many texts that have the same color (Purple) in different screens/sections, I would created a primary, secundary and every other color in the tailwind.config.js file.

- It would be better to implement fuzzy.js for the search - Test Report Result, this would avoid the problem of not getting endpoints when filtering for accents, being written in plural / singular, etc.

- TailwindCSS is mobile-first, but due to lack of time it was tested only in desktop version, some things are not responsive like sidenav, which should be.

- The method type is not returned by the API, so I purposely put {{.method}}.

- Missing the "Results" I did not add it, considering that it is only a view. It would have been better not to show the "results" until the user clicks on it.

- The APIs generates mock data every time it is requested so most data does not match (organizations names are different on the Organizations and Organizations Test Reports screens).

- Add a cool and nice font!!.