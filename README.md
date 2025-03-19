# Programa de Registro de Personas

Este repositorio contiene un programa que permite registrar datos de varias personas (nombre, edad y nota), y luego muestra un listado de los datos tal como fueron ingresados y otro ordenado por nota de mayor a menor.

# Clonar el Repositorio

git clone https://github.com/OcampoEmiliano/registro-de-personas.git

## Características del programa

- Registro de múltiples personas con sus datos (nombre, edad, nota)
- Opción para finalizar la carga de datos escribiendo "finalizar" o "terminado"
- Visualización del listado original
- Visualización del listado ordenado por nota de mayor a menor

## Versiones disponibles

El programa está disponible en dos lenguajes:
- JavaScript
- Python

## Cómo ejecutar el programa en JavaScript

1. Descarga el archivo `registroDePersonas.js`
2. Abre el archivo en un navegador web:
   
   index.html

3. Al abrir la página en el navegador, se iniciará el programa y podrás interactuar con él a través de ventanas emergentes (prompts).
4. Los resultados se mostrarán en la consola del navegador (puedes abrirla presionando F12).

## Cómo ejecutar el programa en Python

1. Asegúrate de tener Python instalado en tu sistema (versión 3.x recomendada).
2. Descarga el archivo `registro_personas.py`
3. Abre una terminal o línea de comandos.
4. Navega hasta la ubicación donde guardaste el archivo.
5. Ejecuta el programa con el comando:
   
   ```
   python registro_personas.py
   ```
   
   o si tienes múltiples versiones de Python:
   
   ```
   python3 registro_personas.py
   ```

6. Sigue las instrucciones que aparecen en la terminal para ingresar los datos.

## Uso del programa

1. El programa te pedirá que ingreses el nombre de una persona.
2. Si deseas finalizar la carga de datos, escribe "finalizar" o "terminado".
3. Si continúas, te pedirá la edad (número entero) y la nota (número decimal).
4. Repite el proceso para cada persona que desees registrar.
5. Cuando finalices la carga, el programa mostrará:
   - El listado original tal como fueron ingresados los datos
   - El listado ordenado por nota de mayor a menor

## Estructura de los datos

Cada persona se almacena como una lista/array con la siguiente estructura:
- Posición 0: Nombre (cadena de texto)
- Posición 1: Edad (número entero)
- Posición 2: Nota (número decimal)