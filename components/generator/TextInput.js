const TextInput = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor={label}>
      {label}
    </label>
    <textarea
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id={label}
         value={value}
         onChange={onChange}
         rows="10"
       >

    </textarea>
    </div>
  );
};

export default TextInput;



