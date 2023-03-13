/*
	1. Типы данных
	2. Переменные
	3. Свойства и методы
	4. Функции
	5. Узнаем как упрявлять DOM (document object model)
	6. Научимся отслеживать события
	7. Научимся изменять классы у элементов
*/


// Типы данных
// 1. String - строка. Обрамляются кавычками: ', ", `
// 2. Number - число. 434, 2, 44, 90
	// let num = 2 + 2 // 4
	// let string = 'зеленое ' + 'яблоко' // 'зеленое яблоко'
	// let string2 = 'у нас ' + 2 + ' зеленых яблока' // 'у нас 2 зеленых яблока'
	// console.log(10 + '10')
// 3. Boolean - логический тип данных. true(1) или false(0).
	// 10 > 1 - true
	// 10 > 100 - false
// 4. Undefined - неопределен
// 5. BigInt - большое число 2^53 + 1
// 6. Symbol
// 7. Null
// 8. Object

// Объект
// let user = {
// 	height: 180,
// 	weight: {
// 		summer: 80,
// 		winter: 100,
// 	},
// 	go: function() {
// 		console.log('я пошел')
// 	}
// }

// user.go()

// Массив
// let users = [ 'Artem', 'Mansur', 'Tema', 'Ayan' ]

// Переменные
// let - изменяемая переменная
// const - неизменяемая переменная
// var - глобальная изменяемая переменная


// const name = 'Artem'
// console.log(name)

// Функции
// function sayHello() {
// 	console.log('Hello, world!')
// }

// function sayMyName(name, old, height, weight) {
// 	console.log("Твое имя:", name, old, height)
// }

// const getMyOld = (old) => {
// 	console.log("Твой возраст:", old)
// }

// sayMyName('Artem')
// getMyOld(22)
// getMyOld(22)
// sayHello()
// sayMyName('Artem', 22, 190)

// Поиск элементов в DOM
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.body

// console.log(body)

// Обработчик событий
burger.addEventListener('click', function() {
	// console.log('Я кликнул по бургеру')

	// Изменить класс у элемента
	// burger.classList.add('is-close')
	// console.log(burger.classList.contains('is-close'))
	// burger.classList.remove('is-close')
	burger.classList.toggle('is-close')
	menu.classList.toggle('is-show')
	body.classList.toggle('is-lock')
})