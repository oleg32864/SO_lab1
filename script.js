var form = document.querySelector('form')

form.addEventListener('submit', function(event) {
       event.preventDefault();

       let moneyHave = form.have.value * currencyHave.value;
       let moneyGet = moneyHave * currencyConvert.value;

       form.result.value = moneyGet.toFixed(2);
})