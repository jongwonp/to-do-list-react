import { atom, selector } from 'recoil';

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    // selector가 toDos와 category를 받아서 category에 따라 toDo를 분류함.
    const toDos = get(toDoState);
    const category = get(categoryState);

    // category에 따라 다른 값을 반환함
    return toDos.filter((toDo) => toDo.category === category);
  },
});
