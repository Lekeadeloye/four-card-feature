# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This was the perfect challenge to brush up on my css grid skills. I made sure to use only grid as I normally use flexbox. I also use MUI/ShadCn grids, but it was good to go back to using css. I also made a point of not using TailwindCSS. I must say, I prefer grid to flexbox so will likely incorporate it into my projects much more.

I was particularly happy with this piece of css. I did not need to use grid-template-areas to grid items overlap rows.

```css
  .cardContainer {
    display: grid;
    width: 80%;
    justify-self: center;
    gap: 2rem;
    grid-template: repeat(4, 1fr) / repeat(3, 1fr);;
  }

  .supervisor {
    grid-area: 2/ 1/ span 2/ span 1;

  }

  .karma {
    grid-area: 3 / 2/ span 2 / span 1;
  }

  .teamBuilder {
    grid-area: 1/ 2/ span 2/ span 1;
  }

  .calculator {
    grid-area: 2/ 3/ span 2 / span 1;
  }
```

### Continued development

I will continue to practice with using css grid as an alternative to flexbox. I will also continue to use css rather than Tailwind as I feel it will be good to get back to understanding css more deeply. My next projects will make use of css variables


## Author

- Frontend Mentor - [@Lekeadeloye](https://www.frontendmentor.io/profile/yourusername)
- LinkedIn - [Leke Adeloye](https://www.linkedin.com/in/leke-adeloye)




