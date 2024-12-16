import { loadFile } from '../utils/index.js'; 
import { calculateDistance } from './calculate.js';
import { calculateSimilarityScore } from './calculate.js';

async function main() {
    try {
        // Read the input file asynchronously
        const data = await loadFile('./input.txt');
        
        // Calculate the total distance
        const result = calculateDistance(data);

        //calculate the similarity score
        const resultOfSimilarity = calculateSimilarityScore(data);

        // Print the result
        console.log("Total distance between lists:", result);
        console.log("Similarity score between lists:", resultOfSimilarity);
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
