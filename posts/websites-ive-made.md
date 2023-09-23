---
title: "Websites I've Made"
publishedAt: "2022-02-16"
summary: "List of websites I've made"
---

Over the past week I've made one full-stack application, and two other frontend applications. I've experimented with the [MERN](https://www.mongodb.com/mern-stack) stack, as well as tools such as [RapidAPI](https://rapidapi.com/hub) and [Tailwind CSS](https://tailwindcss.com/).

Here's the [link](https://momento-project.netlify.app/) to the first web app (I've posted about this one before), where I used a MERN (MongoDB, Express, React and Node) stack to build a social media website. It started off with what you see in [this post](https://jerryxia.com/mern-full-stack); since then I've added a couple new features, released as individual builds:

- Adding a sign in with JWT and Google Authentication
- Pagination
- Search
- Individual posts page
- Comment functionality

This was my first individual project in full-stack development. It took a while to get used to the flow of creating HTTP requests, and there were a lot of issues that had to do with versioning (MongoDB and React especially). The frontend involved a lot of trial and error (I used [Material UI](https://mui.com/) for this), while the backend was relatively simple to set up. Here's the [source code](https://github.com/jerryliangxia/Memories-Project), and a picture of the result:

<p align="left">
    <img src ="/images/creating-a-full-stack-application/momento.png" width="100%"/>
</p>

The next site I made was a cryptocurrency viewer. This was built with RapidAPI and [Ant Design](https://ant.design/) for styling. It's able to query a list of the top 100 cryptocurrencies, and individual information about a specific cryptocurrency. [Here](https://crypto-viewing-project.netlify.app/)'s the site, the [source code](https://github.com/jerryliangxia/cryptocurrency-viewer), and some pictures:

<p align="left">
    <img src ="/images/websites-ive-made/individual_crypto.png" width="100%"/>
</p>

<p align="left">
    <img src ="/images/websites-ive-made/main_crypto.png" width="100%"/>
</p>

I also toyed around by adding something called a kbar, which is documented [here](https://kbar.vercel.app/).

The last site is pretty simple. It's a [Google Search clone](https://google-searcher-clone-project.netlify.app/search), also using RapidAPI, that queries information from four sections: general links ("all"), images, news, and videos. It uses a simple UI, and the styling was generated with Tailwind CSS. [Here](https://github.com/jerryliangxia/google-search-clone)'s the link to the source code, and a picture:

<p align="left">
    <img src ="/images/websites-ive-made/goggl_light.png" width="100%"/>
</p>

It also has a dark mode:

<p align="left">
    <img src ="/images/websites-ive-made/goggl_dark.png" width="100%"/>
</p>

These sites were pretty fun to make, and I found myself moving from one to another quickly (especially after the first one, since it took a while).

That's it for now! Thanks for reading :)
