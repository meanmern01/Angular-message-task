import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MessageComponent } from './message.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, MatButtonModule, MatTableModule, MatPaginatorModule],
})
export class MessageModule { }
