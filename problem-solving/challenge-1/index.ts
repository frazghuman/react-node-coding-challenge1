export const numbersFractionCalculator = (numbers: number[]) => {
    const totalValueByProperty = { 
        positives: 0,
        negative: 0,
        zeros: 0
    }

    const totalNumbers: number = numbers.length;

    numbers.forEach(number => {
        if (number > 0) {
            totalValueByProperty.positives++;
        } else if (number < 0) {
            totalValueByProperty.negative++;
        } else {
            totalValueByProperty.zeros++;
        }
    })

    return {
        positives: (totalValueByProperty.positives > 0 ? (totalValueByProperty.positives / totalNumbers) : 0).toFixed(6),
        negative: (totalValueByProperty.negative > 0 ? (totalValueByProperty.negative / totalNumbers) : 0).toFixed(6),
        zeros: (totalValueByProperty.zeros > 0 ? (totalValueByProperty.zeros / totalNumbers) : 0).toFixed(6)
    }


};
