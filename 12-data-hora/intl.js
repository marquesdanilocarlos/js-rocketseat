let intlDate = new Date();
const currentLocale = Intl.DateTimeFormat().resolvedOptions();
console.log(currentLocale);

//Formata de acordo com a localidade
console.log(Intl.DateTimeFormat('en-US', {}).format(intlDate));

//Diferença do timezone em minutos
let timeZoneDiff = intlDate.getTimezoneOffset();
console.log(timeZoneDiff);