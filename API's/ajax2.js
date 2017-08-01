var appid = "018ca430"
var appkey ="7560fb56b99da1835e127c37bb42d5ce"
var url = "https://api.nutritionix.com/v1_1/search/big%20mac?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=018ca430&appKey=7560fb56b99da1835e127c37bb42d5ce"

function setup() {
    $.getJSON(url,
    function(data) {
        console.log(data.hits[0].fields.nf_calories); //when you get the data, write it to the console.    
       $('body').append("<h1>There are "+data.hits[0].fields.nf_calories+" calories in a Big Mac</h1>")
        }
    )
}
$(document).ready(setup)