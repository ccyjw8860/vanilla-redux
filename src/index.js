import {createStore} from 'redux';

const addBtn = document.querySelector('#add'),
minusBtn = document.querySelector('#minus'),
result = document.querySelector('#result'),
PLUS = 'ADD',
MINUS = 'MINUS';
let count = 1;

const plus = () =>{
  count++
  return {type:PLUS, count:count}
}

const minus = () =>{
  count--
  return {type:MINUS, count:count}
}

const reducer = (state = 0, action)=>{
  switch(action.type){
    case PLUS:
      return action.count
    case MINUS:
      return action.count
    default:
      return state
  }
}

const store = createStore(reducer);

const dispatchPlus = () =>{
  let result = plus();
  store.dispatch(result);
}

const dispatchMinus = () =>{
  let result = minus();
  store.dispatch(result);
}

const paintCount = () => {
  result.textContent = count;
}

store.subscribe(paintCount);

addBtn.addEventListener('click', dispatchPlus)
minusBtn.addEventListener('click', dispatchMinus)

const form = document.querySelector('#toDoForm'),
input = document.querySelector('input'),
ul = document.querySelector('ul'),
ADD = 'addToDo',
DEL = 'delToDo';

let id = 0;

const addToDo = (toDo) => {
  id++
  let li_id = `li_${id}`;
  return {type:ADD, text:toDo, id:li_id}
}

const delToDo = (e) => {
  const li = e.target.parentNode,
  id = li.id;
  return {type:DEL, id:id};
}

const toDoReducer = (states=[], action) => {
  switch(action.type){
    case ADD:
      return [...states, {text:action.text, id:action.id}]
    case DEL:
      return states.filter(state => state.id !== action.id)
    default:
      return states
  }
}

const toDoStore = createStore(toDoReducer);

const dispatchAddToDo = (e) =>{
  let toDo = input.value,
  result = addToDo(toDo);
  e.preventDefault();
  input.value = '';
  toDoStore.dispatch(result);
}

const dispatchDelToDo = (e) =>{
  e.preventDefault();
  const result = delToDo(e);
  toDoStore.dispatch(result);
}


const paintToDo = () =>{
  let toDos = toDoStore.getState();
  ul.innerHTML = '';
  toDos.forEach(toDo => {
    let li = document.createElement('li'),
    btn = document.createElement('button');
    btn.textContent = 'DEL'
    btn.addEventListener('click', dispatchDelToDo);
    li.textContent = toDo.text;
    li.id = `${toDo.id}`;
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

toDoStore.subscribe(paintToDo);

form.addEventListener('submit', dispatchAddToDo)