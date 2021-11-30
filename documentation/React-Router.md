# React Router & React Router Dom

React-Router is part of the core library of React, but we're using React-Router-Dom, since this is for dom-based web apps.

React-Router only cares about everything after the domain declaration.

The BrowserRouter listens to the browser history to pass into the Route Component.

With React Router, there are 3 different routers:
1. **BrowserRouter** `localhost:3000/pagetwo`
   1. Uses everything after the top level domain, or port as the 'path'
2. **HashRouter** `localhost:3000/#/pagetwo`
   1. Uses everything after the # as the 'path'
3. **MemoryRouter** `localhost:3000`
   1. Doesn't use the URL to track navigation

