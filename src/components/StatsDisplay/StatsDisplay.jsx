// StatsDisplay component displays character count, word count, and optionally reading time.
function StatsDisplay({stats, showReadingTime=false}) {
  return (
    <div className="shadow-md w-full p-4 border border-gray-300 rounded-lg mt-5">    
     <div className="flex">
      <div className="mx-3">
        Characters: {stats.CharacterCount}
      </div>
      <div className="mx-3">
        Words:{stats.CharacterCount===0? 0: stats.wordCount}
      </div>
      <div className="mx-3">
        Reading Time: {showReadingTime? stats.readingTime: "0:00"}
      </div>
    </div>
      <div className="mt-2 text-sm text-gray-400 flex justify-center">
        <p>Min: 25 | Max: 1000 </p>
      </div>
    </div>
  );
}
export default StatsDisplay; // Exporting the component so it can be used in other files
