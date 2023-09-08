export default function initFetchBitcoin() {

    const btcPreco = document.querySelector('.btc-preco')
    const url = 'https://blockchain.info/ticker';

    fetch(url).then(response => response.json()).then(bitcoin => {
        btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4) 
    }).catch(erro => {
        console.log(Error(erro))
    })

    
}