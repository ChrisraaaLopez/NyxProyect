# Evidencia 1: Avances Iniciales del Prototipo

**Integrantes del equipo:**  
- Christian Israel Lopez Lopez
- Guillermo Romero Cuevas                       
- Emiliano Villa Tovar
- Jonathan Alejandro Gutierrez Gallardo 

**Carrera:** Ingenireria en Sistemas Computacionales  
**Grupo:** A
**Fecha:** 11 de Noviembre de 2025

---

## 1. Propuesta del Prototipo

### Título Tentativo del Prototipo
**Nyx** — Sistema de cerradira Inteligente con reconocimiento Facial

</br>
<p align="center">
    <img src="../eyeCon.svg" width="200">
</p>
<br/>

### Objetivo General
Diseñar y desarrollar un sistema inteligente de **control de acceso**, capaz de **reconocer rostros autorizados desde una cámara integrada en la cerradura** y **permitir la gestión de usuarios desde una plataforma web** conectada al dispositivo principal.

### Descripción Breve
El sistema **Nyx** integra una **ESP32-CAM** instalada en la puerta, la cual captura rostros en tiempo real y los compara con una base de datos de **usuarios registrados en una aplicación web**.  
La **ESP32** principal controla un **relay** que activa la **cerradura electromagnética**, permitiendo el acceso únicamente a personas reconocidas.  
Los datos y registros se almacenan en una **memoria SD**, y la conexión entre la interfaz web y el dispositivo físico se realiza mediante **Wi-Fi** y **servidor local o en la nube**.

### ¿A quién ayuda o qué problema resuelve?
Este sistema está enfocado en **mejorar la seguridad de accesos restringidos**, permitiendo a los administradores:
- **Registrar y gestionar rostros autorizados** desde una interfaz web.  
- **Evitar accesos no autorizados** mediante reconocimiento facial automático.  
- **Monitorear la actividad del sistema** de manera remota y eficiente.

Ideal para oficinas, laboratorios, viviendas inteligentes o cualquier espacio donde se requiera control de acceso sin llaves físicas.

### Tipo de Sensores o IA que se utilizará
- **Detección y reconocimiento facial** mediante la cámara ESP32-CAM.  
- **Gestión de usuarios y rostros** mediante aplicación web (base de datos en línea).  
- **Automatización con inteligencia embebida (IoT + visión artificial)**.  

---

## 2. Boceto o Diagrama del Diseño

### Dibujo del Prototipo
*(Inserta aquí una imagen o enlace al diagrama realizado en Tinkercad, Fritzing o Canva)*

### Componentes Visibles
- ESP32  
- ESP32-CAM  
- Fuente de poder  
- Relay  
- Cerradura electromagnética  
- Memoria SD  
- Antena Wi-Fi  
- Webcam (para pruebas externas o monitoreo adicional)  
- Cableado general  
- Puerta y marco del prototipo físico  

### Flujo General del Funcionamiento
1. Desde la **plataforma web**, un administrador registra nuevas caras autorizadas.  
2. Las imágenes o datos de reconocimiento se envían al sistema (ESP32-CAM).  
3. Cuando una persona se acerca a la puerta, la **cámara** analiza el rostro.  
4. Si el rostro coincide con un usuario registrado, la **ESP32** activa el **relay**, desbloqueando la **cerradura electromagnética**.  
5. Si no hay coincidencia, la puerta permanece cerrada y se genera un registro del intento.  
6. Todos los eventos se almacenan en la **memoria SD** y pueden visualizarse desde la interfaz web.  

*(Agrega aquí un diagrama de flujo tipo bloques con flechas que representen este proceso.)*

---

## 3. Lista de Materiales y Ensamble

### Lista de Materiales
| Componente | Cantidad | Estado (Disponible / Por comprar) | Lugar de compra |
|-------------|-----------|----------------------------------|----------------|
| ESP32 | 1 | Por comprar | Mercado Libre / Amazon |
| ESP32-CAM | 1 | Disponible | Laboratorio / Amazon |
| Relay 5V | 1 | Por comprar | Steren / Amazon |
| Fuente de poder (5V / 12V) | 1 | Disponible | Electrónica local |
| Memoria SD | 1 | Disponible | Electrónica local |
| Antena Wi-Fi | 1 | Disponible | Amazon |
| Webcam (opcional) | 1 | Disponible | Uso de PC |
| Cables Dupont / Jumper | Varios | Disponible | Electrónica local |
| Cerradura electromagnética | 1 | Por comprar | Mercado Libre |
| Puerta y marco (estructura física) | 1 | Disponible | Prototipo físico |

### Foto de Componentes Reales
*(Agrega aquí imágenes de los componentes que ya tengan disponibles.)*

### Esquema Básico de Conexiones
*(Inserta un diagrama donde se visualicen las conexiones entre la ESP32, ESP32-CAM, relay, cerradura y fuente de poder.)*

---

## 4. Código o Simulación Inicial

### Fragmento de Código
*(Aquí se incluirá el código en desarrollo para la detección facial, conexión con la base de datos web y control del relay.)*

### Explicación del Código
El código inicial permite:
- **Capturar imágenes** con la ESP32-CAM.  
- **Conectarse al servidor web** para sincronizar los rostros registrados.  
- **Analizar la imagen localmente o mediante red**, y activar el **relay** para abrir la puerta si se reconoce una cara autorizada.  
- **Registrar los eventos** (fecha, hora y resultado del acceso) en la **memoria SD**.

### Imagen de Prueba o Simulación
*(Opcional: agrega una captura del entorno de desarrollo o una simulación en Tinkercad/Arduino IDE mostrando el funcionamiento parcial del sistema.)*

---

**Recomendaciones:**
- Incluye capturas del código, simulaciones y pruebas físicas.  
- Mantén coherencia visual y técnica en cada sección.  
- Revisa ortografía y formato antes de exportar el documento.  

**Nombre del archivo final:**  
`Evidencia1_Prototipo_EquipoNeoGuard.pdf`
