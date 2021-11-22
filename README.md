<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


    Considere el siguiente problema:

    Escriba un programa corto de una sola línea permita filtrar todos los elementos de una array sin posibles repeticiones.
    
     N = 4 
    
         [7, 7, 7, 8]

     Resultado
	 
         [7,8]


    Observe el orden del elemento repetido. Éste debe de estar en el orden correcto.
    Atienda a números, letras y palabras.
    
    El resultado debe ser un array con los elementos no repetidos.
    
    
    Se atiente al siguiente ejemplo:
   
    N = 1          N = 2          N = 3          N = 4               N = 5
      
        [6]        [6, 6]         [6, 6, 9]      [6, 6, 9, 'a']      [6, 6, 9, 'a', 'a']        
                 
    Resultado:
 
	    [6]	       [6]	      [6, 9]         [6, 9, 'a']         [6, 9, 'a']      
                                  
    

    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.       
    


    [Suite Tests]
    
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

	 PASS  test/suite.test.js
    √ Repetidos with [] (4ms)
    √ Repetidos with [1] (1ms)
    √ Repetidos with [1, 2]
    √ Repetidos with [1, 2, 2]
    √ Repetidos with [1, 2, 2, 1]
    √ Repetidos with [1, 2, 2, 1, a] (1ms)
    √ Repetidos with [1, 2, 2, 1, a, a]
    √ Repetidos with [1, 2, 2, 1, a, a, b]
    √ Repetidos with [1, 2, 2, 1, a, a, b, b] (1ms)
    √ Repetidos with [1, 2, 2, 1, a, a, b, b, hola]
    √ Repetidos with [1, 2, 2, 1, a, a, b, b, hola, ola]
    √ Repetidos with [1, 2, 2, 1, a, a, b, b, hola, ola, hola]

    Test Suites: 1 passed, 1 total
    Tests:       12 passed, 12 total
    Snapshots:   0 total
    Time:        2.724s
	Ran all test suites.


## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
