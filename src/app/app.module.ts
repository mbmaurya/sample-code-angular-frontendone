import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftpaneComponent } from './leftpane/leftpane.component';
import { RightpaneComponent } from './rightpane/rightpane.component';
import { CenterComponent } from './center/center.component';

const routes = [
  {
    path: 'left-pane', component: LeftpaneComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LeftpaneComponent,
    RightpaneComponent,
    CenterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
