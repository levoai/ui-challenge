# What i did

1. added `eslint` custom config and `prettier` to get allow other users to follow same guide lines.
2. did not used the organization details endpoint since it was not consistent and could mess up the data we show, instead i filtered the organizations response by the organization id.
3. since i did a route structure based on the api calls, there are different issues while fetching data and changing routes.
4. used `react-query` since it is a good tool for catching and also provides the loading, error and data props that are usually used when making endpoint calls.
5. used `styled-components` to define components with style embed, we don't need to use something like BEM o SMACSS. Also we can share and extended the different styles.
6. used `date-fns` instead of `moment` because is faster and lightweight.
7. defined `env` variables for the host and api key as a good practice when it changes environments.
8.

# What's left

1. responsive design for more screen sizes is a must but was focusing on the desktop UX.
2. there are only basic tests but the coverage should be higher, and with better use cases.
3. improve the UI/UX based on feedback.
4. we can add alias to some folders for easier access, also an index per folder in the cases that don't cause cycle references.
