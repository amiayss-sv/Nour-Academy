const matiere=[
    {
        id:1,
        titre :" cours physique-chimie " ,
        matiere: "physique" ,
        niveau : "3e college ",
        creneau : "lun 19-21h",
        prix :"300",
        place:"0",
        },
        {
        id:2,
        titre :"cours Mathematique" ,
        matiere: "Mathematique" ,
        niveau : "3e college ",
        creneau : "Mar 19-21h",
        prix :"300",
        place:"15",
            },
            {
        id:3,
        titre :"  cours physique-chimie " ,
        matiere: "physique" ,
        niveau : "1 bac ",
        creneau : "lun 19-21h",
        prix :"300",
        place:"7",
        },{
        id:4,
        titre :" cours Mathematique" ,
        matiere: "Mathematique" ,
        niveau : "1 bac ",
        creneau : "Mar 19-21h",
        prix :"300",
        place:"13",
        },{
        id:5,
        titre :" cours physique-chimie " ,
        matiere: "physique" ,
        niveau : "2 bac ",
        creneau : "lun 19-21h",
        prix :"300",
        place:"10",
        },{
        id:6,
        titre :"cours Mathematique" ,
        matiere: "Mathematique" ,
        niveau : "2 bac ",
        creneau : "Mar 19-21h",
        prix :"300",
        place:"15",
        },{
        id:7,
        titre :"cours français" ,
        matiere: "français" ,
        niveau : "2 bac ",
        creneau : "jeu 19-21h",
        prix :"300",
        place:"12",
        },{
        id:8,
        titre :" cours Français " ,
        matiere: "Français" ,
        niveau : "3e college ",
        creneau : "Mer 19-21h",
        prix :"300",
        place:"3",
            },{
         id:9,
        titre :" cours anglais" ,
        matiere: "anglais" ,
        niveau : " 1 bac ",
        creneau : "lun 20-22h",
        prix :"300",
        place:"10",
        },{
        id:10,
        titre :"cours Français " ,
        matiere:  "Français" ,
        niveau : "1 bac ",
        creneau : "sam 19-21h",
        prix :"300",
        place:"15",
        },{
         id:11,
        titre :" cours anglais" ,
        matiere: "anglais" ,
        niveau : " 2 bac ",
        creneau : "lun 20-22h",
        prix :"300",
        place:"8",
        },{
        id:12,
        titre :" cours anglais" ,
        matiere: "anglais" ,
        niveau : " 3e college ",
        creneau : "ven 19-21h",
        prix :"300",
        place:"0",
        
    }
]
const matierecontainer=document.getElementById("matiere")

function courscarte(liste){
    let cartes = ""
    for (let i = 0; i < liste.length; i++) {
        const cours = liste[i]
        const couleur = cours.place == 0 ? "text-red-800 bg-red-200" : "text-green-800 bg-green-200"
        const btn =cours.place == 0 ? "bg-gray-300 text-gray-400 disabled" : "text-white bg-orange-500"
        const btntext = cours.place == 0 ? "Indisponible" : "Ajouter"
        const complt = cours.place == 0 ? "complet" : `${cours.place} places restantes`

        cartes += `<div class="bg-white shadow-2xl rounded-lg width-1/4 m-4 p-3 flex flex-col">
        <h2 class="text-xl">${cours.titre}</h2>
        <p>${cours.matiere}</p>
        <p>${cours.niveau}</p>
        <p>${cours.creneau}</p>
        <p class="font-semibold">${cours.prix} MAD/mois</p>
        <p class="${couleur}   rounded w-40 mb-2 pl-2">  ${complt} </p>
        <button class="${btn} p-1.5 rounded-lg w-50 mx-auto cursor-pointer">${btntext}</button>
        </div>`
    }
    matierecontainer.innerHTML = cartes;
}
courscarte(matiere);


 


