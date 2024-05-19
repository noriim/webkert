import {Component, OnInit} from '@angular/core';
import {Record} from "../../shared/models/Record";
import {RecordService} from "../../shared/services/record.service";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-myrecords',
  templateUrl: './myrecords.component.html',
  styleUrls: ['./myrecords.component.scss']
})
export class MyrecordsComponent implements OnInit{
  records: Array<Record> = [];
  user?: User;
  recordNumber?: number;

  constructor(private recordService: RecordService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.recordService.getByUserId(this.user?.id as string).subscribe(data => {
        this.records = data;
        this.recordNumber = this.records.length;
      });
    });
  }

  toUrgent(record: Record) {
    if(record.record.includes('[HIBÁS]')) {
      alert('Ez a diktálás már megvan jelölve hibásként!');
    }
    else {
      this.recordService.update(record).then(_ => {
        alert('Hiba bejelentve! Kollégáink fel fogják keresni hamarosan ezzel kapcsolatosan!');
      }).catch(error => {
        alert(error);
      });
    }
  }

  delete(record: Record) {
    this.recordService.delete(record.id).then(_ => {
      alert('Diktálás törölve!');
    }).catch(error => {
      alert(error);
    });
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }
}
