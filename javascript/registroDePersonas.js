function registrarPersonas() {
    const personas = [];
    let continuar = true;
    
    console.log("=== REGISTRO DE PERSONAS ===");
    
    while (continuar) {
        // Solicitar datos de la persona
        const nombre = prompt("Ingrese el nombre (o escriba 'finalizar' para terminar):");
        
        // Verificar si el usuario desea finalizar
        if (nombre.toLowerCase() === "finalizar" || nombre.toLowerCase() === "terminado") {
            continuar = false;
            continue;
        }
        
        // Solicitar edad y nota
        const edad = parseInt(prompt("Ingrese la edad:"));
        const nota = parseFloat(prompt("Ingrese la nota:"));
        
        // Validar que los datos sean correctos
        if (isNaN(edad) || isNaN(nota)) {
            console.log("Error: La edad y la nota deben ser números. Intente nuevamente.");
            continue;
        }
        
        // Agregar la persona a la lista
        personas.push([nombre, edad, nota]);
        console.log(`Persona registrada: ${nombre}, ${edad} años, nota: ${nota}`);
    }
    
    // Mostrar listado original
    console.log("\n=== LISTADO ORIGINAL ===");
    mostrarListado(personas);
    
    // Ordenar por nota de mayor a menor
    const personasOrdenadas = [...personas].sort((a, b) => b[2] - a[2]);
    
    // Mostrar listado ordenado
    console.log("\n=== LISTADO ORDENADO POR NOTA (MAYOR A MENOR) ===");
    mostrarListado(personasOrdenadas);
}

// Función para mostrar un listado de personas
function mostrarListado(lista) {
    if (lista.length === 0) {
        console.log("No hay personas registradas.");
        return;
    }
    
    console.log("Nombre\t\tEdad\tNota");
    console.log("--------------------------------");
    
    for (const persona of lista) {
        console.log(`${persona[0]}\t\t${persona[1]}\t${persona[2]}`);
    }
}

// Iniciar el programa
registrarPersonas();