function onNavigate(destination) {
  if(destination && isUrl(destination)) {
    window.location.href = destination;
  } else {
    window.location.href = '#';
  }
  
}

function isUrl(link) {
  const expression = /^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  const regex = new RegExp(expression);
  return link.match(regex);
}