import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number
  AvaliableFunds: number;

  Clientes: String[];
  Projects: String[];
  Years: Number[]=[];
  TeamMembersSummary=[];
  TeamMembers=[];

  constructor() { }

  ngOnInit() {
    this.Designation = "Team Leader";
    this.Username = "Jean Fredson";
    this.NoOfTeamMembers = 22;
    this.TotalCostOfAllProjects = 1500;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 21233331;
    this.CurrentExpenditure = 88931;
    this.AvaliableFunds = 53231111;

    this.Clientes = ["OsirisTech TI","IPES GASES inc.","Ecomix Sustentável"];
    this.Projects = ["Project A","Project B", "Project C","Project D","Project E"]

    for (var i=2019;i>=2000; i--){
      this.Years.push(i);
    }

    this.TeamMembersSummary=[
      {Region:"Norte",TeamMemberCount:20,TemporaryUnavaliableMember:3},
      {Region:"Sul",TeamMemberCount:14,TemporaryUnavaliableMember:2},
      {Region:"Leste",TeamMemberCount:44,TemporaryUnavaliableMember:6},
      {Region:"Oeste",TeamMemberCount:10,TemporaryUnavaliableMember:1},
    ];

    this.TeamMembers=[
        {Region:"Norte",Members:[
          {ID:1,Name:"Ford",Status:"Available"},
          {ID:2,Name:"Miller",Status:"Available"},
          {ID:3,Name:"Jhon",Status:"Busy"},
          {ID:4,Name:"Felipe",Status:"Busy"},
        ]},
        {Region:"Sul",Members:[
          {ID:1,Name:"Claudio",Status:"Available"},
          {ID:2,Name:"Marcos",Status:"Available"},
          {ID:3,Name:"Jose",Status:"Busy"},
          {ID:4,Name:"Henrique",Status:"Busy"},
        ]},
        {Region:"Leste",Members:[
          {ID:1,Name:"Clarissa",Status:"Available"},
          {ID:2,Name:"Jean",Status:"Available"},
          {ID:3,Name:"Bryan",Status:"Busy"},
          {ID:4,Name:"Matheus",Status:"Busy"},
        ]},
        {Region:"Oeste",Members:[
          {ID:1,Name:"Thiago",Status:"Available"},
          {ID:2,Name:"Lucas",Status:"Available"},
          {ID:3,Name:"Marcos",Status:"Busy"},
          {ID:4,Name:"Joao",Status:"Busy"},
        ]}
    ]; 
  }
  
  
  onProjectChange($event)
  {
   // console.log($event.target)
 
    if($event.target.innerHTML == 'Project A'){
     this.ProjectCost = 208900;
     this.CurrentExpenditure = 3500;
     this.AvaliableFunds= 1500;
   }else if ($event.target.innerHTML =='Project B'){
    this.ProjectCost = 4432112;
    this.CurrentExpenditure = 53551;
    this.AvaliableFunds= 3512;
   }else if ($event.target.innerHTML =='Project C'){
    this.ProjectCost = 535152;
    this.CurrentExpenditure = 3122;
    this.AvaliableFunds= 3512;
   }else if ($event.target.innerHTML =='Project D'){
    this.ProjectCost = 35661;
    this.CurrentExpenditure = 44321;
    this.AvaliableFunds = 3512;
   }else if ($event.target.innerHTML =='Project E'){
    this.ProjectCost = 887334;
    this.CurrentExpenditure = 40329;
    this.AvaliableFunds= 342055;
   }
  }
}
