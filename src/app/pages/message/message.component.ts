import { MessageService } from './../../service/message.service';
import { Message } from './../../model/message.model';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { getMessages } from 'src/app/store/actions/message.action';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, AfterViewInit {
  messages: any[] = [];
  displayedColumns: string[] = ['name', 'message'];
  dataSource = new MatTableDataSource<any>([]);
  paginator: any;
  constructor(private dialog: MatDialog, private store: Store, private db: MessageService) {
    console.log('helloooo');
  }
  ngOnInit(): void {
    this.store.dispatch(getMessages())
    this.store.select((store) => store).subscribe((messages) => {
      this.messages.push(messages);
      this.dataSource = this.messages[1]?.message
      console.log(this.messages[1]?.message.length);

    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openDialog() {
    this.dialog.open(FormDialogComponent, {
      width: '35%'
    });
    this.checkData()
  }
  checkData() {
    this.db.getMessages().subscribe(data => {
      // @ts-ignore
      this.dataSource = data
    })
  }
}
export interface messageData {
  name: string;
  message: string;
}
const ELEMENT_DATA: any = [];
