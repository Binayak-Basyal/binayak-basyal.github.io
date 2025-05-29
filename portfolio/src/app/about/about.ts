import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  openGallery() {
    const gallery = document.getElementById('photographyGallery');
    console.log('openGallery called', gallery); // Check if the element is found
    if (gallery) {
      gallery.classList.add('show');
    }
  }
  
  closeGallery() {
    const gallery = document.getElementById('photographyGallery');
    console.log('closeGallery called', gallery); // Check if the element is found
    if (gallery) {
      gallery.classList.remove('show');
    }
  }

}
