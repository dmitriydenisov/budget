let start = document.querySelector('.start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    btn = document.getElementsByTagName('button'),
    expensesItemBtn = btn[0],
    optionalExpensesBtn = btn[1],
    countBudgetBtn = btn[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    savings = document.querySelector('#savings'),
    chooseIncome = document.querySelector('.choose-income'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent');

let money, time;

   

start.addEventListener('click', function() {

    time = prompt('Введите дату в формате YYYY-MM-DD','');
    money = +prompt('Ваш бюджет на месяц?', '');

    while(isNaN(money) || money =="" || money == null){
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});



    expensesItemBtn.addEventListener('click', function(){
        console.log("jjj")
        let sum = 0;
        for(let i = 0; i < expensesItem.length; i++){
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
        
            if(typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
                appData.expenses[a] = b;
                sum += +b;
            }
        }
        expensesValue.textContent = sum;
    });



optionalExpensesBtn.addEventListener('click', function(){
    for(let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;   
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function(){

    if(appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;//budgetValue

        if(appData.moneyPerDay < 100){
            levelValue.textContent = "Минимальный уровень достака";
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelValue.textContent = "Средний уровень достатка";
        }else if(appData.moneyPerDay > 2000){
            levelValue.textContent = "Высокий уровень достатка";
        }else{
            levelValue.textContent = "Ошибка данных";
        }
    }else{
        dayBudgetValue.textContent = 'Произошла ошибка'
    }    
});

chooseIncome.addEventListener('input', function(){ //method input or change
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function(){
    if(appData.savings == true) {
        let summ = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = summ/100/12*percent;
            appData.yearIncome = summ/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function(){
    if(appData.savings == true) {
        let summ = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = summ/100/12*percent;
            appData.yearIncome = summ/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData={
    budget: money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData: time,
    saving: false,
    
}