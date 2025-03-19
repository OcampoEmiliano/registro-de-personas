def registrar_personas():
    """Función principal del programa."""
    personas = []
    continuar = True
    
    print("=== REGISTRO DE PERSONAS ===")
    
    while continuar:
        # Solicitar datos de la persona
        nombre = input("Ingrese el nombre (o escriba 'finalizar' para terminar): ")
        
        # Verificar si el usuario desea finalizar
        if nombre.lower() in ["finalizar", "terminado"]:
            continuar = False
            continue
        
        # Solicitar edad y nota
        try:
            edad = int(input("Ingrese la edad: "))
            nota = float(input("Ingrese la nota: "))
            
            # Agregar la persona a la lista
            personas.append([nombre, edad, nota])
            print(f"Persona registrada: {nombre}, {edad} años, nota: {nota}")
            
        except ValueError:
            print("Error: La edad y la nota deben ser números. Intente nuevamente.")
    
    # Mostrar listado original
    print("\n=== LISTADO ORIGINAL ===")
    mostrar_listado(personas)
    
    # Ordenar por nota de mayor a menor
    personas_ordenadas = sorted(personas, key=lambda x: x[2], reverse=True)
    
    # Mostrar listado ordenado
    print("\n=== LISTADO ORDENADO POR NOTA (MAYOR A MENOR) ===")
    mostrar_listado(personas_ordenadas)

def mostrar_listado(lista):
    """Función para mostrar un listado de personas."""
    if not lista:
        print("No hay personas registradas.")
        return
    
    print(f"{'Nombre':<15}{'Edad':<10}{'Nota':<10}")
    print("-" * 35)
    
    for persona in lista:
        print(f"{persona[0]:<15}{persona[1]:<10}{persona[2]:<10}")

# Iniciar el programa
if __name__ == "__main__":
    registrar_personas()