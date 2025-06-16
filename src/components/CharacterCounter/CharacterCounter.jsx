// Importing necessary React functions and child components
import { useState } from "react";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";

// Define Component to count characters and words
function CharacterCounter(){
    // Declare State variables to hold the current input text
    const [charCount, setcharCount] = useState("");

    // State to hold calculated statistics like character count, word count, and reading time
    const [stats, setStats] = useState({
        CharacterCount: 0,
        wordCount: 0,
        readingTime:0,
    });

    //Handler function to update text and stats when the user types
    const handleCharcterCount = (newText) =>{
        console.log(newText)
        setcharCount(newText); //Update input text

        // Update stats: character count and word count
        setStats(prevStats=> ({ ...prevStats, 
            CharacterCount : newText.length, 
            wordCount: newText.trim().split(/\s+/).length

        }))
    }

    return (
        <div>
            <h2 className="font-bold text-xl">Character Counter App</h2>

            {/* Trigger/ call TextInput Component */}
            <TextInput onTextChange = {handleCharcterCount}/>

            {/* Trigger/ call StatsDisplay Component */}
            <StatsDisplay stats={stats}/>
        </div>
    )
}
export default CharacterCounter;