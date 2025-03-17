/*SCRAPER DESENVOLVIDA POR GLEYSONDEVS, NÃO ME IMPORTA OQ FARA COM ELA MAIS DEIXO CLARO QUE NÃO ME RESPONSABILIZO POR USO INDEVIDO DELA

wa.me/5511911942403
© Copyright by GleysonDevs
*/

const axios = require("axios");

const ACCESS_TOKEN = 'APP_USR-7807150050133699-112019-53cd0c393ea0fee29c492cee1ffa92a2-451407797'; 

async function criarPagamentoPix(valorCompra, descricao, idempotencyKey) {
    const payment_data = {
        transaction_amount: valorCompra,
        description: descricao || 'Pagamento via PIX',
        payment_method_id: "pix",
        payer: {
            email: "pedrocarvalhoblest@gmail.com",
            first_name: "marileide Barbosa do Nascimento",
            last_name: "marileide",
            identification: {
                type: "CPF",
                number: "34608023837"
            }
        }
    };


    try {
        const response = await axios.post(
            'https://api.mercadopago.com/v1/payments',
            payment_data,
            {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                    'X-Idempotency-Key': idempotencyKey
                }
            }
        );

        const pagamento = response.data;

        console.log('Pagamento criado com sucesso:', pagamento);

        return {
            id: pagamento.id,
            qr_code: pagamento.point_of_interaction.transaction_data.qr_code,
            qr_code_base64: pagamento.point_of_interaction.transaction_data.qr_code_base64
        };
    } catch (error) {
        console.error('Erro ao criar o pagamento:', error.response ? error.response.data : error.message);
        throw new Error('Erro ao criar o pagamento');
    }
}

async function verificarPix(id) {
    try {
        const response = await axios.get(
            `https://api.mercadopago.com/v1/payments/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`
                }
            }
        );

        const pagamento = response.data;

        return {
            status: pagamento.status,
            status_detail: pagamento.status_detail
        };
    } catch (error) {
        console.error('Erro ao verificar o status do pagamento:', error.response ? error.response.data : error.message);
        throw new Error('Erro ao verificar o status do pagamento');
    }
}


module.exports = { criarPagamentoPix, verificarPix };