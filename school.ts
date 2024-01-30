// Определяем тип для представления занятия
type Lesson = {
    id: number;
    subject: string;
    teacher: string;
    time: string;
};
  
  // функция для добавления занятия
function addLesson(lessons: Lesson[], subject: string, teacher: string, time: string): Lesson[] {
    const id = lessons.length + 1;
    const newLesson: Lesson = { id, subject, teacher, time };
    return [...lessons, newLesson];
}
  
  // функция для удаления занятия
function removeLesson(lessons: Lesson[], id: number): Lesson[] {
    return lessons.filter(lesson => lesson.id !== id);
}
  
  // функция для поиска занятия по предмету
function findLessonBySubject(lessons: Lesson[], subject: string): Lesson[] {
    return lessons.filter(lesson => lesson.subject.toLowerCase().includes(subject.toLowerCase()));
}
  
  // фкнкция для вывода списка всех занятий
function getAllLessons(lessons: Lesson[]): Lesson[] {
    return lessons;
}
  

let lessons: Lesson[] = [];
lessons = addLesson(lessons, 'Математика', 'Иванова', '8:00');
lessons = addLesson(lessons, 'Физика', 'Петров', '9:30');
  
console.log('Вывод всех занятий')
console.log(getAllLessons(lessons));
console.log('______________________________________________')
console.log('Поиск занятия по предмету')
console.log(findLessonBySubject(lessons, 'математика'));
console.log('______________________________________________')
console.log('удаление занятий по 1 id')
lessons = removeLesson(lessons, 1);
console.log('______________________________________________')
console.log('Вывод всех занятий')
console.log(getAllLessons(lessons));