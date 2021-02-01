function calcul() 
{
  var prix = document.getElementById('prix').value;
  var type = document.getElementById('type').value;
  var tva = document.getElementById('tva').value;

  if (prix == '') {
    document.getElementById('erreurPrix').innerHTML = 'Veuillez saisir le prix';
    document.getElementById('erreurPrix').classList.add('error');
  } else {
    document.getElementById('erreurPrix').innerHTML = "";
  }

  if (type == '') {
    document.getElementById('erreurType').innerHTML = 'Veuillez sélectionner le type de prix';
    document.getElementById('erreurType').classList.add('error');
  } else {
    document.getElementById('erreurType').innerHTML = "";
  }


  if (tva == '') {
    document.getElementById('erreurTva').innerHTML = 'Veuillez sélectionner le taux de TVA';
    document.getElementById('erreurTva').classList.add('error');
  } else {
    document.getElementById('erreurTva').innerHTML = "";
  }

  if (prix != '' && type != '' && tva != '') {
    document.getElementById('btn').style.display = "block";
  }
}

function calculer() 
{
  var prix = document.getElementById('prix').value;
  var type = document.getElementById('type').value;
  var tva = document.getElementById('tva').value;
  var taux = (1 + (tva / 100));
  var result;

  if (type == 'ht') {
    result = prix * taux;
    typeNew = 'TTC';
  } else {
    result = prix / taux;
    typeNew = 'HT';
  }

  document.getElementById('result').innerHTML = "Le prix sera donc " + Math.round(result) + " " + typeNew;
  document.getElementById('result').classList.add('success');
}