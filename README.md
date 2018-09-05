# JavaScript-Design-Patterns

Декоратор – приём программирования, который позволяет взять существующую функцию и изменить/расширить ее поведение.

Декоратор получает функцию и возвращает обертку, которая делает что-то своё «вокруг» вызова основной функции.

Пример функции декоратора bind:

function bind(func, context) {
  return function() {
      return func.apply(context, arguments);
  };
}

https://learn.javascript.ru/decorators
