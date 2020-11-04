import { formatNumber } from './formatNumber';

describe('formatNumber', () => {
    describe('format with given numberOfDecimals', () => {
        it('should format correctly with 4 decimals', () => {
            expect(
                formatNumber('10.123456789', {
                    numberOfDecimals: 4,
                    locale: 'es-ES',
                })
            ).toBe('10.1235');
        });

        it('should format correctly with 2 decimals', () => {
            expect(
                formatNumber('10.0', {
                    numberOfDecimals: 2,
                    locale: 'es-ES',
                })
            ).toBe('10.00');
        });
        it('should format correctly with 0 decimals', () => {
            expect(
                formatNumber('10.0', {
                    numberOfDecimals: 0,
                    locale: 'es-ES',
                })
            ).toBe('10');
        });
    });

    describe('format with existing decimal precision (if numberOfDecimals is null)', () => {
        it('should format correctly with 4 decimals', () => {
            expect(
                formatNumber('10.5555', {
                    numberOfDecimals: null,
                    locale: 'es-ES',
                })
            ).toBe('10.5555');
        });

        it('should format correctly with 2 decimals', () => {
            expect(
                formatNumber('10.00', {
                    numberOfDecimals: null,
                    locale: 'es-ES',
                })
            ).toBe('10.00');
        });
        it('should format correctly with 0 decimals', () => {
            expect(
                formatNumber('10', {
                    numberOfDecimals: null,
                    locale: 'es-ES',
                })
            ).toBe('10');
        });
    });
});
