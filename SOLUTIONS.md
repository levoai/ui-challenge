
# I added a library react-router to switch between different components.
In fact, the routing isn't necessary in this small test version, but if the number of the components increase, then the routing becomes necesary.

# In structure, I added 2 folders of components and screens.
So, each route displays the components in screen folder, and this is the combination of some components in components folder.

# I built the frontend components first with dummydata, and later changed some of it, and couldn't others because api says the maximum number exceeded.

# missing parts, and implementions.
I missed one more screen.

So I will need to build the latest component with dummy data first.
And in test reports component, I displayed the data with only dummy data, and couldn't replace with real apis.
Because the api was giving the errors.
But the same architecture in organizations component could be used here to replace the dummydata with real apis.

So I think, the main structure is in organizations component already, and that can be used in all screens.

Also, I missed the validation of props.
As this is a typescript project, and it's good, I will need to define propTypes, defaultProps.

 