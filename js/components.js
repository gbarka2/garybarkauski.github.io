class Project extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <img src=${this.getAttribute("img")}>
    <p>${this.getAttribute("name")}</p>
    
    `
  }
  //add code that creates the project
  //set new project example
  
}
customElements.define("project-example", Project)