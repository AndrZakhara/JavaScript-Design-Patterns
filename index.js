// Lекоратор makeLogging(func, log), для функции func возвращающий обёртку,
// которая при каждом вызове добавляет её аргументы в массив log.

function work(a, b) {
    console.log( a + b );
}

function makeLogging(f, log) {

    function wrapper() {
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }

    return wrapper;
}

const log = [];
work = makeLogging(work, log);

work(1, 2);
work(4, 5);

for (let i = 0; i < log.length; i++) {
    const args = log[i];
    console.log( 'Лог: ' + args.join() );
}