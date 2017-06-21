import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-moench',
  templateUrl: './moench.component.html',
  styleUrls: ['./moench.component.scss']
})
export class MoenchComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.getElementById('moench-btn').classList.add("active");
  }

  ngOnDestroy() {
    document.getElementById('moench-btn').classList.remove("active");
  }

}
