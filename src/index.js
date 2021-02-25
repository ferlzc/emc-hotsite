import "./style.css";
import  particleJS from "particles.js/particles";

const element = document.createElement("h1");
element.innerHTML = "HELLOOO"
document.body.appendChild(element)

particlesJS.load('particles', 'assets/particles.json', null);