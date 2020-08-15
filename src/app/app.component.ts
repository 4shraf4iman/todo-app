import { Component } from '@angular/core'; 
  
@Component({ 
    selector: 'app-root', 
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
  
    /* An empty array that is responsible 
       to add a division */
    public items = []; 
  
    public newTask; 
  
    public addToList() { 
        if (this.newTask == '') { 
        } 
        else { 
            this.items.push(this.newTask); 
            this.newTask = ''; 
        } 
    } 
  
    public deleteTask( index )
    { if (confirm(" Confirm DELETE List NO : " + (index + 1)  + " ? " ))
   
    this.items.splice(index, 1); }

    } 
