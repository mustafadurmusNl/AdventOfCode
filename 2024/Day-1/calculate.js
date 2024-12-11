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
