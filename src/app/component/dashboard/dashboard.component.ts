import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  orderData = [
    {
      orderNumber: 1110,
      orderDueDate: new Date('8-19-22'),
      customerName: 'Max',
      customerAddress: 'Mumbai, India',
      customerPhone: 9999121223,
      orderTotal: 23223,
    },
    {
      orderNumber: 1162,
      orderDueDate: new Date('1-23-22'),
      customerName: 'Rohan',
      customerAddress: 'West Delhi, India',
      customerPhone: 9999121223,
      orderTotal: 24123,
    },
    {
      orderNumber: 1115,
      orderDueDate: new Date('1-29-22'),
      customerName: 'John',
      customerAddress: 'West Bengal, India',
      customerPhone: 9999121223,
      orderTotal: 20003,
    },
  ];

  orderForm: FormGroup;
  orderFormData: Order;
  updateOrder:Order;
  orderUpdate:boolean=false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createOrderForm();
  }
  createOrderForm() {
    this.orderForm = this.fb.group({
      orderNumber: [null, Validators.required],
      orderDueDate: [null, Validators.required],
      customerName: [null, Validators.required],
      customerAddress: [null, Validators.required],
      customerPhone: [null, Validators.required],
      orderTotal: [null, Validators.required],
    });
  }

  onSubmit() {
    this.orderFormData = this.orderForm.value;
    console.log(this.orderFormData);
    this.orderData.push(this.orderFormData);
    this.orderForm.reset();
  }

  onDelete(i) {
    this.orderData.splice(i, 1);
  }

  updatingOrder(i){
    this.orderUpdate=true
    this.updateOrder=this.orderData[i]
  }
}
