Pending features -
1. Test Report Details - Is not completeltly implemented
2. The Mock API hit a 200 limit, so I started using the mock data locally 
(Moral of the story - Don't miss passing the second parameter to the useEffect hook ;) ) 

3. There are some typscript ignores (Relatively new to typescript so still figuring my way around)


Soltion - 
1. I have broken the application into specific screens which are handled through react router (App.tsx)
2. Overall the idea was to write more readable and simple code using the single responsibility priniciple
3. I have created seperate components which are reused, or likely to be reused
4. For this excercise I am using the browser inbuilt fetch API (Although the code is commented because of the API limit error currently)
5. I have also added a context for saving the organization state which are used by other component (OrganizationContext.tsx)
6. Most of the CSS is currently in the APP.css file and occascionally added some component specific css seprately. Particulary because it adds protability for these components.
7. I am also relying only on flexbox, and not importing any css frameworks. I think most functionality can just be acheived through flexbox.

