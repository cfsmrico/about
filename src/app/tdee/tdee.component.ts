import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tdee',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    SelectButtonModule,
    ButtonModule,
    DropdownModule,
  ],
  templateUrl: './tdee.component.html',
  styleUrl: './tdee.component.css'
})
export class TdeeComponent {
  unitSystemOptions = ['Metric', 'Imperial'];
  unitSystem = 'Metric';
  sexOptions = ['Male', 'Female'];
  sex = 'Male';
}
