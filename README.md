# dashboard / library

Initially developed to test my design skills and understanding of CSS grid, I decided to expand the scope of this project to practice applying basic object and object constructor JavaScript. Additionally, I chose to simplify some of the design elements on the page (which included removing the CSS background images) from the previous version.

This project was developed as part of The Odin Project's Full Stack Javascript course - check out my [live version](https://silverwish.github.io/top-dashboard/).

## new things I've learned

- How CSS grid can remove some of the "heavy-lifting" of responsiveness via features like fractional units or functions like repeat() and minmax()
- Further understood the differences between `auto-fill` and `auto-fit`
- How to make CSS background images more accessible using the `role` and `aria-label` attributes, while acknowledging [W3C's documentation on background image accessibility](https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/F39)
- how % units on `gap` can cause items in a grid container to overflow

- Introduced to the application of object constructors and how they can be used to prevent repetitive code

## biggest challenges

- Curating a compelling colour scheme and design
- Ensuring images are sized consistently and positioned appropriately, mainly via the grid dimensions
- Ensuring the grid containers and items inside the main body of content behave in an acceptable manner when the window is resized
- Positioning and formatting the navbar on mobile and tablet view

- Creating tidy JavaScript for dynamically creating new grid items
- Ensuring the read status button returns "read" / "unread" appropriately on click
- Maintaining correct `data-id` numbers when grid items are removed

## technologies used

- HTML
- CSS
- [Haikei](https://app.haikei.app/) for user icon colour gradient
- [Convertio](https://convertio.co/) for image converting

## known bugs/ areas for improvement

- Sidebar links are not active

## notes

- I have chosen a new personal variable naming convention of snake_case since, in my opinion, this creates a clear distinction between variables, camelCase in DOM selectors and methods, and kebab-case for HTML element classes and IDs
- Nav icon svgs were sourced from [SVGBox](https://svgbox.net/)
- Favicon was generator using [Favicon.io](https://favicon.io/)