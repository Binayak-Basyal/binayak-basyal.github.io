import { Component } from '@angular/core';

@Component({
  selector: 'app-download-btn',
  imports: [],
  templateUrl: './download-btn.html',
  styleUrl: './download-btn.scss'
})
export class DownloadBtn {
  downloadCV() {
    const fileUrl = 'cv.pdf';

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = '/assets/Binayak basyal.pdf';
    a.click();
  }

}
