import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  public items = Array(4);

  @Input() color: string = '';
  @Input() size = 'small | medium | large | giant';

  smallWidth = '30';
  smallHeight = '30';
  smallBorderWidth = '5';

  mediumWidth = '50';
  mediumHeight = '50';
  mediumBorderWidth = '6';

  giantWidth = '90';
  giantHeight = '90';
  giantBorderWidth = '9';

  width = '';
  height = '';
  borderWidth = '';

  constructor() { }

  ngOnInit(): void {
    if(this.size === 'small'){
      this.borderWidth = this.smallBorderWidth;
      this.width = this.smallWidth;
      this.height = this.smallHeight;
    } else if(this.size === 'medium'){
      this.borderWidth = this.mediumBorderWidth;
      this.width = this.mediumWidth;
      this.height = this.mediumHeight;
    } else if(this.size === 'giant'){
      this.borderWidth = this.giantBorderWidth;
      this.width = this.giantWidth;
      this.height = this.giantHeight;
    }
  }

  getMyClass() {
    const myStyle = {
      'border-top-color': this.color ? '#' + this.color : '',
      'border-width.px': this.size ? this.borderWidth : '',
      'width.px' : this.size ? this.width : '',
      'height.px' : this.size ? this.height : ''
    };
    return myStyle;
  }

}
