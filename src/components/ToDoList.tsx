import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Categories, categoryState, toDoSelector } from '../atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const Container = styled.div``;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector); // selector에서 state를 받아옴
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any); // 현재 select 태그에서 선택한 option으로 categoryState 변경
  };

  return (
    <Container>
      <h1>To Dos</h1>
      <hr />
      <select onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

export default ToDoList;
