import {createStore} from 'redux';

const addBtn = document.querySelector('#add'),
minusBtn = document.querySelector('#minus'),
result = document.querySelector('result'),
ADD = 'ADD',
MINUS = 'MINUS';
let count = 0;

const reducer = (state = 0, action)=>{
  switch(action.type){
    case ADD:
      return state
    case MINUS:
      return state
    default:
      return state
  }
}

const store = createStore(reducer);

addBtn.addEventListener('click')