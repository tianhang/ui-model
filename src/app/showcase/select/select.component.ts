import {Component} from '@angular/core';
import {Select} from 'ui-model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  options = [
    {
      label: 'A1',
      id: 'a1',
    },
    {
      label: 'B1',
      id: 'b1',
    },
    {
      label: 'C1',
      id: 'c1',
    },
    {
      label: 'D1',
      id: 'd1',
    },
    {
      label: 'E1',
      id: 'e1',
    },
  ];

  select = new Select<{label: string, id: string}>().select(this.options[1]);
}

