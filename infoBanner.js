AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
        postersInfo = {
          "naruto": {
            banner_url:"./assets/627927d2bd3ff119776b13d07710f031.jpg",
            id: "naruto",
            released_year:"2002",
            title: "Naruto",
            description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts: the first is set in Naruto's pre-teen years (volumes 1–27), and the second in his teens (volumes 28–72)."
          },
          "spiderman": {
            banner_url:"./assets/spiderman-banner.png",
            id:"spiderman",
            title: "Spiderman",
            released_year: "1962",
            description:
              "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
          },
          "pokemon": {
            banner_url:"./assets/81-odHeSvcL.jpg",
            id: "pokemon",
            released_year:"1996",
            title: "Pokemon",
            description:"Pokémon is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers."
          }
        };
        const { itemId } = this.data;
    
        const fadeBackgroundEl = document.querySelector("#fadeBackground");
    
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `${itemId}-banner`);
    
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.9,
          height: 1,
        });
    
        entityEl.setAttribute("material", { color: "#000" });
        entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
    
        const item = postersInfo[itemId];

        const imageEl = this.createImageEl(item);
        const titleEl = this.createTitleEl(item);
        const descriptionEl = this.createDescriptionEl(item);
    
        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);
    
        fadeBackgroundEl.appendChild(entityEl);
      },
      createImageEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.85,
          height: 0.4,
        });
        entityEl.setAttribute("material", { src: item.banner_url });
        entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
        return entityEl;
      },
      createTitleEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 1.2,
          height: 2,
          color: "#fff",
          value: `${item.title} (${item.released_year})`,
        });
        entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
        return entityEl;
      },
      createDescriptionEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 0.75,
          height: 2,
          color: "#fff",
          wrapCount: "40",
          value: item.description,
        });
        entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
        return entityEl;
      },
});
// [
//     {
//       id: "naruto",
//       title: "Naruto",
//       description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts: the first is set in Naruto's pre-teen years (volumes 1–27), and the second in his teens (volumes 28–72)."
//     },
//     {
//       id: "pokemon",
//       title: "Pokemon",
//       description:"Pokémon is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers."
//     },
//     {
//       id: "spider-man",
//       title: "Spider Man",
//       description:"Spider-man is fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy(Aug. 1962) in the silver Age of comic Book"
//     },
//   ];