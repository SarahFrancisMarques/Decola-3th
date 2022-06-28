function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if(e instanceof ReferenceError) {
			console.log('Este e um erro ReferenceError!');
			console.log(e.message);
		} else if(e instanceof TypeError) {
            console.log('Este e um erro typeError!');
            console.log(e.message); 
        } else if(e instanceof RangeError) {
			console.log('Este e um erro RangeError!');
			console.log(e.message);
		} else {
			console.log('Outro tipo de erro!' + e);
		}
	}
}

console.log(validaArrays([1, 2, 3], 0));