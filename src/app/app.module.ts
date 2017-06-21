import {NgModule} from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ChildComponent} from './child.component';
import {Api} from './const';
import {DynamicModule} from './dynamic/dynamic.module';
import {ItemComponent} from './item/item.component';
import {ListService} from './list.service';
import {MenuComponent} from './menu/menu.component';
import {NetworkService} from './network.service';
import {SidebarComponent} from './sidebar.component';
import {TabComponent} from './tab/tab.component';
import {TabsComponent} from './tabs/tabs.component';
import {TodolistComponent} from './todolist/todolist.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {UtilsModule} from './utils/utils.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TabsComponent,
    TabComponent,
    ChildComponent,
    TodolistComponent,
    ItemComponent, MenuComponent, TopMenuComponent],
  imports     : [HttpModule, BrowserModule, DynamicModule, UtilsModule, RouterModule],
  bootstrap   : [AppComponent],
  providers   : [
    {
      provide   : NetworkService,
      useFactory: (http) => new NetworkService('http:/nir', http),
      deps      : [Http]
    },
    {provide: ListService, useClass: ListService},
    {provide: Api, useValue: 'http://'},
  ]

})
export class AppModule {

  constructor() {
    console.log('AppModule instance');
  }

}
