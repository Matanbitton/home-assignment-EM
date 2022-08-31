#Home Assignment

- 👨‍💻 See the live version of this project at **[Home-Assigenment](https://matanbitton.github.io/home-assignment-EM/)**

## About The Project

This is a fun home assignment I worked on. 
The goal was to create a responsive card component that changes it's layout and style based on different screen sizes.

Overall I think it turned out beautifully besides some minor fixes that need to be done but I couldn't due to lack of time.
Issues and potential points of improvement are pointed down below.





https://user-images.githubusercontent.com/69572698/187792833-1b4ae168-4fdf-4378-9dfc-6517ea3f6144.mp4









## 🚀 Languages and Tools:

<p align="left"> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://img.icons8.com/color/48/000000/javascript.png"/> </a> 
    <a href="https://www.w3.org/html/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/html-5.png"/> </a> 
    <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/css3.png"/> </a> 
   <a href="https://webpack.js.org/" > <img src="https://webpack.js.org/icon-pwa-512x512.d3dae4189855b3a72ff9.png" style = "width: 40px"> </a>
    <a href="https://en.wikipedia.org/wiki/React_%28JavaScript_library%29" > <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" style = "width: 40px"> </a>
   <a href="https://tailwindcss.com/" > <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="tailwind"  style = "width: 40px" >

</p>

## What I enjoyed:

I needed to figure out how to make a triagnle to go behind the Best Choice/Best Value section at the top
at first I struggled to think of a way to make a traingle since border radius won't work.
I needed a sharp cut and border-radius only makes rounded corners.

Then I had this idea, Every square is made out of 2 identical triangles, So why not make a square and rotate it 45 degrees?
and hide the rest behid the card background using z-index.

Overall a great brain teaser.

## Issues:

The square I made to go behind the Best Choice/Best Value section moves when screen size goes beyond 1070px width since the card stays that size
and the screen keeps getting bigger. Also the square is absolutley positioned in relation to the "highest parent" (the container) so it creates this problem.

I couldn't make this square abosultely postion in relation to the BestChoice/Best Value because then the z-index won't work since z-index inherets it index from the parent.

I'm sure I would figure it out, given more time.

issue in the link below:

https://user-images.githubusercontent.com/69572698/187793130-eb0c61d1-4c91-4700-a63e-a8f45589800b.mp4


## Connect with me:

<p align="left">

<a href = "https://www.linkedin.com/in/matan-bitton-90a054210/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>

**matanbitton@gmail.com**

