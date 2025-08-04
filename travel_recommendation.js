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

function populateDivs(response) {
    var searchResults = document.getElementById('search-results');
    var count = 0;
    response.forEach(function(response) {
      var responseDiv = document.createElement('div');
      responseDiv.classList.add('beachTemple');
      if (count%2 == 0) {
        responseDiv.classList.add('div2');
      }
      else {
        responseDiv.classList.add('div1');
      }

      var name = document.createElement('h4');
      name.textContent = response.name;
      responseDiv.appendChild(name);

      var img = document.createElement('img');
      img.src = response.imageUrl;
      responseDiv.appendChild(img);

      var description = document.createElement('p');
      description.textContent = response.description;
      responseDiv.appendChild(description);

      var button = document.createElement('button');
      button.textContent = 'Visit';
      responseDiv.appendChild(button);

      searchResults.appendChild(responseDiv);
      count++;
    });
}


function clearSearch(evt){
    console.log("Function Clear Search");
    document.getElementById("search-input").value = "";
    document.getElementById("search-results").textContent = "";
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
        document.getElementById("search-results").textContent = "";
        if (searchText.includes("countries") || searchText.includes("country")) {
            response = xhttp.response.countries;
            response.forEach(function(country) {
                populateDivs(country.cities);
            });
        }
        else if (searchText.includes("beach")) {
            response = xhttp.response.beaches;
            populateDivs(response);
        }
        else if (searchText.includes("temple")) {
            response = xhttp.response.temples;
            populateDivs(response);
        }
        else {
            clearSearch(evt);
            return;
        }

    }
    xhttp.send();
}