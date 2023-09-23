---
title: "Creating a Full-Stack MERN Application"
publishedAt: "2022-02-05"
summary: "Tutorial for a Full-Stack MERN Project."
---

## Introduction

I recently followed a tutorial going over how to create a fully functioning MERN (MongoDB, Express, React, Node) Application.

I've summarized here as much as I could, with all the technical details needed to make sure the application works. The server's deployed on Heroku, and the frontend on Netlify ([Here](https://github.com/jerryliangxia/Memories-Project)'s the link to the source code on GitHub).

This tutorial is lengthy, with a lot of instructions, and some hopefully concrete explanations. I hope it helps!

<br />

#### Warm-up / Node package manager installation

If you are able to access the terminal in your IDE, try to split the view into two parts. Make two directories, `client` and `server` on each side, and within the client, run this command:

```javascript
//  must have node downloaded first - version I used was 2.2.12
npx create-react-app
```

This might take a while, as it adds several starter files to your program.

After this, `cd` into `server`, create a file called `index.js`, run `npm init -y` and then install some dependencies:

```javascript
npm install body-parser cors express mongoose
```

Here's the overview of what you just installed:

- body-parser -> is used to send POST requests.
- cors -> used to send cross origin requests.
- express -> is a framework for creating routesfor the application.
- mongoose -> creates models for our posts. _Very important._
- nodemon -> by using this, you don't have to manually reset the server after every code change.

After this, import all of these dependencies within your `index.js` file. Node is special in this way, such that you can simply use the `import` syntax to do this.

Once you're done that, add a variable `"type": "module"` under `"main"` in the `package.json` file that was generated. Following this, in the body of `"scripts": {}`, add `"start": nodemon index.js`. This should make it so you can run the development server.

In the client, run `npm install axios moment react-file-base64 redux redux-thunk`. This will install several dependencies, including axios, and file upload, that will assist us in creating the application.

- Delete the `src` folder. Create an `index.js` file in `src` instead, and we'll use this from now on. Import React, ReactDOM in this file, and, using your HTML skills, render the app and call it the `"root"`.

In `App.js`, import React, return the `App` as a const, and export it. By accomplishing this, running `npm start` will now start the development server :)

## Setting up the Backend and Database

The basic gist of the application can be seen in the demo (via the GitHub link). On this website we're creating, we'll have several Post objects on a page. These posts will contain data such as the creator's name, the message of the post, and some other fields you'll see later below. We'll add the basic functionalities to these posts as well by using a Form object. With this Form object, we can create, and update posts. We can also like and delete posts from the Post object itself.

Here's a Post:

<p align="left">
    <img src ="/images/creating-a-full-stack-application/zp.png" width="50%""/>
</p>

And here's the Form:

<p align="left">
    <img src ="/images/creating-a-full-stack-application/form.png" width="50%"/>
</p>

Let's dive right into the database setup.

We'll be using MongoDB (The M in MERN) to create a cluster we can operate on. Here are the instructions:

- First, add a database user.
- Ensure network access is available to all IPs, then;
- Connect the application with Node 2.2.12 (which is just what I used), and in `index.js` paste the following:

```javascript
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// note: this line must be before app.use(cors());
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});
```

This will be the start of our development.

Now, some of these dependencies will be used and explained later. After this, create `controller` and `routes` directories within `server`. These two folders are more for organization; but play a pivotal role in making a clean backend component. Follow these steps:

- In `routes`, add a file called `post.js`. Do the same in `controller`.

- In `controllers/posts.js`, we'll be exporting functions that we will be listing in `routes/posts.js`.

e.g. of use (don't worry about this for now, but it's just an overview of what we'll be generally doing):

```javascript
// in controllers/posts.js

export const getPosts = (req, res) => {
  res.send("this works");
};

// in routes/posts.js

import express from "express";

import { getPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

export default router;
```

After this, create a new folder called `models`. In this, create a file called `postMessage.js`. Paste this inside:

```javascript
//  acts as a CRUD repository

import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
```

> As mentioned briefly above, Mongoose is used to create models; we essentially create a schema, then export this as a model.

We just created a schema, corresponding to one model. In bigger applications, we'd have to create several schemas, but just for the sake of our application, we're sticking to something small and simple. So - just one schema, one model.

We use this model in `controllers/posts.js`. In this file, we can then use this `PostMessage` like so: `await PostMessage.find()` (just an example). `await` here is used because `find()` takes time; we thus have to account for this by using something called `async`, taking in two parameters; `req` and `res`. Add in status codes, and surround in try-catch blocks:

```javascript
//  getPosts example

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
```

This is our first asynchronous call! We'll be using this further throughout the program. But this is the backend, with the database set up as well. In the next section, we'll move on to the client side (or frontend) of the program.

> Side Note: In `put` requests, you can extract the body using `const body = req.body`.

## Setting up the Frontend

Install material UI: `npm install @material-ui/core` and `npm install @material-ui/icons` while in `client`.

Follow these four steps:

- Create a folder called `components.`
- In `components`, create a `Form` directory, as well as a `Posts` directory.
- In `Posts`, create another directory called `Post`.
- For each directory `x`, create a file `x.js` and `styles.js`.

Import all the components from `@material-ui`. For example:

```javascript
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
```

Setup of the frontend is done! It's very quick, as you can see.

Now, we move on to a bit of styling before setting up backend APIs, and connecting them to the frontend.

## Styling

Using the `./styles.js` file in every directory, import `makeStyles` from `@material-ui` and define the styling (This is ultimately up to you - but the styling I used can be found on the repository). Once this is done, go to `App.js` and within this file (and within App itself), insert the following:

```javascript
// using styles

import useStyles from "./styles";

const classes = useStyles();
```

Now, you can use styles by specifying `className={classes.appBar}`, for example, in the HTML.

> Referring to GitHub is ideal to follow the next few steps, especially when it comes to making Containers and Grids in material-ui.

Now, for `Post`, `Posts` and `Form`, update the `styles.js` file and import the styles respectively. Create a `const` just as shown above.

## Backend APIs and Redux

Starting off, the `index.js` file in `api` should look something like this:

```javascript
// api calls

import axios from "axios";

// for now, this url will be the localhost. We'll change this later.
const url = "https://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
```

We now move on to introduce **reducers**.

A reducer is a function that accepts the state and the action, from somewhere, and based on the action type returns either the state or some action. The state must _always_ be defined.

Sounds confusing, but you'll get the flow of this through our implementation. Once this is finished, you can import reducers in `index.js`, and wrap the `<App />` like so:

```javascript
// index.js in /src

import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // now uses redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

The `<App>` now has a `<Provider>`, which has a store with the reducers we must use. That's it, really - don't spend too much time on this, because we don't change this file for a long time.

Now, in the client, run `npm install react-redux`. After this, we're ready to move on to creating actions.

## Creating an Action

Right now, we're aiming to create a 'Post', as seen in the introduction.

At the top of `App.js`, change one of the top lines to the following (adding `useEffect` in the import):

`import React, { useState, useEffect } from "react";`

and in App, add the following lines of code:

```javascript
const dispatch = useDispatch();

// dispatch in the dependency array
useEffect(() => {
  dispatch(getPosts());
}, [dispatch]);
```

Once this is done, create a folder called `actions` in `src`. This will house all the Action Creators we'll define.

**Note:** Action Creators are functions that return an action. An action is simply an object that has a `type` and a `payload`. Once this action we've just created, gets dispatched from `App.js`, we go to the post's `reducer`, and `FETCH_ALL` of the posts. Then - in `/reducers/posts.js`, under `FETCH_ALL` we can return the `action.payload` (again, referring to GitHub here is important), which is the data returned from the action. This basically allows us to fetch all the posts.

<br />

#### Using state and selectors (redux) to get the state of Posts... and seeing the results

Insert this line at the top of `components/Posts.js`:

```javascript
import { useSelector } from "react-redux";

// and then in Posts = () => { ... }, add:

const posts = useSelector((state) => state.posts);

// let's log the posts in the console!

console.log(posts);
```

In `client/package.json`, add `"proxy": "http://localhost:5000"` under `"private": true`. Now, go to that proxy address and inspect the page.

You'll see that there's an empty array logged in the console - this is good. It means our backend is working :)

#### Creating the Form

`@material-ui` has a `<Paper>` class that's nice to use. Let's import this to our `Form.js`, and add fields to the `Form` that is returned. We'll focus on two functions: `value` and `onChange`. With the `useState` hook, let the form return the following:

```javascript
const [postData, setPostData] = useState({
  creator: "",
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
});
```

... and in the `creator` textfield, for example (we'll have many other textfields - like message, postedFrom, etc.), we have:

```javascript
<TextField
  name="creator"
  variant="outlined"
  label="Creator"
  fullWidth
  value={postData.creator}
  onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
/>
```

- Here we spread out the data for `onChange` using `...`, and then extract the `creator` and use the state `e` to configure it. This is a really helpful javascript tool.

Here's our file upload, where we use `FileBase`:

```javascript
// additionally; import filebase:

import FileBase from "react-file-base64";

// further along in the file...

<div>
  <FileBase
    type="file"
    multiple={false}
    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
  />
</div>;
```

Great! What we've done is define a Post object. We now move on to implementing 'create a post' functionality, so that we can see our backend and frontend implementation in action.

## Example API - Creating a Post

We start off with two instructions:

- In `client/src/api/index.js`, add `export const createPost = (newPost) => axios.post(url newPost);`.

We'll use this file to organize our actions. We now proceed to `actions` itself.

- In actions, we create this post function and export it. In `Form.js`, import `useDispatch` from `'react-redux'`.

Thus, in the `<App>` when the submit button is pressed:

```javascript
const handleSubmit = (e) => {
  // include this line to prevent refresh
  e.preventDefault();

  dispatch(createPost(postData));
};
```

...the post will be made in the database.

Now, under 'CREATE' in `reducers/posts.js`, return the following: `[... posts, action.payload]`. Go check the console, as well as the cluster. **Your data will now be there.**

## Displaying Posts

Create a Grid class, and in there include the following JS code:

```javascript
// in <Grid> </Grid>:

{
  posts.map((post) => (
    <Grid key={post._id} item xs={12} sm={6}>
      <Post post={post} setCurrentId={setCurrentId} />
    </Grid>
  ));
}
```

In the `Post.js` file, the input will now have a `{ post }` object. We can then use this object to display in the Card. _Note: `className`s are always inside of surrounding `div`s._

> To add a background, visit [SVG Backgrounds](https://svgbackgrounds.com/). Create an `index.css` file in `client/src` and target the body (`body: {}`) with the SVG code you find.

#### Updating a Post

We will use the Form to edit a Post. In `/routes/posts.js`, we have:

```javascript
router.patch("/:id", updatePost);
```

Note the `:` tag - this means we need to pass in a **parameter**. In `/controllers/posts.js`, let's export a new function. We'll use this as a template to repeat again and again (of course, with some changes). Note in here how we destructure the params to extract the id.

```javascript
// updating a post

export const updatePost = async (req, res) => {
  try {
    // destructure the params.
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that id");

    // using mongoose ...
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      // must include this as you're updating data
      new: true,
    });

    // return the json
    res.json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
```

#### Sharing the current_id

As a result of this, we now have to introduce a new state in `App.js` to pass along this selected id. Let us write: `const [currentId, setCurrentId] = useState(null);` in the body. Then, in the `Form` and Posts, we add this `currentId` field;

```javascript
<Form currentId={currentId} setCurrentId={setCurrentId} />

<Posts setCurrentId={setCurrentId} />
```

We can now pass this down to `Posts.js`:

```javascript
// note the setCurrentId field now.

const Posts = ({ setCurrentId }) => {
  ...
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
  ...
};
```

Now, since we are trying to add this to the edit button (on the Post), we traverse to `Post.js`. In here, find the button we intend to use. Then, inside of that div, set `onClick` to:

```javascript
onClick={() => { setCurrentId(post._id); }}
```

This way, the change will propagate all the way to `App.js`. In `Form.js`, we now have:

```javascript
// handling the submit - now with currentId

const handleSubmit = (e) => {
  e.preventDefault();

  if (currentId) {
    dispatch(updatePost(currentId, postData));
  } else {
    dispatch(createPost(postData));
  }
};
```

Above, we check if the current id exists, then dispatch accordingly based on what we get.

And now, in the `/api/index.js`, add:

```javascript
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
```

Go to `src/actions/posts.js` and add:

```javascript
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
```

> Side Note: Always log the error, not error.message!

In `client/src/reducers/posts.js`:

```javascript
// if the id matches, return the new id, otherwise, return the normal post

case "UPDATE":
  return posts.map((post) =>
    post._id === action.payload._id ? action.payload : post
  );
```

In `client/src/components/Form/Form.js`, add this selected post.

```javascript
const post = useSelector((state) =>
  currentId ? state.posts.find((p) => p._id === currentId) : null
);
```

In the same file:

```javascript
// when the [post] value changes

useEffect(() => {
  if (post) setPostData(post);
}, [post]);

<Typography variant="h6">
  {currentId ? "Editing" : "Create"} a Memory
</Typography>;

const clear = () => {
  setCurrentId(0);
  setPostData({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
};

// add clear(); at the end of handleSubmit() { ... }
```

These were a lot of instructions in terms of understanding what happened. It's okay though - further on, we'll see this process summarized in a more understandeable format. For now however, here's a very high overview of what happened:

- When `[post]` changes, we call `setPostData(post)` with the `post` as input. This was defined before. We also change the title of the Typography for the Form, and add a `clear()` call so we can clear all the data in the form.

<br />

**Tricky Issue:** we now have to update the post with the old id. So we create a new post, then inject that same id into the new post. Here:

```javascript
const updatedPost = await PostMessage.findByIdAndUpdate(
  _id,
  { ...post, _id },
  { new: true }
);
```

<br />
This is the gist of writing an API.

Now, let's see some condensed versions for `deletePost` and `likePost`. It'll give a more step-by-step definition of what to follow as opposed to the lengthened detailing of `create` and `update` we had above.

#### deletePost

Backend:

1. In `server/src/routes/posts.js`, Create a new route, with the id; `/:id`. Call a function called `deletePost` from the controller.
2. In `server/src/controllers/posts.js`, export `deletePost` with the corresponding logic.

Frontend:

3. In `client/src/api/index.js`, export the `deletePost` with the correct url and params.
4. In `client/src/actions/posts.js`, create the asynchronous dispatch. _Note: the payload here is the id._ Use the DELETE tag.
5. In `client/src/reducers/posts.js`, implement the logic for the DELETE tag. In this case, it's: `return posts.filter((post) => post._id !== action.payload);`
6. In `Posts/Post/Post.js`, `import { deletePost }`, and add this to the onClick(); `onClick={() => dispatch(deletePost(post._id))}`

<br />

#### likePost

Backend:

1. In `server/routes/posts.js`, create a new route with a function called `likePost`.
2. In `server/controllers/posts.js`, export `likePost` with the corresponding logic.

Frontend:

3. In `client/src/api/index.js`, export the `likePost` with the correct url and params.
4. In `client/src/actions/posts.js`, create the asynchronous dispatch. _Note: the payload here is the data._ Use the UPDATE tag.
5. In `client/src/reducers/posts.js`, implement the logic for the UPDATE tag. In this case, it's already there.
6. In `server/components/Posts/Post/Post.js`, `import { likePost }`, and add this to the onClick(): `onClick={() => dispatch(likePost(post._id))}`

That's pretty much it for app functionality! We'll now move on to some additional improvements, before deploying to Heroku and Netlify.

## Additional

#### Moving the 'Create a Memory' to the top of the mobile page

With material-ui, we barely have to change the styling to fit a mobile view. In fact, here almost all of the work is done for us except for one small change. Here's what we need to do:

In App.js, add `className={classes.mainContainer]` to the `<Grid>` where the Form is. In `client/src/styles.js`, add a `@material-ui` breakpoint like so:

```javascript
...
[theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
...
```

#### Avoiding typos with strings

In `client/src`, create a `constants` folder. Insert the following:

```javascript
export const UPDATE = "UPDATE";
export const CREATE = "CREATE";
export const DELETE = "DELETE";
export const FETCH_ALL = "FETCH_ALL";
```

Import these in `client/src/actions` and use them instead of strings. (exactly like you would an enumeration class in Java)

#### Hiding your MongoDB password

Currently, if we publish our code to GitHub our port and connection URL are open for anyone to see. This of course, isn't great. Here are the instructions to hide this information.

Run `npm i dotenv`

Add `import dotenv from "dotenv"` to the top of `server/index.js`.

In `server`, create a file called `.env`. Add the PORT and CONNECTION_URL like so:

```env
PORT = 5000
CONNECTION_URL = mongodb://... (note: no " or ')
```

Lastly, in `index.js` use `process.env.PORT` or `process.env.CONNECTION_URL`, and add `dotenv.config()` at the top of the file.

Run `npm start` (having restarted the server).

If sharing this publicly, users have to create their own .env file. You can create a `.env.example` file if you want to as well.

You can now post on GitHub with privacy being safe :)

It's also recommended to remove your .env file once this is done.

## Heroku Deployment

Let's stop hosting locally, and deploy our application on Heroku.

Before following the instructions on [Heroku's website](https://id.heroku.com/login), we must first `cd` into `server`, starting with `heroku login`.

To see if the server is working, add this to the top of `server/index.js`. This will be used later:

```javascript
app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});
```

Then, create a `.gitignore` file. Inside add `node_modules`.

Remove the PORT from the `.env` file. Heroku will populate this field automatically, so there's no longer a worry for it.

Create a Procfile in `server`. Write: `web: npm run start`.

Follow the git commands proceeding. Open the app, via the Heroku dashboard, to see what you've created - hopefully the message we sent above will be there.

Adding `/posts` to the URL will show the data for the posts!

> Note: You are now viewing the `posts` API's live deployed backend.

Lastly, in `client/src/api`, rename the url to your url + `/posts`.

Just one more step to go :)

## Netlify Deployment

Last but not least, let's deploy the frontend to see our app without running it locally.

Run `npm run build` in the `client` side. (This might take a while)

Reveal the `build` file that was then generated in your file explorer, and drag the newly created `build` folder to Netlify via [it's website](https://www.netlify.com/).

Follow the URL, and you'll be able to see your app.

You can now close your servers and use your new application!

Here's an example of what I had (again, GitHub is best to see the full working demo):

<p align="center">
    <img src ="/images/creating-a-full-stack-application/screencapture.png" width="100%"/>
</p>

### Update!

I've added a lot more to the site (so the link will definitely redirect you to something more interesting), here's a screen cap of it now, with a few other friends' posts:

<p align="center">
    <img src ="/images/creating-a-full-stack-application/final-result.png" width="100%"/>
</p>
