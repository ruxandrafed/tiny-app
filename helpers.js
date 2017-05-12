const generateRandomString = function (len) {
  let text = "";
  const charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for( let i=0; i < len; i++ ) {
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return text;
};

module.exports = {
  generateRandomString: generateRandomString
};