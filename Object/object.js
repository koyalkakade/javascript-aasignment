//1. create and modify object
console.log('1. ------------create and modify object-------------')
student = {
    name: 'Niyara',
    age: 25,
    grade: 'A'
}
console.log('studend obect:- ', student)
student.subject = 'Math';
student.grade = 30;
delete student.age
console.log('studend obect:- ', student)

//2.nested object
console.log('2. ------------nested object-------------')
const book = {
    title: 'Ramayana',
    author: 'Valmiki',
    details: {
        pages: 100,
        genre: 'genre'
    }
}
console.log('pages:', book.details.pages, ' genre:', book.details.genre)

//3. loop through an object
console.log('3. ------------loop through an object-------------')
const product = {
    name: 'book',
    price: 500,
    isStock: true
}

for (let key in product) {
    console.log(key, ':', product[key]);
}

//4. calculator
console.log('4. ------------calculator-------------')
const calculator = {
    a: 45,
    b: 45,
    add: function () {
        return this.a + this.b
    },
    sub: function () {
        return this.a - this.b
    },
    mul: function () {
        return this.a * this.b
    },
    div: function () {
        return this.a / this.b
    }
}

addition = calculator.add()
console.log('add: ', addition)

subtraction = calculator.sub()
console.log('sub: ', subtraction)

multiplication = calculator.mul()
console.log('mul: ', multiplication)

division = calculator.div()
console.log('division: ', division)

//5. compare objects
console.log('5. ------------compare objects-------------')
const person1={
     name:'mayra',
     age:20
}

const person2={
     name:'nayra',
     age:24
}

if(person1.name==person2.name && person1.age==person2.age){
  console.log('comparision: ',true)
}
else{
    console.log('person1 name: ',person1.name,' and person2 name: ',person2.name)
    console.log('comparision: ',false)  
}

//6.mini task management
console.log('6. ------------mini task management-------------')

const task={
    task1:'Excersize',
    task2:'timepass',
    task3:'Beakfast',
    task4:'Study',
    task5:'Watch Tv'
}

console.log('add task- ',task.task6='Lunch')
console.log('show task- ',task)
console.log('delete task task5- ',delete task.task5)
console.log('update task task2- ',task.task2='Bath')
console.log('after delete and update show task- ',task)

