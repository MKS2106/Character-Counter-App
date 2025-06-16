# Chracter Counter Application
This is a small reusable component library built using **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. The application will allow users to input text and see real-time statistics about their input, including character count and word count. 

## Objective
- Implement state management using the useState hook.
- Build components that update their UI based on state changes.
- Implement the callback pattern for component communication.

# Your users should be able to:
- Input the text in the text area
- Get the character count in UI
- Get word count in UI



## Project Structure
src/
  components/
    TextInput/
      TextInput.tsx
    StatsDisplay/
      StatsDisplay.tsx
    CharacterCounter/
      CharacterCounter.tsx
  types/
    index.ts

## Component Requirements

- Text Input Components
- UserProfileCard Component
- ProductDisplay Component

### 1. Text Input Component
- Create a TextInput component that handles user input and communicates changes to its parent.

### 2. StatsDisplay Component
- Create a StatsDisplay component that shows various statistics about the text.

### 3. CharacterCounter Component
- Create a CharacterCounter component that combines the above components and manages the state.

## Example Interaction
- Upon loading the application Text area will be blank, Character count and word count will be set to 0
- Allows user to input the text in text area.
- Stats will be calculated and displayed.

## Example Usage
1.  App.jsx : triggers CharacterCounter module

import CharacterCounter from './components/CharacterCounter/CharacterCounter';
function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;

2. CharacterCoounter.jsx:
- It manages the text input state and calculates statistics.
- It renders the TextInput component to accept user input.
- It renders the StatsDisplay component to show character count,word count, and reading time.


## Pre-Requisite 
- Ensure you have a recent LTS (Long-Term Support) version of Node.js installed. Node.js includes npm (Node Package Manager). - You can verify your installation by opening your terminal or command prompt and running:
    " node -v "
    " npm -v "

## How to Run
1. Clone or download the project.
2. Navigate (cd) to the project folder
3. Install Dependencies run "npm install"
4. Start the development server by running "npm run dev"
5. Open the link in browser


## Reflection:
1. How did you handle state updates when the text changed?
# To update Text area:
-  Used "useState" to store the current input and it state. 
- created handler function update the text area using onChange  method
# To update stats: 
-  Used "useState" to store the current statistics for characters and words 
- used handler function update the statistics when there is any change in the input area.

2. How did you ensure the UI remained responsive during rapid text input?
- I kept the UI responsive by directly updating state using useState
- The statistics (character count and word count) are calculated immediately inside the onChange handler


3. What challenges did you face when implementing the statistics calculations?
- The challenge was accurately splitting the input text into words, especially handling extra spaces or line breaks. In the beginning i used "" to calculate word count but it was not giving the correct word count then after reading through I used a regex (\s+) to split text.





