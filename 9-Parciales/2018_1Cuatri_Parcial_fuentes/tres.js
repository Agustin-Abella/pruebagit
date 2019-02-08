function mostrar()
{var precio = prompt("indique precio");
var descuento = prompt("indique el descuento");
precio=parseint(precio);
descuento = parseint(descuento);
total= precio -(precio * descuento)/100;
alert("el total es"+total);
}