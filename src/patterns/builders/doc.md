// Пример использования
// BuilderErrors
//  .addCurrentStatusError(505) // Известный статус
//  .addError(404, () => console.log('callback-404')) // Выполнится
//  .addError(500, () => console.log('callback-500')) // Не выполнится, так как статус 500 не установлен
//  .addError(505, () => console.log('callback-505')) // Не выполнится, так как статус 500 не установлен


//////////// Example
// import listErrors from 'package custom'

// Расширение объекта ошибок из вне метода
listErrors[505] = { status: 505, message: 'Test message' }

const api = async ()=>{
try {
//API or BL
// await fetch('https://jsonplaceholder.typicod222e.com/todos/1')
//    .then(response => response.json())
//    .then(json => console.log(json))
} catch(statusError){
BuilderErrors
.addCurrentStatusError(statusError) // Известный статус
.addError(listErrors[404].status, () => console.log('callback-404')) // Выполнится
.addError(listErrors[500].status, () => console.log('callback-500')) // Не выполнится, так как статус 500 не установлен
.addError(listErrors[505].status, () => console.log('callback-505')) // Не выполнится, так как статус 505 не установлен
}
}
