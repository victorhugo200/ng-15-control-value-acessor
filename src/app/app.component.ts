import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'control-value-acessor';
  form = new FormGroup({
    campo: new FormControl(null, [Validators.required])
  });
  value = '';


  log() {
    console.log(this.form);
  }
}
