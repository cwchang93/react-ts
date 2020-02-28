"use strict";
exports.__esModule = true;
// TS03 enum 枚舉類型
// value可自訂
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Mon"] = 5] = "Mon";
    weekDays[weekDays["Tue"] = 9] = "Tue";
    weekDays[weekDays["Wed"] = 10] = "Wed";
    weekDays[weekDays["Thr"] = 11] = "Thr";
    weekDays[weekDays["Fri"] = 12] = "Fri";
})(weekDays || (weekDays = {}));
console.log('weekDays.Mon', weekDays.Mon);
console.log('weekDays', weekDays);
console.log('weekDays[0]', weekDays[0]);
