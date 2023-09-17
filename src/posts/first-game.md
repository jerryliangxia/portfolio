---
title: "First Game Developed!"
publishedAt: "2023-08-20"
summary: "Documenting the development of my first game."
---

While working at Unity I attended several of their game dev nights, where I worked on a game called Lightspeed. You can play it for free on [itch.io](https://itch.io). This post is dedicated to my process while making the game. Screenshots included.

I first had the idea for my game in March of this year, waking up in the middle of the night to take my phone and jot down what I thought was possible with the game.

- The game involves you, a spaceship, trying to maneuver around planets come at you from the center. I wanted to focus on a camera that would pan in and out based on your position away from the center, creating a cool speed effect. I planned on making it story based, like [Exo One](https://store.steampowered.com/app/773370/Exo_One/), but decided to go with a high score game.

My first game dev night was somewhere back in May; the second week after I joined. I had no experience with Unity whatsoever; in my day job as an intern I touched on C#, which may have helped. I used ChatGPT for a lot of my first scripts. However, I was able to get a working prototype that looked like the phone-recorded image you see below:

<!-- <p align="center">
    <img src="" width="50%">
</p> -->

Adding the projectile spitter (that's what I named it for a long time: `ProjectileSpitter`) was simple, and I got used to a lot of Unity's built-in functionalities like Colliders and RigidBodies. I found myself digging for a long time in scripts, while I in fact had to toggle a button on a Collider and what I wanted would work. Here's the second prototype, and a video of it on [YouTube]().

<!-- <p align="center">
    <img src="" width="50%">
</p> -->

I added color effects to the game, and decided on how I should make the player obtain a Score. I decided on creating 'levels', where the only way you could advance to the next level is by coming in close contact with outcoming planets. The closer you are, the more you progress to the next level.

This was it. Other than that, I added a logarithmic curve that increased the difficulty as the player progressed, and got sound effects made for my game. I added in some non-copyright music, spent a long time figuring out scenes, persisting music and a game over, pause and main menu. Here's a screen cap of some gameplay:

<!-- <p align="center">
    <img src="" width="50%">
</p> -->

You can play the final product [itch.io](https://itch.io). Hope it's worth your time!
