import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] 
})
export class AreaComponent {
  inputValue: string = ''; 
  items: string[] = [];    
  title: string = 'Bienvenue dans le composant Area !'; 
  description: string = 'Ceci est une zone d\'échantillon où vous pouvez afficher du contenu.';

  colors: string[] = ['blue', 'green', 'red'];  
  buttonLabel: string = 'Random'; 
  random: boolean = false; 


  addItem(): void {
    if (this.inputValue.trim()) {           
      this.items.push(this.inputValue.trim()); 
    }
  }

  suppress(): void {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }

  sortList(): void {
    this.items.sort((a, b) => a.localeCompare(b));
  }

  reverseSortList(): void {
    this.items.sort((a, b) => b.localeCompare(a));
  }

  shuffleList(): void {
    for (let i = this.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
    }
  }

  toggleRandomColoring(): void {
    this.random = !this.random;
    this.buttonLabel = this.random ? 'Cycle' : 'Random';
  }

  getColor(index: number): string {
    if (this.random) {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    } else {
      return this.colors[index % this.colors.length];
    }
  }
}
