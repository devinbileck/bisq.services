if (!window.btcpay) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src ='https://btcpay.devinbileck.com/modal/btcpay.js';
    script.type = 'text/javascript';
    head.append(script);
}
function onBTCPayFormSubmit(event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.status == 200 && this.responseText) {
                var response = JSON.parse(this.responseText);
                window.btcpay.showInvoice(response.invoiceId);
            }
        }
    };
    xhttp.open("POST", event.target.getAttribute('action'), true);
    xhttp.send(new FormData(event.target));
}
