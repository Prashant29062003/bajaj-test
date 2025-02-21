import { extractNumbersAndAlphabets } from "../utils/helpers.js";

// Hardcoded user details
const USER_ID = "prashant_kumar_10062003";
const EMAIL = "2237242.ece.cec@cgc.edu.in";
const ROLL_NUMBER = "2237242";

// POST: Process input data
export const processData = (req, res) => {
    try {
        const { data } = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input format" });
        }

        const { numbers, alphabets, highestAlphabet } = extractNumbersAndAlphabets(data);

        res.json({
            is_success: true,
            user_id: USER_ID,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            numbers,
            alphabets,
            highest_alphabet: highestAlphabet
        });

    } catch (error) {
        res.status(500).json({ is_success: false, message: "Server error" });
    }
};

// GET: Return hardcoded operation code
export const getOperationCode = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};
