import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() id !: number;
  @Input() name !: string;
  @Input() lastName !: string;
  @Input() email !: string;
  @Input() deleteFunc !: (id:number) => void;

  constructor() { }

  delete():void {
    this.deleteFunc(this.id);
  }

  ngOnInit(): void {
  }

}
