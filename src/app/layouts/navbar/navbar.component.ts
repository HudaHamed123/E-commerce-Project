import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { CartService } from '../../core/services/cart/cart.service';
import { FlowbiteService } from '../../core/services/flowbite/flowbite.service';

@Component({
  selector: 'app-navbar',
  imports:  [ RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLogin=input<boolean>(true)
  cartNumber!:number

constructor (private cartService:CartService , private authService:AuthService ){
  this.cartService.cartNumber.subscribe({
        next:(res)=>{
          this.cartNumber = res
        }
      })
}


logout():void{
  this.authService.logoutUser()
}
 
// ngOnInit(): void {
//   this.cartService.cartNumber.subscribe({
//     next:(res)=>{
//       this.cartNumber = res
//     }
//   })
// }

}
