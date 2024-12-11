import { loadFile } from '../utils/index.js';
import { calculateCalibrationSum } from './calculate.js';

async function main() {
    try {
        // Read the input file asynchronously
        const data = await loadFile('./input.txt');
        
        // Calculate the calibration sum
        const result = calculateCalibrationSum(data);

        // Print the result
        console.log("Sum of calibration values:", result);
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
