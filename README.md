## React w/ Redux Project w/ Authentication Boilerplate

### React project with authentication already working using Firebase

#### This project uses:

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Redux Thunk as Middleware](https://github.com/reduxjs/redux-thunk)
- [Firebase](https://firebase.google.com)
- [React Redux Firebase Package](https://github.com/prescottprue/react-redux-firebase)
- [Formik](https://jaredpalmer.com/formik/)
- [Yup for Forms Verification](https://github.com/jquense/yup)

#### How to use:

1. Create your Firebase Project
2. Activate authentication w/ Email and Google on your project
3. Create a .env file and paste your api key like this:

```
REACT_APP_FIREBASE_KEY=yourapikeyhere
```

4. Go to src/config/Firebase.js and fill on with your project details
5. npm run start

**On your action creators, as a 3rd argument to your thunks, you can destructure _{getFirebase, getFirestore}_. This functions when executed will return a Firebase and FireStore object, respectively.**

On your Redux Store, you have your **auth** state that will contain loading states and errors of all that is auth related(password change, verification email, logging in, signing in, etc...).

You also have a Firebase and Firestore object on your store. On the Firebase object, you have a profile object, that will contain all data relative to the person signed in. When a user signs up, besides signing him up on our Firebase, we also use Firestore to store the user data that is on the Signup form. That data will be store under the 'users' collection, with the user id. When he login, React Redux Firebase Package will automatically get that data for the correct user and put in on your store on Firebase -> Profile like we said earlier.

**You can easily see if the user is logged in be checking your store firebase.auth.uid. If there is a id, he is logged in.**
