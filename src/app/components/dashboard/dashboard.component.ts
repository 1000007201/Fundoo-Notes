import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  gridView:any
  message:any

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private data:DataService, private route:Router, private snack:MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.currentView.subscribe(flag => this.gridView = flag)
  }
  grid(){
    this.gridView=true;
    this.data.changeView(this.gridView)
  }
  list(){
    this.gridView=false;
    this.data.changeView(this.gridView)
  }
  logout(){
    localStorage.removeItem('token');
    this.snack.open('Logged Out', 'Close', {'duration': 2000})
    this.route.navigateByUrl('/login');
  }
  onekeyup(text:any){
    this.data.changeMessage(text.target.value);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
