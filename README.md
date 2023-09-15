This is an simple Youtube-clone only front-end part made using Reactjs, JS, Tailwindcss, Redux store.I have make use of various Youtube v3 API's.

### `Features`

Infinite Scrolling.
Fully optimized search bar implemented using useMemo, debouncing.
Live chat will be display if the video is liveBroadcast. Although the data's are dummy, because i can't any youtube api which fetches live Chat from Youtube.So hardcoded as of now.
Implemented a n-level comment Section.
Also implemented an side NavBar using redux-store.

I believe there is lot of scope for improvement yet to be done.


### `How to run this app`

You will need an API key from Google Cloud console (you can get yours from console.cloud.google.com)
Once you have the api key, just create an <any_name>.js file on the same level as App.js and put this line -> export const GOOGLE_API = <your_api_key>
You are good to go now, just run npm start and done.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

