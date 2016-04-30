import {Component} from 'angular2/core';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-app',
  directives: [Alert],
  templateUrl: 'app/test.html',
})
export class AppComponent {
}
