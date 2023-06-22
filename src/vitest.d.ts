import type { Assertion, AsymmetricMatchersContaining } from 'vitest'
import {DateTime} from 'luxon';

type RequestConfig = {
    url: string,
    params?: object,
};

interface CustomMatchers<R = unknown> {
    dateAfterYear(year: number): R
    dateContainingSameYear(date: DateTime): R
    toContainSameYear(date: DateTime): R
    toExist(): R
    toHaveInput(name: string): R
    toReceiveRequest(config: RequestConfig): R
}

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}
