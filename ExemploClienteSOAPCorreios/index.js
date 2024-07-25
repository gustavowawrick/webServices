const soap = require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, function (err, client) {
    //console.log('Descreve o WSDL: ', client.describe().AtendeClienteService.AtendeClientePort);

    client.consultaCEP({ cep: '91520260' }, function (err, client) {
        if (err) {
            console.log(err);
        } else {
            console.log(client);
        }
    });

});