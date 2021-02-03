import { Component } from '@angular/core';
import { ImageUploadService } from './services/image-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageObj: File;
  imageUrl: string;

  constructor(private imageUploadService: ImageUploadService) { }

  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
  }

  onImageUpload() {
    const imageForm = new FormData();
    imageForm.append('image', this.imageObj);
    this.imageUploadService.imageUpload(imageForm).subscribe(res => {
      this.imageUrl = res['image'];
    });
  }
}
