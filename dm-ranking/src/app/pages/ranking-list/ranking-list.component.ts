import { Component, OnInit } from '@angular/core';
import { OrderListComponent } from '../../components/order-list/order-list.component';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss'],
  imports: [OrderListComponent]
})
export class RankingListComponent implements OnInit {

  songsList = [
    {
      icon: '',
      description: 'Olha pra mim',
      classification: '1'
    },
    {
      icon: '',
      description: 'Te esquecer',
      classification: '2'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
