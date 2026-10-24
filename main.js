const matiere = [
  {
    id: 1,
    titre: " cours physique-chimie ",
    matiere: "physique",
    niveau: "3e college ",
    creneau: "lun 19-21h",
    prix: "300",
    place: "0",
  },
  {
    id: 2,
    titre: "cours Mathematique",
    matiere: "Mathematique",
    niveau: "3e college ",
    creneau: "Mar 19-21h",
    prix: "300",
    place: "15",
  },
  {
    id: 3,
    titre: "  cours physique-chimie ",
    matiere: "physique",
    niveau: "1 bac ",
    creneau: "lun 19-21h",
    prix: "300",
    place: "7",
  },
  {
    id: 4,
    titre: " cours Mathematique",
    matiere: "Mathematique",
    niveau: "1 bac ",
    creneau: "Mar 19-21h",
    prix: "300",
    place: "13",
  },
  {
    id: 5,
    titre: " cours physique-chimie ",
    matiere: "physique",
    niveau: "2 bac ",
    creneau: "lun 19-21h",
    prix: "300",
    place: "10",
  },
  {
    id: 6,
    titre: "cours Mathematique",
    matiere: "Mathematique",
    niveau: "2 bac ",
    creneau: "Mar 19-21h",
    prix: "300",
    place: "15",
  },
  {
    id: 7,
    titre: "cours français",
    matiere: "français",
    niveau: "2 bac ",
    creneau: "jeu 19-21h",
    prix: "300",
    place: "12",
  },
  {
    id: 8,
    titre: " cours Français ",
    matiere: "Français",
    niveau: "3e college ",
    creneau: "Mer 19-21h",
    prix: "300",
    place: "3",
  },
  {
    id: 9,
    titre: " cours anglais",
    matiere: "anglais",
    niveau: " 1 bac ",
    creneau: "lun 20-22h",
    prix: "300",
    place: "10",
  },
  {
    id: 10,
    titre: "cours Français ",
    matiere: "Français",
    niveau: "1 bac ",
    creneau: "sam 19-21h",
    prix: "300",
    place: "15",
  },
  {
    id: 11,
    titre: " cours anglais",
    matiere: "anglais",
    niveau: " 2 bac ",
    creneau: "lun 20-22h",
    prix: "300",
    place: "8",
  },
  {
    id: 12,
    titre: " cours anglais",
    matiere: "anglais",
    niveau: " 3e college ",
    creneau: "ven 19-21h",
    prix: "300",
    place: "0",
  },
];
const matierecontainer = document.getElementById("matiere");

function courscarte(liste) {
  let cartes = "";
  for (let i = 0; i < liste.length; i++) {
    const cours = liste[i];
    const couleur =
      cours.place == 0
        ? "text-red-800 bg-red-200"
        : "text-green-800 bg-green-200";
    const btn =
      cours.place == 0
        ? "bg-gray-300 text-gray-400"
        : "text-white bg-orange-500 btn-ajouter";
    const btntext = cours.place == 0 ? "Indisponible" : "Ajouter";
    const complt =
      cours.place == 0 ? "complet" : `${cours.place} places restantes`;

    cartes += `<div class="bg-white shadow-2xl rounded-lg width-1/4 m-4 p-3 flex flex-col">
        <h2 class="text-xl">${cours.titre}</h2>
        <p>${cours.matiere}</p>
        <p class="text-xl font-medium">${cours.niveau}</p>
        <p>${cours.creneau}</p>
        <p class="font-semibold">${cours.prix} MAD/mois</p>
        <p class="${couleur}   rounded w-40 mb-2 pl-2">  ${complt} </p>
        <button class="${btn} p-1.5 rounded-lg w-50 mx-auto cursor-pointer" data-id="${liste[i].id}" ">${btntext}</button>
        </div>`;
  }
  matierecontainer.innerHTML = cartes; //permet de lire ou modifier le contenu HTML à l’intérieur d’un élément
}
courscarte(matiere);
const niveau = document.getElementById("niv");
const matier = document.getElementById("matr");
const resultat = document.getElementById("resultcart");
const message = document.getElementById("mesgvide");
const courscontainer = document.getElementById("courscontainer");

