import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  LoadMoreCharities: any;
  cart: any;

  selectedItem = -1;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.cart = this.authService.getLocalStorage("giftCartData");
  }
  charityList() {}
  onCharitieSelecte(data: any) {}
  charitieFilter(event: any) {}
}
