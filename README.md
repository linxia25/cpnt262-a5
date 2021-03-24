# CPNT 262 Assignment 5: JSON Routes with Heroku and MongoDB Atlas
By Xia Lin March 24, 2021

## Description
A website for online sales of high-end furniture!

## Comments

The most difficult part of this assignment is to display the products separately according to the ID of different products. I tried to use TONY’s code in Saturday’s class, but the server kept telling me that the page could not be found. I couldn’t find the reason, So I asked other students about the relevant content.

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
- Single item pages:<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/1350789<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/1866149<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/3773575<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/1648768<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/890669<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/439227<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/3097112<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/879821<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/245208<br />

- 404 error page example:
--- https://cpnt262a5-20210324.herokuapp.com/404

- String for MONGODB_URL":
--- MONGODB_URL=mongodb+srv://xialin:1982@cluster0.klahv.mongodb.net/sait?retryWrites=true&w=majority

## File/directory
- /nodels<br />
--- /furniture.js<br />

- /public<br />
- /css<br />
--- /style.css<br />
--- /index.css<br />
--- /login.css<br />
--- /register.css<br />
--- /reset.css<br />
- /images<br />
--- /accent-table.jpg<br />
--- /chair.jpg<br />
--- /bed.jpg<br />
--- /sofa.jpg<br />
--- /sofa-bed.jpg<br />
--- /table.jpg<br />
---/malm-dresser.jpg<br />
---/shelves.jpg<br />
---/wooden-table.jpg<br />
---/logo.png<br />
---/404.png<br />
- /js<br />
---/client.js<br />
- /routes<br />
--- /furnitures.js<br />
--- /api<br />
  --- /v0.js<br />
--- index.js<br />

- /views<br />
--- /pages<br />
  --- index.ejs<br />
  --- login.ejs<br />
  --- register.ejs<br />
  --- 404.ejs<br />
  --- singleitem.js<br />
--- /partials<br />
  --- /footer.ejs<br />
  --- /header.ejs<br />
  --- /nav.ejs<br />

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