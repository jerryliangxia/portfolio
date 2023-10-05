export const basicData = {
  name: "Jerry Xia",
  about:
    "I'm a software engineering student at McGill, aspiring to be a concept artist. Check out my projects, and welcome to my website!",
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
    "Welcome to my 3D page! This portfolio focuses on my 3D technical work, as I aspire to become a concept artist.",
  teamwork:
    "With my extensive experience in teamwork and agile structure, I excel at maneuvering through complex problems and producing professional results. My work history with Unity and Gameloft, combined with my drive for 3D art have equipped me to pursue a career in the gaming industry.",
  timeline:
    "After three months of studying Blender, this portfolio serves as a testament to my ability to quickly learn and master new skills.",
  fullSuit:
    "A low-poly Spider-Man model was created in Blender by extruding edges based on orthogonal views from an image reference. The web lines were traced onto the body, while the magnet frame project was used to attach the webbing and extract other details such as seams. The shoes were made using a solidify modifier and simple shade. To create a hole-like effect on Spider-Man's body, two Wave Textures with a multiply node and color burn were applied, along with a bump. After UV mapping and minor tweaks, the model was exported as an .obj file for use with Mixamo's auto-rigging software. Finally, all the textures were baked for upload to Sketchfab.",
  symbioteInner:
    "Here, two 3D noise textures with various bumps were utilized to achieve a liquid-like symbiote effect. The first noise texture was connected to a generation mapping, and both were inputted into a bump node, where their normal was mixed and added to the Principled BSDF.",
  mask: "The mask's webbing is thicker and wider than the full suit model's. This process was tedious, requiring 16 vertices (5 faces) at each intersection as opposed to one. Still, the depth added to the mask was worth it; I liked the final render. I used a bevel to preserve sharp edges for the lenses and then sculpted in small indentations with Blender's tool for a realistic, imperfect finish.",
  animation:
    "Here, Blender and Cascadeur were used to create this animation. Cascadeur's AI-assisted keyframing greatly aided in creating an accurate animation, while Blender's Geometry Nodes were utilized to create the portal and Blender's NLA strips were used to slow down time.",
};

export const flexGaps = {
  sectionFlexGap: "6",
  innerSectionFlexGap: "3",
};
