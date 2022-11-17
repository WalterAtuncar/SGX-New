import { SvgModule } from './../svg/svg.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SelectComponent } from './select/select.component';
import { CardComponent } from './card/card.component';
import { SelectRoundedComponent } from './select-rounded/select-rounded.component';
import { BtnPrimaryComponent } from './btn-primary/btn-primary.component';
import { BtnSecondaryComponent } from './btn-secondary/btn-secondary.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { InputDateComponent } from './input-date/input-date.component';


@NgModule({
  declarations: [
    SelectComponent,
    CardComponent,
    SelectRoundedComponent,
    BtnPrimaryComponent,
    BtnSecondaryComponent,
    InputCheckboxComponent,
    InputDateComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SvgModule
  ],
  exports: [
    SelectComponent,
    CardComponent,
    SelectRoundedComponent,
    BtnPrimaryComponent,
    BtnSecondaryComponent,
    InputCheckboxComponent,
    InputDateComponent
  ]
})
export class ComponentsModule { }