describe('super calculator actions' , function(){

    var CalculatorPage = require('./Calc_Page.js');
    var exparams = browser.params;

    it('SUBTRACTION',function(){
        CalculatorPage.navigate();
        CalculatorPage.EnterFirst(exparams.Subt.input1);
        CalculatorPage.SelectOperator("SUBTRACTION");
        CalculatorPage.EnterSecond(exparams.Subt.input2);
        CalculatorPage.ClickGo();
        var actualVal = CalculatorPage.GetResult();
        expect(actualVal).toEqual(exparams.Subt.output);
    });
    it('verify history',function(){
        var eleHistory = CalculatorPage.GetHistory(0);
        //expect(eleHistory.count()).toBe(2);
        expect(eleHistory).toContain(exparams.Subt.VerifyHistory);

    });
});
