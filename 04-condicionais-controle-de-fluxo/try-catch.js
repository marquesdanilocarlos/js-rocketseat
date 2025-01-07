//Try Catch
//console.log(result);

try {
    console.log(result);
} catch (error) {
    //console.log(error);
    console.log("Não foi possível executar esse código");
} finally {
    console.log("Executa isso independente de dar erro ou não.")
}


let result = 0;

try {
    if (result === 0) {
        throw new Error('Essa porra não pode ser zero!');
    }
} catch (error) {
    console.log(error);
}