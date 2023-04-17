Technical Documentation for Comments-Tableau App
================================================

The Comments-Tableau App is an Angular application that displays a table of comments and allows users to create, update, and delete comments. The application consists of two main parts: the Comments folder and the Dashboard folder.

Comments folder
---------------

The Comments folder contains the following components:

-   CommentsComponent: This component is responsible for displaying the list of comments in a table format. It uses the CommentsService to retrieve and update comments.

-   CommentComponent: This component is responsible for displaying an individual comment in a row of the comments table.

-   CommentFormComponent: This component is responsible for displaying a form for creating or editing a comment. It uses the CommentsService to create or update comments.

-   ConfirmDialogComponent: This component is responsible for displaying a confirmation dialog when a user wants to delete a comment.

### CommentsService

The CommentsService is a service class that provides functionality for retrieving, creating, updating, and deleting comments using HTTP requests with the help of the `json-server` npm package.

The `json-server` is a full fake REST API that simulates a backend server and is based on a JSON file. It allows developers to have a fake server in minutes, so they can start testing their APIs without the need of a real backend server.

The `json-server` package is used in this application to simulate a backend server that receives and stores the comments data sent by the client.

The CommentsService depends on the following Angular modules and services:

-   HttpClient: The HttpClient module is used to make HTTP requests to the `json-server` for retrieving, creating, updating, and deleting comments.

-   Observable: The Observable module is used to return an observable object that can be subscribed to by components that need access to the comments data.

The CommentsService provides the following methods:

-   getComments(): This method retrieves all comments from the `json-server` using a GET request to the <http://localhost:3000/comments> endpoint. The method returns an observable object that emits an array of CommentInterface objects.

-   createComment(text: string, parentId: string | null = null): This method creates a new comment in the `json-server` using a POST request to the <http://localhost:3000/comments> endpoint. The method accepts two parameters: text (the text of the new comment) and parentId (the ID of the parent comment, if the new comment is a reply to an existing comment). The method returns an observable object that emits a single CommentInterface object representing the newly created comment.

-   updateComment(id: string, text: string): This method updates an existing comment in the `json-server` using a PATCH request to the [http://localhost:3000/comments/${id}](http://localhost:3000/comments/$%7Bid%7D) endpoint. The method accepts two parameters: id (the ID of the comment to update) and text (the new text of the comment). The method returns an observable object that emits a single CommentInterface object representing the updated comment.

-   deleteComment(id: string): This method deletes an existing comment from the `json-server` using a DELETE request to the [http://localhost:3000/comments/${id}](http://localhost:3000/comments/$%7Bid%7D) endpoint. The method accepts a single parameter: id (the ID of the comment to delete). The method returns an observable object that emits an empty object {}.

Dashboard folder
----------------

The Dashboard folder contains the following components:

-   DashboardComponent: This component is responsible for displaying a Tableau dashboard that visualizes the comments data from the `json-server`. It uses the Tableau JavaScript API to interact with the Tableau server and display the dashboard.

### Tableau JavaScript API

The Tableau JavaScript API is used to interact with the Tableau server and display the dashboard. The DashboardComponent uses the following methods:

-   initTableau(): This method initializes the Tableau JavaScript API and connects to the Tableau server. It uses the Tableau Server URL, Site ID, and Authentication Token to authenticate the user and connect to the Tableau server.

-   createViz(): This method creates a Tableau visualization object using the specified URL and DOM element ID. It uses the Tableau Server URL and Site ID to retrieve the specified Tableau workbook and view and create a visualization object in the specified DOM element.

-   updateViz(): This method updates the Tableau visualization object with the latest comments data from the backend API. It uses the CommentsService to retrieve the latest comments data and update the Tableau visualization accordingly.



### Tableau Dashboard

The DashboardComponent is responsible for displaying a Tableau dashboard that visualizes the comments data from the backend API(`json-server`). The dashboard is displayed using the Tableau JavaScript API, which is used to interact with the Tableau server and display the dashboard.

-   initTableau() : This method is called when the DashboardComponent is initialized. This method initializes the Tableau JavaScript API and connects to the Tableau server using the Tableau Server URL, Site ID, and Authentication Token.

-   createViz(): This method is called by the initTableau() method. This method creates a Tableau visualization object using the specified URL and DOM element ID. It uses the Tableau Server URL and Site ID to retrieve the specified Tableau workbook and view and create a visualization object in the specified DOM element.

-   updateViz(): This method is called by the CommentsService whenever a comment is created, updated, or deleted. This method uses the CommentsService to retrieve the latest comments data from the backend API(`json-server`) and updates the Tableau visualization accordingly.

Conclusion
----------

The Comments-Tableau App is an Angular application that displays a table of comments and a Tableau dashboard and displays the comments data. The application uses Angular components, services, and the Tableau JavaScript API to provide a seamless user experience. The CommentsService provides functionality for retrieving, creating, updating, and deleting comments, while the DashboardComponent displays the comments data in a Tableau dashboard.