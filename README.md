# Simple Express Server

Clone down your repository.

Create an express server in the index.js file with two routes; a root route and an add route. Your app should run on port 3000.

When you open your browser to http://localhost:3000, you should be presented with a welcome message.

When you open your browser to the add route at http://localhost:3000/add/2/3, you should be presented with the value of 5. The user should be able to change the last two URL parameters and receive a response with the sum of the two parameters.

To complete the add route, read the [express documentation on routing](http://expressjs.com/en/guide/routing.html). The section on "route parameters" will be particularly useful.

Don't forget to add a package.json using npm init and install express as a dependency.