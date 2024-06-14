//Curso intermedio de jasvascript

//creamos un objeto literal
loki = {
    nombre: 'loki',
    raza: 'mestizo',
    edadMeses: 12,
    hermanos: {
        hermano1: 'max',
        hermano2: 'rex'
    },
    saludo(miNombre){
        console.log(`Hola, ${miNombre} desde el objeto ${nombre}`);
    },
}

/////////////// CREAR COPIAS POCO PROFUNDAS /////////////////

//crear copias de loki... Recuerada que arreglos y objetos si se copian con el operador = (asiganacion) se pas una copia por referencia y NO por valor...

lucas = {...loki}// para hacer una copia por valor, podemos usar el operador spread ... tener encuenta que solo funciona para tipo de datos primitivos por lo cual en este ejemplo el paso por valor solo se aplica a las propiedades nombre, raza, edadMeses. la propiedad hermanos es un objeto por lo cual la copia se pasa por referencia.  
// Por lo cual si le cambiamos el nombre de uno de los hermanos al objeto lucas(copia de loki), esto afectaria al objeto original loki..Ejemplo

lucas['nombre'] = 'lucas';// Modificamos el nombre en la copia creada del objeto loki... y esto no afecta a la propieda nombre del objeto original loki.
lucas.hermanos['hermano1'] = 'MAXIMO';//Pero si modificamos a la propiedad hermano 1 del objeto hermanos... esta si afecta al objeto original

console.log(loki);
console.log(lucas);

////////////// CFEAR COPIAS PROFUNDAS /////////

// rocky = structuredClone(loki);

// rocky['nombre'] = 'rocky';
// console.log('rocky: ',rocky);

/// probando como hacer copias profundas

oso = {...loki};
console.log('Objeto oso: ', oso);
oso.hermanos = {...loki.hermanos};

oso.hermanos['hermano1'] = 'oso';
console.log('Objeto oso impresion 2: ', oso);
console.log(loki);


console.log(oso.saludo('jhovany'));


    