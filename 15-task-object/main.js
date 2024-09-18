// Цель:
// Разработать простой таск-менеджер с базовыми функциями добавления, удаления, обновления и сортировки задач.

// Структура таск-менеджера:
// Объект таск-менеджера содержит одно свойство, в котором хранится массив задач. Каждая задача имеет:
// title (строка)
// id (число)
// priority (число)
// Основные методы:
// Добавление задачи:
// Принимает параметры: title и priority.
// Генерирует id (можно использовать инкремент последнего id).
// Добавляет новую задачу в массив.
// Удаление задачи по id:
// Принимает идентификатор задачи.
// Удаляет задачу с указанным id из массива.
// Обновление задачи:
// Принимает id задачи и параметры для обновления (например, новый title, новый приоритет).
// Обновляет информацию о задаче в массиве.
// Сортировка задач:
// Можно сортировать по id или приоритету.
// Реализует порядок сортировки (от меньшего к большему и наоборот).

'use strict'
const taskManager = {
    tasks: [
        {
            title: "Сходить в магазин",
            id: 1,
            priority: 3,
        },
        {
            title: "Приготовить кушать",
            id: 2,
            priority: 4,
        },
        {
            title: "Умыться",
            id: 3,
            priority: 2,
        },
        {
            title: "Покормить рыбок",
            id: 4,
            priority: 1,
        }
    ],
    lastId: 4,
    addTask(obj) {
        this.tasks.push({...obj, id: ++this.lastId})
    },
    deleteTaskById(id) {
        // const task = this.tasks.find(task => task.id === id)
        const task = findObjBind(id)
        if(task){
            this.tasks = this.tasks.filter(f => f.id !== task.id)
            console.log(`Задача с ID = ${task.id} - удалена`);
        }
        return this
    },
    updateNameById(obj) {
        // const task = this.tasks.find(task => task.id === id)
        if (!obj.id) {
            return obj
        }
        const task = findObjBind(obj.id)
        if (task) {
            task.title = obj.title
        }
        return task
    },
    sortPriority(sortDirect) {
        this.tasks.sort((a, b) => {
            if (sortDirect.toLowerCase() === 'возрастанию') {
                if (a.priority > b.priority) {
                    return 1
                } else if (a.priority < b.priority) {
                    return -1
                }
            }
            if (sortDirect.toLowerCase() === 'убыванию') {
                if (a.priority < b.priority) {
                    return 1
                } else if (a.priority > b.priority) {
                    return -1
                }
            }
        })
    }
};
const findObjBind = findObj.bind(taskManager)
function findObj(id) {
    return this.tasks.find(task => task.id === id)
}

taskManager.addTask({title: 'Покурить', priority: 1})
taskManager.addTask({title: 'Лечь', priority: 2})
taskManager.deleteTaskById(6)
taskManager.updateNameById({id: 1, title: 'Поиграть'})
// taskManager.sortPriority('Убыванию')
console.log(taskManager.tasks)