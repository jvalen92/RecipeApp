import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() featurSelected = new EventEmitter<string>();

  onSelected(feature : string){
    console.log(feature);
    
    this.featurSelected.emit(feature);
  }

}
