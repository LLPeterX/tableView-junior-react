# Тестовое задание на позицию frontend-разработчика

Разработать приложение React для отображения таблицы с данными.
Дополнительный плюс: приложение должно запускаться из Docker-контейнера
Время выполнения - 5 дней

## Функционал
* Сортировка по столбцам: при клике на заголовке столбца таблицы данные  сортируются по по возрастанию, 
при повторном клике - по убыванию. Отображать элемент текущего порядка сортировки
* Пагинация: вывод по 50 элементов на странице
* Фильтрация: компонент - текстовое поле. При вводе текста те строки таблицы, которые НЕ содержат введенную подстроку, скрываются. 
Перефильтрация осуществлятся при нажатии на кнопку "найти" (?)
* При клике на строку таблицы значения полей выводятся в дополнительном блоке под таблицей
* Над таблицей - кнопка "Добавить", при нажати на которую выпадает форма добавления ряда:
  id, firstName, lastName, email, phone.
После добавления всех инпутов появдлется кнопка "Добавить", которая вставляет введенные данные в начало таблицы

Для демонстрации сделать простую html-страницу

Пользователю предлагается выбрать набор данных - маленький или большой. Данные с сервера.

Данные в таблицу загружаются с сервера http://www.filltext.com
Сервер возвращает данные в виде массива JSON:
```
[
  {
   id: 101,
   firstName: "Sue",
   lastName: "Johnson",
   email: "sue@mail.ru",
   phone: "(712)211-6298",
   address: {
    streetAddress: "9782 Mattis str.",
    city: "Ablabla",
    state: "NY",
    zip: "33567"
   },
   description: "bla bla bla..."
 } 
]
```

##Отображение данных в таблице:

|------|-------------|------------|-------------|-------------|
| id ^ | firstName ^ | lastName ^ | email     ^ | phone     ^ |
|------|-------------|------------|-------------|-------------|
| 101  |Sue          |Corson      |DWally@n.gov |(612)211-6296|
|------|-------------|------------|-------------|-------------|
| 102  |Lor          |Ipsumd      |DWally@n.gov |(612)211-6295|
|------|-------------|------------|-------------|-------------|

* Маленький объем данных берется по ссылке: https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}

* Большой объем: https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}&address={addressObject}&description={lorem|32}

##Замечания

* Обратить внимание на скорость. Зависания интерфейса при фильтрации недопустимы.
* Во время загрузки отображать индикатор
* Код должен быть хорошим и готовым к переиспользованию
* Можно использовать bootstrap и пр. библиотеки, но без них будет небольшой плюс.
* js можно использовать для оформления, но не для решения задачи (?)
* Описать, как тестировался код


