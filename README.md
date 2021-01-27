Overview:

This is my solution to the test provided by Sky-tours, I hope you have as much fun testing it as I had making it. It took me around two days to complete the UX/UI design and develop it.

Getting Started:

Before you continue, ensure you have met the following requirements:

-Clone or download the repo into your system.
-Run npm install to install the dependencies.
-Run npm start and open http://localhost:3000 to view it in your browser.

Technologies used:

UX/UI design:

-Figma

You can find the UX/UI design for both mobile and desktop versions at:
https://www.figma.com/file/TGzEWjKQpQQhojWt3hZJsS/Explore-the-galaxy?node-id=0%3A1

Development:

-React
-React Router
-Axios
-Css

You can find a live version of the project at:
https://explorethegalaxy.netlify.app/

Some explanations:

App.js{
Here I manage the Routing of the site and import all of the pages.

Requesting data:
Here I encountered an issue with the api, it only gives you 10 elements per page, so for me to implement a custom solution for the pagination i needed to get all of the data first. So i created a function per category that fires up as soon as the component gets mounted to quicly get the data needed. The basic logic of this functions is to request the data from a predictible url and loop through the pages until 'next page' is equal to null while concatenating the data. This results get passed as props to the page components that need it.

Pagination:
Knowing the total amount of elements in our array, the logic is to set a limit on the amount of elements per page and with a division find out how many pages we need. I created a component for this so it can be used anywhere.
}

Item-Pages{
Showing element info:
We have now all the data from both categories, but to show the data from only one element on command it would be inefficient to move so much data, so I chose a custom solution for it. First scraping the id from the url(since the API doesn't provide an id property) and then concatenating this id with a base url for the category to make a request and get the data for that single item.
}

Search(available in the characters category):
A standard solution where you listen for changes on the input field, save that in a state and filter the array searching for strings that match the input, then save those results into an array and map to display them. I chose not to use a search button since the updates happen in real time.

Filtering (available in the vehicles category):
Same logic as the search functionality but this time we just use predetermined values to compare.

Made with deditation by:

Gustavo Madrid

https://github.com/morbidgus
