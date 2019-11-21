import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialEditPageRoutingModule } from './material-edit-routing.module';

import { MaterialEditPage } from './material-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialEditPageRoutingModule
  ],
  declarations: [MaterialEditPage]
})
export class MaterialEditPageModule {}
