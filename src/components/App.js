import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, del } from '../redux/toDoSlice';

const App = () =>{
    const currentState = useSelector(state => state.toDosReducer);
    const dispatch = useDispatch();

    const delToDo = (e) =>{
        const id = Number(e.target.parentNode.id);
        dispatch(del(id));
    }

    const updateToDo = () =>{
        const UL = document.querySelector('ul');
        UL.innerHTML = '';
        currentState.forEach(state=>{
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.innerText = 'DEL';
            btn.addEventListener('click', delToDo);
            li.id = state.id;
            li.innerText = state.text;
            li.appendChild(btn);
            UL.appendChild(li);
        });
    }

    useEffect(()=>{
        updateToDo();
    });

    const addToDo = (e) =>{
        e.preventDefault();
        const input = document.querySelector('input');
        const toDo = input.value;
        dispatch(add(toDo))
        input.value = '';
    }

    return( 
        <>
            <h1>To Do</h1>
            <form className='test' onSubmit={addToDo}>
                <input type="text"/>
                <button>ADD</button>
            </form>
            <ul></ul>
        </>
    )
}

export default App;