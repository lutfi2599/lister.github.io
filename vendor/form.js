"use strict";

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyJg3KOlzvU2ehqRyTlU9buwwhgMBP6OoieT1XO0WKR44KrLuGiCU48d43AXNj9Za-Z/exec'
  const form = document.forms['push-lister']

  const btnKirim = document.querySelector('.btn-kirim');
  const btnLoading = document.querySelector('.btn-loading');
  const myAlert = document.querySelector('.my-alert');
  const myAlertErr = document.querySelector('.my-alert-err');

  form.addEventListener('submit', e => {
    e.preventDefault()

    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');

        myAlert.classList.toggle('d-none');

        form.reset();

        // console.log('Success!', response)
    })
      .catch(error => {
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        
        myAlertErr.classList.toggle('d-none');

        form.reset();
        // console.error('Error!', error.message)
    })
  })