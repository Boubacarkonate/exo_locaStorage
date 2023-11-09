function ajouter(){
    //récupération des valeurs contenues dans les inputs
    let produit = document.getElementById("prod").value
    let quantite = document.getElementById("qte").value
    let prix = document.getElementById("prix").value
    let pInfo = {"qte": quantite,                       //ce json correspondra à la value du localStorage & sessionStorage
                "prix": prix};
    // console.log(pInfo);
                        //key       //valeur       =>  localstorage
    localStorage.setItem(produit, JSON.stringify(pInfo))
    sessionStorage.setItem(prix,JSON.stringify(pInfo))
    sessionStorage.setItem(produit,JSON.stringify(pInfo))

    //A l'ajout les inputs suivants seront vidés 
    // document.getElementById("prod").value = ""
    // document.getElementById("qte").value  = ""
    // document.getElementById("prix").value = ""

    afficher()

}


//pour modifier, je clique sur le bouton modifier, ensuite j'écris mes nouvelles données, puis je valide avec le bouton ajouter 
function modifier(){
    let produit = document.getElementById("prod").value
    let quantite = document.getElementById("qte").value
    let prix = document.getElementById("prix").value
    
    // console.log(produit);
    let produitModifie = JSON.parse(localStorage.getItem(produit))
    console.log(typeof(produitModifie));
    console.log(produitModifie);

    let quantiteModifie = JSON.parse(localStorage.getItem(quantite))
    console.log(quantiteModifie);

    let prixModifie = JSON.parse(localStorage.getItem(prix))
    console.log(prixModifie);

    afficher()
   
}

function supprimer(){
    let produit = document.getElementById("prod").value
    let quantite = document.getElementById("qte").value
    let prix = document.getElementById("prix").value

    sessionStorage.removeItem(produit)
    document.getElementById("produit").value = ""
    sessionStorage.removeItem(quantite)
    document.getElementById("qte").value = ""
    sessionStorage.removeItem(prix)
    document.getElementById("prix").value = ""

    afficher()
}

function clear1(){                      //attention clear() est nom réservé = 
    localStorage.clear()

    afficher()
}


function afficher(){
    let cle_recuperer = ""      //récupération de la key du localstorage
    let paires = "<tr> <td>Produit</td> <td>Quantité</td> <td>Prix</td> </tr>"

    for (let cpt = 0; cpt < localStorage.length; cpt++) {
        cle_recuperer = localStorage.key(cpt)
        // console.log(cle);

        let data = JSON.parse(localStorage.getItem(cle_recuperer))
        // console.log(data);

        paires += "<tr> <td>"+cle_recuperer+"</td> <td>"+data.qte+"</td> <td>"+data.prix+"</td> </tr>"
    } 

    document.getElementById("display").innerHTML = paires
}





