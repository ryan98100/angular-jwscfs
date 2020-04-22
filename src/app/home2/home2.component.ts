import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor(private route:ActivatedRoute) { }
  idvarpas = "";
  ngOnInit() {
    let id =this.route.snapshot.paramMap.get('id');
    this.idvarpas = id;
  }

}