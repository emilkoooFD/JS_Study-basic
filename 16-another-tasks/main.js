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
        },
        {
            name: "Поспать",
            id: 2,
            description: 'Дома',
            order: 1
        },
        {
            name: "Поесть",
            id: 3,
            description: 'Пиццу',
            order: 2
        },
    ],
    lastId: 3
}

// Присвоения
const addNewTask = taskManager.addTask;
const deleteNewTaskById = taskManager.deleteTaskById;
const updateNameNewTask = taskManager.updateNameById;
const sortPriorityNewTask = taskManager.sortPriority
Object.assign(taskManager, newTask)

// Вызовы
addNewTask.call(newTask, {name: 'Попить', description: 'Воду', order: 2});
addNewTask.call(newTask, {name: 'Помыться', description: 'В душе', order: 2});
// deleteNewTaskById.call(newTask, 3);
updateNameNewTask.call(newTask, {id: 2, name: 'Полежать'})
sortPriorityNewTask.call(newTask, 'убыванию')

console.log(newTask)