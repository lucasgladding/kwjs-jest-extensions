import type { Assertion, AsymmetricMatchersContaining } from 'vitest'
import {DateTime} from 'luxon';

interface CustomMatchers<R = unknown> {
    toExist(): R
    toContainSameYear(date: DateTime): R
    toHaveInput(name: string): R
    dateContainingSameYear(date: DateTime): R
}

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}
