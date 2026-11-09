const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};


const listeAteliers = document.getElementById("liste-ateliers");
const templateAtelier = document.getElementById("template-atelier");

config.ateliers
  .forEach(atelier => {
    const clone = templateAtelier.content.cloneNode(true);

    clone.querySelector("input").value = atelier.id;
    clone.querySelector(".atelier-titre").textContent = atelier.titre;
    clone.querySelector(".atelier-places").textContent =
      atelier.places + " places disponibles";

    listeAteliers.append(clone);
  });
    






const listeModes = document.getElementById("liste-modes");
const templateMode = document.getElementById("template-mode");

for (const element in config.modes) {
   console.log(" ola")
    const clone = templateMode.content.cloneNode(true);

  
    clone.querySelector(".mode-libelle").textContent = config.modes[element];

    listeModes.append(clone);
}


const listeCampus = document.getElementById("liste-campus");
const templateCampus = document.getElementById("template-campus");

  for (const element in config.campus) {

    const clone = templateCampus.content.cloneNode(true);

    clone.querySelector(".campus-libelle").textContent = config.campus[element];

    listeCampus.append(clone);
}
  


const mode = document.querySelectorAll('input[name="mode"]');


    mode.addEventListener("click", function () {

        if (mode.value === "presentiel") {

            for (const element of config.campus) {

                const clone = templateCampus.content.cloneNode(true);

                clone.querySelector("input").value = element;

                clone.querySelector(".campus-libelle").textContent = element;

                listeCampus.append(clone);
            }

        }

    });



