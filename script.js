function order(product){
  let phone = "923180957645";
  let message = "Hello! I want to order: " + product;
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url,"_blank");
}
