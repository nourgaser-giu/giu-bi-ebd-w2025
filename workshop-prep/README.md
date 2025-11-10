# EBD Workshop Preparation

Please have this repository cloned and set up on your local machine before attending the workshop. Follow the instructions below:

## Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed (LTS version).
- A code editor: [Visual Studio Code](https://code.visualstudio.com/) is mandatory for the workshop.
- Basic knowledge of JavaScript and Node.js.
- Fully understand the code in the [`index.js`](https://github.com/nourgaser-giu/giu-bi-ebd-w2025/blob/main/lab3/index.js) file as we will be working with it during the workshop.
- (Optional but recommended) Git installed on your machine. You can download it from [here](https://git-scm.com/). Make sure Git Bash is also installed after installing Git.
- Inside VS Code, install the [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) extension for testing API endpoints.
- Inside VS Code, make sure running `node -v` in the terminal returns the installed Node.js version. If not, ensure Node.js is correctly installed and added to your system's PATH. If you face any issues please do your due diligence to resolve them by searching online, and as a last resort, reach out to the instructor before the workshop day.

## Setup Instructions

1. Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/nourgaser-giu/giu-bi-ebd-w2025/tree/main/workshop-prep
   ```

    > Or download the ZIP file of the repository and extract it to your desired location if you don't have Git installed or prefer not to use it.

2. Open the project in Visual Studio Code. (Open VS Code, then go to `File` > `Open Folder...` and select the cloned repository folder.)

3. Open a terminal in VS Code by going to `View` > `Terminal`.

4. Install the necessary dependencies by running:

   ```bash
   npm install
   ```

5. Start the application by running:

   ```bash
   node index.js
   ```

6. Verify that the application is running by opening your web browser and navigating to `http://localhost:3000`. You should see a welcome message.

7. Test the API endpoints using a tool like [Postman](https://www.postman.com/) or the VS Code extension [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client).

8. Make sure everything is working correctly before the workshop as we will not have time for troubleshooting trivial issues during the session as they have already been covered in previous tutorials.

## Workshop Agenda

- Practical introduction to MongoDB using Mongodb Atlas.
- Creating your first MongoDB database and collection on Mongodb Atlas.
- Basic data operations: Create, Read, Update, Delete (CRUD) in MongoDB.
- Integrating MongoDB with a Node.js application using Mongoose.
- Replacing the in-memory data storage in `index.js` with MongoDB operations.
- Testing the updated application to ensure data persistence with MongoDB.
- Course project overview and milestone 1 reveal and discussion.
- Attendance and evaluation. (Attendance is mandatory for course credit.)
