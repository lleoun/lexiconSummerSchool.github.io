(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        if (document.getElementById("politicaPrivacidad_es")) {
            const elem_es = document.querySelector("#politicaPrivacidad_es");
            elem_es.addEventListener("click", (event) => {
                event.preventDefault();
                swal.fire(
                    'Politica de privacidad',
                    '<div style="text-align:left;"><h2>Quiénes somos</h2><p>La dirección de nuestra web es: https://www.granatensistraduccion.com y la dirección de correo electrónico de contacto es bgranatensis@gmail.com</p><h2>Cookies</h2><p>Cuando accedas, se instalarán varias cookies para guardar tu información de opciones de visualización de pantalla. Las cookies de opciones de pantalla duran un año.</p><h2>Cuánto tiempo conservamos tus datos</h2><p>Si usas un nuestro formulario de contacto, los datos se conservan indefinidamente. Los administradores de la web pueden ver y editar esa información.</p><h2>Qué derechos tienes sobre tus datos</h2><p>Puedes solicitar recibir un archivo de exportación de los datos que tenemos sobre ti, incluyendo cualquier dato que nos hayas proporcionado. También puedes solicitar que eliminemos cualquier dato personal que tengamos sobre ti. Esto no incluye ningún dato que estemos obligados a conservar con fines administrativos, legales o de seguridad.</p><h2>Contenido incrustado de otros sitios web</h2><p>Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras webs se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web.</p><p>Estas webs pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros, y supervisar tu interacción con ese contenido incrustado, incluido el seguimiento de tu interacción con el contenido incrustado si tienes una cuenta y estás conectado a esa web.</p></div> ',
                    'info'
                )
            });
        }

        if (document.getElementById("politicaPrivacidad_fr")) {
            const elem_fr = document.querySelector("#politicaPrivacidad_fr");
            elem_fr.addEventListener("click", (event) => {
                event.preventDefault();
                swal.fire(
                    'Règles de confidentialité',
                    '<div style="text-align:left;"><h2>Qui sommes-nous ?</h2><p>L\'adresse de notre site web est : https://www.granatensistraduccion.com  et notre email: bgranatensis@gmail.com</p><h2>Cookies</h2><p>Lorsque vous vous connectez, plusieurs cookies sont créés pour stocker les informations relatives aux options d\'affichage de votre écran. Les cookies des options d\'affichage durent un an.</p><h2>Combien de temps nous conservons vos données</h2><p>Si vous utilisez notre formulaire de contact, les données sont conservées indéfiniment. Les administrateurs du site peuvent voir et modifier ces informations.</p><h2>Les droits dont vous disposez sur vos données</h2><p>Vous pouvez demander à recevoir un fichier d\'exportation des données que nous détenons à votre sujet, y compris les données que vous nous avez fournies. Vous pouvez également nous demander de supprimer toutes les données personnelles que nous détenons à votre sujet. Cela ne comprend pas les données que nous sommes tenus de conserver à des fins administratives, juridiques ou de sécurité.</p><h2>Contenu intégré d\'autres sites web</h2><p>Les articles de ce site peuvent inclure du contenu intégré (par exemple des vidéos, des images, des articles, etc.). Le contenu intégré provenant d\'autres sites web se comporte exactement de la même manière que si le visiteur avait visité l\'autre site web.</p><p>Ces sites peuvent collecter des données vous concernant, utiliser des cookies, intégrer un suivi supplémentaire provenant de tiers et surveiller votre interaction avec ce contenu intégré, y compris le suivi de votre interaction avec le contenu intégré si vous avez un compte et êtes connecté à ce site.</p></div>',
                    'info'
                )
            });
        }



    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel para la sección faculty
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

//en style.css mira html {}
    const navigationHeight = document.querySelector('.navbar-expand-lg').offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding',navigationHeight+"px");

})(jQuery);

