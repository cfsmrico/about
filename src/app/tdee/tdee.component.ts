import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-tdee',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    DropdownModule,
  ],
  templateUrl: './tdee.component.html',
  styleUrl: './tdee.component.css'
})
export class TdeeComponent {
  selectedCity: string = "";
  cities: string[] = [];
}
