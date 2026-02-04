import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css'
})
export class ClientsComponent {
  clients = [
    { name: 'iman oubou', image: 'https://i.postimg.cc/cHxT2FFT/iman-Imagge.jpg', instagram: 'https://www.instagram.com/imanoubou/' },
    { name: 'Melvin Matteuci', image: 'https://i.postimg.cc/MZcrSFWj/mel-image.jpg', instagram: 'https://www.instagram.com/humanly_organized/' },
    { name: 'Caspar Tremlett', image: 'https://i.postimg.cc/dtwdBhS7/casper-Image.jpg', instagram: 'https://www.instagram.com/caspartremlett/' },
    { name: 'Phil Franco', image: 'https://i.postimg.cc/6QvywK1S/phil-Image.jpg', instagram: 'https://www.instagram.com/ai.withphil/' },
    { name: 'Mehdi Ghazzai', image: 'https://i.postimg.cc/6pG940Ln/Mehdi-Image.jpg', instagram: 'https://www.instagram.com/mehdi.ghazzai/' },
  ];

  // Duplicate clients for infinite scroll effect
  displayClients = [...this.clients, ...this.clients];


  openLink(url: string) {
    window.open(url, '_blank');
  }
}
