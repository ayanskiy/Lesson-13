document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = `https://v6.exchangerate-api.com/v6/14a556422ac360d375ac79b1/latest/KZT`;
    const fromCurrencySelect = document.querySelector('#fromCurrency');
    const toCurrencySelect = document.querySelector('#toCurrency');
    const amountInput = document.querySelector('#amountInputField');
    const convertButton = document.querySelector('#convertButton');
    const resultElement = document.querySelector('#convertResult');
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const rates = data.conversion_rates;
        Object.keys(rates).forEach(currency => {
          const fromOption = document.createElement('option');
          fromOption.value = currency;
          fromOption.textContent = currency;
          fromCurrencySelect.appendChild(fromOption);
  
          const toOption = document.createElement('option');
          toOption.value = currency;
          toOption.textContent = currency;
          toCurrencySelect.appendChild(toOption);
        });
  
        fromCurrencySelect.value = 'KZT';
        toCurrencySelect.value = 'USD';
      })
      .catch(error => {
        ratesElement.innerHTML = `<p>Ошибка: ${error.message}</p>`;
      });
  
    convertButton.addEventListener('click', () => {
      const amount = parseFloat(amountInput.value);
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;
  
      if (isNaN(amount)) {
        resultElement.textContent = 'Введите корректную сумму.';
        return;
      }
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const rates = data.conversion_rates;
          if (rates[fromCurrency] && rates[toCurrency]) {
            const rate = rates[toCurrency] / rates[fromCurrency];
            const result = amount * rate;
            resultElement.textContent = `Результат: ${result.toFixed(2)} ${toCurrency}`;
          } else {
            resultElement.textContent = 'Ошибка: выбранная валютная пара не найдена.';
          }
        })
        .catch(error => {
          resultElement.textContent = `Ошибка: ${error.message}`;
        });
    });
  });