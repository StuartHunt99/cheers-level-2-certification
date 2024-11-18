import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Input() text: string = '';
  @Output() textChange = new EventEmitter<string>();
  
  onInputChange(newText: string) {
    this.textChange.emit(newText);
  }
}
