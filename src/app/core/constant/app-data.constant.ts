import { AppData } from "../interfaces/data.interface";

export const APP_DATA: AppData = {
  home: {
    intro: {
      title: "Certifícate y Destaca en el Sector Salud",
      description:
        "Accede a cursos estratégicos certificados que impulsarán tu profesión. ¡Destaca en el competitivo mundo de la salud hoy mismo!",
      route: [
        {
          title: "Explorar",
          url: "/courses",
        },
        {
          title: "Contáctanos",
          url: "/contact",
        },
      ],
    },
    features: {
      title: "¿Por qué elegir nuestros cursos de capacitación?",
      description:
        "Nuestros cursos, diseñados por especialistas, te brindan las herramientas para enfrentar con éxito las exigencias del dinámico y competitivo sector salud.",
      items: [
        {
          title: "Certificación",
          description:
            "Obtén certificados válidos y reconocidos por instituciones de salud públicas y privadas.",
        },
        {
          title: "Expertise",
          description:
            "Aprende de especialistas con amplia experiencia que te guiarán en tu proceso de aprendizaje.",
        },
        {
          title: "Actualizado",
          description:
            "Inspiradas en investigaciones recientes y tendencias del sector, nuestras clases te mantendrán actualizado.",
        },
        {
          title: "Modalidades",
          description:
            "Toma el control de tu formación, certifica tus conocimientos en el momento que prefieras y lleva tu carrera al siguiente nivel.",
        },
        {
          title: "Flexibilidad",
          description:
            "Accede a nuestros cursos desde cualquier lugar y dispositivo, adaptándose a tu estilo de vida.",
        },
        {
          title: "Interactivo",
          description:
            "Conéctate con nuestros especialistas en tiempo real para resolver tus dudas y enriquecer tu experiencia educativa.",
        },
      ],
    },
    instructors: {
      title: "Conéctate con los mejores profesionales de la salud",
      description:
        "Aprende de los mejores especialistas en el sector y conviértete en un profesional destacado.",
      route: {
        title: "¡Conócelos!",
        url: "/instructors",
      },
    },
    courses: {
      title: "Potencia tu carrera con nuestros cursos especializados",
      description:
        "Nuestros cursos te ofrecen el impulso que necesitas para destacar en salud. ¡Elige el que mejor se adapte a tus metas!",
      route: {
        title: "!Descubre más!",
        url: "/courses",
      },
    },
    pricing: {
      title: "Certificate con nosotros",
      description:
        "Elige cómo quieres certificarte: opción física o digital, según lo que mejor se ajuste a ti. ¡Fácil, rápido y adaptado a tus necesidades!",
      items: [
        {
          title: "Certificación Digital",
          description:
            "Obtén tu certificado digital al instante. ¡Perfecto para compartir y almacenar de manera segura!",
          price: 100,
          features: [
            "Certificación digital inmediata",
            "Acceso a clases en vivo y grabadas",
            "Material de estudio completo",
            "Cuestionario de preguntas y respuestas",
            "Asesoría personalizada con especialistas",
          ],
        },
        {
          title: "Certificación Física",
          description:
            "Recibe tu certificado en formato físico. ¡Ideal para tenerlo siempre contigo!",
          price: 150,
          features: [
            "Certificación física con envió en 48 horas",
            "Incluye el certificado virtual",
            "Envío gratuito a nivel nacional",
            "Acceso a clases en vivo y grabadas",
            "Acceso a clases en vivo y grabadas",
            "Material de estudio completo",
            "Cuestionario de preguntas y respuestas",
            "Asesoría personalizada con especialistas",
          ],
        },
      ],
      route: {
        title: "¡Lo Quiero!",
        url: "/certification",
      },
    },
    contact: {
      title: "¿Necesitas ayuda?",
      description:
        "Contáctanos para recibir asesoría personalizada y resolver todas tus dudas.",
      actionText: "Contáctanos",
    },
  },
  notFound: {
    title: "¡Ups! Página no encontrada",
    description:
      "La página que buscas no existe. Por favor, verifica la URL e inténtalo de nuevo.",
    actionText: "Volver al inicio",
  },
};
