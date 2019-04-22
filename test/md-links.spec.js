const { fileExists, relativeToAbsolute } = require('../src/md-links');


describe('fileExists', () => {
  it('It should return true if the file exists', () => {
    expect(fileExists('src/prueba.md')).toBe(true);
  });
  it('It should return false if the file doesn\'t exists', () => {
    expect(fileExists('prueba.md')).toBe(false);
  });
});

describe('relativeToAbsolute', () => {
  it('It should return an absolute path given the relative path', () => {
    expect(relativeToAbsolute('prueba.md')).toBe('C:\\Proyectos\\GDL002-md-links\\prueba.md');
  });
});

describe('fileIsMD', () => {
  it('It shoukd return true if the file is .md', () => {
    expect(fileIsMD(url)).toBe(true);
  })
})