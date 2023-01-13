import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Message } from '../../model/message.model';
import { MessageService } from '../../service/message.service';
import * as messageActions from '../../store/actions/message.action';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {
  MessageForm!: FormGroup;
  messages: Message[] = [];
  newMessageText = '';
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private messageService: MessageService,
    private store: Store
  ) { }
  ngOnInit(): void {
    this.MessageForm = this.fb.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  btnSave() {
    if (!this.MessageForm.valid) {
      this.toastr.error('Please fill out all the fileds');
      return;
    }
    const message: Message = {
      name: this.MessageForm.value.name,
      message: this.MessageForm.value.message,
    };
    console.log('==========', message);

    this.store.dispatch(messageActions.addMessage({ message }));

    this.newMessageText = '';
    this.dialog.closeAll();
  }
}
