import { ReactNode } from 'react';
import extendReducer from './extendReducer';
import { Reducer } from 'redux';
import { Action } from '../config/types';

const namespace = 'home';

interface CollapseItem {
  id: string | number
  title: string | ReactNode
  content: string | ReactNode
}

export type HomeState = {
  error: null | string
  loading: boolean
  collapseList: CollapseItem[]
}

const initState: HomeState = {
  error: null,
  loading: false,
  collapseList: [],
};

const reducer: Reducer<HomeState, Action> = (state: HomeState = initState, { payload, type }: Action) => {
  console.log('payload', payload);
  
  switch (type) {
    default:
      return state;
  }
};

export default extendReducer<HomeState>(reducer, namespace);
