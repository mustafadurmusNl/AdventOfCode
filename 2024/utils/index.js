import fs from 'fs';
import path from 'path';

// Utility function to load the file asynchronously
export async function loadFile(filePath) {
    return new Promise((resolve, reject) => {
        const fileAbsolutePath = path.resolve(filePath);

        // Read the file asynchronously
        fs.readFile(fileAbsolutePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                // Split the data into two lists based on the columns
                const lines = data.split('\n').map(line => line.trim());
                const list1 = [];
                const list2 = [];

                // Split each line into two numbers
                lines.forEach(line => {
                    const [left, right] = line.split(/\s+/).map(num => parseInt(num, 10));
                    list1.push(left);
                    list2.push(right);
                });

                resolve({ list1, list2 });
            }
        });
    });
}
