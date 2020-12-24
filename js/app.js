//PULL AND RENDER DATA FROM GOOGLE SHEET//

$.ajax('https://spreadsheets.google.com/feeds/list/1Gw8eY-blGjaksHJJEZ_J94TYduwKqWvDPcdzm8uJunM/1/public/full?alt=json')
.then((data) => {
  //checking my data
  // console.log(data)

  //put project in a variable
  const rawProjects = data.feed.entry
  // console.log(rawProjects)
  //beautify our projects array
  const projects = rawProjects.map((project) => {
    return{
      name: project.gsx$name.$t,
      img: project.gsx$img.$t,
      description: project.gsx$description.$t,
      live: project.gsx$live.$t,
      github: project.gsx$github.$t
    }
  })
  const $body = $('body')
  
  projects.forEach((project) => {
    const $project = $('<div>').html(`
    <project-example class="example" name="${project.name}" img="background-image: url(${project.img});" description="${project.description}" live=${project.live} github=${project.github}></project-example>
    `)
    $body.append($project)
    
  })
  console.log(projects)
  //use jQuery to render projects to page//

  // add carousel js here //

})


  ////////////////////////////////////////////



//PULL DATA FROM BLOG FROM HEADLESS CMS//
