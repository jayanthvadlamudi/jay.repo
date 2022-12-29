import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "jayanth";
  constructor(){
console.log (this.arithmaticoperations(1, 2, 3, "sub"));
   console.log (this.arithmaticoperations1(1, 2, 3, "add"));
   console.log (this.arithmaticoperations2(1, 2, 3, "mul"));

  }
  
  arithmaticoperations(a:any, b:any, c:any, d:any) {
    return a - b - c ;
  } arithmaticoperations1(a:any, b:any, c:any, d:any) {
    return a +b + c ;
  }  arithmaticoperations2(a:any, b:any, c:any, d:any) {
    return a * b * c ;
  }
}

{
var a=453;
var b=6587;
var temp=a;

 temp=a;
a=b;
 b=temp;
console.log(a,b);
}


{ 
var i=10;
let mult=1;
for (i=10;i>=1;i--){
mult=mult* i;
console.log(mult);
}
}

{
  let i=23;
let mult=1;
let temp=i;
for(i=4;i>=1;i--){
  mult=mult*1;

temp=i;
i=mult;
mult=temp;
}
console.log(mult);


}
