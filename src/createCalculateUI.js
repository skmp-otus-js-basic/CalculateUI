import {calculate} from "./calculate.js";

export function createCalculateUI(el) {
  el.innerHTML = `<input /><button>Кнопка</button><br><ul class='history'></ul>`;
  el.querySelector('button').addEventListener('click', () => {
    const value = el.querySelector('input').value;
    let li = document.createElement('li');
    const result = calculate(value);
    let text = `${value} = ${result}`;
    li.innerHTML = `${value} = ${result}`;
    el.querySelector('ul.history').append(li);
    el.querySelector('input').value = "";
  })
}