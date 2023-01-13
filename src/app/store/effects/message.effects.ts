import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, mergeMap, take } from 'rxjs/operators';
import * as messageActions from '../actions/message.action';
import { Message } from 'src/app/model/message.model';
import { from } from 'rxjs';

@Injectable()
export class MessageEffects {
  addMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(messageActions.addMessage),
      map(action => action.message),
      mergeMap(message => this.firestore.collection('messages').add(message)),
      map(() => messageActions.addMessageSuccess())
    )
  );
  getMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(messageActions.getMessages),
      mergeMap(() =>
        this.firestore
          .collection('messages')
          .snapshotChanges()
          .pipe(
            map(actions => actions.map(a => {
              const data = a.payload.doc.data() as Message;
              return { id: a.payload.doc.id, ...data };
            })),
            map((messages: Message[]) => messageActions.getMessagesSuccess({ messages })),
            take(1)
          )
      )
    )
  );
  // mergeMap((messages : Message[]) => from([messageActions.getMessagesSuccess({ messages })]))

  constructor(private actions$: Actions, private firestore: AngularFirestore) { }
}
