import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {NavbarComponent} from './nav/navbar.component';
import {View1Component} from './view/view1.component';
import {View2Component} from './view/view2.component';
import {rootRouterConfig} from "./app.routes";
import {MembersComponent} from './members/members.component';
import {PersonComponent} from './members/person/person.component';
import {MembersService} from './services/members.service';
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [
    AppComponent, View1Component, NavbarComponent, View2Component,MembersComponent, PersonComponent, SearchComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpModule , RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})

export class AppModule { }


