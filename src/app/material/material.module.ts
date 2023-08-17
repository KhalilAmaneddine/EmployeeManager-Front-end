import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

const material = [
  MatSnackBarModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ]
})
export class MaterialModule { }
