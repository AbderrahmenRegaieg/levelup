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

        { title: 'Iman Video', videoUrl: 'second_version_iman.mp4' },
        { title: 'Caspar video', videoUrl: 'casper_video.mp4' },
        { title: 'Phil video', videoUrl: 'Sequence 01 (2).mp4' },
        { title: 'Melvin video ', videoUrl: 'Sequence 04 (1).mp4' },
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
