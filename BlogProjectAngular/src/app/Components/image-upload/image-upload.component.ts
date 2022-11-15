import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { ApiService } from 'src/app/Services/apiService';
import { FileUploadService } from 'src/app/Services/file-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  title = "cloudsSorage";
  selectedFile?: File;
  fb : any;
  downloadURL?: Observable<string>;
  constructor(private Api: ApiService, private storage: AngularFireStorage) {}
  ngOnInit() {}
  onFileSelected(event:any) {
    var n = Date.now();
    this.selectedFile = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, this.selectedFile);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log("1",this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log("2",url);
        }
      });
  }
}