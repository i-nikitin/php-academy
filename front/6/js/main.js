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
var arr = str.slice (0, -1);
var text = arr.split(". ");

if (var i=0; i< text.length; i++) {
    text[i] = text[i].split(" ");
    text[i].sort(sortWord);
    text[i] = text[i].join(" ");
    text[i] += ".";
}
 resalt = text.join(" ");
function sortWord(a, b)
{
    return b.length - a.length;

    // return a.length - b.length;
}
alert(str);
alert (resalt);

//Я чесно не смог придумать свой код, так как немного потерял суть. Я взял за основу Ваш код.
