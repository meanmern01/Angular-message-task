import { createReducer, on } from '@ngrx/store';
import { Message } from 'src/app/model/message.model';
import * as messageActions from '../actions/message.action';

export const initialState: Message[] = [];

export const messageReducer = createReducer(
  initialState,
  on(messageActions.addMessage, (state, { message }) => [...state, message]),
  on(messageActions.getMessagesSuccess, (state, { messages }) => [...state, ...messages])
);
