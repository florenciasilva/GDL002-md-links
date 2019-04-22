const { 
  fileExists, 
  relativeToAbsolute, 
  fileIsMD, 
  fileHasContent, 
  getHrefWithText,
} = require('../src/md-links');

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
  it('It should return true if the file is .md', () => {
    expect(fileIsMD('C:\\Proyectos\\GDL002-md-links\\prueba.md')).toBe(true);
  });
});

describe('fileHasContent', () => {
  it('It should return "Hello testing" if its accurately reading the file', () => {
    fileHasContent('src/prueba.md').then((data) => {
      expect(data).toBe('Hello testing')});
  });
});

describe('getHrefWithText', () => {
  it('It should return an array of objects with URLs and their respective text', () => {
    expect(getHrefWithText('../README.md')).toBe('asdasd')
    });
});