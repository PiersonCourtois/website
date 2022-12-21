function addProject(name, description, link) {
  var ele = document.getElementById("lists");
  ele.innerHTML += "<div><div class='left'><h1>" + name + "</h1><p>" + description + "</p></div><div class='right'><a href=" + link + " class='githubbutton'>Github</a></div></div>";

}

addProject("Test name", 
            "This is where the text description will go, some things that ill put here would be things", 
            "index.html");
addProject("Test name", 
            "Teawjdawdption", 
            "index.html");


