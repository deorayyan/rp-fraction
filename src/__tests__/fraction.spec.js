import Fractions from '../lib/fractions';

describe('Valid Input Test:', () => {
    it('Should return "1 x Rp10000, 1 x Rp5000" if the input is 15000', () => {
        expect(Fractions(15000)).toEqual(
            expect.arrayContaining([
                { fraction: 10000, total: 1, isLeft: false },
                { fraction: 5000, total: 1, isLeft: false }
            ])
        );
    });

    it('Should return "1 x Rp2000, 1 x Rp1000, 1 x Rp500, 4 x Rp100" if the input is Rp3900', () => {
        expect(Fractions('Rp 120.325')).toEqual(
            expect.arrayContaining([
                { fraction: 100000, total: 1, isLeft: false },
                { fraction: 20000, total: 1, isLeft: false },
                { fraction: 100, total: 3, isLeft: false },
                { fraction: 25, total: 1, isLeft: true }
            ])
        );
    });

    it('Should return "2 x Rp2000, 1 x Rp1000" if the input is 005.000', () => {
        expect(Fractions('17,500')).toBe('Error validation');
    });
    it('Should return "2 x Rp2000, 1 x Rp1000" if the input is 005.000', () => {
        expect(Fractions('17.500 Rp')).toBe('Error validation');
    });
    it('Should return "2 x Rp2000, 1 x Rp1000" if the input is 005.000', () => {
        expect(Fractions('17 500')).toBe('Error validation');
    });
});
