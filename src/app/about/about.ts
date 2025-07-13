import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  aboutTitle = "We're more than a digital agency";
  aboutDescription = "We're a collective of designers, developers, and strategists passionate about creating meaningful digital experiences.";
  
  team: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      bio: "With over 10 years in the industry, Alex leads our design vision with a focus on user-centered solutions.",
      image: "alex.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Sam Wilson",
      role: "Lead Developer",
      bio: "Sam specializes in building scalable web applications with cutting-edge technologies.",
      image: "sam.jpg",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Taylor Smith",
      role: "Strategy Lead",
      bio: "Taylor helps clients define their digital strategy and align it with business objectives.",
      image: "taylor.jpg",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    }
  ];

  stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Industry Awards" },
    { value: "5", label: "Years Experience" }
  ];
}