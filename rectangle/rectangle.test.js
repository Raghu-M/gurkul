const Rectangle = require('./rectangle');

describe('area', () => {

    const rectangle = new Rectangle(5, 2);

    it('should return 10 when given length is 5 and breadth is 2', () => {
        const result = rectangle.area();
        expect(result).toBe(10);
    });
    
});
