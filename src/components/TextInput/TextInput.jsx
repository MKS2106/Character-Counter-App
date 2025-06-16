// This functional component accepts props to handle text changes, customize the placeholder, and provide an initial value.
function TextInput({
  onTextChange, // Callback function to pass the updated text to the parent component
  placeholder = "Start typing your content here...",
  initialValue = "",
}) {
  return ( 
    <div className="w-full">
        <textarea
        className="mt-5 shadow-md w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)} // Triggers the callback on every text change
        rows={6}
      />
    </div>
  );
}
export default TextInput; // Exporting the component so it can be used in other files
