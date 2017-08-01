const appid = ""
const appkey = ""




function setup () {
   $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data.results[0]);
    $('body').append("<h1>His name is "+(data.results[0].name.first)+"</h1>")
    $('body').append("<h2>His last name is "+(data.results[0].name.last)+"</h2>")
    $('body').append("<img src = >His picture is "+(data.results[0].picture.medium)+"</img>")
  }

});

}
$(document).ready(setup)