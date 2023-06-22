expect.extend({
    dateContainingSameYear(a, b) {
        const { isNot } = this
        return {
            pass: a.year === b.year,
            message: () => isNot ? 'contains same year' : 'does not contain same year'
        }
    },
    dateOnOrAfterYear(date, year) {
        const { isNot } = this
        return {
            pass: date.year >= year,
            message: () => isNot ? `contains date after ${year}` : `does not contain date after ${year}`
        }
    },
    toContainSameYear(wrapper, date) {
        const { isNot } = this
        const expected = date.toFormat('y');
        return {
            pass: wrapper.text().includes(expected),
            message: () => isNot ? 'contains same year' : 'does not contain same year'
        }
    },
    toExist(wrapper) {
        const { isNot } = this
        return {
            pass: wrapper.exists() === true,
            message: () => isNot ? 'exists' : 'does not exist'
        }
    },
    toHaveInput(wrapper, name) {
        const { isNot } = this
        const match = wrapper.find(`input[name='${name}']`);
        return {
            pass: match.exists() === true,
            message: () => isNot ? 'has input' : `does not have input ${name}`
        }
    },
    toReceiveRequest(client, targetURL, targetConfig) {
        const { isNot } = this
        let pass = true;
        try {
            if (targetConfig) {
                expect(client.get).toHaveBeenCalledWith(targetURL, targetConfig)
            } else {
                expect(client.get).toHaveBeenCalledWith(targetURL)
            }
        } catch (exception) {
            pass = false;
        }
        return {
            pass,
            message: () => isNot ? 'received request' : `did not receive request to ${targetURL}`
        }
    },
});
