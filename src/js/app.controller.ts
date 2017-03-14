namespace Lab06 {

    export class ApplicationController {
        public num1: number = 0;
        public num2: number = 0;

        public operator: string = ""
        public result: number = 0;

        
         public calculate(): number{
            if(this.operator === "ADD") {      //Addition calculation
                return this.num1 + this.num2;
              
            }
            else if(this.operator === "SUB") {//Subtraction calculation
                return this.num1 - this.num2;
            
            }
            else if(this.operator === "MUL") {//Multiplication calculation
                return this.num1 * this.num2;
        
            }
            else if(this.operator === "DIV") {//Division calculation
              return this.num1 / this.num2;
            
            };
        }

    }
}
