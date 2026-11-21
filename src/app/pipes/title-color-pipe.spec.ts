import { TitleColorPipe } from './title-color-pipe';

describe('TitleColorPipe', () => {
  it('should create an instance', () => {
    const pipe = new TitleColorPipe();
    expect(pipe).toBeTruthy();
  });

  it('devrait retourner red si > 10 et green sinon', () => {
    const pipe = new TitleColorPipe();
    expect(pipe.transform(12)).toBe('red');
    expect(pipe.transform(8)).toBe('green');
  });
});
