// enum 枚舉類型
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Mon"] = 3] = "Mon";
    weekDays[weekDays["Tue"] = 4] = "Tue";
    weekDays[weekDays["Wed"] = 5] = "Wed";
    weekDays[weekDays["Thr"] = 6] = "Thr";
    weekDays[weekDays["Fri"] = 7] = "Fri";
})(weekDays || (weekDays = {}));
console.log('weekDays.Mon', weekDays.Mon);
console.log('weekDays', weekDays);
console.log('weekDays[0]', weekDays[0]);
