const repetidos = require('./test01.js');

	test('Repetidos with []', function () {
		var expected = [];
		var result = repetidos([]);
		expect(result).toEqual(expected);
	});

	test('Repetidos with [1]', function () {
		var expected = [1];
		var result = repetidos([1]);
		expect(result).toEqual(expected);
	});

	test('Repetidos with [1, 2]', function () {
		var expected = [1, 2];
		var result = repetidos([1, 2]);
		expect(result).toEqual(expected);
	});

	test('Repetidos with [1, 2, 2]', function () {
		var expected = [1, 2];
		var result = repetidos([1, 2, 2]);
		expect(result).toEqual(expected);
	});

	test('Repetidos with [1, 2, 2, 1]', function () {
		var expected = [1, 2];
		var result = repetidos([1, 2, 2, 1]);
		expect(result).toEqual(expected);
	});

	
	test('Repetidos with [1, 2, 2, 1, a]', function () {
		var expected = [1, 2, 'a'];
		var result = repetidos([1, 2, 2, 1, 'a']);
		expect(result).toEqual(expected);
	});

	test('Repetidos with [1, 2, 2, 1, a, a]', function () {
		var expected = [1, 2, 'a'];
		var result = repetidos([1, 2, 2, 1, 'a', 'a']);
		expect(result).toEqual(expected);
	});

	test('Repetidos with [1, 2, 2, 1, a, a, b]', function () {
		var expected = [1, 2, 'a', 'b'];
		var result = repetidos([1, 2, 2, 1, 'a', 'a', 'b']);
		expect(result).toEqual(expected);
	});

	test('Repetidos with [1, 2, 2, 1, a, a, b, b]', function () {
		var expected = [1, 2, 'a', 'b'];
		var result = repetidos([1, 2, 2, 1, 'a', 'a', 'b', 'b']);
		expect(result).toEqual(expected);
	});

	
	test('Repetidos with [1, 2, 2, 1, a, a, b, b, hola]', function () {
		var expected = [1, 2, 'a', 'b', 'hola'];
		var result = repetidos([1, 2, 2, 1, 'a', 'a', 'b', 'b', 'hola']);
		expect(result).toEqual(expected);
	});

	test('Repetidos with [1, 2, 2, 1, a, a, b, b, hola, ola]', function () {
		var expected = [1, 2, 'a', 'b', 'hola', 'ola'];
		var result = repetidos([1, 2, 2, 1, 'a', 'a', 'b', 'b', 'hola', 'ola']);
		expect(result).toEqual(expected);
	});

	test('Repetidos with [1, 2, 2, 1, a, a, b, b, hola, ola, hola]', function () {
		var expected = [1, 2, 'a', 'b', 'hola', 'ola'];
		var result = repetidos([1, 2, 2, 1, 'a', 'a', 'b', 'b', 'hola', 'ola', 'hola']);
		expect(result).toEqual(expected);
	});

	