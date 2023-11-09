function ajouter(){
    let produit = document.getElementById("prod").value
    let quantite = document.getElementById("qte").value
    let prix = document.getElementById("prix").value
    let pInfo = {"qte": quantite,                       //ce json correspondra à la value du localStorage & sessionStorage
                "prix": prix};
    console.log(pInfo);
                        //key       //valeur
    localStorage.setItem(produit, JSON.stringify(pInfo))
    sessionStorage.setItem(prix,JSON.stringify(pInfo))
    sessionStorage.setItem(produit,JSON.stringify(pInfo))

    // document.getElementById("prod").value = ""
    // document.getElementById("qte").value  = ""
    // document.getElementById("prix").value = ""

}

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
}



