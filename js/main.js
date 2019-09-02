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
    optionalExpensesBtn = btn[1],
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


optionalExpensesBtn.addEventListener('click', function(){
    for(let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;   
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function(){

    if(appData.budget != undefined){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
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

let appData={
    budget: money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData: time,
    saving: false,
    detectDayBudget: function(){
        
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function(){
       
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
