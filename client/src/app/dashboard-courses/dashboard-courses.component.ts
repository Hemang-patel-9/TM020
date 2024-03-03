import { Component } from '@angular/core';
interface Course {
  name: string;
  icon: string;
  progress: number;
  chapters: { name: string, pdf: string }[];
  videos: string[];
  quiz: string;
}
@Component({
  selector: 'app-dashboard-courses',
  templateUrl: './dashboard-courses.component.html',
  styleUrl: './dashboard-courses.component.css'
})
export class DashboardCoursesComponent {

  courseList: Course[] = [
    { name: 'HTML', icon: '', progress: 80, chapters: [{ name: 'Chapter 1', pdf: '../../assets/html/ch1.pdf' }, { name: 'Chapter 2', pdf: 'pdf2' }], videos: ['Video 1', 'Video 2'], quiz: 'Quiz 1' },
    // {name : 'Tailwind', icon : '', progress : 0},
    // {name : 'NodeJS', icon : '',  progress : 70},
    // {name : 'JAVA', icon : '', progress : 10},
    // {name : 'MySQL', icon : '', progress : 20},
    // {name : 'MongoDB', icon : '', progress : 30},
    // {name : 'Figma', icon : '', progress : 90},
    // {name : 'DSA', icon : '', progress : 50},
  ];


  selectedCourse: Course | null = null;
  selectedChapter: { name: string, pdf: string } | null = null;
  selectedVideo: string | null = null; // Add this line


  selectCourse(course: Course) {
    this.selectedCourse = course;
    console.log();

  }

  selectChapter(chapter: { name: string, pdf: string }) {
    this.selectedChapter = chapter;
    console.log(this.selectedChapter);


  }

  selectVideo(video: string) { // Add this method
    this.selectedVideo = video;
  }
  pdfname: string = "../../assets/html/ch1.pdf";
  goBack() {
    if (this.selectedChapter) {
      this.selectedChapter = null;
    } else {
      this.selectedCourse = null;
    }
  }
}