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