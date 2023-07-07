import mercadopago from "mercadopago";

// this token is only for test, not is valid for account
export async function createOrder(req, res) {
  mercadopago.configure({
    access_token:
      "TEST-4755251299857976-070619-4c3baeefb92e71206b340d3fc5ad7f78-1416451863",
  });
  const response = await mercadopago.preferences.create({
    items: [
      {
        title: "Mechanike Keyboard",
        unit_price: 599,
        currency_id: "MXN",
        quantity: 1,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending",
    },
    notification_url: "https://0fcd-189-193-230-248.ngrok.io/webhook",
  });
  console.log(response);
  return res.send(response.body);
}

export async function receiveWebhook(req, res) {
  const payment = req.query;
  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data);
      // save info in database
      // info is assigned when payment is completed
    }
    return res.status(204).json({ message: "ok" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}
