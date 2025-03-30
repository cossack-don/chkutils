# Method returnDefaultField

Возвращает true, если значение является корректным объектом Date, иначе false

  ```ts
// 1. Базовый пример с default payload
const result1 = returnDefaultField(undefined);
console.log(result1); // { text: 'Нет данных' } (использовано значение по умолчанию)

// 2. Пример с передачей значения
const result2 = returnDefaultField("Данные получены");
console.log(result2); // "Данные получены" (возвращено переданное значение)

// 3. Пример с null
const result3 = returnDefaultField(null);
console.log(result3); // { text: 'Нет данных' } (null обрабатывается как undefined)

// 4. Пример с кастомным payload
const result4 = returnDefaultField(undefined, { text: "Данные отсутствуют" });
console.log(result4); // { text: 'Данные отсутствуют' }

// 5. Пример с числовым значением
const result5 = returnDefaultField(42);
console.log(result5); // 42

// 6. Пример с объектом
const user = { name: "Алексей" };
const result6 = returnDefaultField(user);
console.log(result6); // { name: 'Алексей' }

// 7. Пример с массивом
const result7 = returnDefaultField(["a", "b", "c"]);
console.log(result7); // ['a', 'b', 'c']

// 8. Пример с кастомным типом payload
interface CustomPayload {
	message: string;
	code: number;
}
const result8 = returnDefaultField<string, CustomPayload>(
	undefined,
	{ message: "Ошибка", code: 404 }
);
console.log(result8); // { message: 'Ошибка', code: 404 }
  ```