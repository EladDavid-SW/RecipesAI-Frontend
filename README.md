<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RecipesAI-Frontend</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }

        h1 {
            font-size: 36px;
            color: #333;
        }

        p {
            font-size: 18px;
            line-height: 1.6;
            color: #555;
        }

        button {
            background-color: #007BFF;
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        .image {
            max-width: 100%;
            height: auto;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>RecipesAI-Frontend</h1>
        <p>This is the frontend repository for the RecipesAI project, implemented using React and Material-UI (MUI).</p>
        <p>To use the application:</p>
        <ol>
            <li>Select the groceries you have from the list below.</li>
            <li>Click the 'Add' button to include additional groceries.</li>
            <li>Once you've made your selection, scroll down and click the 'Recipe Me' button.</li>
        </ol>

        <p>After clicking 'Recipe Me,' the application will generate a recipe using ChatGPT and display it along with a dynamically generated image from DALL·E.</p>

        <h2>Live Demo</h2>
        <p>You can try the project live by visiting the following link: <a href="https://elad-ai-recipes.netlify.app/recipe" target="_blank">RecipesAI-Frontend Demo</a></p>

        <h2>Screenshot</h2>
        <img class="image" src="https://recipes-elad-project.s3.us-west-2.amazonaws.com/GithubReadme.png" alt="Recipe Example">

        <h2>Getting Started</h2>
        <p>To run this project locally, follow these steps:</p>
        <ol>
            <li>Clone the repository:</li>
            <code>git clone https://github.com/your-username/RecipesAI-Frontend.git</code>
            <li>Install dependencies:</li>
            <code>npm install</code>
            <li>Start the development server:</li>
            <code>npm start</code>
        </ol>

        <h2>License</h2>
        <p>This project is licensed under the MIT License - see the <a href="LICENSE.md">LICENSE.md</a> file for details.</p>

        <h2>Contact</h2>
        <p>If you have any questions or feedback, feel free to reach out to Elad at elad.david5@gmail.com.</p>
    </div>
</body>
</html>
