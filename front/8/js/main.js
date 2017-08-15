// Четыре переменных типа string, в каких записаны CSS стили. В результате нужно сформировать массив из четырех
// элементов-объектов, где свойствами будут данные стили со своими значениями. А также, если встречаются одинаковые CSS
// свойства вместе со своими значением, вывести их в отдельном объекте совпадений.
var header = "{margin:25px;height:900px;width:100%}";
var main = "{padding:0 0 10px;margin:25px;width:100%}";
var wrap = "{margin:0 auto;width:960px}";
var footer = "{float:left;padding:0 0 10px;background:#eeaaa3}";
// console.log(typeof header);
header1 = header.replace( /{/g, "" );
header2 = header1.replace( /}/g, "" ).split(';');
main1 = main.replace( /{/g, "" );
main2 = main1.replace( /}/g, "" ).split(';');
wrap1 = wrap.replace( /{/g, "" );
wrap2 = wrap1.replace( /}/g, "" ).split(';');
footer1 = footer.replace( /{/g, "" );
footer2 = footer1.replace( /}/g, "" ).split(';');
var a = {header2, main2, wrap2, footer2};
console.log(a);
var css = {};
for (i in a) {
    if (css[a[i]]!= undefined) {
        (css[a[i]]++)
    } else {
        (css[a[i]] = 1)
    }
}
console.log(css);
//У меня не получилось вывести одинаковые значение в отдельный обьект. Почему??




