describe('super calculator actions' , function(){

var CalculatorPage = require('./Calc_Page.js');
var exparams = browser.params;

it('ADDITION',function(){
	CalculatorPage.navigate();
	CalculatorPage.EnterFirst(exparams.Addi.input1);
	CalculatorPage.SelectOperator("ADDITION");
	CalculatorPage.EnterSecond(exparams.Addi.input2);
	CalculatorPage.ClickGo();
	var actualVal = CalculatorPage.GetResult();
	expect(actualVal).toEqual(exparams.Addi.output);
});
it('verify history',function(){
	var eleHistory = CalculatorPage.GetHistory(0);
	//expect(eleHistory.count()).toBe(2);
	expect(eleHistory).toContain(exparams.Addi.VerifyHistory);
	
});
});
