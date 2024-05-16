const apiKey = 'a142402eed9503e4da8db3b1';
const apiUrl = `https://v6.exchangerate-api.com/v6/a142402eed9503e4da8db3b1/latest/USD`;

const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');


const convertCurrency = () => {
    const amount = amountInput.value;
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    
    if (!amount || isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount to convert.';
        return;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch exchange rates. Please try again later.');
            }
            return response.json();
        })
        .then(data => {
            const exchangeRates = data.conversion_rates;

            
            if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
                throw new Error('Invalid currency selection. Please select valid currencies.');
            }

            const fromRate = exchangeRates[fromCurrency];
            const toRate = exchangeRates[toCurrency];

            const convertedAmount = (amount * toRate) / fromRate;
            resultDiv.textContent = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error:', error.message);
            resultDiv.textContent = 'An error occurred. Please try again later.';
        });
};

convertBtn.addEventListener('click', convertCurrency);