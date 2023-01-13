import { Action, createAction, props } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from 'src/app/model/message.model';
export enum MessageActionType {
  ADD_MESSAGE = '[MESSAGE] ADD MESSAGE',
  GET_MESSAGES = '[MESSAGE] GET MESSAGES',
  ADD_MESSAGE_SUCCESS = '[MESSAGE] ADD_MESSAGE_SUCCESS',
  GET_MESSAGE_SUCCESS = '[MESSAGE] GET_MESSAGE_SUCCESS'
}
export class AddMessageAction implements Action {
  readonly type = MessageActionType.ADD_MESSAGE;
  constructor(public messages: Message[]) { }
}
export class getMessagesSuccessAction implements Action {
  readonly type = MessageActionType.GET_MESSAGE_SUCCESS;
  constructor(public messages: Message[]) { }
}
export const addMessage = createAction(
  MessageActionType.ADD_MESSAGE,
  props<{ message: Message }>()
);

export const getMessages = createAction(
  MessageActionType.GET_MESSAGES
);

export const addMessageSuccess = createAction(
  MessageActionType.ADD_MESSAGE_SUCCESS
);

export const getMessagesSuccess = createAction(
  MessageActionType.GET_MESSAGE_SUCCESS,
  props<{ messages: Message[] }>()
);
