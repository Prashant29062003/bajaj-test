import React, { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";

function App() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        document.title = "ABCD123"; // Set Roll Number as Website Title
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
            <h1 className="text-3xl font-bold mb-6">BFHL API Frontend</h1>
            <InputForm setResponse={setResponse} />
            {response && <ResponseDisplay response={response} />}
        </div>
    );
}

export default App;
