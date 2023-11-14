// data
// Пустой массив
let goallist = [];


// Ссылки на элементы

// Elements
let goalTitleInput = document.getElementById("goal-title");
let goalDescriptionInput = document.getElementById("goal-description");
let goalDataInput = document.getElementById("due-date");
let goalDateForm = document.getElementById("goal-form");
let addedGoals = document.getElementById("goals");



// 1 обработчик события "submit" на форму goalDateForm
// 2 В функции-обработчике предотвращаем отправку формы по умолчанию с помощью event.preventDefault
// 3 новый объект data, в котором будут храниться данные введенные пользователем
// 4 Присваивание свойствам объекта data, значения из полей goalTitleInput, goalDescriptionInput и goalDataInput
// 5 с помощью метода push добавляем объект data в конец массива goallist
// 6 renderGoalList для отображения списка  на странице


//  Event list

goalDateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = {};
  data.goalTitle = goalTitleInput.value;
  data.goalDescription = goalDescriptionInput.value;
  data.goalData = goalDataInput.value;

  goallist.push(data);

  renderGoalList();
});



// 1 создаем пустую строку goalsHtml, в которую будем добавлять HTML-код для каждой цели
// 2 для каждого элемента массива создаем новую строку HTML-кода, используя значения его свойств
// 3 добавляем созданную строку в переменную goalsHtml
// 4после завершения цикла, присваиваем переменную goalsHtml внутреннему HTML-содержимому элемента addedGoals,
// чтобы отобразить список целей
// 5 внутри добавляем кнопку "Delete" c обработчиком onclick,
// который будет вызывать функцию deleteGoal с передачей заголовка цели в качестве аргумента

function renderGoalList() {
  let goalsHtml = "";

  //цикл for 

  for (let i = 0; i < goallist.length; i++) {
    let dataObj = goallist[i];

    goalsHtml += `
    <li>
      <h3>${dataObj.goalTitle}</h3>
      <p>${dataObj.goalDescription}</p>
      <p>Due Date: ${dataObj.goalData}</p>
      <button>Edit</button>
      <button data-goal-title = "${dataObj.goalTitle}" onclick="deleteGoal()">Delete</button>
    </li>`;
  }
  addedGoals.innerHTML = goalsHtml;
}

// Метод массива filter к элементам,
//  которые содержат атрибут 'data-goal-title'

function deleteGoal()
// Фильтр создаёт массив из элементов,
//  для которых условие возвращаемого значения функции будет true 
{
  const currentItem = document.querySelector(['data-goal-title']);

  goallist = goallist.filter(item => item !== currentItem.getAttribute('data-goal-title'))
  //renderGoalList отображает обновленный список на странице
  renderGoalList()
}











function openModal(){
  const currentItem = document.querySelector('[data-goal-title]')
}
