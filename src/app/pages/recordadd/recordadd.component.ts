import {Component, OnInit} from '@angular/core';
import { TypeList } from "../../shared/constants/values";
import {FormControl, FormGroup, UntypedFormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {Record} from "../../shared/models/Record";
import {AuthService} from "../../shared/services/auth.service";
import {RecordService} from "../../shared/services/record.service";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/User";

@Component({
  selector: 'app-recordadd',
  templateUrl: './recordadd.component.html',
  styleUrls: ['./recordadd.component.scss']
})
export class RecordaddComponent implements OnInit{

  typeList: Array<any> = TypeList;
  chosenType: any;
  user?: User;
  datetime?: string;
  dateString?: string;

  constructor(private authService: AuthService,
              private router: Router,
              private recordService: RecordService,
              private userService: UserService) {
    this.chosenType = this.typeList[0];

  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
    });
  }

  recordForm = new FormGroup({
    type: new FormControl(''),
    date: new UntypedFormControl(''),
    time: new FormControl(''),
    record: new FormControl('')
  })


  addRecord() {
    if(this.recordForm.get('date')?.value &&
      this.recordForm.get('time')?.value && this.recordForm.get('record')?.value) {

      this.dateString = new Date(this.recordForm.get('date')?.value).toDateString();

      this.datetime = this.dateString + ' '
        + this.recordForm.get('time')?.value

      console.log(this.recordForm.value);

      const recordToStore: Record = {
        id: '',
        user: this.user as User,
        type: this.recordForm.get('type')?.value as string,
        date: this.datetime,
        record: this.recordForm.get('record')?.value as string
      }

      this.recordService.create(recordToStore).then(_ => {
        alert('Diktálás rögzítve!');
      }).catch(error => {
        alert(error);
      });

      this.router.navigateByUrl('/myrecords');
    }
    else {
      alert('Minden mező kitöltése kötelező!');
    }
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }
}
