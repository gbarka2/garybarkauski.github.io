class Project extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <i class="fab fa-github-alt github"></i>
    <p>${this.getAttribute("name")}</p>
    
    `
  }
  openLink() {
    window.open(`${this.getAttribute("link")}`)
  }
  
}
customElements.define("project-example", Project)