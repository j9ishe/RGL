import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  listOfNames = [
    {
      "id": 1,
      "firstName": "Gab",
      "lastName": "Loria",
      "age": "20",
      "isEdit": false
    },
    {
      "id": 2,
      "firstName": "Rey",
      "lastName": "Literal",
      "age": "19",
      "isEdit": false
    },
    {
      "id": 3,
      "firstName": "Janine",
      "lastName": "Moral",
      "age": "18",
      "isEdit": false
    },
    {
      "id": 4,
      "firstName": "Ishe",
      "lastName": "Matamorosa",
      "age": "19",
      "isEdit": false
    },
  ]
firstName:string="";
lastName:string="";
age:string="";

  constructor(){}
  
  addButton(){
    this.listOfNames.push({
      firstName: this.firstName, 
      lastName: this.lastName, 
      age: this.age,
      id: 0,
      isEdit: false
    });
    console.log(this.listOfNames);
  }
  delete(index:number){
    this.listOfNames.splice(index, 1)
  }
  ngOnInit(): void {
  }
  onEdit(item: any) {
    debugger;
    this.listOfNames.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }
}




