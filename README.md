# To-Go-List
![Image of search box with full screen image in background](/images/to-go-top.jpg)
## Description

The To-Go-List is a travel dashboard that presents users with a list of recommended tourist activities for a given destination. These can be dynamically added to the user's itinerary to build the perfect trip. <br /><br />

![Image of Lower Section of Website](/images/to-go-curr-weather.jpg)
***Above:** To-go-list also displays weather data for the preceding twelve months and provides a handy currency converter that allows users to check current exchange rates.*

## Installation

If you would like to use the project as a basis for your own, clone this git repository, cd into the directory and install the required node packages:<br />
``
npm i
``

## Usage
### Developers

Run the app in development mode with:<br />
```
npm start
```
You can then open http://localhost:3000 to view it in the browser.

### Users
To use the dashboard itself, users simply enter the name of a town/country etc in the search field and select a destination from the list of suggestions. While the attraction data is being loaded, an image of the updated destination is displayed. When loading has completed, the page scrolls automatically to the attraction listing.<br /><br />

![Image of Lower Section of Website](/images/to-go-mid.jpg)<br /><br />
Activities can now be assigned to days in the itinerary via the activity 'Go' menus. Custom activities can also be added by clicking 'Add an activity' in the Itinerary panel.<br /><br />
It's possible to include multiple destinations in a single itinerary, so users could, for example, spend a few days in Rome before heading off to Florence to complete their trip.


## Further development

In its current state, the project should be considered a minimum viable product. Potential enhancements might include:
- Variable itinerary lengths
- Sortable itinerary entries
- Mechanism to save itineraries - either local storage or to a database (the latter requiring user login).
- Ability to email itineraries to users
- Rating system allowing users to vote on quality of attractions
- Review system allowing users to review attractions after their trip


## Technologies

### Node Libraries
- [React component for Geoapify Geocoder Autocomplete](https://www.npmjs.com/package/@geoapify/react-geocoder-autocomplete) - destination search with autocomplete
- [React heroicons](https://www.npmjs.com/package/@heroicons/react) - various icons
- [React headlessui](https://www.npmjs.com/package/@headlessui/react) - UI components for React
- [chart.js](https://www.npmjs.com/package/chart.js) - weather chart generation
- [React Chartjs-2](https://react-chartjs-2.js.org/) - React integration for chart.js 
- [uniqid](https://www.npmjs.com/package/uniqid) - unique Hexatridecimal ID generation for itinerary items

### APIs
- [Geoapify Places API](https://apidocs.geoapify.com/docs/places/#about) - attraction data
- [OpenMeteo API](https://open-meteo.com/) - annual weather data
- [Pixabay API](https://pixabay.com/api/docs/) - images
- [Currency API](https://github.com/fawazahmed0/currency-api) - currency conversion

### Other Libraries & Frameworks
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Contributors
- [Sam Brooke](https://github.com/Sam010000101)
- [Tobias Firth](https://github.com/tobias-firth)
- [Shamira](https://github.com/shamira30)

## Links
- [Deployed site](https://to-go-list.netlify.app)
- [Team Github Repo](https://github.com/Sam010000101/to-go-list) (initial development on the project was undertaken by myself and the  [three contributors](#contributors) listed above)
