import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  imports: [OrderListModule]
})
export class OrderListComponent implements OnInit {
  @Input() items: any[] = [];
  @Output() emitNewOrder: EventEmitter<any> = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  emitItens() {
    this.emitNewOrder.emit(this.items)
  }

}
