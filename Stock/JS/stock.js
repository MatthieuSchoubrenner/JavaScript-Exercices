function gestionstock() {
  let nomproduit = document.getElementById('produit').value;
  let quantite = document.getElementById('quantite').value;
  let prix = document.getElementById('prix').value;
  let montanttotalstock = 0;

  if (nomproduit == '') {
    document.getElementById('erreurproduit').innerHTML = 'Veuillez saisir un nom de produit';
    document.getElementById('erreurproduit').classList.add('error');
  } else {
    document.getElementById('erreurproduit').innerHTML = "";
  }

  if (quantite == '') {
    document.getElementById('erreurquantite').innerHTML = 'Veuillez saisir une quantité valide';
    document.getElementById('erreurquantite').classList.add('error');
  } else {
    document.getElementById('erreurquantite').innerHTML = "";
  }

  if (prix == '') {
    document.getElementById('erreurprix').innerHTML = 'Veuillez saisir un prix';
    document.getElementById('erreurprix').classList.add('error');
  } else {
    document.getElementById('erreurprix').innerHTML = "";
  }
}