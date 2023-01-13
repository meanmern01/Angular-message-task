import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { messageReducer } from './store/reducers/message.reducer';
import { MessageEffects } from './store/effects/message.effects';
import { Store } from '@ngrx/store'

@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    PagesModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      message: messageReducer
    }),
    EffectsModule.forRoot([MessageEffects]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
})
export class AppModule { }
