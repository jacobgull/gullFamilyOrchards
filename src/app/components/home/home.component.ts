import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currentSlide: number = 0; // Track the current slide index
  totalSlides: number = 3;  // Total number of slides, update this if needed
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();  // Automatically start sliding on component load
  }

  // Function to move the carousel
  moveCarousel(direction: number): void {
    const slides = document.querySelectorAll('.carousel-item');

    // Remove the active class from the current slide
    slides[this.currentSlide].classList.remove('active');

    // Calculate the new slide index
    this.currentSlide = (this.currentSlide + direction + this.totalSlides) % this.totalSlides;

    // Add the active class to the new slide
    slides[this.currentSlide].classList.add('active');
  }

  // Auto-slide the carousel every 5 seconds
  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.moveCarousel(1); // Move to the next slide
    }, 5000);
  }

  // Stop auto-slide (Optional: You can use this to pause auto-sliding)
  stopAutoSlide(): void {
    clearInterval(this.intervalId);
  }
}
