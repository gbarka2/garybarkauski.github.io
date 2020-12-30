# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Core HTML | Complete
|Day 2| Core CSS | Complete
|Day 3| Drop Downs and Links | Complete
|Day 3| Scroll functionality | N/A
|Day 3| Link the projects and display | Complete
|Day 4| Perfect the carousel | Complete
|Day 5| Perfect the display projects | Complete
|Break Days| Add to projects displayed | Incomplete
|Break Days| Complete new projects for display | Incomplete

## Project Description

This website is an exhibition of my skills as a web developer, complete with links to my projects and course exercises to display my knowledge and expertise in my field. Included in the display at this time are examples of my CSS styling, jQuery manipulation, and framework usage. These examples are not intended to be static, and will evolve over time as skills, frameworks, and methods are adopted by myself.

Links to relevant sites:
[Font Awesome](https://fontawesome.com/)
[Bootstrap](https://getbootstrap.com/)
[Cloudinary](https://cloudinary.com/)
[Google Sheets](https://docs.google.com/spreadsheets/d/1Gw8eY-blGjaksHJJEZ_J94TYduwKqWvDPcdzm8uJunM/edit?usp=sharing)
[Github](https://github.com/)


## Google Sheet

Link to Google Sheets API [here](https://docs.google.com/spreadsheets/d/1Gw8eY-blGjaksHJJEZ_J94TYduwKqWvDPcdzm8uJunM/edit#gid=0)

## Wireframes

- [Mobile](https://imgur.com/a/BpNRowm)
- [Desktop](https://imgur.com/a/DyyPJnH)

Link to [Figma](https://www.figma.com/file/nkdOgggnTcWNxFOaThJYLo/Untitled?node-id=2%3A4):

## Time/Priority Matrix 

[Link](https://imgur.com/a/FFLDW5w)

#### MVP

- Grid Layout
- Flexbox Content Layout
- Link Projects
- Style Project Boxes
- Header Links
- Nav Functionality and Drop Downs
- About Me Bar Styling
- Contact Bar and Icon Links


#### PostMVP 

- Carosel Set Up
- Style Carosel
- Skills Bar Styling

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Mobile Grid Layout | H | 1hr | 1hr |
| Desktop Grid Layout | H | 2hr | 2hr |
| Mobile Flexbox Layout| H | 2hr | 2hr |
| Desktop Flexbox Layout| H | 2hr | 1.5hr |
| Link Projects | H | 30min |  1hr | 
| Style Project Bars | H | 1hr | 2hr|
| Header Links | M | 1hr | 2hr |
| Mobile Nav Functionality| M | 2hr | 1.5hr |
| Desktop Dropdowns | M | 2hr | 1hr |
| About Me Bar Styling | L | 1hr | 1hr|
| Contact Bar and Icon Links | M | 1hr | 2hr|
| Total | H | 15.5hrs| 17hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Carosel Set Up | H | 2hr | 2hr | 
| Style Carosel | H | 2hrs|  1hr | 
| Skills Bar Styling | L | 1hr | 1hr |
| Total | H | 5hrs| 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project. 

 - jQuery - rendering data to page
 - Bootstrap - used for carousel and dropdown frameworks

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

- The code below used all the skills I had learned previously during the project and otherwise. I was able to accomplish this task far ahead of my schedule and was quite proud of myself.

```
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
```

## Issues and Resolutions

| Issue | Resolution |
| --- | :---: |
| Carousel Functionality | Was inputting in incorrect location |
| Desktop grid images | Needed to use style tag to render it as the background image |
| Carousel Image Rendering | Needed to switch to an image rather than styling as in the desktop version |
| Carousel Images Stoped Rendering | Used Materialize for a dropdown framework which conflicted with the carousel classes, removed Materialize and switched solely to Bootstrap |
| Hamburger/My Work Dropdown Location | Can't change the HTML using CSS, built a second dropdown and had the hamburger class display none in tablet/desktop versions |
| Image Thumbnail Shape | Asked for assistance in shaping the framework to be a circle |

| | |

