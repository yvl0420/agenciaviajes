# Agencia de Viajes

Bienvenido a la **Agencia de Viajes**. Este proyecto web ha sido desarrollado con **Node.js**, **Express**, y **MySQL**, ofreciendo una plataforma para la gestión de viajes y testimonios de los usuarios. Como característica adicional, se han incorporado **emoticonos de estrellas** en la sección de testimonios, donde los usuarios pueden ver y agregar su calificación de 1 a 5 estrellas, usando emoticonos de estrellas.

### Enlace de la aplicación:
[Agencia de Viajes](https://agenciaviajes-mcds.onrender.com)

---

## Descripción

Este proyecto es una **agencia de viajes en línea** que permite a los usuarios explorar viajes. Los usuarios también pueden dejar testimonios, y con la última modificación, ahora pueden calificar los viajes usando estrellas.

El sistema sigue una arquitectura **Modelo-Vista-Controlador (MVC)**, que organiza el proyecto en tres partes:

- **Modelo**: Interacción con la base de datos mediante **Sequelize**.
- **Vista**: Páginas web renderizadas con **Pug** (motor de plantillas).
- **Controlador**: Lógica que conecta los modelos con las vistas.

---

## Características

- Sección de testimonios donde los usuarios pueden dejar su experiencia y calificar con estrellas.
- Almacenamiento de archivos de imágenes.
- Interfaz de usuario responsiva y amigable.
- **Emoticonos de estrellas** añadidos a los testimonios, mostrando una calificación de 1 a 5 estrellas.

---

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express**: Framework para aplicaciones web en Node.js.
- **Sequelize**: ORM para interactuar con la base de datos MySQL.
- **MySQL**: Base de datos relacional para almacenar la información de la agencia y los usuarios.
- **Pug**: Motor de plantillas para renderizar las vistas en HTML.
- **Font Awesome**: Para los íconos.
- **Moment.js**: Para el manejo de fechas en la interfaz de usuario.

---

## Modificación Realizada

Como parte de las últimas mejoras al sistema, se ha modificado la sección de testimonios para que los usuarios puedan ver una calificación en forma de **emoticonos de estrellas**. Ahora, cuando los usuarios dejan un testimonio, su calificación se refleja con **estrellas amarillas**, proporcionando una experiencia visualmente atractiva y clara.

---

## Instalación

Para ejecutar este proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/yvl0420/agenciaviajes
