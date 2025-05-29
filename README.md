# Ecos de Ellas

**Ecos de Ellas** es un juego web educativo diseñado como parte de un **Experimento Social** para el curso **Computación y Sociedad**. El proyecto fue desarrollado por los estudiantes **Angélica Díaz** y **David Centeno** de la carrera de Ingeniería en Computación del Tecnológico de Costa Rica.

Este juego busca visibilizar los aportes de mujeres destacadas en diferentes disciplinas como la ciencia, tecnología, matemáticas, derechos humanos, arte y más. A través de cartas interactivas, los participantes deben identificar correctamente los logros de estas figuras históricas para acumular puntos.

Puedes jugarlo en línea accediendo al siguiente enlace:

**[https://angelicadiazb14.github.io/ecos-de-ellas/](https://angelicadiazb14.github.io/ecos-de-ellas/)**

## Instrucciones para ejecutarlo

1. Clona o descarga este repositorio en tu computadora.
2. Asegúrate de tener todos los archivos en una misma carpeta, incluyendo la carpeta `assets/`.
3. Puedes abrir el archivo `index.html` de dos formas:
   - Haciendo doble clic sobre él para abrirlo directamente en un navegador web moderno (Google Chrome, Firefox, Edge).
   - Si usas **Visual Studio Code**, puedes instalar la extensión **Live Server** y hacer clic derecho sobre `index.html`, luego seleccionar **"Open with Live Server"** para ejecutarlo localmente con recarga automática.
4. Escribe tu nombre y presiona **"Jugar"** para comenzar la experiencia.
5. A medida que avances, recibirás retroalimentación y una puntuación final al terminar.


## Estructura del proyecto

- **index.html**: Página principal del juego. Contiene la estructura HTML para la interfaz.
- **style.css**: Hoja de estilos que define la apariencia visual del juego, incluyendo responsividad para móviles.
- **script.js**: Lógica del juego: controla la navegación entre cartas, evaluación de respuestas, efectos sonoros y resultados.
- **data.js**: Contiene la información que se utiliza para rellenar dinámicamente las cartas del juego. Cada objeto incluye nombre, imagen, año, país, área, una breve contribución y opciones múltiples con su índice correcto.
- **README.md**: Documento con la descripción general del proyecto, autores e instrucciones de uso.


## Carpeta `assets/`

Esta carpeta debe contener todos los recursos multimedia del juego:

- Imágenes de las mujeres representadas en las cartas (`.jpg`, `.png`).
- Música de fondo (`game-music-puzzle.mp3`).
- Sonidos para respuestas correctas e incorrectas (`success-340660.mp3`, `fail-234710.mp3`).
- Fondos decorativos (`estrellas2.png`, entre otros si se agregan más estilos visuales).

> Asegúrate de no modificar los nombres de los archivos ni moverlos fuera de la carpeta `assets/`, ya que son referenciados directamente desde los scripts y estilos.


## Despliegue en GitHub Pages

Este proyecto fue alojado utilizando **GitHub Pages**, una funcionalidad que permite publicar directamente un sitio web estático desde un repositorio de GitHub.

### Pasos realizados para el despliegue:

1. Se creó un repositorio público en GitHub llamado `ecos-de-ellas`.
2. Se subieron todos los archivos del proyecto, incluyendo `index.html`, `style.css`, `script.js`, `data.js`, `README.md` y la carpeta `assets/`.
3. En la configuración del repositorio (Settings > Pages), se seleccionó la rama `main` como fuente del contenido y la carpeta raíz (`/root`) como directorio.
4. GitHub generó automáticamente un enlace público al sitio:  
   **[https://angelicadiazb14.github.io/ecos-de-ellas/](https://angelicadiazb14.github.io/ecos-de-ellas/)**

Este método permite a cualquier persona acceder y jugar directamente sin necesidad de descargar ni instalar nada.


## Futuras mejoras

Este proyecto se encuentra en una versión inicial. En el futuro se podrían agregar nuevas funcionalidades, como:

- Más cartas con nuevas figuras históricas.
- Múltiples niveles de dificultad.
- Soporte para múltiples jugadores.
- Integración de puntuación global o ranking.
- Modo de estudio o exploración libre sin puntuación.

---

Este juego no solo es una herramienta didáctica, sino también una oportunidad para reflexionar sobre el rol de la mujer en distintos campos del conocimiento y la historia. Tu participación y retroalimentación son valiosas para fines académicos y sociales.
