expect.extend({
    toExist(received) {
        const { isNot } = this
        return {
            pass: received.exists() === true,
            message: () => `component does${isNot ? ' not' : ''} exist`
        }
    },
    toContainSameYear(received, expected) {
        const { isNot } = this
        const year = expected.toFormat('y');
        return {
            pass: received.text().includes(year),
            message: () => `does${isNot ? ' not' : ''} contain ${expected}`
        }
    },
    dateContainingSameYear(received, expected) {
        const { isNot } = this
        return {
            pass: received.year == expected.year,
            message: () => `date does${isNot ? ' not' : ''} contain same year ${expected}`
        }
    },
    toHaveInput(received, expected) {
        const { isNot } = this
        const match = received.find(`input[name='${expected}']`);
        return {
            pass: match.exists() === true,
            message: () => `does${isNot ? ' not' : ''} have input ${expected}`
        }
    },
});
