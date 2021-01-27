function validateForm() {

  var name = document.getElementById('nom').value;
  var firstname = document.getElementById('prenom').value;

  var date = document.getElementById('dateNaissance').value;
  var regdate = /^(0?[1-9]|[12][0-9]|3[01])[\-\-](0?[1-9]|1[012])[\-\-]\d{4}$/i; //dd jusqu'à 31, mm jusqu'à 12 et dddd de 4 chiffres

  var lieu = document.getElementById('lieuNaissance').value;
  var signe = document.getElementById('signeAstro').value;

  var regemail = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
  var email = document.getElementById('email').value;

  var regmdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;
  var mdp = document.getElementById('mdp').value;

  var mdpp = document.getElementById('mdpp').value;

  var regpresentation = /^[:;,\-@0-9a-zA-Zâéè'.\s]{10,15}$/;
  var presentation = document.getElementById('presentation').value;

  // nom

  if (name == "") {
    document.getElementById('errorname').innerHTML = "Vous devez saisir votre nom";
    return false;

  } else {
    document.getElementById('errorname').innerHTML = "";
  }

  // prénom

  if (firstname == "") {
    document.getElementById('errorfirstname').innerHTML = "Vous devez saisir votre prénom";

    return false;
  } else {
    document.getElementById('errorfirstname').innerHTML = "";
  }

  // date de naissance

  if (regdate.test(date) == false) {
    document.getElementById('errordate').innerHTML = "La date de naissance doit impérativement être au format dd-mm-yyyy";
    return false;
  } else {
    document.getElementById('errordate').innerHTML = "";
  }

  // lieu de naissance

  if (lieu == "") {
    document.getElementById('errorlieu').innerHTML = "Vous devez saisir votre lieu de naissance";
    return false;
  } else {
    document.getElementById('errorlieu').innerHTML = "";
  }

  // signe astrologique

  if (signe == "") {
    document.getElementById('errorsigne').innerHTML = "Vous devez choisir votre signe astrologique";
    return false;
  } else {
    document.getElementById('errorsigne').innerHTML = "";
  }

  // email

  if (regemail.test(email) == false) {
    document.getElementById('erroremail').innerHTML = "Vous devez saisir un email valide";
    return false;
  } else {
    document.getElementById('erroremail').innerHTML = "";
  }

  // mdp

  if (regmdp.test(mdp) == false) {
    document.getElementById('errormdp').innerHTML = "Vous devez saisir un mdp valide(5 caractères minimum, 1 majuscule, 1 symbole (#,?,!,@,$,%,^,&,* ou -) et 1 chiffre)";
    return false;
  } else {
    document.getElementById('errormdp').innerHTML = "";
  }

  //confirmer mdp

  if (mdpp != mdp) {
    document.getElementById('errormdpp').innerHTML = "Les mots de passe ne correcpondent pas";
    return false;
  } else {
    document.getElementById('errormdpp').innerHTML = "";
  }

  //présentation

  if (regpresentation.test(presentation) == false) {
    document.getElementById('errorpresentation').innerHTML = "Vous devez saisir une présentation (entre 10 et 15 caractères)";
    return false;
  } else {
    document.getElementById('errorpresentation').innerHTML = "";
  }



}

function KeyPress() // pour afficher le nombre de caracteres de la présentation
{
  if (presentation != "") {
    total = document.getElementById("presentation").value.length;
    if (total < 10 || total > 15) {
      document.getElementById('errorpresentation').innerHTML = "Vous devez saisir une présentation (entre 10 et 15 caractères)";
      return false;
    } else {
      document.getElementById('errorpresentation').innerHTML = "";
    }

  } else {
    total = 0;
  }


  document.getElementById("compteur").innerHTML = total + " Caractère(s)/15 maximum";
}