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
  
  projects.forEach((project) => {
    const $body = $('body')
    const $project = $('<div>').html(`
    <project-example class="example" name="${project.name}" style="background-image: url(${project.img})" description="${project.description}" live=${project.live} github=${project.github}></project-example>
    `).addClass('display')
    $body.append($project)

    $('.github').on('click', (event) => {
      window.open(`${project.github}`)
    })

    $('.example').on('click', (event) => {
      window.open(`${project.live}`)
    })
  })

  projects.forEach((project) => {
    const $slide = $('.carousel-inner')
    const $project = $('<div>').html(`
    <img src="${project.img}" class="d-block w-100">
    <p>${project.name}</p>
    `).addClass('carousel-item')
    $('.carousel-item:first-of-type').addClass('active')
    $slide.append($project)


  })

  projects.forEach((project) => {
    const $dropdown = $('.dropdown-menu')
    const $content = $('<li>').html(`
    <a href="${project.live}">${project.name}</a>
    `).addClass('dropdown-item')
    $dropdown.append($content)
  })

  $('.dropdown-item').on('click', (event) => {
    window.open(`${project.live}`)
  })



  console.log(projects)
})


$('.linkedin').on('click', (event) => {
    window.open('http://www.linkedin.com/in/gary-barkauski')
  })

$('.github').on('click', (event) => {
  window.open('https://github.com/gbarka2')
})

$('.email').on('click', (event) => {
  window.open("mailto:gbarka2@gmail.com")
})

