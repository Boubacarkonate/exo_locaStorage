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

    document.getElementById("prod").value = ""
    document.getElementById("qte").value  = ""
    document.getElementById("prix").value = ""

}
