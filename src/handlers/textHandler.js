export function cardTextSlicer(description, length) {
    // Проверяем, что description не равен null или undefined
    if (!description) {
        return ''; // Возвращаем пустую строку, если описание не задано
    }

    // Если длина строки больше заданной длины
    if (description.length > length) {
        // Обрезаем строку до указанного количества символов
        description = description.slice(0, length - 1).trimEnd();

        // Убираем ненужные символы в конце строки (например, '.', '-', ',' и т.д.)
        description = description.replace(/[—.,-]+$/, '');

        // Добавляем две точки в конце
        description += '..';
    }

    return description;
};
