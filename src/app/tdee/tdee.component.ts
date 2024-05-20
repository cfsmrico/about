import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';

interface ActivityLevel {
  label: string;
  level: number;
}

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
    InputNumberModule,
    FloatLabelModule,
    CardModule
  ],
  templateUrl: './tdee.component.html',
  styleUrl: './tdee.component.css'
})
export class TdeeComponent {
  unitSystemOptions = ['Metric', 'Imperial'];
  unitSystem = 'Metric';
  sexOptions = ['Male', 'Female'];
  sex = 'Male';
  activityLevelOptions: ActivityLevel[] = [
    {label: 'Basal Metabolic Rate (BMR)', level: 1},
    {label: 'Sedentary: little or no exercise', level: 1.2},
    {label: 'Light: exercise 1-3 times/week', level: 1.375},
    {label: 'Moderate: exercise 4-5 times/week', level: 1.465},
    {label: 'Active: daily exercise or intense exercise 3-4 times/week', level: 1.55},
    {label: 'Very Active: intense exercise 6-7 times/week', level: 1.725},
    {label: 'Extra Active: very intense exercise daily, or physical job', level: 1.9}
  ];
  activityLevel: ActivityLevel = {label: 'Moderate: exercise 4-5 times/week', level: 1.465};
  weight: number = 90;
  height: number = 181;
  age: number = 42;
  bodyfat: number = 15;
  tdee: number = 2500;

  calcTDEE() {
    let s = 5;

    if (this.sex == 'Female') {
      s = -151;
    }

    let bmr = (10 * this.weight + 6.25 * this.height - 5 * this.age) + s;
    let lbm = (1 - (this.bodyfat / 100)) * this.weight;
    bmr = 370 + (21.6 * lbm);
    this.tdee = bmr * this.activityLevel.level;
  }
};
