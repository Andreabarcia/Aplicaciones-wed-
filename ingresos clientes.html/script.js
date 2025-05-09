document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const genero = document.getElementById("genero").value;
  
    // Validación básica
    if (!nombre || !correo || !telefono || !direccion || !fechaNacimiento || !genero) {
      alert("Por favor complete todos los campos.");
      return;
    }
  
    // Crear nueva fila en la tabla
    const tabla = document.querySelector("#tablaClientes tbody");
    const fila = tabla.insertRow();
  
    fila.insertCell().textContent = nombre;
    fila.insertCell().textContent = correo;
    fila.insertCell().textContent = telefono;
    fila.insertCell().textContent = direccion;
    fila.insertCell().textContent = fechaNacimiento;
    fila.insertCell().textContent = genero;
  
    // Limpiar formulario
    document.getElementById("clienteForm").reset();
  });
  