export function cardTextSlicer(description, length) {
      // Если длина строки больше 120 символов
      if (description.length > length) {
          // Обрезаем строку до 120 символов
          description = description.slice(0, length - 1).trimEnd();
  
          // Убираем ненужные символы в конце строки (например, '.', '-', ',' и т.д.)
          description = description.replace(/[—.,-]+$/, '');
  
          // Добавляем две точки в конце
          description += '..';
      }
  
      return description;
  };
