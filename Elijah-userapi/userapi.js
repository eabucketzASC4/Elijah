const appid = ""
const appkey = ""
var countryCode;



function setup () {
   $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data.results[0]);
    countryCode= data.results[0].nat
    $('body').append("<h1> My name is "+(data.results[0].name.first)+"</h1>")
    $('body').append("<h2> My last name is "+(data.results[0].name.last)+"</h2>")
    $('body').append(`<img src = "${data.results[0].picture.large}" > My face </img>`)
    $('body').append(`<h3>My country ${countryCode}</h3>`)
    getCountryCode()
  }

});

}
$(document).ready(setup)


function getCountryCode(){
   $.ajax({
  url: "https://restcountries.eu/rest/v2/alpha?codes=" + countryCode,
  dataType: 'json',
  success: function(data) {
    $('body').append(`<h3>${data[0].name}</h3>`)
    $('body').append(`<img src = "${data[0].flag}"</h4>`)
  }
});
}