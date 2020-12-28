class Project extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <div class="display-content">
      <i class="fab fa-github-alt github"></i>
      <p>${this.getAttribute("name")}</p>
    </div>
    
    `
  }
  openLink() {
    window.open(`${this.getAttribute("link")}`)
  }
  
}
customElements.define("project-example", Project)