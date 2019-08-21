let start = document.querySelector('.start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    btn = document.getElementsByTagName('button'),
    expensesItemBtn = btn[0],
    optionalexpensesBtn = btn[1],
    countBudgetBtn = btn[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    savings = document.querySelector('#savings'),
    chooseIncome = document.querySelector('.choose-income'),
    chooseSum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.percent');

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
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;
    for(let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if(typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
            appData.expenses[a] = b;
            sum += +b;
        }else{
            i--
        }
    }
    expensesValue.textContent = sum;

});
optionalexpensesBtn.addEventListener('click', function(){
    for(let i = 0; i < optionalExpensesItem.length; i++){
        let a = optionalExpensesItem[i].value;   
        if(typeof(a) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
          appData.optionalExpenses[i] = a;
          optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '
        }
    }
})

let appData={
    budget: money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData: time,
    saving: true,
    chooseExpensis: function(){
        
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log("Минимальный уровень достака");
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        }else if(appData.moneyPerDay > 2000){
            console.log("Высокий уровень достатка")
        }else{
            console.log("Ошибка данных")
        }
    },
    checkSaving: function(){
        if (appData.saving == true){
            let save= +prompt("Какова сумма накоплений?"),
                percent= +prompt("Под какой процент?");
    
            appData.mothIncome = save/100/12*percent;
            alert("Доход с вашего депозита: " + appData.mothIncome)
        }
    },
    chooseOptExpenses: function(){
        
    },
    chooseIncome: function(){
        let items = prompt('Что принесет дополнительный доход? (перечислите через зяпятую)', '');
        while(typeof(items) !== 'string' || items == null || items == ''){            
            items = prompt('Что принесет дополнительный доход? (перечислите через зяпятую)', '');      
        }
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort(); 
    },
    additionalЕarnings: function(){
        appData.income.forEach(function(item, i){
            console.log((i + 1) + ' Способ доп. заработка: ' + item );
    });
    }
}
for (let key in appData){
    //console.log('Наша программа включает в себя данные: ' +key);
}
