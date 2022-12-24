import personalData from './personal.json' assert {type: 'json'};
import schoolData from './school.json' assert {type: 'json'};
const personalNum = Object.keys(personalData).length;
const schoolNum = Object.keys(schoolData).length;
let numProjects = 0;


// Adds project to page. Gives name, description, and github link. 
function addProject(name, description, link) {
  var ele = document.getElementById("lists");
  ele.innerHTML += "<div class='project-node'><div class='left'><h1>" + name + "</h1><p>" + description + "</p></div><div class='right'><a href=" + link + " class='githubbutton' target='_blank'><img src='photos/github.png'alt='github'/>Github</a></div></div>";
  numProjects++;
}


// Removes all projects from page
function removeProjects() {
  for(var i = 0; i < numProjects; i++) {
    var ele = document.querySelector('.project-node');
    ele.remove();
  }
  numProjects = 0;
}


// Displays only personal projects
function addPersonalProjects() {
  removeProjects();
  for(var i = 0; i < personalNum; i++) {
    var name = personalData[i].name;
    var description = personalData[i].description;
    var link = personalData[i].link;
    addProject(name, description, link);
  }
  document.getElementById("switch-save").removeEventListener("click", addPersonalProjects);
  document.getElementById("switch-save").addEventListener("click", addSchoolProjects);
}


// Displays only school projects
function addSchoolProjects() {
  removeProjects();
  for(var i = 0; i < schoolNum; i++) {
    var name = schoolData[i].name;
    var description = schoolData[i].description;
    var link = schoolData[i].link;
    addProject(name, description, link);
  }
  document.getElementById("switch-save").removeEventListener("click", addSchoolProjects);
  document.getElementById("switch-save").addEventListener("click", addPersonalProjects);
} 

addPersonalProjects();




