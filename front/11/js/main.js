// frontend
// Домашнее задание № 11
// Есть класс Components() в котором есть два публичных метода active и disabled, которые отвечают за включение
// выключения компонента. Создать класс Form() который унаследует Components() и будет уметь свои методы: валидации
// и отправки.
//     Также реализовать:
//     - переопределение метода активации, чтобы при активации формы, сразу запускалась и валидация
// - методы валидации и отправки, должны быть недоступны, если компонент выключен
// - сеттер/геттер для просмотра статуса формы

function Components(){
    var status = true;

    this.active = function () {
        status = true;
    };
    
    this.disabled = function () {
        status = false;
    };
 }

function Form() {
  Components.call(this);
  var elements = 0;
    this._validate = function (val) {
        elements = val;
    };
    this._send = function () {
        send = true;
    };
// переопределение метода
    var origActivate = this.active;
    this.active = function () {
        origActivate.call(this);
        this.validate();
    }
}

//сеттер/геттер
this.elements = function(amount) {
    // вызов без параметра, значит режим геттера, возвращаем свойство
    if (!arguments.length) return elements;

    // иначе режим сеттера
    if (amount < 0) {
        throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
        throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    elements = amount;
};

