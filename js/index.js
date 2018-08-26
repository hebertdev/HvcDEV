

let app = new Vue({
    el:'#apphebert',
    data:{
        hellowrold:'<hello world/>',
        saludoportada:'La tecnología avanza muy rapido',
        saludoportadados:'Estamos en constante actualización',
        remover:'salir',
        changeicon:'icon-menu',
        cambiarcontenido:'nportafolio',
        cambiarhabilidad:'htodo',
        cambiarportafolio:'portafolioweb',
		    menu:'salir',
	      vista:'conticonhabilidadcuadricula',
        // data para el modal active for me
        modalactive:'disablemodal',
        certificados:[
          {
            "titlemodal":"RESPONSE DESIGN",
            "imagemodal":"img/certificaciones/response.png",
            "linkmodal":"www.facebook.com"
          },
          {
            "titlemodal":"MACHIINE LEARNING",
            "imagemodal":"img/certificaciones/machinelearning.png",
            "linkmodal":"www.facebook.com"
          },
          {
            "titlemodal":"GIT y github",
            "imagemodal":"img/certificaciones/gitygithub.png",
            "linkmodal":"www.facebook.com"
          },
          {
            "titlemodal":"DESARROLLO WEB",
            "imagemodal":"img/certificaciones/html.png",
            "linkmodal":"www.facebook.com"
          },
        ],
        imagemodal:'',

        // data para el modal active for me
        // data para portafolio WEB

        portafolioweb:[
          {
            "titlemodalportafolio":"PAGE USER PLATZI DEMO",
            "imagemodalportafolio":"img/portafolio/linkuser.png",
            "linkmodal":"www.facebook.com"
          },
          {
            "titlemodalportafolio":"DOTA2 BUSCA TU TEAM",
            "imagemodalportafolio":"img/portafolio/dota2btt.png",
            "linkmodal":"www.facebook.com"
          },
          {
            "titlemodalportafolio":"INVIE",
            "imagemodalportafolio":"img/portafolio/invie.png",
            "linkmodal":"www.facebook.com"
          },
          {
            "titlemodalportafolio":"E-COLORS",
            "imagemodalportafolio":"img/portafolio/ecolors.png",
            "linkmodal":"www.facebook.com"
          },

        ],

        // fin de data para portafolio WEB
		    allhabilidad:[
            {
                "title":"vue js",
                "description":"Vue.js es un marco de código abierto de JavaScript para construir interfaces de usuario.",
                "image":{
                "imagelista":"img/habilidades/vue.png",
                "imagecuadricula":"img/habilidades/vue.png"
      	         }
    	     },

         {
             "title":"python",
             "description":"Python es un lenguaje de programación interpretado, por lo que funciona en cualquier tipo de sistema que integre su interpretador.",
             "image":{
             "imagelista":"img/habilidades/python.png",
             "imagecuadricula":"img/habilidades/python.png"
              }
        },

      {
          "title":"django",
          "description":"Django es un framework web de alto nivel que fomenta el desarrollo rápido y el diseño limpio y pragmático.",
          "image":{
          "imagelista":"img/habilidades/django.png",
          "imagecuadricula":"img/habilidades/django.png"
           }
      },

      {
          "title":"camtasia",
          "description":"Camtasia es el programa más usado para elaborar videos desde el propio computador de forma fácil y económica. ",
          "image":{
          "imagelista":"img/habilidades/camtasia.png",
          "imagecuadricula":"img/habilidades/camtasia.png"
           }
      },

      {
          "title":"postgre sql",
          "description":"PostgreSQL es un sistema de gestión de bases de datos relacional orientado a objetos.",
          "image":{
          "imagelista":"img/habilidades/postgres.png",
          "imagecuadricula":"img/habilidades/postgres.png"
           }
      },

      {
          "title":"git",
          "description":"Git, es un software de control de versiones diseñado por Linus Torvalds.",
          "image":{
          "imagelista":"img/habilidades/git.png",
          "imagecuadricula":"img/habilidades/git.png"
           }
      },

      {
          "title":"github",
          "description":"GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git.",
          "image":{
          "imagelista":"img/habilidades/github.svg",
          "imagecuadricula":"img/habilidades/github.svg"
           }
      },

			{
                "title":"html",
                "description":"HTML, sigla en inglés de HyperText Markup Language,hace referencia al lenguaje de marcado para la elaboración de páginas web.",
                "image":{
                "imagelista":"img/habilidades/html.png",
                "imagecuadricula":"img/habilidades/html.png"
      	         }
    	   },

			{
                "title":"css",
                "description":"CSS, es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado ",
                "image":{
                "imagelista":"img/habilidades/css3.png",
                "imagecuadricula":"img/habilidades/css3.png"
      	         }
    	   },

			{
                "title":"java script",
                "description":"Javascript es un lenguaje de programación que permite a los desarrolladores crear acciones en sus páginas web. ",
                "image":{
                "imagelista":"img/habilidades/js.png",
                "imagecuadricula":"img/habilidades/js.png"
      	         }
    	   },

			{
                "title":"bootstrap",
                "description":"Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.",
                "image":{
                "imagelista":"img/habilidades/boostrap.png",
                "imagecuadricula":"img/habilidades/boostrap.png"
      	         }
    	   },

			{
                "title":"php",
                "description":"PHP, es un lenguaje de programación de propósito general de código del lado del servidor originalmente diseñado para el desarrollo web",
                "image":{
                "imagelista":"img/habilidades/php.png",
                "imagecuadricula":"img/habilidades/php.png"
      	         }
    	   },

			{
                "title":"jquery",
                "description":"JQuery es una librería de JavaScript de código abierto que permite agregar interactividad y efectos visuales en un sitio web.",
                "image":{
                "imagelista":"img/habilidades/jquery.png",
                "imagecuadricula":"img/habilidades/jquery.png"
      	         }
    	   },

			{
                "title":"foundation",
                "description":"Foundation es un framework de interfaz de usuario responsive. Foundation proporciona una cuadrícula responsive e incluye componentes de interfaz de usuario HTML y CSS,",
                "image":{
                "imagelista":"img/habilidades/foundation.png",
                "imagecuadricula":"img/habilidades/foundation.png"
      	         }
    	   },

			{
                "title":"dream weaver",
                "description":"Adobe Dreamweaver es una aplicación en programa de estudio que está destinada a la construcción, diseño y edición de sitios.",
                "image":{
                "imagelista":"img/habilidades/dream.png",
                "imagecuadricula":"img/habilidades/dream.png"
      	         }
    	   },

			{
                "title":"photoshop",
                "description":"Es un programa utilizado para armar, editar, componer, retocar y transformar imágenes.",
                "image":{
                "imagelista":"img/habilidades/photoshop.svg",
                "imagecuadricula":"img/habilidades/photoshop.svg"
      	         }
    	   },

			{
                "title":"premiere",
                "description":"Adobe Premiere , es la herramienta de edición de video más utilizada.",
                "image":{
                "imagelista":"img/habilidades/premiere.svg",
                "imagecuadricula":"img/habilidades/premiere.svg"
      	         }
    	   },

			{
                "title":"indesing",
                "description":"Adobe InDesign es una aplicación para la composición digital de páginas.",
                "image":{
                "imagelista":"img/habilidades/indesing.svg",
                "imagecuadricula":"img/habilidades/indesing.svg"
      	         }
    	   },

			{
                "title":"corel draw",
                "description":"CorelDRAW es una aplicación informática de diseño gráfico vectorial, es decir, que usa fórmulas matemáticas en su contenido.",
                "image":{
                "imagelista":"img/habilidades/corel.jpg",
                "imagecuadricula":"img/habilidades/corel.jpg"
      	         }
    	   },

         {
                   "title":"illustrator",
                   "description":"Adobe Illustrator es un editor de gráficos vectoriales en forma de taller de arte que trabaja sobre un tablero de dibujo,",
                   "image":{
                   "imagelista":"img/habilidades/illustrator.png",
                   "imagecuadricula":"img/habilidades/illustrator.png"
                    }
            },
		],

		    programacionweb:[
          {
              "title":"vue js",
              "description":"Vue.js es un marco de código abierto de JavaScript para construir interfaces de usuario.",
              "image":{
              "imagelista":"img/habilidades/vue.png",
              "imagecuadricula":"img/habilidades/vue.png"
               }
         },

         {
             "title":"python",
             "description":"Python es un lenguaje de programación interpretado, por lo que funciona en cualquier tipo de sistema que integre su interpretador.",
             "image":{
             "imagelista":"img/habilidades/python.png",
             "imagecuadricula":"img/habilidades/python.png"
              }
        },

      {
          "title":"django",
          "description":"Django es un framework web de alto nivel que fomenta el desarrollo rápido y el diseño limpio y pragmático.",
          "image":{
          "imagelista":"img/habilidades/django.png",
          "imagecuadricula":"img/habilidades/django.png"
           }
      },


      {
          "title":"postgre sql",
          "description":"PostgreSQL es un sistema de gestión de bases de datos relacional orientado a objetos.",
          "image":{
          "imagelista":"img/habilidades/postgres.png",
          "imagecuadricula":"img/habilidades/postgres.png"
           }
      },

      {
          "title":"git",
          "description":"Git, es un software de control de versiones diseñado por Linus Torvalds.",
          "image":{
          "imagelista":"img/habilidades/git.png",
          "imagecuadricula":"img/habilidades/git.png"
           }
      },

      {
          "title":"github",
          "description":"GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git.",
          "image":{
          "imagelista":"img/habilidades/github.svg",
          "imagecuadricula":"img/habilidades/github.svg"
           }
      },

			{
                "title":"html",
                "description":"HTML, sigla en inglés de HyperText Markup Language,hace referencia al lenguaje de marcado para la elaboración de páginas web.",
                "image":{
                "imagelista":"img/habilidades/html.png",
                "imagecuadricula":"img/habilidades/html.png"
      	         }
    	   },

			{
                "title":"css",
                "description":"CSS, es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado ",
                "image":{
                "imagelista":"img/habilidades/css3.png",
                "imagecuadricula":"img/habilidades/css3.png"
      	         }
    	   },

			{
                "title":"java script",
                "description":"Javascript es un lenguaje de programación que permite a los desarrolladores crear acciones en sus páginas web. ",
                "image":{
                "imagelista":"img/habilidades/js.png",
                "imagecuadricula":"img/habilidades/js.png"
      	         }
    	   },

			{
                "title":"bootstrap",
                "description":"Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.",
                "image":{
                "imagelista":"img/habilidades/boostrap.png",
                "imagecuadricula":"img/habilidades/boostrap.png"
      	         }
    	   },

			{
                "title":"php",
                "description":"PHP, es un lenguaje de programación de propósito general de código del lado del servidor originalmente diseñado para el desarrollo web",
                "image":{
                "imagelista":"img/habilidades/php.png",
                "imagecuadricula":"img/habilidades/php.png"
      	         }
    	   },

			{
                "title":"jquery",
                "description":"JQuery es una librería de JavaScript de código abierto que permite agregar interactividad y efectos visuales en un sitio web.",
                "image":{
                "imagelista":"img/habilidades/jquery.png",
                "imagecuadricula":"img/habilidades/jquery.png"
      	         }
    	   },

			{
                "title":"foundation",
                "description":"Foundation es un framework de interfaz de usuario responsive. Foundation proporciona una cuadrícula responsive e incluye componentes de interfaz de usuario HTML y CSS,",
                "image":{
                "imagelista":"img/habilidades/foundation.png",
                "imagecuadricula":"img/habilidades/foundation.png"
      	         }
    	   },

			{
                "title":"dream weaver",
                "description":"Adobe Dreamweaver es una aplicación en programa de estudio que está destinada a la construcción, diseño y edición de sitios.",
                "image":{
                "imagelista":"img/habilidades/dream.png",
                "imagecuadricula":"img/habilidades/dream.png"
      	         }
    	   },

		],

		    sobrediseño:[
        {
            "title":"illustrator",
            "description":"Adobe Illustrator es un editor de gráficos vectoriales en forma de taller de arte que trabaja sobre un tablero de dibujo,",
            "image":{
            "imagelista":"img/habilidades/illustrator.png",
            "imagecuadricula":"img/habilidades/illustrator.png"
             }
         },

         {
             "title":"dream weaver",
             "description":"Adobe Dreamweaver es una aplicación en programa de estudio que está destinada a la construcción, diseño y edición de sitios.",
             "image":{
             "imagelista":"img/habilidades/dream.png",
             "imagecuadricula":"img/habilidades/dream.png"
              }
        },

        {
             "title":"photoshop",
             "description":"Es un programa utilizado para armar, editar, componer, retocar y transformar imágenes.",
             "image":{
             "imagelista":"img/habilidades/photoshop.svg",
             "imagecuadricula":"img/habilidades/photoshop.svg"
              }
         },

         {
             "title":"indesing",
             "description":"Adobe InDesign es una aplicación para la composición digital de páginas.",
             "image":{
             "imagelista":"img/habilidades/indesing.svg",
             "imagecuadricula":"img/habilidades/indesing.svg"
              }
         },
        {
             "title":"corel draw",
             "description":"CorelDRAW es una aplicación informática de diseño gráfico vectorial, es decir, que usa fórmulas matemáticas en su contenido.",
             "image":{
             "imagelista":"img/habilidades/corel.jpg",
             "imagecuadricula":"img/habilidades/corel.jpg"
              }
        },
		],

        sobremultimedias:[
      {
          "title":"camtasia",
          "description":"Camtasia es el programa más usado para elaborar videos desde el propio computador de forma fácil y económica. ",
          "image":{
          "imagelista":"img/habilidades/camtasia.png",
          "imagecuadricula":"img/habilidades/camtasia.png"
           }
      },
      {
          "title":"premiere",
          "description":"Adobe Premiere , es la herramienta de edición de video más utilizada.",
          "image":{
          "imagelista":"img/habilidades/premiere.svg",
          "imagecuadricula":"img/habilidades/premiere.svg"
          }
         },

    ]
	      }
});


let headapp = new Vue({
    el:'#headapp',
    data:{
        uno:'css/profile.css',
        dos:'css/style.css',
    }
});
