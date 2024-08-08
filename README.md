This is an Angular-based application that displays a list of users and allows users to search and view detailed information about each user.

## Features

1. **Navigation**: Enable click functionality on the user cards to navigate to a new page displaying detailed information about the selected user.
2. **Search Functionality**: Implement an instant search field within the header to search for users by ID without requiring a separate button. Display search results and allow navigation to the user details page if the user exists.
3. **User Details Page**: Include a back button on each individual user's page to navigate back to the main user list.
4. **Caching Implementation**: Introduce caching mechanisms to avoid redundant HTTP requests, optimizing the application's performance.
5. **User Experience Enhancements**: Display a loading bar to indicate pending network requests, ensuring a smoother user experience during data retrieval.

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/angular-user-directory.git`
2. Navigate to the project directory: `cd angular-user-directory`
3. Install dependencies: `npm install`
4. Start the development server: `ng serve`
5. Open the application in your browser at `http://localhost:4200`
