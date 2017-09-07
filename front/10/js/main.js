// На странице есть форма с элементами:
//     - текстовый инпут "Имя"
// - текстовый инпут "Логин"
//
// - текстовый инпут "Пароль"
//
// - текстовый инпут "Email"
//
// под каждым элементом есть свой чекбокс, который отвечает за валидацию (если отмечен, валидация нужна)
//
// Используя статические методы конструктора, сделать универсальную функцию-конструктор, которая будет уметь создавать
// объекты с разными свойствами и методами.  Все поля не обязательные, в зависимости от заполнения пользователем формы
// (а также отметки в чекбоксе) нужно создавать объекты с разными свойствами и методами, но все это должен делать один
// конктруктор. (Информация с полей должна записыватся в свойства и если отмечен чекбокс добавлятся метод валидации)

var userInfo = [];


("#submit").click(function (event) {
    event.preventDefault();
    $("form div").each(function () {
            var key = $(this).children("input[name]").attr("name"), value = $(this).children("input[name]").val();
            var prop;
            if ($(this).children("input[tupe='checkbox']").prop("checked")) {
                prop = New.withValidate(key, value);
            } else {
                prop = new New(key, value);
            }
            userInfo.push(prop);
    });
   $("input[name]").val("");
   $("input[type='checkbox']").prop("checked", false);
   console.log(userInfo);
});

function New(key, value) {
    this[key] = value;
}
New.withValidate = function (key, value) {
 var prop = new New(key, value);
 prop.validate = function () {
     console.log("validation");
 };
 return prop;
};


//var (i=0; i<form.elements.length, i++)