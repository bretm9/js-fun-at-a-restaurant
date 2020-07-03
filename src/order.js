
function takeOrder(incomingOrder, orderList) {
  if (orderList.length < 3) {
    orderList.push(incomingOrder);
    return orderList;
  } else {

  }
}

function refundOrder(orderKey, orderList) {
  for (var i = 0; i < orderList.length; i++) {
    if (orderList[i].orderNumber === orderKey) {
      orderList.splice(i, 1);
      return orderList;
    }
  }
}

function listItems(orderList) {
  var itemList = [];
    for (var i = 0; i < orderList.length; i++) {
      itemList.push(orderList[i].item);
    }
  var itemListString = itemList.join(", ");
  return itemListString;
}

function searchOrder(orderList, item) {
  var orderCheck = false;
  for (i = 0; i < orderList.length; i++) {
    if (orderList[i].item === item) {
      orderCheck = true;
    } else {
    }
  }
  return orderCheck;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
