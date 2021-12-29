// import { CalculatorService } from "./features/calculator.service";
import CalculatorService from "./features/calculator.service";

function init() {
    let cService = new CalculatorService();
    console.log(cService.add(10, 30))
}
init();