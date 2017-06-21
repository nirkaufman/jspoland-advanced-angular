import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {DynamicModule} from './dynamic/dynamic.module';
import { SidebarComponent } from './sidebar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, TabsComponent, TabComponent],
  imports     : [BrowserModule, DynamicModule],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
