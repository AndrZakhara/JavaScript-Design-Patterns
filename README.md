# JavaScript-Design-Patterns

        «Модуль» — это популярная реализация паттерна, инкапсулирующего приватную информацию, состояние и структуру, используя замыкания.
        
        Pattern Module - инкапсулирует состояние, структуру и любую приватную информацию объекта.

        (function() {

             var message = "Hi!";

             function showMessage() {

             console.log( message );
        }

        showMessage();

        })();
