---
title: "Blender 2023 Boss Fight Challenge"
publishedAt: "2023-09-16"
summary: "My first Blender animation process."
---

This past summer, I got used to a tool called [Blender](https://www.blender.org/) and an AI-assisted animation tool called [Cascadeur](https://cascadeur.com/).

On July 29, 2023, a YouTuber called [Pwnisher](https://www.youtube.com/@pwnisher) (former [Corridor Crew](https://www.youtube.com/@CorridorCrew) member) uploaded [this video](https://www.youtube.com/watch?v=tof8Pm-qpZw) entailing a Boss Fight challenge that would would involve only four rules:

<img src="gifs/blender-contest/0.png" width="100%"/>

I thought I'd do a Spider-Man animation. I knew that I wanted to get the hang of animation first, and already had a sequence in mind: Peter's hand-web-swap swing from the PS4 game, released back in 2018. The process was simple with AI-assisted keyframing; I used [this model from Sketchfab](https://sketchfab.com/3d-models/spider-man-v2-read-caption-d33cd6afe5bd47e59ccda1c893a25b74), and after removing some bones I could import it into Cascadeur, lending me the ability to do this (relatively easily):

<img src="gifs/blender-contest/0_0.gif" width="100%"/>

The AI-assisted keyframing in Cascadeur allows so that other body parts move when you move one joint. This made the animation process fast, and after around 100 or so keyframes I had this (40s):

<img src="gifs/blender-contest/1.gif" width="100%"/>

I was now ready to import this into Blender. It took a while to reassign the armature to Blender's [Rigify](https://docs.blender.org/manual/en/2.81/addons/rigging/rigify.html) add-on, but the process was relatively straightforward:

<img src="gifs/blender-contest/0_0_1.gif" width="100%"/>

Once I was done this, I was ready to animate! I added a Bezier curve that Spider-Man could follow, used Blender's [NLA strips](https://docs.blender.org/manual/en/latest/editors/nla/strips.html) to split and scale (slow down) frames of the imported animation, and got the following result:

<img src="gifs/blender-contest/1_5.gif" width="100%"/>

After that, I added a simple portal effect using a particle system, and found it was pretty similar to that of Unity's. I decided to make the "boss" Oscorp Tower (a time-based decision), which emitted a portal of light into the sky (I wanted it to look like this [Avengers scene](https://www.youtube.com/watch?v=X9bNkQndkNw)). After playing around for a bit, adding a foreground, water and night sky, I got:

<img src="gifs/blender-contest/2.gif" width="100%"/>

I decided this didn't look good enough (asking for feedback my brother called the effect "cheap" lol) so I decided to learn Blender's [Geometry Nodes](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/index.html) to make a better portal effect. This gave more of an impression that something evil was opening in the sky:

<img src="gifs/blender-contest/3.gif" width="100%"/>

I was also on my way to Vancouver at the time, so I worked a lot on the airplane to there. On the flight, I added several clouds to the background (imported with the [Images as Planes](https://docs.blender.org/manual/en/latest/addons/import_export/images_as_planes.html) add-on), a bridge, volumetric fog, a buoy (try to find it!) and a rotated, much cooler looking portal effect:

<img src="gifs/blender-contest/4.gif" width="100%"/>

Although I didn't make the Top 100 (I didn't expect to, since I just started), I am featured in this ALL RENDERS montage video at 3:00:14:

<iframe width="100%" height="315" src="https://www.youtube.com/watch?v=KtQzk-9M4kw&t=10814s"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>

I also made a YouTube breakdown video that documented my process. You can view it here:

<iframe width="100%" height="315" src="https://www.youtube.com/watch?v=RK-2gIuRXNw"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>

This challenge was incredibly fun and rewarding; I haven't had more fun in a software, since, ever. I plan to learn even more Blender with the days to come, hopefully mastering Geometry Nodes, the intricacies of the Shader graph and Cascadeur's animation software to create better looking animations!

Thanks for reading :)