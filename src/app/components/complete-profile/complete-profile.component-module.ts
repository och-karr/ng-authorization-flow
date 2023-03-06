import { NgModule } from '@angular/core';
import { CompleteProfileComponent } from './complete-profile.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  declarations: [CompleteProfileComponent],
  providers: [],
  exports: [CompleteProfileComponent]
})
export class CompleteProfileComponentModule {
}
