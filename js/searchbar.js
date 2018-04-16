var searchbar = (function() {

  // cache DOM
  var el = document.querySelector(".searchContainer");
  var searchBtn = el.querySelector("#searchBtn");
  var searchText = el.querySelector("#searchText");
  var searchScrollUp = el.querySelector("#angle-up");
  var searchScrollDown = el.querySelector("#angle-down");
  var searchResults = el.querySelector("#searchResults");


  // bind events
  searchText.addEventListener( "mousedown", setSearchText );
  searchText.addEventListener( "keyup", filterFunction );
  searchText.addEventListener( "blur", setSearchText );
  searchBtn.addEventListener("click", handleSearchBtn );
  searchScrollUp.addEventListener( "click",  scrollUp );
  searchScrollDown.addEventListener( "click", scrollDown );


  // functions
  function filterFunction() {
console.log("filtering...");
    var i, firstIndex;
    var input = searchText;
    var filter = input.value.toUpperCase();
    var divNode = searchResults.querySelectorAll("div");
    var firstItem = true;

    // hide search results container
    searchResults.style.display = "none";

    // loop through search results
    for (i = 0; i < divNode.length; i++) {
      // reset selected state
      divNode[i].classList.remove("selected");

      // if input has a partial match in search results...
      if (divNode[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        // show item in search result container
        divNode[i].classList.remove("hide");

        // select first item in search results
        if (firstItem){
          divNode[i].classList.add("selected");
          firstItem = false;
        }
      } else {
        // else hide item
        divNode[i].classList.add("hide");
      }
    }

    // upon successful filter, show search results container
    if (filter){ searchResults.style.display = "block"; }

  }

  function isHidden(el) {
    var style = window.getComputedStyle(el);
    return ((style.display === 'none') || (style.visibility === 'hidden'))
  }

  function updateSelection(n) {

    // divNode[i].classList.add("active");

    // var divNode = searchResults.querySelectorAll("div"), i;
    // console.log("foo: " + divNode[1].innerHTML);

    // for (i = 0; i < divNode.length; i++) {
    //   divNode[i].className = divNode[i].className.replace(" active", "");
    // }
    // divNode[n].className += " active";
  }

  function setSearchText() {
    console.log("searching");

    if (searchText.value === "") {
      searchText.value = "Search...";
      searchText.placeholder = ""
    }

    if (searchText.value === "Search...") {
      searchText.value = "";
      searchText.placeholder = "Search..."
    }
  }

  function getFirstResult(divNode) {
    console.log("bar: " + divNode);
  }

  function scrollUp() {
    console.log("click up");
  }

  function scrollDown() {
    console.log("click down");
  }

  function handleSearchBtn() {
    console.log("click search");
    searchResults.style.display = "block";
  }







})();
