import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AdminModule} from './admin/admin.module';
import {AppComponent} from './app.component';
import {ChildComponent} from './child.component';
import {Api} from './const';
import {DynamicFormsModule} from './dynamic-forms/dynamic-forms.module';
import {DynamicModule} from './dynamic/dynamic.module';
import {FilterPipe} from './filter.pipe';
import {HomeComponent} from './home/home.component';
import {HomeModule} from './home/home.module';
import {ItemComponent} from './item/item.component';
import {ListHeaderComponent} from './list-header/list-header.component';
import {ListService} from './list.service';
import {ListComponent} from './list/list.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar.component';
import {TabComponent} from './tab/tab.component';
import {TabsComponent} from './tabs/tabs.component';
import {TodolistComponent} from './todolist/todolist.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {UtilsModule} from './utils/utils.module';
import { BtnGroupComponent } from './btn-group/btn-group.component';

const routes = [
  {path: 'home', component: HomeComponent},
  // {path: 'admin', loadChildren: 'admin/admin.module#AdminModule'},
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TabsComponent,
    TabComponent,
    ChildComponent,
    TodolistComponent,
    ItemComponent,
    MenuComponent,
    TopMenuComponent,
    ListHeaderComponent, ListComponent, FilterPipe, BtnGroupComponent],
  imports     : [
    DynamicFormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    DynamicModule,
    UtilsModule,
    HomeModule,
    AdminModule,
    RouterModule.forRoot(routes)],
  bootstrap   : [AppComponent],
  providers   : [
    {provide: ListService, useClass: ListService},
    {provide: Api, useValue: 'http://'},
  ]

})
export class AppModule {

}
