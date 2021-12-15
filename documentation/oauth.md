# OAuth Authentication with Google

| email / password authentication | oauth authentication |
| --- | --- |
| I store a record in a database with the user's email & password | User authenticates with outside service provider (Google, LinkedIn, Facebook). |
| When the user tries to login, I compare email/pw with what's stored in DB | User authorizes our app to access their information.
| A user is 'logged in' when they enter the correct email/pw | Outside provider tells us about the user.
|  | I am trusting the outside provider to correctly handle identification of a user.
|  | OAuth can be used for (1) user identification in our app and (2) our app making actions on behalf of user.

## List of Scopes

When you use OAuth, you need to provide a list of scopes, detailing what items from the origin account, your app would like to access.

This shows up in a modal, asking permission from the user to provide access to those items in the origin account.

[OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes)

## OAuth for Servers vs JS Browser Apps

| oauth for servers | oauth for js browser apps |
| --- | --- |
| Results in a 'token' that a server can use to make requests on behalf of the user| Results in a 'token' that a browser app can use to make requests on behalf of the user|
| Usually used when I have an app that needs to access user data **when they are not logged in**| Usually used when I have an app that only needs to access user date **while they are logged in** |
| Difficult to setup because I need to store a lot of info about the user | Very easy to set up thanks to  Google JS lib to automate flow |

## OAuth Flow for this App

| User's Browser | Google's Servers |
| --- | --- |
| user clicks 'Login with Google' button| |
| I use Google's JS lib to initiate OAuth process| |
| ------------> | Google's JS lib makes auth request to Google |
|| Google displays confirmation screen to user in popup window|
|| User accepts|
|<------------| Popup window closes|
| Google's JS lib invokes a callback in our React/Redux app||
| Callback provided with 'authorization' token & profile info for user||

## Creating OAuth Credentials
1. create a new project at console.developers.google.com
2. Setup an OAuth confirmation screen
3. Generate an OAuth Client ID
4. Install Google's API library, initialize it with the OAuth Client ID
5. Make sure the lib gets called any time the user clicks on the 'Login with Google' button.

## Methods available with GAPI
**Prototypes** are how Javascript does *inheritance* between "Classes".

When inspecting an auth object in the console of your browser, you will see the `__proto__` properties of the object. 
Expand the proto property, and you will see several methods available on that object.

Say we are inspecting the proto property of the following object if a user is signed in.
`gapi.auth2.getAuthInstance().isSignedIn`
we will see this:
```
__proto__: {
  Ei: f (a)
  get: f()
  listen: f (a)
  set: f (a)
  constructor: f (a)
  __proto__: Object
}
```

We could use `listen()` to "listen" to find out when a user is signed in.

## Handling Auth with Redux Store

Since the GoogleAuth Component is the only component that's aware if the user is signed in, we're going to pass the sign-in state to the Redux Store, so the whole App will reflect the user's sign-in state.

