describe('super calculator actions' , function(){

    var CalculatorPage = require('./PageObjects/Calc_Page.js');
    var exparams = browser.params;

    it('MULTIPLICATION',function(){
        CalculatorPage.navigate();
        CalculatorPage.EnterFirst(exparams.Mulp.input1);
        CalculatorPage.SelectOperator('MULTIPLICATION');
        CalculatorPage.EnterSecond(exparams.Mulp.input2);
        CalculatorPage.ClickGo();
        var actualVal = CalculatorPage.GetResult();
        expect(actualVal).toEqual(exparams.Mulp.output);
    });
    it('verify history',function(){
        var eleHistory = CalculatorPage.GetHistory(0);
        //expect(eleHistory.count()).toBe(2);
        expect(eleHistory).toContain(exparams.Mulp.VerifyHistory);

    });
});
