# User Management Dashboard

This is a web application where an admin can log in and view users in a database. The app allows the admin to perform actions such as viewing detailed user information, blacklisting users, and activating blacklist status.

## Technologies Used

- **TypeScript:** The project is developed using TypeScript, which provides static type checking to ensure better error handling during development, and enhances code readability and maintainability.
- **SCSS:** The app uses SCSS (Sassy CSS) for styling, allowing for features such as variables, nesting, and mixins to create modular, reusable styles.
- **React-Router-Dom:** This library is used for routing within the application. It handles navigation between different views, such as navigating from the dashboard to the user details page.

## Features

- Admin dashboard displaying a list of users fetched from a database.
- Each user has a detailed profile with personal, educational, employment, and guarantor information.
- Ability to navigate to individual user detail pages.
- Admin actions include "View Details", blacklisting users, and activating the blacklist status.

## Styling and Layout

The application uses **viewport units (`vw` and `vh`)** to create a responsive layout that adapts well to different screen sizes:

- **Responsive Design:** The use of `vw` (viewport width) and `vh` (viewport height) ensures that the app scales across large screens, making sure that the layout remains fluid and responsive.
- **Max Width of 1440px:** The layout is constrained to a maximum width of 1440px, which keeps the design neat and avoids over-expansion on ultra-wide monitors. This provides a consistent experience across various large screen sizes.

## How It Was Built

- The project uses **React** to build dynamic components and **React-Router-Dom** for managing navigation between the different pages.
- **SCSS** is used to create a modular and scalable style structure. The app is designed with responsiveness in mind, leveraging viewport units and a maximum width to ensure a standardized look across all devices.
- **TypeScript** ensures type safety and helps prevent common errors during development.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository-url
   cd user-management-dashboard
   npm install
   npm start
   ```

The app will now be running locally, and you can view it at http://localhost:3000.

## Usage

Once the app is running:

- The admin can log in and view a list of users in the dashboard.
- For each user, an "Options Menu" is available with actions such as:
  - **View Details:** Navigates to a page that displays the full details of the selected user, including their personal information, education and employment, social media, and guarantor details.
  - **Blacklist User:** Blacklists the user to restrict their actions.
  - **Activate Blacklist:** Reverses the blacklisting, allowing the user to resume activities.

To navigate to the detailed user page, the admin clicks on "View Details," which loads the user's full profile page with additional information.

## File Structure

The project follows a structured approach to ensure scalability and maintainability:

- **src/components:** Contains reusable components such as:
  - `Sidebar`: Handles navigation within the dashboard.
  - `Navbar`: The top navigation bar displayed across all pages.
  - `OptionsMenu`: Dropdown menu with user actions like "View Details," "Blacklist," etc.
- **src/pages:** Contains higher-level components corresponding to routes:

  - `Dashboard`: Displays the list of users.
  - `UserDetails`: Displays detailed information for a selected user.

- **src/styles:** Contains the SCSS files used to style the application:
  - Global styles and component-specific styles.
  - Uses modular SCSS for better organization and reuse.

## How It Was Built

The app was built using the following principles and technologies:

- **TypeScript:** Used to enforce static type checking and catch errors during development. It improves code clarity and maintainability by ensuring type safety.
- **React-Router-Dom:** Handles navigation between the different pages of the app. For instance:

  - Navigating from the user dashboard to the individual user details page.
  - Routes are managed centrally in the `App.tsx` file, and the `Outlet` component allows for nested routing in the dashboard layout.

- **SCSS:** Provides modular, reusable styles using variables, nesting, and mixins. Key aspects include:
  - **Responsive Design:** The layout is built using `vw` (viewport width) and `vh` (viewport height) units, ensuring the app scales well on large screens.
  - **Max Width of 1440px:** The design maintains a consistent look across different screens, with the layout constrained to a maximum width of 1440px for better readability on ultra-wide monitors.

Feel free to fork the project and customize it to your needs!
