---
title: "Blender 2023 Boss Fight Contest"
publishedAt: "2023-09-16"
summary: "My first Blender animation process."
---

Also this past summer, I got used to a tool called [Blender](https://www.blender.org/) and an AI-assisted animation tool called [Cascadeur](https://cascadeur.com/).

On July 29, 2023, a YouTuber called [Pwnisher](https://www.youtube.com/@pwnisher) (former [Corridor Crew](https://www.youtube.com/@CorridorCrew) member) uploaded [this video](https://www.youtube.com/watch?v=tof8Pm-qpZw) entailing a Boss Fight challenge that would would involve only four rules:

<img src="/gifs/blender-contest/0.png" width="100%"/>

I defaulted to a Spider-Man animation; I love Spider-Man. I knew, since I was only starting that I wanted to get the hang of animation, and already had an animation in mind: Peter's hand-swap swing from the PS4 game, released back in 2018. The process was simple with AI-assisted keyframing. I used a model from sketchfab, linked [here](https://sketchfab.com/3d-models/spider-man-v2-read-caption-d33cd6afe5bd47e59ccda1c893a25b74). After removing some bones I could import it into Cascadeur, lending me the ability to do this:

<img src="/gifs/blender-contest/0_0.gif" width="100%"/>

AI-assisted keyframing allows so that other body parts move when you move one joint. This made the animation process fast, and after around 100 or so keyframes I had this (40s):

<img src="/gifs/blender-contest/1.gif" width="100%"/>

I was now ready to import this into Blender. It took a while to reassign the armature to Blender's [Rigify](https://docs.blender.org/manual/en/2.81/addons/rigging/rigify.html) add-on, but the process was relatively straightforward;

<img src="/gifs/blender-contest/0_0_1.gif" width="100%"/>

Once I was done this, I was ready to animate! I added a Bezier curve that Spider-Man could follow, used Blender's [NLA strips](https://docs.blender.org/manual/en/latest/editors/nla/strips.html) to split and scale (slow down) frames of the imported animation, and got the following result:

<img src="/gifs/blender-contest/1_5.gif" width="100%"/>

After that, I added a simple portal effect using a particle system, and found it was pretty similar to that of Unity. I decided to make the "boss" Oscorp Tower (a time-based decision), which ejected a portal of purple light into the sky (I wanted this to look like [The Avengers scene](https://www.youtube.com/watch?v=X9bNkQndkNw) where the Chitauri invaded, emerging from a portal in the sky). After playing around for a bit, adding a foreground, water and night scene, I got this:

<img src="/gifs/blender-contest/2.gif" width="100%"/>

I decided this didn't look good enough (asking for feedback my brother called the effect "cheap" lol) so I decided to learn Blender's [Geometry Nodes](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/index.html) to make and bake a better portal effect. This gave more of an impression that something evil was opening in the sky:

<img src="/gifs/blender-contest/3.gif" width="100%"/>

And, after adding several clouds in the background (imported with the [Images as Planes](https://docs.blender.org/manual/en/latest/addons/import_export/images_as_planes.html) add-on), I hopped on a plane to Vancouver, no wifi, and added a bridge, volumetric fog, a buoy (try to find it!) and a rotated, much cooler looking portal effect:

<img src="/gifs/blender-contest/4.gif" width="100%"/>

Although I didn't make the Top 100 (I didn't expect to, since I just started!), I am featured in this [ALL RENDERS montage video](https://www.youtube.com/watch?v=KtQzk-9M4kw&t=10814s) at 3:00:14.

This process was incredibly rewarding and fun; I haven't had more fun in a software, since, ever. I plan to learn even more Blender with the days to come, hopefully mastering Geometry Nodes, the Shader graph and animation to create even cleaner and better looking animations!

Thanks for reading :)
