class Project extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <img>${this.getAttribute("img")}
    <p>${this.getAttribute("name")}</p>
    <a>${this.getAttribute("live")}</a>
    `
  }
  //add code that creates the project
  //set new project example
  
}
customElements.define("project-example", Project)