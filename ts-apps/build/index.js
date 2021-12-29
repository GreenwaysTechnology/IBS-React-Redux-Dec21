"use strict";
exports.__esModule = true;
// import { CalculatorService } from "./features/calculator.service";
var calculator_service_1 = require("./features/calculator.service");
function init() {
    var cService = new calculator_service_1["default"]();
    console.log(cService.add(10, 30));
}
init();
