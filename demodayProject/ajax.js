// add to cart function
var shoppingCart =[];
function addtocart(product,money,image){
    shoppingCart.push(product)
    console.log("+image "+image);
   $("#shoplist").append("<tr><td><img class ='pimage' src =' "+image+ "'</td><td>" +product+" $"+money+"</td></tr>")
   
    
}

function setup(){
    $("#searching").submit(function(e){
        e.preventDefault();
        search()
    })

}

function search(){
    $('.Products').empty();
    var search = $("#searchbar").val();
    console.log(search);
    productName=$("#searchbar").val();
    prodName = encodeURI(productName)
    console.log(prodName);
    const apiKey = "1WlmuGEZWNIdjRyKju2x6d0jCyWeAr0F93M";
    $.getJSON(
      `https://price-api.datayuge.com/api/v1/compare/search?product=${prodName}&api_key=${apiKey}`,
      function(data) {
            let info = data.data;
            console.log(info);
          for (var val of info ){
            let lowest_price = val.product_lowest_price;
            // console.log(lowest_price);
            // if (val.product_category === "mobile" && val.product_sub_category ==="mobile"){
            let id = val.product_id//gets id used in second url for getting store info
            $.getJSON(
              `https://price-api.datayuge.com/api/v1/compare/detail?id=${id}&api_key=${apiKey}`,

              function(data){
                let retInfo = data.data;//new info, previous info + retailers
                let imag = retInfo.product_images[0]//image
                console.log(retInfo);
                let nem = retInfo.product_name;
                let retailers = retInfo.stores;//store choice
                console.log(retailers);
                for (var store of retailers){//loops through all stores
                  for (nom in store){
                    if(Object.keys(store[nom]).length>0){//checks if sold by that retailer (if retailer info is present in the array)
                    // console.log(store);
                     let price = store[nom].product_price;//price of each object
                     console.log(price);
                    //  if(lowest_price == price){
                        $('.Products').append(
                            `<section>
                            <div class = "card">
                              <div class="card-image">
                                <img class = "prod_img" src="${imag}">
                              </div>
                              <div class="card-content">
                                <p><span class="card-title black-text">${nem}</span></p>
                                <img src = "${store[nom].product_store_logo}">
                                <p>₹${price}</p>
                                 <a onclick="addtocart('${nem}',${price},'${imag}')" class="waves-effect waves-light btn"><i class="material-icons left">add_shopping_cart</i>add to cart</a>
                              </div>
                            </div>
                            </section>`
                          )
                      // }
                    }
                  }
                }
              }
            )
            // let nem = inf.product_title;
            // let price = inf.product_lowest_price;
            // let imag = inf.product_image;
            
            // }
        }
      }
    )
}

$(document).ready(setup);