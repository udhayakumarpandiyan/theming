import projectTheme from '../theme';

describe('Load test', () => {
    it('should have values', () => {
        expect(projectTheme.palette).toBeDefined();
    });
});
