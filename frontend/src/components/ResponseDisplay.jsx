import React, { useState } from "react";

const ResponseDisplay = ({ response }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <div className="p-5 w-full max-w-lg bg-gray-800 text-white rounded-md">
            <h2 className="text-xl font-semibold mb-3">Response Data</h2>

            <label className="block mb-2">Select Data to Display:</label>
            <select
                multiple
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md"
                onChange={(e) =>
                    setSelectedOptions([...e.target.selectedOptions].map((o) => o.value))
                }
            >
                <option value="alphabets">Alphabets</option>
                <option value="numbers">Numbers</option>
                <option value="highest_alphabet">Highest Alphabet</option>
            </select>

            <div className="mt-4">
                {selectedOptions.includes("alphabets") && (
                    <p>Alphabets: {JSON.stringify(response.alphabets)}</p>
                )}
                {selectedOptions.includes("numbers") && (
                    <p>Numbers: {JSON.stringify(response.numbers)}</p>
                )}
                {selectedOptions.includes("highest_alphabet") && (
                    <p>Highest Alphabet: {JSON.stringify(response.highest_alphabet)}</p>
                )}
            </div>
        </div>
    );
};

export default ResponseDisplay;
