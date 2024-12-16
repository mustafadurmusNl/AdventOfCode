export function calculateDistance({ list1, list2 }) {
    // Sort both lists
    const sortedList1 = [...list1].sort((a, b) => a - b);
    const sortedList2 = [...list2].sort((a, b) => a - b);

    // Calculate the total distance by adding up the absolute differences
    let totalDistance = 0;

    for (let i = 0; i < sortedList1.length; i++) {
        totalDistance += Math.abs(sortedList1[i] - sortedList2[i]);
    }

    return totalDistance;
}

export function calculateSimilarityScore({ list1, list2 }) {
    // Create a frequency map for numbers in list2
    const frequencyMap = new Map();

    // Populate the frequency map with counts of each number in list2
    for (const num of list2) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Calculate the similarity score
    let similarityScore = 0;

    for (const num of list1) {
        const countInList2 = frequencyMap.get(num) || 0;
        similarityScore += num * countInList2;
    }

    return similarityScore;
}
