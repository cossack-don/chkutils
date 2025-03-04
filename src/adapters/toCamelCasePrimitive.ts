// v1
// export function toCamelCasePrimitive (str: string = ""): string {
//   if (!str) return "";
//
//   return String(str)
//     .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
//     .replace(/[^A-Za-z0-9]+/g, "$")
//     .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}$${b}`)
//     .toLowerCase()
//     .replace(/(\$)(\w)/g, (m, a, b) => b.toUpperCase());
// }

//v2
export function toCamelCasePrimitive(str: string = ""): string {
  if (!str) return "";

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "") // Удаляем начальные и конечные небуквенно-цифровые символы
    .replace(/[^A-Za-z0-9]+/g, "$") // Заменяем все небуквенно-цифровые символы на $
    .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}$${b}`) // Добавляем $ между строчной и заглавной буквой
    .replace(/([A-Z]+)([A-Z][a-z])/g, (m, a, b) => `${a}$${b}`) // Добавляем $ между несколькими заглавными буквами и следующей заглавной буквой
    .replace(/(\d)([A-Za-z])/g, (m, a, b) => `${a}$${b}`) // Добавляем $ между цифрой и буквой
    .toLowerCase() // Приводим к нижнему регистру
    .replace(/(\$)(\w)/g, (m, a, b) => b.toUpperCase()); // Преобразуем $ и следующую букву в заглавную
}
