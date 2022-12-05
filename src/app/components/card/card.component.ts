import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/module/post';
import { PostService } from 'src/app/service/post.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  loading = true;

  sub!: Subscription

  cards: Post[] | undefined;

  constructor(private http: HttpClient, private postSrv: PostService) { }

  ngOnInit(): void {
    this.recuperaCard()
  }

  recuperaCard() {
    this.sub = this.postSrv.get().subscribe((ris) => {
      console.log(ris);
      this.cards = ris;
      this.loading = false;
    })
  }

  cancellaCard(id: number) {
    this.sub = this.postSrv.delete(id).subscribe(() => {
      this.cards = this.cards?.filter((card) => card.id != id);
    })
  }

  miPiace(){
    this.postSrv.likeS.next(null)
  }

}
