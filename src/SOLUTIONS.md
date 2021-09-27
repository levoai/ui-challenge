## Component Structure

I built them reusables divided into two categories: Container and Presentational trying to follow Dan Abramov advices. [See more](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0):

```
MyComponent/
  components/ -> Child components
    ChildComponent/
    AnotherChildComponent/
  index.ts -> just re-exports components in order to avoid double imports like '/MyComponent/MyComponent'.
  MyComponent.ts -> Presentational, just a plain view.
  MyComponentContainer.tsx -> Container, used for fetching, preparing data, getting data from redux-store...
  MyComponent.scss -> Styles, it generates a .css file automatically.
```

# My Solution

  - I put all my components into /components folder and trying to make them as reusable as posible
  - If a component has child components so I nested another /components folder following my "Component Structure"
  - I also created /components/App which contains component I this would be useful around the app
  - I used sass as for styling
  - I put all my typescript types into /models
  - I created a /shared folder which contains my constants.ts file and utils.ts file (useful methods that could be used through the app)
  - I created a /service folder which contains all the http request (I reached the 200 api call limit, so I put some dummy data in order to have something in the screen even though the api returns a 500 error)
  - /routes contains all the routes I considered the application has to have and I used react-router-dom package to manage it
  - I used 'react-icons' package to show icons
  - I didn't use a style framework (didn't consider it necessary here)