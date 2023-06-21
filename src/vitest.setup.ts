expect.extend({
    toExist(received, expected) {
        const { isNot } = this
        return {
            pass: received.exists() === true,
            message: () => `component does${isNot ? ' not' : ''} exist`
        }
    }
});
