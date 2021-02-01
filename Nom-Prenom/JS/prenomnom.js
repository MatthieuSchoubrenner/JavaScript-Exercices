function ajouter() {
  var prenoms = ['Cédric', 'Bernard', 'Joseph', 'Aurélie', 'Chloé', 'Anthony', 'Denis', 'Catherine'];
  var noms = ['Durand', 'Dupond', 'Baune', 'Michel'];
  var i;
  var textPrenom = '';
  var textNom = '';
  var newPrenom = document.getElementById('prenom').value;
  var newNom = document.getElementById('nom').value;

  if (newPrenom != '') {
    document.getElementById('erreurPrenom').style.display = "none";
    if (!prenoms.includes(newPrenom)) {

      prenoms.push(newPrenom)
    }
  } else {
    document.getElementById('erreurPrenom').style.display = "inline-block";
  }

  if (newNom != '') {
    document.getElementById('erreurNom').style.display = "none";
    if (!noms.includes(newNom)) {

      noms.push(newNom)
    }
  } else {
    document.getElementById('erreurNom').style.display = "inline-block";
  }

  prenoms.sort();
  for (i = 0; i < prenoms.length; i++) {
    textPrenom += prenoms[i] + '<br>';
  }

  document.getElementById('listePrenom').innerHTML = 'Il y a ' + prenoms.length + ' prénoms dans le tableau, voici les prénoms :<br>' + textPrenom;


  noms.sort();
  noms.reverse();
  for (i = 0; i < noms.length; i++) {
    textNom += noms[i] + '<br>';
  }

  document.getElementById('listeNom').innerHTML = 'Il y a ' + noms.length + ' noms dans le tableau, voici les noms:<br>' + textNom;

}