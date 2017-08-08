var str = "January,February,March,April,May,June,July,August,September,October,November,December";
var arr = str.split(',');
var winter = {
    month_1 : arr[0],
    month_2 : arr[1],
    month_12 : arr[11]
};
var spring = {
    month_3 : arr[2],
    month_4 : arr[3],
    month_5 : arr[4]
};
var summer = {
    month_6 : arr[5],
    month_7 : arr[6],
    month_8 : arr[7]
};
var autumn = {
    month_9 : arr[8],
    month_10 : arr[9],
    month_11 : arr[10]
};

winter.month_1 = {
    name: arr[0],
    number: "1",
    days: "31"
};
winter.month_2 = {
    number: "2",
    days: "28",
    name: arr[1]
};
winter.month_12 = {
    number: "12",
    days: "31",
    name: arr[11]
};
spring.month_3 = {
    name: arr[2],
    number: "3",
    days: "31"
};
spring.month_4 = {
    name: arr[3],
    number: "4",
    days: "30"
};
spring.month_5 = {
    name: arr[4],
    number: "5",
    days: "31"
};
summer.month_6 = {
    name: arr[5],
    number: "6",
    days: "30"
};
summer.month_7 = {
    name: arr[6],
    number: "7",
    days: "31"
};
summer.month_8 = {
    name: arr[7],
    number: "8",
    days: "31"
};
autumn.month_9 = {
    name: arr[8],
    number: "9",
    days: "30"
};
autumn.month_10 = {
    name: arr[9],
    number: "10",
    days: "31"
};
autumn.month_11 = {
    name: arr[10],
    number: "11",
    days: "3"
};

console.log(winter);
console.log(spring);
console.log(summer);
console.log(autumn);

// Я исправил, прошлое задание. Взял Ваш код за основу. Просмотрите.



