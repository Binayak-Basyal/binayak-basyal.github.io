import { Component } from '@angular/core';
import { DownloadBtn } from '../download-btn/download-btn';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone:true,
  imports: [DownloadBtn, CommonModule, RouterModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {

}
