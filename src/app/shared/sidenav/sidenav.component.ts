import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{
  selectedSampleOption: any;

  sampleOptions: any;

  sampleAppsSidebarNavs: any;

  sampleAppsSidebarNavsMore: any;

  selectedSampleAppsSidebarNav: any;

  isSlimMenu: boolean = true;

  value1: number = 24;

  radioValue: string = 'S';

  dateValue!: Date;

  switchValue: boolean = true;

  dashboardSidebarVisible: boolean = false;

  chartData: any;

  chartOptions: any;

  selectButtonValue!: any;

  selectButtonOptions!: any[];

  user: any = null;

  users!: any[];

  items!: any[];

  rangeValues = [20, 80];

  subscription!: any;

  selectedSidebarOption: string = 'Statistics';

  sidebarOptions: string[] = ['Interaction Logs', 'Preferences', 'Statistics', 'Opportunities'];

  churnRisk: number = 24;

  lineChartData: any = {};

  lineChartOptions: any = {};

  customerSatisfaction: number = 56;

  chartData2: any = {};

  chartOptions2: any = {};

  preferences: any;

  opportunities: any;

  callLogs: any;

  emailRecords: any;


  ngOnInit() {
    this.sampleOptions = [
        {
            icon: 'pi pi-home',
            title: 'Overview',
            src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/overview'
        },
        {
            icon: 'pi pi-comment',
            title: 'Chat',
            src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/chat'
        },
        {
            icon: 'pi pi-inbox',
            title: 'Inbox',
            src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/mail'
        },
        {
            icon: 'pi pi-th-large',
            title: 'Cards',
            src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/cards'
        },
        {
            icon: 'pi pi-user',
            title: 'Customers',
            src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/customers'
        },
        {
            icon: 'pi pi-video',
            title: 'Movies',
            src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/movies'
        }
    ];
    this.selectedSampleOption = this.sampleOptions[0];

    this.sampleAppsSidebarNavs = [
        { icon: 'pi pi-home', title: 'Overview', path: '' },
        { icon: 'pi pi-comment', title: 'Chat', path: '/chat' },
        { icon: 'pi pi-inbox', title: 'Inbox', path: '/inbox' },
        { icon: 'pi pi-th-large', title: 'Cards', path: '/cards' },
        { icon: 'pi pi-user', title: 'Customers', path: '/customers' },
        { icon: 'pi pi-video', title: 'Movies', path: '/movies' }
    ];
    this.sampleAppsSidebarNavsMore = [{ icon: 'pi pi-cog', title: 'Settings' }];

    this.selectedSampleAppsSidebarNav = 'Overview';
    this.selectButtonValue = { label: 'Styled', value: 1 };

    this.selectButtonOptions = [
        { label: 'Styled', value: 1 },
        { label: 'Unstyled', value: 2 }
    ];

    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' }
    ];

    this.users = [
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' }
    ];

    this.preferences = [
        {
            title: 'Email',
            prefs: [
                { icon: 'pi pi-bell', title: 'Notification', checked: true },
                { icon: 'pi pi-inbox', title: 'Newsletter', checked: false },
                { icon: 'pi pi-sync', title: 'Product Updates', checked: false }
            ]
        },
        {
            title: 'Telephone',
            prefs: [
                { icon: 'pi pi-mobile', title: 'Phone Call', checked: true },
                { icon: 'pi pi-volume-down', title: 'Voicemail', checked: false },
                { icon: 'pi pi-comments', title: 'SMS text', checked: false }
            ]
        },
        {
            title: 'Social Media',
            prefs: [
                { icon: 'pi pi-clock', title: 'Automated Post', checked: true },
                { icon: 'pi pi-user', title: 'Direct Message', checked: false }
            ]
        },
        {
            title: 'Data Privacy',
            prefs: [
                { icon: 'pi pi-box', title: 'Share Data with 3rd Parties', checked: true },
                { icon: 'pi pi-file', title: 'Cookies', checked: false }
            ]
        }
    ];

    this.opportunities = [
        {
            title: 'Apollo',
            link: 'https://primevue.org/templates/apollo/',
            image: 'https://primefaces.org/cdn/primevue/images/layouts/apollo-vue.jpg',
            text: 'Keep your application fresh with Apollo, the newest and most modern template available.'
        },
        {
            title: 'Ultima',
            link: 'https://primevue.org/templates/ultima/',
            image: 'https://primefaces.org/cdn/primevue/images/layouts/ultima-vue.jpg',
            text: "Elevate your application's intuitiveness with Ultima's premium Material Design interface."
        },
        {
            title: 'Diamond',
            link: 'https://primevue.org/templates/diamond/',
            image: 'https://primefaces.org/cdn/primevue/images/layouts/diamond-vue.jpg',
            text: "Handle complex operations with elegance with Diamond's robust and powerful premium design."
        },
        {
            title: 'Atlantis',
            link: 'https://primevue.org/templates/atlantis/',
            image: 'https://primefaces.org/cdn/primevue/images/layouts/atlantis-vue.jpg',
            text: "Boost your application's capabilities, customization with the Atlantis template."
        },
        {
            title: 'Verona',
            link: 'https://primevue.org/templates/verona/',
            image: 'https://primefaces.org/cdn/primevue/images/layouts/verona-vue.jpg',
            text: "Achieve sophistication and subtlety with Verona's minimalistic, content-focused design."
        },
        {
            title: 'Freya',
            link: 'https://primevue.org/templates/freya/',
            image: 'https://primefaces.org/cdn/primevue/images/layouts/freya-vue.png',
            text: "Give your application a sleek, updated look with Freya's chic and modern premium template."
        }
    ];

    this.callLogs = [
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png',
            name: 'Brook Simmons',
            time: '02.02.2024 | 45 min'
        },
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg',
            name: 'Jacob Jones',
            time: '02.02.2024 | 45 min'
        },
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg',
            name: 'Annette Black',
            time: '02.03.2024 | 13 min'
        },
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg',
            name: 'Arlene McCoy',
            time: '02.03.2024 | 14 min'
        },
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar10.jpg',
            name: 'Arlene Simmons',
            time: '02.03.2024 | 14 min'
        },
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg',
            name: 'Michael Brown',
            time: '02.04.2024 | 20 min'
        }
    ];

    this.emailRecords = [
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png',
            name: 'Brook Simmons',
            time: '3:24 PM',
            title: 'Unleash Business Potential',
            text: 'Automate, analyze, and accelerate with our SaaS platform. Unshackle from mundane tasks and focus on scaling your business. Contact us for a demo today!'
        },
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png',
            name: 'Jacob Jones',
            time: '12.23.2023',
            title: 'Optimized Workflow Revolution  ',
            text: "Experience a workflow revolution with our intuitive SaaS tool. With enhanced features and optimized processes, it's efficiency like never before. Let's get in touch for a brief demo!"
        },
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar8.png',
            name: 'Annette Black',
            time: '12.17.2023',
            title: 'Innovation at Fingertips',
            text: 'With our SaaS solution, innovation is only a click away. Shape your future with pioneering features and minimalist design. Join us for your solution walk-through today!'
        },
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg',
            name: 'Arlene McCoy',
            time: '06.17.2023',
            title: 'Seamless Integration',
            text: 'Integrate effortlessly with our user-friendly SaaS tools. Streamline your operations and boost productivity. Discover more in our demo session.'
        },
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg',
            name: 'Arlene Simmons',
            time: '04.17.2023',
            title: 'Transform Your Business',
            text: 'Empower your team with our innovative SaaS solutions. Achieve unparalleled efficiency and drive growth. Book a demo to explore the possibilities.'
        },
        {
            image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png',
            name: 'Michael Brown',
            time: '01.05.2024',
            title: 'Next-Gen Collaboration',
            text: 'Experience the future of collaboration with our cutting-edge SaaS platform. Enhance teamwork and streamline communication. Contact us for a demo today!'
        }
    ];
}


  setSelectedSampleAppsSidebarNav(title: string) {
    console.log(title);
    
    this.selectedSampleAppsSidebarNav = title;
}
}
