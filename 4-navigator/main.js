// Цель Задания:
// Разработать функционал простого навигатора для тренировки навыков программирования на JavaScript, 
// включающий в себя основы математики.

// Задача Программирования:
// Написать код, который рассчитывает расстояние от текущей точки до точки назначения, 
// представляя расчет как нахождение диагонали прямоугольника (используя основы тригонометрии или геометрии).
// Для расчетов можно воспользоваться приемами математики, вспомнить знания из школы или найти формулу в интернете.

const posLatitude = 6;
const posLongitude = 18;

const DestinLatitude = 23;
const DestinLongitude = 46;

const diffLatitude = DestinLatitude - posLatitude
const diffLongitude = DestinLongitude - posLongitude

const distance = Math.sqrt(posLongitude ** 2 + diffLongitude ** 2)

console.log(`Расстояние = ${distance}км`)
