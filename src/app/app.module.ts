import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'carbon-components-angular/button/button.module';
import { AccordionModule } from 'carbon-components-angular/accordion/accordion.module';
import { StructuredListModule } from 'carbon-components-angular/structured-list/structured-list.module';
import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';
import { Add24Module } from '@carbon/icons-angular/lib/add/24.js';
import { Checkbox24Module } from '@carbon/icons-angular/lib/checkbox/24';
import { Play24Module } from '@carbon/icons-angular/lib/play/24';
import { Menu24Module } from '@carbon/icons-angular/lib/menu/24';
import { Search24Module } from '@carbon/icons-angular/lib/search/24';
import { TextCreation24Module } from '@carbon/icons-angular/lib/text--creation/24';
import { NewTab24Module } from '@carbon/icons-angular/lib/new-tab/24';
import { Mobile24Module } from '@carbon/icons-angular/lib/mobile/24';
import { CheckmarkOutline16Module } from '@carbon/icons-angular/lib/checkmark--outline/16';
import { Unlocked16Module } from '@carbon/icons-angular/lib/unlocked/16';
import { View16Module } from '@carbon/icons-angular/lib/view/16';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    UIShellModule,
    Add24Module,
    Checkbox24Module,
    Play24Module,
    Menu24Module,
    AccordionModule,
    Search24Module,
    TextCreation24Module,
    StructuredListModule,
    NewTab24Module,
    Mobile24Module,
    CheckmarkOutline16Module,
    Unlocked16Module,
    View16Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
