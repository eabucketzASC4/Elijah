
$.ajax({
url:"https://randomuser.me/api/",
success:function(data) {

$('body').append("<img src ='"+data.results[0].picture.large +"'>");
$('body').append("<p> Hello my name is Bobert </p>")
console.log(data.results[0])

    }
})

030839f2416ed8882077285208323911ca65211c