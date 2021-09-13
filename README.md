# 14 Model-View-Controller (MVC): Tech Blog

## Description

This app is CMS-style blog. It has a lot of functionalities.

a) Regardless if you are logged in or not, you get to see a list of posts made by all users on the homepage.

b) But in order to access the dashboard, you must be logged in. This app is engineered to trigger the Login Form when attempting to access the dashboard prior to being logged in. You may also access it via the Login nav item.

c) If you are visiting the site for the first time and do not have credentials yet, you can sign up! Once you've signed up or have logged in, you can now access the dashboard.

d) If you haven't created any posts yet, you'll see you have No Posts and you'll have the ability to add a new post. You will be directed to the Create New Post form, where you just have to enter a title and a comment. Clicking Create button will then insert this new post into the remote MySQL database and the post will be associated with the user. Once completed, the page will redirect back to the dashboard and the new post will be shown. Add another, this too will be shown along with all posts a user has created.

e) The dashboard also provides an easy way to either edit the post or delete it. Delete will ask you to confirm before deleting.

f) If you are on the homepage, you see a The Tech Blog header/brand just below the top nave. If you are on the dashboard, you will see a Your Dashboard header/brand instead.

## Deployed

This app is released and available publically via a deployment to Heroku. Heroku has been setup to automatically get a new build whenever code is pushed up to this github repo's main branch, and the deploy automatically too.

[You may find the deployed to Heroku app here:](https://ccs-tech-blog.herokuapp.com/)

## Technologies Used

i) This blog app's backend is a RESTful API supporting full CRUD operations.

ii) It is an ExpressJS Server where its front-end uses the Express Handlebars package. Along with the several front-end Javascript scripts streamlining functionalies, the app makes use of a couple of handlebar helpers too. One of these helpers assist with controlling authentication.

ii) The blog is also powered by Sequelize for issuing queries and maintaining sessions.

iv) The blog also has a MySQL database to store all its data (on posts and users). Besides a Schema to create the db, there's Seeding functionality included to help build out the tables and their fields. The tables, Post & User, also have relationships in place.

v) There is added protection on the credentials, where the password is being hashed via the bcrypt module.

## Table of Contents

- [Description](#description)
- [Deployed](#deployed)
- [Technologies Used](#technologies-used)
- [Your Task](#your-task)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock Up](#mock-up)
- [Getting Started](#getting-started)
- [Grading Requirements](#grading-requirements)
- [Review](#review)

## Your Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Mock Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif)

## Getting Started

Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

## Grading Requirements

This homework is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

- Satisfies all of the preceding acceptance criteria plus the following:

  - Application’s folder structure follows the Model-View-Controller paradigm.

  - Uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views.

  - Application must be deployed to Heroku.

### Deployment: 32%

- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository contains application code.

### Application Quality: 15%

- User experience is intuitive and easy to navigate.

- User interface style is clean and polished.

- Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

- The URL of the functional, deployed application.

- The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
