import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Message } from '../model/message.model';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private firestore: AngularFirestore) { }
  addMessage(message: Message): any {
    return from(this.firestore.collection('messages').add(message));
  }
  getMessages(): Observable<Message[]> {
    return this.firestore
      .collection<Message>('messages')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Message;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
}
