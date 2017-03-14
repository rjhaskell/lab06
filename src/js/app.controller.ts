namespace Lab06 {

    export class ApplicationController {
        public num1: number = 0;
        public num2: number = 0;

        public operator: string = ""
        public result: number = 0;

        
         public calculate(num1: number, num2: number, operator: string, result: number): number{
            if(operator === "ADD") {      //Addition calculation
                return num1 + num2;
              
            };
            if(operator === "SUB") {//Subtraction calculation
                return num1 - num2;
            
            };
            if(operator === "MUL") {//Multiplication calculation
                return num1 * num2;
        
            };
            if(operator === "DIV") {//Division calculation
              return num1 / num2;
            
            };
        }

    }
}
