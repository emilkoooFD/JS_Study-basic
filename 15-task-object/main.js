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