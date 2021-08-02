const template = {
  es: {
    name: 'sales-order-rejected-dostavista-es',
    subject: 'Tu pedido ha sido rechazado',
  },
  data: {
		netsuiteId: 3952955,
		status: "REJECTED BY DOSTAVISTA",
		customer: {
			first_name: "Hector",
			last_name: "Vazquez",
			phone_number: "5566778899"
		},
		order: {
			statusCode: "invalid_parameters",
			description: {
				points: [null, {
					address: ["address_not_found"]
				}]
			},
			products: [{
				product_name: "CLIP PLUS",
				quantity: 2,
				amount: 998
			}]
		},
		shippedAddress: {
			address1: "Acads",
			address2: "12",
			colony: "Buenavista",
			state: "Ciudad de Mexico",
			municipality: "Iztapalapa"
		}
	}
};

module.exports = locale => ({ data: template.data, ...template[locale] });
