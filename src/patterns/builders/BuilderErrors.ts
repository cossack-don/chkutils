

// TODO Метод не доделан, не типизирован и не до конца протестирован

//Statuses Errors
const listErrors = {
  400: {
    status: 400,
    message: 'Bad Request',
  },
  403: {
    status: 403,
    message: 'Forbidden',
  },
  404: {
    status: 404,
    message: 'Not Found',
  },
  422: {
    status: 422,
    message: 'Unprocessable Entity',
  },
  500: {
    status: 500,
    message: 'Internal Server Error',
  },
} as any;

//Сама конструкция обработки ошибок
export const BuilderErrors = {
  settings: {
    error: null,
  },

  // Метод для добавления обработчика ошибки
  addError: function (errorCode:any, callback:any) {
    // Проверяем, есть ли такой код ошибки в listErrors
    if (listErrors[errorCode]) {
      if (this.settings.error === listErrors[errorCode].status) {
        if (callback) callback();

        console.info(listErrors[errorCode].message);
      }
    } else {
      console.warn(`Unknown status code error: ${errorCode}`);
    }
    return this;
  },

  // Метод для установки текущей ошибки
  addCurrentStatusError: function (val:any) {
    if (!listErrors[val]) {
      console.warn(`Unknown status code: ${val}. Resetting to default state.`);

      this.settings.error = null; // Сбрасываем состояние
      return this; // Прерываем цепочку
    }

    // Если статус есть, устанавливаем его
    this.settings.error = val;
    return this;
  },
};




