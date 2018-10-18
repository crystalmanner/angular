import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() size = 32;
  @Input() type = 'image'; // or 'initial'
  @Input() initialColor = 'rgba(149, 178, 202, 0.8)';
  @Input() initial: string;
  @Input() imageUrl: string;
  @Input() imageAlt: string;

  imgWidth = 0;
  imgHeight = 0;
  imgClass = 'square';

  constructor() {}

  handleImageLoad(event): void {
    this.imgWidth = event.target.width;
    this.imgHeight = event.target.height;
    if (this.imgWidth > this.imgHeight) {
      this.imgClass = 'landscape-img';
    }
    if (this.imgWidth < this.imgHeight) {
      this.imgClass = 'portrait-img';
    }
  }

  ngOnInit(): void {
    if (this.imageUrl) {
      const image = new Image();
      image.addEventListener('load', e => this.handleImageLoad(e));
      image.src = this.imageUrl;
    }
  }
}
