
const WHATSAPP_NUMBER = "923284691660";

const products = {
    "Bari Shehad": 2500,
    "Choti Shehad": 4000
};

const weights = {
    "250 Gram": 0.25,
    "500 Gram": 0.5,
    "1 KG": 1,
    "2 KG": 2
};

// Calculate product price
function calculatePrice(product, weight) {

    const rate = products[product];
    const quantity = weights[weight];

    return rate * quantity;
}

// Send order to WhatsApp
function sendOrder(product, weight, quantity, name, phone, address) {

    if (!products[product] || !weights[weight]) {
        alert("Please select a valid honey product and weight.");
        return;
    }

    if (!name.trim() || !phone.trim() || !address.trim()) {
        alert("Please fill in all your details.");
        return;
    }

    quantity = Number(quantity);

    if (!Number.isInteger(quantity) || quantity < 1) {
        alert("Please enter a valid quantity.");
        return;
    }

    const unitPrice = calculatePrice(product, weight);
    const total = unitPrice * quantity;

    const message = `
🍯 YAQUOOB SADIQ PURE HONEY

New Customer Order

👤 Customer: ${name}
📞 Phone: ${phone}

🍯 Product: ${product}
⚖️ Weight: ${weight}
📦 Quantity: ${quantity}

💰 Price Per Jar: Rs. ${unitPrice.toLocaleString("en-PK")}
💵 Total Amount: Rs. ${total.toLocaleString("en-PK")}

🏠 Delivery Address:
${address}

Please confirm my order.

Thank you!
`;

    const url = "https://wa.me/" + WHATSAPP_NUMBER +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

// Direct call
function callOwner() {
    window.location.href = "tel:+923068281331";
}

// Welcome message
console.log("YAQUOOB SADIQ PURE HONEY WEBSITE READY!");
