// This module handles the calibration sum calculation logic

export function calculateCalibrationSum(inputData) {
    let totalSum = 0;

    // Split the input into lines
    const lines = inputData.split('\n');

    for (const line of lines) {
        // Extract all digits from the line
        const digits = line.replace(/\D/g, ''); // Remove all non-digit characters

        // If there are at least one digit
        if (digits.length > 0) {
            let calibrationValue;
            
            // If there is only one digit, double it to form a two-digit number
            if (digits.length === 1) {
                const singleDigit = digits[0];
                calibrationValue = parseInt(singleDigit + singleDigit, 10); // Double the digit
            } else if (digits.length >= 2) {
                // If there are multiple digits, combine the first and last digits
                const firstDigit = digits[0];
                const lastDigit = digits[digits.length - 1];
                calibrationValue = parseInt(firstDigit + lastDigit, 10);
            }

            // Debug: Log extracted digits and calibration value
            console.log("Extracted digits:", digits);
            console.log(`Calibration Value: ${calibrationValue}`);

            // Add to the total sum
            totalSum += calibrationValue;
        }
    }

    return totalSum;
}
