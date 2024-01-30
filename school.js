var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// функция для добавления занятия
function addLesson(lessons, subject, teacher, time) {
    var id = lessons.length + 1;
    var newLesson = { id: id, subject: subject, teacher: teacher, time: time };
    return __spreadArray(__spreadArray([], lessons, true), [newLesson], false);
}
// функция для удаления занятия
function removeLesson(lessons, id) {
    return lessons.filter(function (lesson) { return lesson.id !== id; });
}
// функция для поиска занятия по предмету
function findLessonBySubject(lessons, subject) {
    return lessons.filter(function (lesson) { return lesson.subject.toLowerCase().includes(subject.toLowerCase()); });
}
// фкнкция для вывода списка всех занятий
function getAllLessons(lessons) {
    return lessons;
}
var lessons = [];
lessons = addLesson(lessons, 'Математика', 'Иванова', '8:00');
lessons = addLesson(lessons, 'Физика', 'Петров', '9:30');
console.log('Вывод всех занятий');
console.log(getAllLessons(lessons));
console.log('______________________________________________');
console.log('Поиск занятия по предмету');
console.log(findLessonBySubject(lessons, 'математика'));
console.log('______________________________________________');
console.log('удаление занятий по 1 id');
lessons = removeLesson(lessons, 1);
console.log('______________________________________________');
console.log('Вывод всех занятий');
console.log(getAllLessons(lessons));
