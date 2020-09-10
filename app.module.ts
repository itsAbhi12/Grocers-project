import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path:'',
          component:FrontPageComponent
          //data: {animation: 'HomePage'}
        },
      ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
