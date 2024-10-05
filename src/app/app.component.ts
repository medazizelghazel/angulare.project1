import { Component } from '@angular/core';
import { AreaComponent } from './area/area.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [AreaComponent, FormsModule] // Include FormsModule here
})
export class AppComponent {
  title = 'my-angular-project';
}
