import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    },
    {
      title: 'flowers',
      url: 'https://media.istockphoto.com/photos/colorful-tulips-against-a-blue-sky-with-white-clouds-picture-id1306865797?b=1&k=20&m=1306865797&s=170667a&w=0&h=-EL4mdUzy7fCOhmVd7azyIsLaGGWfxy-xfxvII8wcSE=',
    },
    {
      title: 'lion',
      url: 'https://media.istockphoto.com/photos/male-lion-resting-on-a-rock-picture-id1333977253?b=1&k=20&m=1333977253&s=170667a&w=0&h=q_EqYl_GqFCR1XmF_AK91YRFDapwAClOoc2fZbsnmr4=',
    },
    {
      title: 'frog',
      url: 'https://media.istockphoto.com/photos/curious-redeyed-tree-frog-picture-id135138016?b=1&k=20&m=135138016&s=170667a&w=0&h=yuQ6UR91UBME-hDuxNsJTZqdqTWm_wuUK_tpMQcrq1k=',
    },
    {
      title: 'tiger',
      url: 'https://media.istockphoto.com/photos/tiger-picture-id871661426?b=1&k=20&m=871661426&s=170667a&w=0&h=CFMdx-lBMJcwZShfwSgpcwStrgrEjp5wu6nWTr7bu_E=',
    },
  ];
 
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 2;
  }
}
