# Who Wants to Be a Millionaire?

Welcome to the "Who Wants to Be a Millionaire?" app, built using ReactJS! 

## Overview

This app is a simple implementation of the popular game show "Who Wants to Be a Millionaire?", where players are presented with a series of increasingly difficult questions and must use their knowledge and intuition to progress through the game and potentially win a million dollars. 

## Features

- A series of multiple choice questions, each with four possible answers
- The ability to use lifelines (50/50, ask the audience, and call a friend) to help narrow down the correct answer
- A running total of the player's winnings as they progress through the game
- An interactive game show-inspired interface

## Getting Started

To get started with the app, clone the repository and install the dependencies:

```
git clone https://github.com/megactek/wwtbam.git
cd wwtbam
npm install
```


Next, start the development server:

```npm start```


The app will now be running at http://localhost:3000/.

## Adding Questions

To add your own questions to the game, open the `questions.json` file in the root of the project and add an object for each question. The object should have the following structure:

```
{
"question": "What is the capital of France?",
"answers": [
"Paris",
"London",
"Rome",
"Berlin"
],
"correctAnswer": "Paris"
}

```


The `question` field should contain the question text, the `answers` field should contain an array of possible answers, and the `correctAnswer` field should contain the correct answer. 

## Contributing

If you'd like to contribute to the project, please fork the repository and make your changes in a separate branch. Once you're ready to submit your changes, open a pull request and we'll review your code before merging it into the main branch. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
