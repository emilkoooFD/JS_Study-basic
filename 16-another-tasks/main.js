// Основное содержание:

// Введение
// Обзор предыдущего задания: создание мини Task Manager'a с базовыми свойствами (ID, Name, Order).
// Расширение задачи
// Ввод нового типа задачи с дополнительным свойством Description.
// Цель: расширить функциональность без изменения исходных методов.

'use strict'
const taskManager = {
    tasks: [
        {
            title: "Сходить в магазин",
            id: 1,
            priority: 3,
        }
    ],
    lastId: 4,
    addTask(obj) {
        this.tasks.push({...obj, id: ++this.lastId})
    },
    deleteTaskById(id) {
        const task = findObjBind(id)
        if(task){
            this.tasks = this.tasks.filter(f => f.id !== task.id)
            console.log(`Задача с ID = ${task.id} - удалена`);
        }
        return this
    },
    updateNameById(obj) {
        if (!obj.id) {
            return obj
        }
        const task = findObjBind(obj.id)
        if (task) {
            if (task.title) {
                task.title = obj.title
            }
            if (task.name) {
                task.name = obj.name
            }
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

const newTask = {
    tasks: [
        {
            name: "Сходить в магазин",
            id: 1,
            description: 'Пятерка',
            order: 0
        }
    ],
    lastId: 3
}

Object.assign(taskManager, newTask)

// Вызовы
taskManager.addTask.call(newTask, {name: 'Попить', description: 'Воду', order: 2});
taskManager.addTask.call(newTask, {name: 'Помыться', description: 'В душе', order: 2});
taskManager.deleteTaskById.call(newTask, 3);
taskManager.updateNameById.call(newTask, {id: 2, name: 'Полежать'})
taskManager.sortPriority.call(newTask, 'убыванию')

console.log(newTask)