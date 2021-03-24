# CPNT 262 Assignment 4: JSON gallery endpoint with fetch
By Xia Lin March 19, 2021

## Description
A website for online sales of high-end furniture!

## Comments

The most difficult part of this assignment is to display the products separately according to the ID of different products.I tried to use TONY’s code in Saturday’s class, but the server kept telling me that the page could not be found. I couldn’t find the reason, so I asked other students about this code.

## Attributions
- [Logo.jpg](https://www.designevo.com/ "Logo") by DesignEvo.
- [bed.jpg](https://www.pexels.com/photo/brown-wooden-bed-inside-bedroom-3773575/ "bed") by Curtis Adams.
- [chair.jpg](https://www.pexels.com/photo/two-assorted-color-padded-chairs-near-side-table-1350789/ "chair") by Eric Montanah.
- [sofa.jpg](https://www.pexels.com/photo/2-seat-orange-leather-sofa-beside-wall-1866149/ "sofa") by Martin Pechy.
- [sofa-bed.jpg](https://www.pexels.com/photo/empty-bedroom-set-1648768/ "sofa-bed") by Victoria Borodinova.
- [table.jpg](https://www.pexels.com/photo/glass-bottle-filled-with-black-straw-on-brown-wooden-table-890669/ "table") by Juan Pablo Serrano Arenas.
- [accent-table.jpg](https://www.pexels.com/photo/white-and-black-desk-beside-bed-and-window-439227/"accent-table.jpg") by Medhat Ayad.
- [malm-dresser.jpg](https://www.pexels.com/photo/photo-of-brown-wooden-3-drawer-malm-dresser-with-black-plastic-case-879821/) by Daria Shevtsova.
- [shelves.jpg](https://www.pexels.com/photo/interior-of-children-bedroom-with-wooden-furniture-and-toys-and-globe-placed-on-shelves-in-room-3932930/) by Tatiana Syrikova.
- [wooden-table.jpg](https://www.pexels.com/photo/brown-wooden-table-with-chair-3097112/) by Nugroho Wahyu.
- [Login/Register Page](https://codepen.io/colorlib/pen/rxddKy) by Aigars Silkalns.
- Thanks Aidan for help!

## Links
- GH repo: https://github.com/linxia25/cpnt262-a5.git
- Heroku URL: https://cpnt262a5-20210324.herokuapp.com/
- Single item pages:
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/1350789<br />
- https://cpnt262a5-20210324.herokuapp.com/furnitures/1866149
- https://cpnt262a5-20210324.herokuapp.com/furnitures/3773575
- https://cpnt262a5-20210324.herokuapp.com/furnitures/1648768
- https://cpnt262a5-20210324.herokuapp.com/furnitures/890669
- https://cpnt262a5-20210324.herokuapp.com/furnitures/439227
- https://cpnt262a5-20210324.herokuapp.com/furnitures/3097112
- https://cpnt262a5-20210324.herokuapp.com/furnitures/879821
- https://cpnt262a5-20210324.herokuapp.com/furnitures/245208

- 404 error page example:
--- https://cpnt262a5-20210324.herokuapp.com/404

## File/directory
- /nodels
--- /furniture.js

- /public
- /css
--- /style.css
--- /index.css
--- /login.css
--- /register.css
--- /reset.css
- /images
--- /accent-table.jpg
--- /chair.jpg
--- /bed.jpg
--- /sofa.jpg
--- /sofa-bed.jpg
--- /table.jpg
---/malm-dresser.jpg
---/shelves.jpg
---/wooden-table.jpg
---/logo.png
---/404.png
- /js
---/client.js
- /routes
--- /furnitures.js
--- /api
  --- /v0.js
--- index.js

- /views
--- /pages
  --- index.ejs
  --- login.ejs
  --- register.ejs
  --- 404.ejs
  --- singleitem.js
--- /partials
  --- /footer.ejs
  --- /header.ejs
  --- /nav.ejs

- /.env.text

- /.gitignore.txt

- /config.js

- /import.js

- /package-lock.json

- /package.json

- /server.js

- /README.md

## License
- [Applicable License](https://creativecommons.org/licenses/by/4.0/legalcode "Applicable License")