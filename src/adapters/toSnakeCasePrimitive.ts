//v1

// export function toSnakeCasePrimitive(str: string = ""): string {
//   if (!str) return "";
//
//   return String(str)
//     .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
//     .replace(/([a-z])([A-Z])/g, (m, a, b) => a + "_" + b.toLowerCase())
//     .replace(/[^A-Za-z0-9]+|_+/g, "_")
//     .toLowerCase();
// }

//v2
export function toSnakeCasePrimitive(str: string = ""): string {
  if (!str) return "";

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "") // Удаляем начальные и конечные небуквенно-цифровые символы
    .replace(/([a-z])([A-Z])/g, (_, a, b) => a + "_" + b.toLowerCase()) // Обрабатываем переход от строчной к заглавной букве
    .replace(/([A-Z]+)([A-Z][a-z])/g, (_, a, b) => a.toLowerCase() + "_" + b.toLowerCase()) // Обрабатываем несколько заглавных букв подряд
    .replace(/([a-zA-Z])(\d)/g, (_, a, b) => a.toLowerCase() + "_" + b) // Обрабатываем переход от буквы к цифре
    .replace(/(\d)([a-zA-Z])/g, (_, a, b) => a + "_" + b.toLowerCase()) // Обрабатываем переход от цифры к букве
    .replace(/[^A-Za-z0-9]+|_+/g, "_") // Заменяем все небуквенно-цифровые символы и множественные подчеркивания на одно подчеркивание
    .toLowerCase(); // Приводим к нижнему регистру
}
