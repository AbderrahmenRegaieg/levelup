import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.html',
    styleUrls: ['./booking.css']
})
export class BookingComponent implements AfterViewInit {
    @ViewChild('bookingSection') bookingSection!: ElementRef;

    ngAfterViewInit() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    this.animateElements();
                }
            });
        }, { threshold: 0.1 });

        observer.observe(this.bookingSection.nativeElement);
    }

    openCalendly() {
        window.open('https://calendly.com/habibboulila22/30min', '_blank');
    }

    animateElements() {
        const elements = document.querySelectorAll('.section-header, .cta-button');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate');
            }, index * 100);
        });
    }
}
