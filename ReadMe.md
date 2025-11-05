# **Nyx** 
---
### Sistema de cerradira Inteligente con reconocimiento Facial

</br>
<p align="center">
    <img src="resources/eyeCon.svg" width="200">
</p> 

---

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
