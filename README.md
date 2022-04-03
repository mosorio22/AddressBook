# AddressBook
 Frontend client of an Address Book application using the randomuser api. <br />
 The client displays 50 users of the same seed (so all clients will get the same users) <br />

Dependencies: <br />
	- Node <br />
		https://nodejs.dev/learn/how-to-install-nodejs <br />


How to run: <br />
	- clone repo <br />
	- go to directory <br />
	- run "node app.js" <br />

Summary <br />
	- Problem <br />
		- Your web client should initially display the list of persons from the address book. The user <br />
		should be able to select a person from the list in order to see more details about that person. <br />
		Please use the API endpoints from https://randomuser.me/ (Documentation can be found at <br />
		https://randomuser.me/documentation). Your client should be responsive. <br />
	- Approach: <br />
		- I started by planning out my project. I ended up not following the plan perfectly, but it was still useful to think  about what I wanted the project to look like. My initial plan was to have a Jest unit testing architecture, Node.js to run the project locally, and the project itself would be a SPA. I ended up not using Jest and the project is not a SPA. I also initially thought that I liked the idea of a calendar look where the calendar narrowed/widened on breakpoint changes, but during planning I wanted to make something more akin to an actual address book. <br />
		- During development I tried to remember to follow a TDD and mobile-first development approach. I was able to follow the mobile-first approach, but I had trouble with the TDD. I found almost all of my logic was dom manipulation. I also wanted to make my code as functional as possible and performant. While the code is performant, I had trouble making it functional for the same reason I don't have unit tests. <br />
		- Towards the end of development, I found myself spending more time trying to make the project follow certain approaches, so I decided to focus on the address book logic. <br />
	- Features Implemented: <br />
		- Express js is used for routing. <br />
		- The landing page displays 50 user names and addresses in a css grid/calendar-like format. <br />
			- I used this approach instead of the address book approach as I felt that on a device, I'd rather see neatly  <br />organized data in this format as opposed to columns of names and address (like on a physical address book).
			- Each name is a link that will bring the user to the profile display page. <br />
		- The display page comes in with query parameters for the name, phone number, and image of the clicked user. <br />
			- The page is displayed like a card. <br />
	- Useful links used during development: <br />
		- https://us.niemvuilaptrinh.com/article/19-html-profile-templates-for-website - for the display page css <br />
		- https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe - for css grid <br />
		- https://expressjs.com/en/guide/routing.html - for express routing <br />
		- https://www.valentinog.com/blog/jest/ - for Jest intro (unused in project) <br />
		- https://dev.to/grandemayta/javascript-dom-manipulation-to-improve-performance-459a - for tips on DOM manipulation omptimizations <br />
	- Given more time, what I would have liked to complete: <br />
		- There is always room for js optimizations. <br />
		- Add user (may have only been worth it with backend) and sort users. <br />
		- UI improvements. <br />
			- Improve styles and add more details to both the landing page and details page. <br />
			- Towards the end of development, I wished my book looked more like a book. Even if it was something similar to a contact list. <br />
		- UX improvements (clear directions on how to use app. Maybe small modals on hover of address card). <br />
	- Given more time, how I would make the project more robust: <br />
		- I didn't have any units to unit test, but maybe that means I could have made code more modular and added tests after. <br />
		- Look into Integration testing. <br />
		- Think about scalability more. <br />
		- Look into deployment to distributed cloud infrastructure.
