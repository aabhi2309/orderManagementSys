import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-newOrder',
  templateUrl: './newOrder.component.html',
  styleUrls: ['./newOrder.component.css']
})
export class NewOrderComponent implements OnInit {
  orderForm:FormGroup;
  orderFormData:Order;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createOrderForm();
  }
  createOrderForm(){
    this.orderForm=this.fb.group({
      orderNumber: [null,Validators.required],
  orderDueDate: [null,Validators.required],
  customerName: [null,Validators.required],
  customerAddress: [null,Validators.required],
  customerPhone: [null,Validators.required],
  orderTotal: [null,Validators.required],
    })
  }
  
  onSubmit() {
    this.orderFormData = this.orderForm.value;
    console.log(this.orderFormData)
}
}
