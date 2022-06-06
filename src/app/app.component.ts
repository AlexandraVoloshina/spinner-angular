import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading$ = this.loader.loading$;

  constructor(
    public loader: LoadingService, 
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {

  }

  ngOnInit(){
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  fetchUser() {
    this.http.get('https://api.github.com/users/thisiszoaib').subscribe(res => {
      console.log(res);
    });
  }
}
