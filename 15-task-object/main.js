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
    addTask: function(title, priority) {
        const ids = this.tasks.map(el => {
            return el.id
        })
        const maxId = Math.max(...ids)
        const newTask = {
            title,
            id: maxId + 1,
            priority
        }

        this.tasks.push(newTask)
    },
    deleteTaskById: function(id) {
        const ElemId = this.tasks.find(task => task.id === id)
        const ElemIndex = this.tasks.indexOf(ElemId)
        this.tasks.splice(ElemIndex, 1)
    },
    updateNameById: function(id, name) {
        const ElemId = this.tasks.find(task => task.id === id)
        ElemId.title = name
    },
    sortPriority: function(sortDirect) {
        this.tasks.sort((a, b) => {
            if (sortDirect === 'возрастанию') {
                if (a.priority > b.priority) {
                    return 1
                } else if (a.priority < b.priority) {
                    return -1
                }
            }
            if (sortDirect === 'убыванию') {
                if (a.priority < b.priority) {
                    return 1
                } else if (a.priority > b.priority) {
                    return -1
                }
            }
        })
    }
};

// taskManager.addTask('Покурить', 1)
// taskManager.deleteTaskById(5)
// taskManager.updateNameById(1, 'Поиграть')
// taskManager.sortPriority('убыванию')
console.log(taskManager.tasks)