var searchbar = (function() {

  // cache DOM
  var node = document.querySelector(".searchContainer");
  var searchBtn = node.querySelector("#searchBtn");
  var searchText = node.querySelector("#searchText");
  var searchScrollUp = node.querySelector("#angle-up");
  var searchScrollDown = node.querySelector("#angle-down");
  var searchResults = node.querySelector("#searchResults");
  var currentSelection;


  // bind events
  searchText.addEventListener( "mousedown", setSearchText );
  searchText.addEventListener( "keyup", handleSearch );
  searchText.addEventListener( "blur", setSearchText );
  searchBtn.addEventListener("click", handleSearchBtn );
  searchScrollUp.addEventListener( "click",  scrollUp );
  searchScrollDown.addEventListener( "click", scrollDown );

  // functions
  function handleSearch(){
    var text = searchText.value.toUpperCase();
    currentSelection = 0;
    searchResults.innerHTML = "";
    searchFilter(data, text);

    if ( text ){
      updateSelection(currentSelection);
      searchResults.style.display = "block";
    } else {
      searchResults.style.display = "none";
    }
  }

  function searchFilter(obj, text){
    for (var key in obj) {
      var item = obj[key];

      if ( obj.hasOwnProperty(key) && (item.name.toUpperCase().indexOf(text) > -1) ){
        var div = document.createElement("div");
        div.append(item.name);
        searchResults.append(div);
      }
    }
  }

  function updateSelection(n) {
    results = searchResults.querySelectorAll("div");

    for (var i = 0; i < results.length; i++){
      results[i].classList.remove("selected");
    }

    if ( n < 0 ) { n = 0 };
    if ( n > results.length - 1) { n = results.length - 1};

    results[n].classList.toggle("selected");
    currentSelection = Array.prototype.indexOf.call(results, results[n]);
  }

  function setSearchText() {
    if (searchText.value === "") {
      searchText.value = "Search...";
      searchText.placeholder = ""
    }

    if (searchText.value === "Search...") {
      searchText.value = "";
      searchText.placeholder = "Search..."
    }
  }

  function scrollUp() {
    currentSelection = currentSelection - 1;
    updateSelection(currentSelection);
  }

  function scrollDown() {
    currentSelection = currentSelection + 1;
    updateSelection(currentSelection);
  }

  function handleSearchBtn() {
    console.log("search clicked");
    // do something
  }

})();
