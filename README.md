THIS IS A DEMO AND TEST VERSION OF THE VAZI CENTER WEBSITE

https://vazi-center2.vercel.app/

Entrance for Admin: Login = Yuriy2437 Password = Luther13579246!

This website is made for Vazi Center, a developing cultural space in Tbilisi, Georgia.

The website is made using the following programs:

- React;
- Next.js;
- CSS
- Redux;
- MongoDB;
- GitHub;
- Vercel

Here is a link to the GitHub repository containing all the code for this project:

https://github.com/Yuriy2437/vazi-center2

Website Structure:

1. https://vazi-center2.vercel.app/

This is the title page. It contains a greeting and two buttons: Entrance for Admin & Entrance for all.
For Entrance for Admin: Login = Yuriy2437, Password = Luther13579246!
What's the difference between Entrance for Admin & Entrance for all?
Entrance for Admin actuvates two buttons into pages: Delete & Answer.
Entrance for all deactivates these buttons.

Files for this page:

- app\page.js
- styles\globals.css
- styles\Home.module.css
- store.js
- public\images\background.jpg

2. https://vazi-center2.vercel.app/menu?admin=true
   https://vazi-center2.vercel.app/menu?

This is Menu Page. It contains references on all pages of menu into the left section and photo image in the right section.

Files for this page:

- app\menu\page.js
- styles\Menu.module.css
- public\images\page2.jpeg

3. https://vazi-center2.vercel.app/about

This is About Us Page. It contains the top orange menu that appears on all subsequent pages except the Feedback page. This menu contains links to other pages.

The left purple section contains a description of the Vazi Center and two red buttons at the bottom: Show Photo and Close Photo. When you click the Show Photos button, the right section darkens and three photo images are displayed against its background (by clicking the arrows).

The right section under the heading Questions about Vazi Center contains a form for the user to enter questions (on the top, yellow background). The user enters their Name, Email, and Question, and when they click the green Send button, this data are written to the MongoDB database. After a few seconds, their Name and Question data are displayed in the List of Questions form (on the bottom, green background). This form contains titles: Name, Question, Action, Answer. It displays not only the data entered right now, but also all the questions entered by other users and recorded in the MongoDB database. The Action and Answer fields contain red Delete and Answer buttons in Admin mode. These fields are empty in Entrance for all mode. By clicking the Delete button, the record is deleted not only from the interface, but also from the MongoDB database. By clicking the Answer button, the mail server is called using the Email entered by the user, and the Admin replies to the user. The List of Questions section provides scrolling in the interface.

Since the structure of pages 3-8 is similar, we will split the files into those common to pages 3-8 and those unique to page 3.

These files are common for pages 3-8:

- app\layout.js
- app\ClientLayout.js
- components\MainMenu.js
- styles\MainMenu.module.css
- components\MainMenuWrapper.js
- hooks\useQuestion.js
- hooks\useAdminStatus.js
- components\PageLayout.js
- styles\CommonPage.module.css
- components\QuestionSection.js
- styles\QuestionSection.module.css
- components\PhotoGallery.js
- components\PhotoButton.js
- styles\PhotoGallery.module.css
- .env.local
- lib\momgodb.js
- lib\api-handlers.js
- lib\api2-handlers.js

These files are unique for page 3:

- app\about\page.js
- public\images\photo_13.jpg
- public\images\photo_19.jpg
- public\images\photo_4.jpg
- app\api\about\questions\route.js
- app\api\about\questions\[id]\route.js

4. https://vazi-center2.vercel.app/english_club

These files are unique for page 4:

- app\english_club\page.js
- public\images\photo_15.jpg
- public\images\photo_17.jpg
- public\images\photo_18.jpg
- app\api\english_club\questions\route.js
- app\api\english_club\questions\[id]\route.js

5. https://vazi-center2.vercel.app/lectorium

These files are unique for page 5:

- app\lectorium\page.js
- public\images\photo_8.jpg
- public\images\photo_9.jpg
- public\images\photo_21.jpg
- app\api\lectorium\questions\route.js
- app\api\lectorium\questions\[id]\route.js

6. https://vazi-center2.vercel.app/music_club

These files are unique for page 6:

- app\music_club\page.js
- public\images\photo_6.jpg
- public\images\photo_14.jpg
- public\images\photo_16.jpg
- app\api\music_club\questions\route.js
- app\api\music_club\questions\[id]\route.js

7. https://vazi-center2.vercel.app/psychology_club

These files are unique for page 7:

- app\psychology_club\page.js
- public\images\photo_10.jpg
- public\images\photo_22.jpg
- public\images\photo_20.jpg
- app\api\psychology_club\questions\route.js
- app\api\psychology_club\questions\[id]\route.js

8. https://vazi-center2.vercel.app/kids_club

These files are unique for page 8:

- app\kids_club\page.js
- public\images\photo_2.jpg
- public\images\photo_7.jpg
- public\images\photo_23.jpg
- app\api\kids_club\questions\route.js
- app\api\kids_club\questions\[id]\route.js

9. https://vazi-center2.vercel.app/feedback

This page collects data from reviews on pages 3-8. It displays questions collected from all MongoDB databases in a single interface on the right side. On the left side of the page, there is a filter that allows you to search for words and parts of words in all databases. The purpose of the filter is to find out the most popular topics for site visitors. The dynamics of this page's data are implemented using Redux. There is also a Delete button for each entry from all databases. When clicked, the entry is deleted both from the interface and from the corresponding MongoDB database.

These files are unique for page 9:

- app\feedback\page.js
- styles\Feedback.module.css
- reducers\feedbackReducer.js
