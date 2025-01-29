let obj = [];
let index = 300;
try {
    //obj.execute();

   /* if (!obj.includes(17)) {
        throw new Error('17 não está disponível.');
    }*/

    if (index > 99) {
        throw new RangeError('Número está fora do intervalo.');
    }

} catch (error) {
    if (error instanceof TypeError) {
        console.log('Método indisponível');

    } else {
        console.log(error.message);
    }
}