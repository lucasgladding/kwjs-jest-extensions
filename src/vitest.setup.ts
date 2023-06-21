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
});
