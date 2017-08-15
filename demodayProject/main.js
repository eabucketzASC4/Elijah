function search() {
    var database = firebase.database().ref();
    var search = $("#search").val();
   console.log(search);
    var data = {
        "search": search,
    }
    database.push(data);
    }

