var produits = [];
var stockT = 0;

function ajouter() {
  var i;
  var textProduit = '';
  var newProduit = document.getElementById('produit').value;
  var quantite = document.getElementById('quantite').value;
  var prix = document.getElementById('prix').value;
  var stock = quantite * prix;

  if (!produits.includes(newProduit) && newProduit != '') {
    stockT = stockT + stock;
  }

  if (newProduit != '' && quantite != '' && prix != '' && newProduit != produits.includes()) {
    document.getElementById('erreurProduit').style.display = "none";
    document.getElementById('erreurVide').style.display = 'none';

    if (!produits.includes(newProduit)) {
      produits.push(newProduit)
    } else if (newProduit = produits.includes(newProduit)) {
      document.getElementById('erreurProduit').style.display = "inline-block";
    } else {
      document.getElementById('erreurVide').style.display = "inline-block";
    }
  }

  produits.sort();
  for (i = 0; i < produits.length; i++) {
    textProduit += produits[i] + '<br>';
  }

  if (newProduit = produits.includes(newProduit)) {
    document.getElementById('erreurProduit').style.display = "inline-block";
  } else {
    document.getElementById('erreurProduit').style.display = "none";
  }

  if (newProduit == '') {
    document.getElementById('erreurVide').style.display = "inline-block";
  } else {
    document.getElementById('erreurVide').style.display = "none";
  }

  document.getElementById('messageS').innerHTML = "La valeur totale de votre stock est de" + stockT +
    "€<br>";
  document.getElementById('messageP').innerHTML = 'Il y a' + produits.length +
    'références dans votre inventaire :<br>';
  document.getElementById('listeProduits').innerHTML = textProduit;
}