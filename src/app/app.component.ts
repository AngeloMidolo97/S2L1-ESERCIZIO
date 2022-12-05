import { Component } from '@angular/core';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'S2L1-ESERCIZIO';

  count: number = 0;

  constructor(private postSrv: PostService) {}

  ngOnInit() {
    this.postSrv.likeO.subscribe(() => {
      this.count++
    })
  }
}
