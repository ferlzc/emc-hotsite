import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  particleJS from "particles.js/particles";

const element = document.createElement("div");
element.innerHTML = "HELLOOO FROM JS"
document.body.appendChild(element)

document.head.appendChild(element)

particlesJS.load('particles', 'assets/particles.json', null);

