import { Component } from '@angular/core';
import {constNames} from './const.names'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature : boolean = true;
  recipe : string = constNames.Recipe;

  onNavigate(feature : string){
    console.log(feature);
    
    feature !== this.recipe ? this.loadedFeature = false : this.loadedFeature = true;
  }
}
