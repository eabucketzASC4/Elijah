function search() {
    var database = firebase.database().ref();
    var search = $("#searchbar").val();
   console.log(search);
    var data = {
        "searchbar": search,
    }
    database.push(data);
    }

