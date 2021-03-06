import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() boxColor: any;
  @Input() placeholderText: any;

  @Output() inputEvent = new EventEmitter()

  count:number = 0;
  onCreate(inpVal:any){
    if(inpVal.value.length>0){
      this.count = this.count + 1;
      // alert(inpVal.value)
      this.inputEvent.emit(inpVal.value)
    }
  }

}
