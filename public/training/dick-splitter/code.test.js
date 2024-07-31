
describe('dickSplitter', function () {
    it('должен разбить строку на массив слов', function () {
        const glassDick = 'my dick is big';
        const result = dickSplitter(glassDick);
        expect(result).to.deep.equal(['my', 'dick', 'is', 'big']);
    });

    it('должен правильно обрабатывать строку с несколькими пробелами', function () {
        const glassDick = 'my  dick   is    big';
        const result = dickSplitter(glassDick);
        console.log(result);

        expect(result).to.deep.equal(['my', 'dick', 'is', 'big']);
    });

    it('должен возвращать массив из одного элемента для строки без пробелов', function () {
        const glassDick = 'bigdick';
        const result = dickSplitter(glassDick);
        expect(result).to.deep.equal(['bigdick']);
    });
});
