function age() {
  var age = document.getElementById('age').value;

  for (i = 0; i <= 75; i++) {
    console.log(i);
    if (i == age) {
      console.log("C'est mon age");
    }
  }
}