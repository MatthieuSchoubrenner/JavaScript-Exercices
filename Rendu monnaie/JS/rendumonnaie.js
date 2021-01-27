function caisse() 
{
  var nb1 = document.getElementById('aRegler').value;
  var nb2 = document.getElementById('sommeRecu').value;
  var result;

  result = nb2 - nb1;

  if(result > 0) 
  {
    alert('je dois au client '+result+'€');
  }
  else 
  {
    alert('le client me doit '+(-result)+'€');
  }
  console.log(result)
}