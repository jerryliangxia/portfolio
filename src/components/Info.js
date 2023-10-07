export const basicData = {
  name: "Jerry Xia",
  about:
    "I'm a software engineering student at McGill, aspiring to be a concept artist. Welcome to my website!",
  technicalSkills:
    "Python, Java, C++, C, C#, OCaml, Bash, CLI, HTML/CSS, JavaScript/TypeScript, Git, Github/Gitlab.",
};

export const jobExperience = {
  unity: {
    leftText: "2022-2023",
    rightTitle: "Software Engineer at Unity Technologies",
    rightSubtitle: "Montréal, QC",
    rightText:
      "Worked in Unity Gaming Services. Created two games and several Blender models during company recreation hours.",
  },
  gameloft: {
    leftText: "2021",
    rightTitle: "Software Developer at Gameloft Studios",
    rightSubtitle: "Montréal, QC",
    rightText:
      "Managed Gameloft's online gaming infrastructure. Contributed to Welcome to the Team, a game made as part of Gameloft's Global Game Jam.",
  },
};

export const work = {
  lightspeed: {
    leftText: "2023",
    rightTitle: "Lightspeed",
    rightText: "High score PC game made in Unity. Sci-fi, B&W, Music, SFX.",
  },
  blenderContest: {
    leftText: "2023",
    rightTitle: "Blender 2023 Boss Fight Challenge",
    rightText:
      "Created using Blender and Cascadeur. Involves Blender NLA, Geometry Nodes, and more.",
  },
  modeling: {
    leftText: "2023",
    rightTitle: "3D Design",
    rightText:
      "3D models made with Blender, uploaded to Sketchfab frequently. Links below.",
  },
};

export const ThreeD = {
  about:
    "Welcome to my 3D page! This portfolio showcases my 3D work from August to October 2023.",
  teamwork:
    "With my experience at Unity and Gameloft, I've worked in agile team environments to deliver professional user products. My involvement with games has inspired me to pursue a career in the gaming industry.",
  insomniac: "At Insomniac, I believe I'd be best as a Concept Art intern.",
  fullSuit:
    "Modeled after Insomniac Games' Spider-Man 2 (2023). A low-poly Spider-Man model was created in Blender (seen below) to form a basis. Web lines were traced onto the body and the magnet tool used to add webbing and seams to the base; adding a skin modifier created depth. Materials were UV generated. More on the material in the Mask section.",
  webshooterInit: "Web shooter from Marvel's Spider-Man (2018).",
  webshooter:
    "This project involved using Blender's crease tool and a dual subdivision surface modifier, with both Simple and Catmull-Clark variants; layering these on top of one another create smooth yet sharp edges. A metallic material was used for the shooter itself, and a rough plastic material was used for the base; this was generated through an object-mapped noise texture with low intensity details.",
  maskShaderEditor:
    "I created a vector mapping connected to the UV of the mesh for this texture. Two sine wave textures were used along the X and Y axes to create a grid-like pattern of holes. A multiply and color burn were applied to add realism to the effect. The holes were a mix of black and red to create a sense of depth, and finally, the black base was passed through a bump node and then connected to the distribution function's normal.",
  symbiote: "This model is inspired from Marvel's Spider-Man 2 (2023).",
  symbioteShaderEditor:
    "Here, two 3D noise textures with three bump nodes were utilized to achieve a liquid-like symbiote effect. The first noise texture was connected to a generation mapping, and both were inputted into a final bump node, where their normal was mixed and added to the principled BSDF. This was the inner part of the mask, which was much more alien and fluid. To create the outer part, the scale of the noise texture was increased, and the color ramp was fine-tuned. Additionally, more detail and overall roughness were added to complete the look.",
  mask: "The mask's webbing is thicker and wider than the full suit model's. This process was tedious, requiring 16 vertices (5 faces) at each intersection as opposed to one. Still, the depth added to the mask was worth it; I liked the final render. I used a bevel to preserve sharp edges for the lenses and then Blender's Sculpt tool to create small indentations for a realistic, imperfect finish.",
  hand: "This hand is made up of the same mask material above; the original hand used was part of a previous rig, which I sculpted to fit a more glove-like surrounding.",
  animation:
    "Here, Blender and Cascadeur were used to create this animation, which was replicated from Insomniac Games' Spider-Man (2018). Cascadeur's AI-assisted keyframing greatly aided in creating an accurate animation, while Blender's Geometry Nodes were utilized to create the portal and Blender's NLA strips were used to slow down time.",
};

export const flexGaps = {
  sectionFlexGap: "6",
  innerSectionFlexGap: "3",
};
