const encode = (value) => encodeURIComponent(value);

export const buildWhatsAppLink = ({
  phone,
  name,
  phoneNumber,
  address,
  totalPrice = 0,
  items = [],
  productName,
  quantity,
  note,
  noteOnly = false
}) => {
  const itemList = items.length
    ? items.map((item) => `• ${item.name} (x${item.quantity}) - $${item.price * item.quantity}`).join('\n')
    : productName
    ? `• ${productName} (x${quantity})`
    : '• Premium gemstones';

  const customerSection = name || phoneNumber || address
    ? `\n\nCustomer Information:\n• Name: ${name || 'N/A'}\n• Phone: ${phoneNumber || 'N/A'}\n• Address: ${address || 'N/A'}`
    : '';

  if (noteOnly || (note && !items.length && !productName && totalPrice === 0)) {
    return `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encode(note)}`;
  }

  const message = `Hello,\n\nI would like to place an order:\n\n${itemList}\n\nTotal Price: $${totalPrice}${customerSection}${note ? `\n\n${note}` : ''}\n\nPlease share payment and shipping details.\n\nThank you.`;

  return `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encode(message)}`;
};
