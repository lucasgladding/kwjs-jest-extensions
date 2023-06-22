import type { Assertion, AsymmetricMatchersContaining } from 'vitest'
import {DateTime} from 'luxon';

type RequestConfig = {
    url: string,
    params?: object,
};

interface CustomMatchers<R = unknown> {
    dateContainingSameYear(date: DateTime): R
    dateOnOrAfterYear(year: number): R
    toContainSameYear(date: DateTime): R
    toExist(): R
    toHaveInput(name: string): R
    toReceiveRequest(url: string, config?: object): R
}

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}
