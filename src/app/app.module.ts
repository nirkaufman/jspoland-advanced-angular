import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ChildComponent} from './child.component';
import {DynamicModule} from './dynamic/dynamic.module';
import {SidebarComponent} from './sidebar.component';
import {TabComponent} from './tab/tab.component';
import {TabsComponent} from './tabs/tabs.component';
import {RouterModule} from '@angular/router';
import {UtilsModule} from './utils/utils.module';

@NgModule({
  declarations: [AppComponent, SidebarComponent, TabsComponent, TabComponent, ChildComponent],
  imports     : [BrowserModule, DynamicModule, UtilsModule.forChild()],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
