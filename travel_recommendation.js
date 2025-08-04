var searchResults = document.getElementById("search-results");
searchResults.style.display = "none";

function showSection(evt, sectionName) {
    var i, sectioncontent, tablinks;
    sectioncontent = document.getElementsByTagName('section');
    for (i = 0; i < sectioncontent.length; i++) {
    sectioncontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";

    var searchBar = document.getElementById("search-container");
    searchBar.style.display = "none";
    if (sectionName == 'website-intro') {
    searchBar.style.display = "block";
    }
}

function clearSearch(evt){
    console.log("Function Clear Search");
    document.getElementById("search-input").value = "";
    document.getElementById("search-results").style.display = "none";
}

function getRecommendations(evt){
    console.log("Function Get Recommendations");
    searchResults.style.display = "block";
    var searchText = document.getElementById("search-input").value;
    searchText = searchText.toLowerCase();

    const xhttp = new XMLHttpRequest();
    var url = "./travel_recommendation_api.json";
    xhttp.open("GET", url, true);
    xhttp.responseType = 'json';
    xhttp.onload = function() {
        console.log("loaded");
    }
    
    xhttp.send();

    // if (searchText.includes("countries") || searchText.includes("country")) {
    //     console.log(countries);
    // }
    // else if (searchText.includes("beach")) {
    //     console.log(beaches);
    // }
    // else if (searchText.includes("temple")) {
    //     console.log(temples);
    // }
    // else {
    //     clearSearch(evt);
    // }
}