import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setResponse }) => {
    const [jsonInput, setJsonInput] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            const parsedData = JSON.parse(jsonInput);
            if (!parsedData.data || !Array.isArray(parsedData.data)) {
                throw new Error("Invalid JSON format");
            }

            const { data } = await axios.post("https://your-backend.onrender.com/bfhl", parsedData);
            setResponse(data);
            setError("");
        } catch (err) {
            setError("Invalid JSON format or API error");
            setResponse(null);
        }
    };

    return (
        <div className="p-5 w-full max-w-lg">
            <textarea
                className="w-full p-2 border border-gray-400 bg-gray-800 text-white rounded-md"
                rows="4"
                placeholder='Enter JSON (e.g., {"data": ["A", "C", "z"]})'
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
            />
            <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 mt-3 rounded-md">
                Submit
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default InputForm;
