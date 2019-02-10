/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{valor1 = document.getElementById("PrecioUno").value;
valor2 = document.getElementById("PrecioDos").value;
valor3 = document.getElementById("PrecioTres").value;
valor1 = parseInt(valor1);
valor2 = parseInt(valor2);
valor3 = parseInt(valor3); 
var suma;
suma = (valor1 + valor2 )+ valor3  ;
alert("la suma es " + suma);
	
}
function Promedio () 
{valor1= document.getElementById("precioUno").value;
valor2= document.getElementById("precioDos").value;
valor3= document.getElementById("precioTres").value;

valor1=parseInt(valor1);
valor2=parseInt(valor2);
valor3= parseInt(valor3);
suma = valor1 + valor2 + valor3;
alert("la suma es " + suma);
	
}
function PrecioFinal () 
{valor1 = document.getElementById("PrecioUno").value;
valor2 = document.getElementById("PrecioDos").value;
valor3 = document.getElementById("PrecioTres").value;
valor1 = parseInt(valor1);
valor2 = parseInt(valor2);
valor3 = parseInt(valor3);
suma = parseInt(suma); 
var suma;
suma = valor1 + valor2 + valor3;

preciof = suma * 0.21;
alert(" precio total " + preciof);

}