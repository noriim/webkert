import {Component} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService) {
  }


  toRecordAdd() {
    this.router.navigateByUrl('/recordadd');
  }

  toMyRecords() {
    this.router.navigateByUrl('/myrecords');
  }

  toContacts() {
    this.router.navigateByUrl('/contacts');
  }

  logout() {
    this.authService.logout().then(() => {
      alert('Kijelentkezés sikeres.');
      localStorage.clear();
      this.router.navigateByUrl('/login');
    }).catch(error => {
      alert(error);
    });
  }
}
