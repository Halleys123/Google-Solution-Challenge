# Sustainable Cities Website Project

Welcome to the Sustainable Cities Project! This website aims to provide information about the concept of sustainable cities and how to create sustainable cities. It also provides resources for sustainable energy, sustainable cities, and other related topics.

## Assets

This project will include the following assets and images:

- [Wireframe images](./wireframe)
- [Resources](./resources)
- [Markdown files of page content](./markdown)

#### Naming Convention

- All images are named in format - "(name) - C(num) - (Order)"

- "Order" is the order in which the image appears in the page. For example, "sustainable cities - C1 - 1" is the first image of the sustainable cities page.
- Here "name" is the name of the image and "num" is the image number. For example, "sustainable cities - C1" is the first image of the sustainable cities page.
- Here "C" stands for "concept" and is used to differentiate between the final images and the concept images, i.e. any image containing C means it can be changed in future.
  Here order and C are optional.

## Introduction

Sustainable cities are cities that are designed and managed in a way that reduces their environmental impact and improves their resilience to climate change and other environmental threats. Sustainable cities are built with the goal of creating a healthy environment for its citizens, while reducing the environmental footprint of the city.

Sustainable energy is energy that is generated using renewable sources, such as solar, wind, and hydro, instead of non-renewable sources such as coal and natural gas. Sustainable energy is an important part of creating a sustainable city, as it allows the city to reduce its emissions and depend less on non-renewable sources of energy.

## Markdown Files

The project will include Markdown files for each page of the website. These files will include the page content and navigation scheme.

## Conclusion

We hope you find the resources on this website helpful in your journey to creating sustainable cities. If you have any questions or comments, please feel free to reach out to us. Thank you for visiting!

## How to Edit the Project

- Clone the project to your local machine.
- Create a new branch for your changes.
- Make your changes.

### Specifics Regarding any Change

- If you make any new html file for new page always include following code:

  - Include following in head tag:

  ```html
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="header.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
    rel="stylesheet"
  />
  <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />

  <link
    rel="shortcut icon"
    href="./Icons/planet-earth.ico"
    type="image/x-icon"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

  - When you create a new page, make sure to add the link to the navigation bar in the header of the index.html file.

  ```html
  <body>
    <header class="header">
      <img src="./resources/Icon/" class="mainIcon" />
      <div class="links">
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </div>
    </header>
    <!-- Your code here -->
  </body>
  ```

- To make styling to any element first check if the file style.css has the styling for that element. If not, add the styling to the style.css file.
- Many General use classes are already defined in style.css. If you want to use any of them, you can use them directly.
