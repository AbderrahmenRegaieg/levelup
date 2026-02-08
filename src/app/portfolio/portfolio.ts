import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio.html',
    styleUrl: './portfolio.css'
})
export class PortfolioComponent {
   videos = [
        { 
          title: 'Iman Video', 
          videoUrl: 'https://media.githubusercontent.com/media/AbderrahmenRegaieg/levelup/gh-pages/second_version_iman.mp4' 
        },
        { 
          title: 'Caspar video', 
          videoUrl: 'https://media.githubusercontent.com/media/AbderrahmenRegaieg/levelup/gh-pages/casper_video.mp4' 
        },
        { 
          title: 'Phil video', 
          // Note: "Sequence 01 (2).mp4" needs URL encoding for spaces and parentheses
          videoUrl: 'https://media.githubusercontent.com/media/AbderrahmenRegaieg/levelup/gh-pages/Sequence%2001%20(2).mp4' 
        },
        { 
          title: 'Melvin video ', 
          videoUrl: 'https://media.githubusercontent.com/media/AbderrahmenRegaieg/levelup/gh-pages/Sequence%2004%20(1).mp4' 
        },
    ];

    @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;
    playingIndex: number | null = null;

    toggleVideo(index: number) {
        const videoElement = this.videoPlayers.toArray()[index].nativeElement;

        if (videoElement.paused) {
            // Pause all other videos
            this.videoPlayers.forEach((player, i) => {
                if (i !== index) {
                    player.nativeElement.pause();
                }
            });
            videoElement.play();
            videoElement.muted = false; // Unmute when clicked to play
            this.playingIndex = index;
        } else {
            videoElement.pause();
            this.playingIndex = null;
        }
    }
}
