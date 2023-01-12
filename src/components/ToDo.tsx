import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atom';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name }, // 클릭한 button의 name
    } = event;
    // setToDos(=useSetRecoilState)로 atom에 저장된 state 를 변경
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id); // state(배열)가 가진 요소들중 id가 현재 Todo의 id와 같은 요소의 index
      const newToDo = { text, id, category: name as any }; // 현재 입력한 Todo
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const deleteTodo = () => {
    setToDos((oldToDos) => {
      return oldToDos.filter((toDo) => toDo.id !== id);
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick={deleteTodo}>❌</button>
    </li>
  );
}

export default ToDo;
