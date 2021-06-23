var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=04ecd9792714ad19052ab4abbe8a9b30')
.then((apidata) => { return apidata.json()})//convert apidata(in json format) to js object so that we can work using js 
.then((actualdata) => {//actual data is in js object 
  var tempValue = actualdata['main']['temp'];
  var nameValue = actualdata['name'];
  var descValue = actualdata['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;//display weather description
  temp.innerHTML = "Temp - "+tempValue;//display temperature
  input.value ="";

})

.catch((err) => alert("wrong city name"));
})
