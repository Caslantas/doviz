'use strict'

const cartContainer = document.querySelector('.container')
const url = 'https://finans.truncgil.com/today.json'

const UserData = function (data) {
  const html = `<table class="table border border-dark fw-semibold table table-striped">
        <thead>
          <tr>
            <th scope="col">Canlı Döviz Kurları</th>
            <th scope="col">Alış</th>
            <th scope="col">Satış</th>
            <th scope="col">Güncel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img
                src="https://bayraklardoviz.com/img/flags/usd-icon.png"
                alt=""
               
              />
              
              Dolar 
            </th>
          
            <td>${data.USD.Alış}   </td>
            <td>${data.USD.Satış}</td>
            <td >${data.USD.Değişim}</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                src="https://bayraklardoviz.com/img/flags/eur-icon.png"
                alt=""
              />
              Euro
            </th>
            <td>${data.EUR.Alış}</td>
            <td>${data.EUR.Satış}</td>
            <td>${data.EUR.Değişim}</td>
          </tr>

          <tr>
            <th scope="row">
              <img
                src="https://bayraklardoviz.com/img/flags/chf-icon.png"
                alt=""
              />
              İsviçre Frangı
            </th>
            <td>${data.CHF.Alış}</td>
            <td>${data.CHF.Satış}</td>
            <td>${data.CHF.Değişim}</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                src="https://bayraklardoviz.com/img/flags/aud-icon.png"
                alt=""
              />
              Avustralya Doları
            </th>
            <td>${data.AUD.Alış}</td>
            <td>${data.AUD.Satış}</td>
            <td>${data.AUD.Değişim}</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                src="https://bayraklardoviz.com/img/flags/gbp-icon.png"
                alt=""
              />İngiliz Sterlin
            </th>
            <td>${data.GBP.Alış}</td>
            <td>${data.GBP.Satış}</td>
             <td>${data.GBP.Değişim}</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                src="https://bayraklardoviz.com/img/flags/cad-icon.png"
                alt=""
              />
              Kanada Doları
            </th>
            <td>${data.CAD.Alış}</td>
            <td>${data.CAD.Satış}</td>
            <td>${data.CAD.Değişim}</td>
          </tr>

          <tr>
            <th scope="row">
              <img
                src="https://bayraklardoviz.com/img/flags/dkk-icon.png"
                alt=""
              />
              Danimarka Kronu
            </th>
            <td>${data.DKK.Alış}</td>
            <td>${data.DKK.Satış}</td>
            <td>${data.DKK.Değişim}</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                src="https://bayraklardoviz.com/img/flags/sek-icon.png"
                alt=""
              />
              İsveç Kronu
            </th>
            <td>${data.SEK.Alış}</td>
            <td>${data.SEK.Satış}</td>
            <td>${data.SEK.Değişim}</td>
          </tr>

          <tr>
            <th scope="row">
              <img
                src="https://bayraklardoviz.com/img/flags/nok-icon.png"
                alt=""
              />
              Norveç Kronu
            </th>
            <td>${data.NOK.Alış}</td>
            <td>${data.NOK.Satış}</td>
            <td>${data.NOK.Değişim}</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                src="https://bayraklardoviz.com/img/flags/rub-icon.png"
                alt=""
              />
              Rusya Rublesi
            </th>
            <td>${data.RUB.Alış}</td>
            <td>${data.RUB.Satış}</td>
            <td>${data.RUB.Değişim}</td>
          </tr>
        </tbody>
      </table>
      

      `
  cartContainer.insertAdjacentHTML('beforeend', html)
}
const request = fetch(url)

const getUserData = function () {
  fetch(url)
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (data) {
      UserData(data)
      console.log(data)
    })
}
getUserData()
