namespace Lab06 {

    export class ApplicationController {
        public num1: number = 0;
        public num2: number = 0;

        public operator: string = ""
        public result: number = 0;

        /**             //popped out with calculate method!
         * calculate
         */
         public calculate(num1, num2, operator, result) {
            if(operator == "ADD") {      //Addition calculation
                let result = num1 + num2;
                return result;
            }else if(operator == "SUB") {//Subtraction calculation
                let result: number = num1 - num2;
                return result;
            }else if(operator == "MUL") {//Multiplication calculation
                let result: number = num1 * num2;
                return result;
            }else if(operator == "DIV") {//Division calculation
                let result: number = num1 / num2;
                return result;
            }
        }

    }
}
