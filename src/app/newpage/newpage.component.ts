import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit {
isLoggedIn: Boolean;

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
  }

}
