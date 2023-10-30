import { portifolio } from "./../../data/data.js"
const {username, role, resume, social} = portifolio

let portifolioName = document.querySelector(".js-portifolio-name")
let portifolioRole = document.querySelector (".js-portifolio-role")
let resumeText = document.querySelector(".js-resume-text")
let portifolioContacts = document.querySelector(".js-portifolio-contacts")
let btnProjects = document.querySelector(".js-btn-projects")
let btnClose = document.querySelector(".js-btn-close")


portifolioName.innerText = username
portifolioRole.innerText = role
resumeText.innerText = resume

console.log(portifolio.username)

for(let i = 0; i <social.length; i++) {
    let listItem = document.createElement("li")
    let listItemImg = document.createElement("img")

    listItemImg.src = social[i]
    listItem.appendChild(listItemImg)
    portifolioContacts.appendChild(listItem)
}
btnProjects.addEventListener("click", ()=> {
    document.querySelector(".js-modal").style.display = "inline-block"
})

btnclose.addEventListener("click",()=> {
    document.querySelector(".js-modal").style.display = "none"
} )