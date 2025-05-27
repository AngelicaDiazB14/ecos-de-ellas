const cards = [
  {
    name: "Ada Lovelace",
    img: "assets/ada.jpg",
    year: "1843",
    country: "Reino Unido",
    area: "Tecnología",
    contribution: "Escribió el primer algoritmo para la máquina analítica de Babbage.",
    options: [
      "Desarrolló el primer compilador",
      "Fue pionera en física cuántica",
      "Escribió el primer algoritmo para una máquina",
      "Diseñó el primer satélite artificial"
    ],
    correctIndex: 2
  },
  {
    name: "Grace Hopper",
    img: "assets/hopper.jpg",
    year: "1952",
    country: "Estados Unidos",
    area: "Computación",
    contribution: "Desarrolló el primer compilador y el lenguaje COBOL.",
    options: [
      "Descubrió la penicilina",
      "Desarrolló el primer compilador y COBOL",
      "Programó el Apolo 11",
      "Inventó el primer sistema operativo"
    ],
    correctIndex: 1
  },
    {
    name: "Raymonde de Laroche",
    img: "assets/laroche.jpg", 
    year: "1910",
    country: "Francia",
    area: "Aviación",
    contribution: "Primera mujer en el mundo en obtener una licencia oficial de piloto.",
    options: [
      "Diseñó el primer dirigible para pasajeros",
      "Fundó la primera escuela de vuelo en Europa",
      "Primera mujer en obtener una licencia oficial de piloto",
      "Comandó un escuadrón aéreo durante la Primera Guerra Mundial"
    ],
    correctIndex: 2
  },
  {
    name: "Marie Curie",
    img: "assets/curie.jpg",
    year: "1903",
    country: "Polonia / Francia",
    area: "Ciencia",
    contribution: "Ganó dos premios Nobel por el descubrimiento del radio y el polonio.",
    options: [
      "Inventó la máquina de rayos X",
      "Descubrió la insulina",
      "Ganó dos premios Nobel por descubrir elementos radiactivos",
      "Fue la primera astronauta"
    ],
    correctIndex: 2
  },
  {
    name: "Katherine Johnson",
    img: "assets/katherine.png",
    year: "1962",
    country: "Estados Unidos",
    area: "Matemáticas / Astronomía",
    contribution: "Calculó trayectorias clave para los vuelos espaciales de la NASA.",
    options: [
      "Diseñó el telescopio Hubble",
      "Calculó trayectorias para la NASA",
      "Inventó el GPS",
      "Participó en la misión a Marte"
    ],
    correctIndex: 1
  },
  {
    name: "Radia Perlman",
    img: "assets/radia.jpg",
    year: "1985",
    country: "Estados Unidos",
    area: "Redes / Ingeniería",
    contribution: "Inventó el protocolo Spanning Tree, esencial para las redes de internet.",
    options: [
      "Creó los servidores web",
      "Diseñó la primera computadora portátil",
      "Inventó el protocolo Spanning Tree",
      "Fundó el primer navegador"
    ],
    correctIndex: 2
  },
  {
    name: "Margaret Hamilton",
    img: "assets/hamilton.jpg",
    year: "1969",
    country: "Estados Unidos",
    area: "Ingeniería de Software",
    contribution: "Lideró el desarrollo del software de navegación del Apolo 11.",
    options: [
      "Diseñó el hardware de los satélites",
      "Desarrolló el sistema operativo UNIX",
      "Lideró el software del Apolo 11",
      "Fue la primera mujer en programar un videojuego"
    ],
    correctIndex: 2
  },
  {
    name: "Carol Shaw",
    img: "assets/carol.jpg",
    year: "1978",
    country: "Estados Unidos",
    area: "Videojuegos",
    contribution: "Primera mujer diseñadora de videojuegos, creó River Raid.",
    options: [
      "Diseñó el videojuego Pac-Man",
      "Fue pionera en la industria de la animación",
      "Creó el videojuego River Raid",
      "Inventó el joystick"
    ],
    correctIndex: 2
  },
  {
    name: "Frances Allen",
    img: "assets/frances.jpg",
    year: "2006",
    country: "Estados Unidos",
    area: "Computación",
    contribution: "Primera mujer en ganar el Premio Turing por sus contribuciones a la optimización de compiladores.",
    options: [
      "Desarrolló el lenguaje Python",
      "Ganó el Premio Turing por optimización de compiladores",
      "Inventó el lenguaje Java",
      "Creó el primer sistema operativo"
    ],
    correctIndex: 1
  },
  {
    name: "Joan Clarke",
    img: "assets/joan.jpg",
    year: "1940s",
    country: "Reino Unido",
    area: "Criptografía",
    contribution: "Destacada criptógrafa británica que contribuyó decisivamente al descifrado del código Enigma, acortando la Segunda Guerra Mundial.",
    options: [
      "Descifró mensajes interceptados en código Morse",
      "Fue la primera mujer analista en la inteligencia estadounidense",
      "Diseñó una versión mejorada de la máquina Enigma",
      "Formó parte del equipo que descifró el código Enigma en Bletchley Park"
    ],
    correctIndex: 3
  },

  {
    name: "Rosalind Franklin",
    img: "assets/rosalind.jpg",
    year: "1953",
    country: "Reino Unido",
    area: "Biología",
    contribution: "Contribuyó al descubrimiento de la estructura del ADN.",
    options: [
      "Contribuyó al descubrimiento del ADN",
      "Descubrió la penicilina",
      "Inventó la PCR",
      "Fue pionera en la genética"
    ],
    correctIndex: 0
  },
  {
    name: "Gerty Cori",
    img: "assets/gerty.jpeg",
    year: "1947",
    country: "Estados Unidos",
    area: "Bioquímica",
    contribution: "Primera mujer en ganar el Nobel de Medicina por su trabajo en el metabolismo de carbohidratos.",
    options: [
      "Descubrió la insulina",
      "Ganó el Nobel por el metabolismo de carbohidratos",
      "Inventó la vacuna contra la polio",
      "Fue pionera en la biotecnología"
    ],
    correctIndex: 1
  },
  {
    name: "Chien-Shiung Wu",
    img: "assets/wu.jpg",
    year: "1956",
    country: "China / Estados Unidos",
    area: "Física",
    contribution: "Demostró la violación de la paridad en la física nuclear.",
    options: [
      "Inventó el microscopio electrónico",
      "Demostró la violación de la paridad",
      "Descubrió la radiactividad",
      "Fue pionera en la física cuántica"
    ],
    correctIndex: 1
  },
  {
    name: "Florence Nightingale",
    img: "assets/florence.jpg",
    year: "1860",
    country: "Reino Unido",
    area: "Enfermería",
    contribution: "Fundadora de la enfermería moderna.",
    options: [
      "Descubrió la penicilina",
      "Fue la primera médica",
      "Inventó el estetoscopio",
      "Fundó la enfermería moderna"
    ],
    correctIndex: 3
  },
  {
    name: "Barbara McClintock",
    img: "assets/barbara.jpg",
    year: "1950",
    country: "Estados Unidos",
    area: "Genética",
    contribution: "Descubrió los elementos genéticos móviles.",
    options: [
      "Descubrió la estructura del ADN",
      "Inventó la PCR",
      "Descubrió los elementos genéticos móviles",
      "Fue pionera en la biotecnología"
    ],
    correctIndex: 2
  },
  {
    name: "Malala Yousafzai",
    img: "assets/malala.jpg",
    year: "2014",
    country: "Pakistán",
    area: "Derechos Humanos",
    contribution: "Ganó el Premio Nobel de la Paz por su lucha por la educación de las niñas.",
    options: [
      "Fundó una universidad",
      "Ganó el Nobel por la educación de las niñas",
      "Fue la primera mujer presidenta de Pakistán",
      "Inventó un sistema educativo"
    ],
    correctIndex: 1
  },
  {
    name: "Rosa Parks",
    img: "assets/rosa.jpg",
    year: "1955",
    country: "Estados Unidos",
    area: "Derechos Civiles",
    contribution: "Figura emblemática cuyo acto de resistencia pacífica impulsó el movimiento por los derechos civiles en EE. UU.",
    options: [
      "Lideró la marcha sobre Washington",
      "Fue la primera mujer en el Congreso",
      "Primera mujer afroamericana en ocupar un cargo federal",
      "Impulsó el movimiento por los derechos civiles en EE. UU"
    ],
    correctIndex: 3
  },
  {
    name: "Teresa de Calcuta",
    img: "assets/teresa.jpg",
    year: "1979",
    country: "Macedonia/India ",
    area: "Caridad",
    contribution: "Ganó el Premio Nobel de la Paz por su labor humanitaria.",
    options: [
      "Fundó la Cruz Roja",
      "Ganó el Nobel por su labor humanitaria",
      "Fue la primera mujer en la ONU",
      "Inventó un sistema de ayuda social en China"
    ],
    correctIndex: 1
  },
  {
    name: "Ruth Bader Ginsburg",
    img: "assets/ruth.jpg",
    year: "1993",
    country: "Estados Unidos",
    area: "Derecho",
    contribution: "Primera mujer en la Corte Suprema de Estados Unidos.",
    options: [
      "Fue la primera presidenta de Estados Unidos",
      "Lideró el movimiento por los derechos civiles",
      "Primera mujer en la Corte Suprema",
      "Fundó el movimiento feminista"
    ],
    correctIndex: 2
  },
  {
    name: "Rigoberta Menchú",
    img: "assets/rigoberta.jpg",
    year: "1992",
    country: "Guatemala",
    area: "Derechos Humanos",
    contribution: "Ganó el Premio Nobel de la Paz por su lucha por los derechos indígenas.",
    options: [
      "Ganó el Nobel por los derechos indígenas",
      "Fundó una organización indígena",
      "Fue la primera presidenta de Guatemala",
      "Inventó un sistema de justicia"
    ],
    correctIndex: 0
  },
  {
    name: "Angela Davis",
    img: "assets/angela.jpg",
    year: "1970s",
    country: "Estados Unidos",
    area: "Derechos Civiles",
    contribution: "Activista por los derechos civiles y feminista.",
    options: [
      "Fundó el movimiento feminista",
      "Lideró el movimiento por los derechos civiles",
      "Fue pionera en la educación de mujeres",
      "Escribió libros sobre justicia social"
    ],
    correctIndex: 1
  },
  {
    name: "Frida Kahlo",
    img: "assets/frida.jpg",
    year: "1930s",
    country: "México",
    area: "Arte",
    contribution: "Reconocida por sus icónicas pinturas y su influencia en el arte moderno. Transformó el dolor físico y emocional en arte simbólico e identitario",
    options: [
      "Fundó el movimiento surrealista",
      "Transformó el dolor físico y emocional en arte simbólico e identitario",
      "Fue la primera mujer en exponer en el Louvre",
      "Inventó el arte moderno"
    ],
    correctIndex: 1
  },
  {
    name: "Amelia Earhart",
    img: "assets/amelia.jpg",
    year: "1932",
    country: "Estados Unidos",
    area: "Aviación",
    contribution: "Primera mujer en cruzar el Atlántico en avión.",
    options: [
      "Inventó el avión",
      "Fue la primera mujer piloto",
      "Cruzó el Atlántico en avión",
      "Fundó la aviación moderna"
    ],
    correctIndex: 2
  }

];
