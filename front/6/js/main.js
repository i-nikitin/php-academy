// Исходные текст: (Изначально записан в переменную с типом string)
//
//
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
// standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
// a type specimen book.
//
//
// Задача:
//
//
//     Сформировать из исходного текста новый, где все слова в каждом предложении будут идти в порядке уменьшения букв.
//То есть, каждое предложение должно начинатся с самого длинного по количеству букв слова и заканчиватся самым коротким.
//
//     Новый текст вывести на экран, в модальном окне или консоле.

var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
var arr = str.split(' ');
//alert(arr.length);

function sortWord(a,b)
{
    var s1 = " " + a;
    var s2 = " " + b;
    if(s1.length < s2.lenght){return 1;}
    else if(s1.length > s2.length){return -1;}
    return 0;
}
alert(arr.sort(sortWord) );
var str2 = arr.join(' ');
alert( str2 );
