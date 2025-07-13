// clients.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.html',
  styleUrls: ['./clients.css']
})
export class ClientsComponent implements OnInit {

  // Array to hold client logo data.
  // Each object contains a unique ID and a placeholder image URL.
  // In a real application, you would replace these with actual logo image paths.
  clientLogos = [
    { id: 1, src: 'https://i.postimg.cc/g2zKFZLf/levelup-logo-removebg-preview.png' },
    { id: 2, src: 'https://i.postimg.cc/g2zKFZLf/levelup-logo-removebg-preview.png' },
    { id: 3, src: 'https://i.postimg.cc/g2zKFZLf/levelup-logo-removebg-preview.png' },
    { id: 4, src: 'https://i.postimg.cc/g2zKFZLf/levelup-logo-removebg-preview.png' },
    { id: 5, src: 'https://placehold.co/60x60/A1FF33/white?text=Logo5' },
    { id: 6, src: 'https://placehold.co/60x60/5733FF/white?text=Logo6' },
    { id: 7, src: 'https://placehold.co/60x60/FF8C33/white?text=Logo7' },
    { id: 8, src: 'https://placehold.co/60x60/33FF8C/white?text=Logo8' },
    { id: 9, src: 'https://placehold.co/60x60/8C33FF/white?text=Logo9' },
    { id: 10, src: 'https://placehold.co/60x60/FF3357/white?text=Logo10' },
    { id: 11, src: 'https://placehold.co/60x60/57FF33/white?text=Logo11' },
    { id: 12, src: 'https://placehold.co/60x60/33A1FF/white?text=Logo12' },
    { id: 13, src: 'https://placehold.co/60x60/FFD133/white?text=Logo13' },
    { id: 14, src: 'https://placehold.co/60x60/33FFD1/white?text=Logo14' },
    { id: 15, src: 'https://placehold.co/60x60/D133FF/white?text=Logo15' },
    { id: 16, src: 'https://placehold.co/60x60/3357FF/white?text=Logo16' },
    { id: 17, src: 'https://placehold.co/60x60/FF33A1/white?text=Logo17' },
    { id: 18, src: 'https://placehold.co/60x60/A1FF33/white?text=Logo18' },
    { id: 19, src: 'https://placehold.co/60x60/5733FF/white?text=Logo19' },
    { id: 20, src: 'https://placehold.co/60x60/FF8C33/white?text=Logo20' },
    { id: 21, src: 'https://placehold.co/60x60/33FF8C/white?text=Logo21' },
    { id: 22, src: 'https://placehold.co/60x60/8C33FF/white?text=Logo22' },
    { id: 23, src: 'https://placehold.co/60x60/FF3357/white?text=Logo23' },
    { id: 24, src: 'https://placehold.co/60x60/57FF33/white?text=Logo24' },
    { id: 25, src: 'https://placehold.co/60x60/33A1FF/white?text=Logo25' },
    { id: 26, src: 'https://placehold.co/60x60/FFD133/white?text=Logo26' },
    { id: 27, src: 'https://placehold.co/60x60/33FFD1/white?text=Logo27' },
    { id: 28, src: 'https://placehold.co/60x60/D133FF/white?text=Logo28' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Calculates the rotation angle for a logo based on its index and the total number of logos.
   * This angle will be used as a CSS custom property to position the logo around the circle.
   * @param i The index of the current logo.
   * @param total The total number of logos.
   * @returns The angle in degrees.
   */
  getLogoAngle(i: number, total: number): number {
    return (i / total) * 360;
  }
}