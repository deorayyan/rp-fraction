export default input => {
    // Pattern
    const pattern = /^(Rp)?\s?0*(\d{1,3}\.(\d{3}\.)*\d{3}|\d+)(,00)?$/g;

    if (!pattern.test(input)) {
        return 'Error validation';
    }

    // Fraction
    const fractions = [
        100000,
        50000,
        20000,
        10000,
        5000,
        2000,
        1000,
        500,
        100,
        50
    ];

    // Result
    let balance = parseInt(
        input
            .toString()
            .replace(pattern, '$2')
            .replace(/\./g, '')
    );
    let result = [];

    // Loop balance until 0
    while (balance > 0) {
        // Get fraction that the value less equal the balance
        const fraction = fractions.find(val => val <= balance);

        // Check if has fraction or else just push remaining balance
        if (fraction) result.push(fraction);
        else result.push(balance);

        // Decrease balance, set balance to 0 if fraction not found
        balance = fraction ? balance - fraction : 0;
    }

    // Reduce the result
    result = result.reduce((acc, val) => {
        if (acc.length === 0 || !acc.find(row => row.fraction === val))
            acc.push({ fraction: val, total: 1, isLeft: val < 50 });
        else
            acc.map(row => {
                if (row.fraction === val) row.total += 1;
                return row;
            });
        return acc;
    }, []);

    // Then, map the result
    // result = result.map(
    //     row => `${row.isLeft ? 'Left' : `${row.total} x`} Rp${row.fraction}`
    // );

    // console.log(result);

    return result;
};
