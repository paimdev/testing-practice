const analyzeArray = (array) => {
    const arrayInfo = {
        average: array.reduce((a, i) => a + i, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }

    return arrayInfo;
};
export default analyzeArray;