// lowercase, trim, remove accents: "Français " -> "francais"  normalize("NFD") :sépare certaines lettres de leurs accents ;replace(/[\u0300-\u036f]/g, "") suprimer les accents
function normaliser(texte) {
  return texte
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filtrer() {
  const texte = normaliser(recherche.value); // recherche.value:recherche correspond à ton <input> expl:Français donne Français
  // mais avec  normaliser donne

  //filter() parcourt les cours

  const resultats = matiere.filter((cours) => {
    const okNiveau =
      niveau.value === "all" || normaliser(cours.niveau) === niveau.value; //Le niveau est valide SI "Tous les niveaux" est sélectionné OU si le niveau du cours correspond au niveau sélectionné
    const okMatiere =
      matier.value === "all" || normaliser(cours.matiere) === matier.value; //Accepte le cours si toutes les matières sont sélectionnées OU si sa matière correspond à la matière choisie
    const okTexte = normaliser(cours.titre + " " + cours.matiere).includes(
      texte,
    ); //Vérifier la barre de recherche :tu combines cours.tire et cours.matiere ,include(text):Est-ce que ce texte contient ce que l'utilisateur a recherché
    return okNiveau && okMatiere && okTexte; //si tous les conditions verifie
  });

  courscarte(resultats); //affiche seulement les cours filtrés

  resultat.textContent = `${resultats.length} cours trouvé(s)`;
  message.textContent = "Aucun cours ne correspond à votre recherche.";
  message.hidden = resultats.length > 0;
}

recherche.addEventListener("input", filtrer); //À chaque fois que l'utilisateur écrit ou supprime quelque chose dans la barre de recherche → exécute filtrer()
niveau.addEventListener("change", filtrer);
matier.addEventListener("change", filtrer);

filtrer(); // crée un nouveau tableau resultats contenant seulement les cours qui correspondent aux filtres

// les cours selectionner
let selection = [];
const nombreCours = document.getElementById("nombreCours");
const coursselect = document.getElementById("coursselect");

function afficherSelection() {
  nombreCours.textContent = `${selection.length} cours`;   
 if(nombreCours != 0){
    panierEmpty.classList.add("hidden") // panier contient des cours → message caché(msg :votre panier vide)
 }
      coursselect.classList.add("flex", "flex-wrap") // les matiere ajouter au panier wrap
let total = 0
  let contenu = "";
  for (let i = 0; i < selection.length; i++) {
    contenu += `<div class="bg-gray-200 shadow-2xl rounded-lg width-1/4 m-4 p-3 flex flex-col items-start">
        <h2 class="text-xl">${selection[i].titre}</h2>
        <p>${selection[i].matiere}</p>
        <p class="text-xl font-medium">${selection[i].niveau}</p>
        <p>${selection[i].creneau}</p>
        <p class="font-semibold">${selection[i].prix} MAD/mois</p>
        </div>`;
coursselect.innerHTML = contenu
total += Number(selection[i].prix)
console.log(total); 
panierTotal.textContent = `${total} DH`;
}
  console.log(selection);
  console.log("Nombre de cours :", selection.length);
}
matierecontainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-ajouter")) {
    const id = event.target.dataset.id;

    const coursChoisi = matiere.find(function (cours) {
        return cours.id == id;
    });
    const dejaSelectionne = selection.find(function(cours) {
    return cours.id == id;
});
// si un cours deja selectionner 
if (dejaSelectionne) {
     "Ce cours est déjà sélectionné"
} else {
    selection.push(coursChoisi);
    afficherSelection();
}
  }
});

const panierTotal = document.getElementById("panier-total");
const panierEmpty = document.getElementById("panier-empty");
