// Sistema de traducción para el portafolio
// Idioma actual
let currentLanguage = 'es';

// Traducciones
const translations = {
    es: {
        'job-title': 'Desarrollador Full Stack',
        'hero-description': 'Diseñando software robusto y escalable en la nube con microservicios modernos.',
        'about-title': 'Sobre mí',
        'about-content': 'Soy Desarrollador Full Stack con sólida experiencia en el diseño e implementación de microservicios escalables, APIs RESTful y GraphQL y aplicaciones cloud-native. Mi mayor especialidad es Java (Spring Boot, Spring WebFlux), aunque también trabajo con confianza en Python, Node.js y JavaScript.<br><br>A lo largo de mi carrera he:',
        'about-list': `<li>Diseñado y desplegado microservicios reactivos y orientados a eventos, mejorando la escalabilidad y capacidad de respuesta de los sistemas.</li>
        <li>Construido APIs y servicios backend seguros y eficientes utilizando Java, Python, Node.js, FastAPI, Flask y Express.</li>
        <li>Desarrollado aplicaciones frontend modernas con Angular, React y Vue.js, garantizando alto rendimiento y una excelente experiencia de usuario.</li>
        <li>Aplicado principios de arquitectura limpia (hexagonal, onion, DDD, TDD, BDD) para entregar soluciones mantenibles y alineadas con el negocio.</li>
        <li>Implementado pipelines de CI/CD con Jenkins y Azure DevOps, asegurando entregas continuas y altos estándares de calidad.</li>
        <li>Gestionado despliegues en la nube (AWS, Azure, GCP, Oracle Cloud), optimizando rendimiento, disponibilidad y seguridad.</li>`,
        'about-footer': 'Soy reconocido por mi trabajo en equipo, mentalidad orientada a la resolución de problemas y compromiso con la excelencia técnica. Mi objetivo profesional a mediano plazo es convertirme en Arquitecto de Software, contribuyendo al diseño estratégico de soluciones robustas, escalables y alineadas con las necesidades del negocio.<br><br>📍 Resido en Sogamoso, Boyacá, Colombia, con total disposición para trabajo remoto o reubicación.',
        'experience-title': 'Experiencia',
        'exp-job-title': 'Desarrollador de Software',
        'exp-description': 'Como desarrollador de software en la empresa, desempeñé un papel crucial en el desarrollo y éxito de nuestros proyectos. Mi responsabilidad abarcó desde la gestión integral del equipo hasta la optimización de procesos y resultados. Ayude a la creación y seguimiento de OKRs y KPIs, garantizando la alineación con los objetivos corporativos y fomentando una cultura de alto rendimiento. Mi enfoque en la gestión del talento aseguró la formación de equipos altamente competentes, mientras que mi habilidad para identificar nuevas oportunidades impulsó el crecimiento de la cuenta. En el ámbito técnico, fui fundamental en la implementación de prácticas de desarrollo avanzadas, incluyendo la optimización de aplicaciones backend, la mejora continua de la calidad del código y la adopción de metodologías ágiles. Mi participación activa en la priorización del backlog y la orientación estratégica fue clave para maximizar el valor entregado al cliente, manteniendo siempre un equilibrio óptimo entre esfuerzo y resultados.',
        'exp-date':'ENE 2023 - MAR 2024',
        'projects-title': 'Mis Proyectos',
        'project1-desc': 'Proyecto para gestionar los procesos de una eps',
        'project2-title': 'Adopcion de mascotas',
        'project2-desc': 'Proyecto para adoptar una mascota',
        'project3-title': 'Alquiler de maquinas',
        'project3-desc': 'Aplicacion de alquiler de maquinas desplegado en oracle cloud',
        'project4-desc': 'Aplicacion de empresa de transporte de pasajeros',
        'footer-text': '© 2024 Mi Portafolio. Todos los derechos reservados.',
        'about': 'Sobre mí',
        'experience': 'Experiencia',
        'projects': 'Proyectos'
    },
    en: {
        'job-title': 'Full Stack Developer',
        'hero-description': 'Designing robust and scalable software in the cloud with modern microservices.',
        'about-title': 'About Me',
        'about-content': 'I am a Full Stack Developer with solid experience in designing and implementing scalable microservices, RESTful APIs and GraphQL, and cloud-native applications. My main specialty is Java (Spring Boot, Spring WebFlux), although I also work confidently with Python, Node.js and JavaScript.<br><br>Throughout my career I have:',
        'about-list': `<li>Designed and deployed reactive and event-driven microservices, improving system scalability and responsiveness.</li>
        <li>Built secure and efficient APIs and backend services using Java, Python, Node.js, FastAPI, Flask and Express.</li>
        <li>Developed modern frontend applications with Angular, React and Vue.js, ensuring high performance and excellent user experience.</li>
        <li>Applied clean architecture principles (hexagonal, onion, DDD, TDD, BDD) to deliver maintainable solutions aligned with business needs.</li>
        <li>Implemented CI/CD pipelines with Jenkins and Azure DevOps, ensuring continuous delivery and high quality standards.</li>
        <li>Managed cloud deployments (AWS, Azure, GCP, Oracle Cloud), optimizing performance, availability and security.</li>`,
        'about-footer': 'I am recognized for my teamwork, problem-solving mindset and commitment to technical excellence. My medium-term professional goal is to become a Software Architect, contributing to the strategic design of robust, scalable solutions aligned with business needs.<br><br>📍 I live in Sogamoso, Boyacá, Colombia, with full availability for remote work or relocation.',
        'experience-title': 'Experience',
        'exp-job-title': 'Software Developer',
        'exp-description': 'As a software developer at the company, I played a crucial role in the development and success of our projects. My responsibility ranged from comprehensive team management to process and results optimization. I helped create and track OKRs and KPIs, ensuring alignment with corporate objectives and fostering a high-performance culture. My focus on talent management ensured the formation of highly competent teams, while my ability to identify new opportunities drove account growth. In the technical realm, I was instrumental in implementing advanced development practices, including backend application optimization, continuous code quality improvement, and adoption of agile methodologies. My active participation in backlog prioritization and strategic guidance was key to maximizing value delivered to the client, always maintaining an optimal balance between effort and results.',
        'exp-date':'JAN 2023 - MAR 2024',
        'projects-title': 'My Projects',
        'project1-desc': 'Project to manage EPS processes',
        'project2-title': 'Pet Adoption',
        'project2-desc': 'Project to adopt a pet',
        'project3-title': 'Machine Rental',
        'project3-desc': 'Machine rental application deployed on oracle cloud',
        'project4-desc': 'Passenger transport company application',
        'footer-text': '© 2024 My Portfolio. All rights reserved.',
        'about': 'About',
        'experience': 'Experience',
        'projects': 'Projects'
    },
    br: {
        'job-title': 'Desenvolvedor Full Stack',
        'hero-description': 'Projetando software robusto e escalável na nuvem com microsserviços modernos.',
        'about-title': 'Sobre Mim',
        'about-content': 'Sou Desenvolvedor Full Stack com sólida experiência no design e implementação de microsserviços escaláveis, APIs RESTful e GraphQL, e aplicações cloud-native. Minha principal especialidade é Java (Spring Boot, Spring WebFlux), embora também trabalhe com confiança em Python, Node.js e JavaScript.<br><br>Ao longo da minha carreira tenho:',
        'about-list': `<li>Projetado e implantado microsserviços reativos e orientados a eventos, melhorando a escalabilidade e capacidade de resposta dos sistemas.</li>
        <li>Construído APIs e serviços backend seguros e eficientes usando Java, Python, Node.js, FastAPI, Flask e Express.</li>
        <li>Desenvolvido aplicações frontend modernas com Angular, React e Vue.js, garantindo alto desempenho e excelente experiência do usuário.</li>
        <li>Aplicado princípios de arquitetura limpa (hexagonal, onion, DDD, TDD, BDD) para entregar soluções sustentáveis alinhadas com as necessidades do negócio.</li>
        <li>Implementado pipelines de CI/CD com Jenkins e Azure DevOps, garantindo entregas contínuas e altos padrões de qualidade.</li>
        <li>Gerenciado implantações na nuvem (AWS, Azure, GCP, Oracle Cloud), otimizando desempenho, disponibilidade e segurança.</li>`,
        'about-footer': 'Sou reconhecido pelo meu trabalho em equipe, mentalidade orientada à resolução de problemas e compromisso com a excelência técnica. Meu objetivo profissional a médio prazo é me tornar Arquiteto de Software, contribuindo para o design estratégico de soluções robustas, escaláveis e alinhadas com as necessidades do negócio.<br><br>📍 Resido em Sogamoso, Boyacá, Colômbia, com total disponibilidade para trabalho remoto ou realocação.',
        'experience-title': 'Experiência',
        'exp-job-title': 'Desenvolvedor de Software',
        'exp-description': 'Como desnvolvedor de software na empresa, desempenhei um papel crucial no desenvolvimento e sucesso dos nossos projetos. Minha responsabilidade abrangeu desde a gestão integral da equipe até a otimização de processos e resultados. Ajudei a criar e acompanhar OKRs e KPIs, garantindo alinhamento com os objetivos corporativos e fomentando uma cultura de alto desempenho. Meu foco na gestão de talentos assegurou a formação de equipes altamente competentes, enquanto minha habilidade para identificar novas oportunidades impulsionou o crescimento da conta. No âmbito técnico, fui fundamental na implementação de práticas de desenvolvimento avançadas, incluindo otimização de aplicações backend, melhoria contínua da qualidade do código e adoção de metodologias ágeis. Minha participação ativa na priorização do backlog e orientação estratégica foi chave para maximizar o valor entregue ao cliente, mantendo sempre um equilíbrio ótimo entre esforço e resultados.',
        'exp-date':'JAN 2023 - MAR 2024',
        'projects-title': 'Meus Projetos',
        'project1-desc': 'Projeto para gerenciar processos de EPS',
        'project2-title': 'Adoção de Animais',
        'project2-desc': 'Projeto para adotar um animal de estimação',
        'project3-title': 'Aluguel de Máquinas',
        'project3-desc': 'Aplicação de aluguel de máquinas implantada na oracle cloud',
        'project4-desc': 'Aplicação de empresa de transporte de passageiros',
        'footer-text': '© 2024 Meu Portfólio. Todos os direitos reservados.',
        'about': 'Sobre',
        'experience': 'Experiência',
        'projects': 'Projetos'
    }
};

/**
 * Función principal para cambiar el idioma de la página
 * @param {string} lang - Código del idioma ('es' o 'en' o 'br')
 */
function changeLanguage(lang) {
    currentLanguage = lang;

    // Actualizar el selector de idioma visual
    updateLanguageSelector(lang);

    translateContent(lang);
    translateNavigation(lang);

    // Actualizar el atributo lang del documento
    document.documentElement.lang = lang;
}

/**
 * Actualiza la interfaz visual del selector de idioma
 * @param {string} lang - Código del idioma
 */
function updateLanguageSelector(lang) {
    const currentFlag = document.querySelector('.current-flag');
    const currentLanguageText = document.getElementById('currentLanguage');

    if (!currentFlag || !currentLanguageText) return;

    if (lang === 'es') {
        currentFlag.src = 'https://flagcdn.com/w20/es.png';
        currentFlag.alt = 'Español';
        currentLanguageText.textContent = 'Español';
    } else if (lang === 'br') {
        currentFlag.src = 'https://flagcdn.com/w20/br.png';
        currentFlag.alt = 'Português';
        currentLanguageText.textContent = 'Português';
    } else if (lang === 'en') {
        currentFlag.src = 'https://flagcdn.com/w20/us.png';
        currentFlag.alt = 'English';
        currentLanguageText.textContent = 'English';
    }
}

/**
 * Traduce todos los elementos con el atributo data-translate
 * @param {string} lang - Código del idioma
 */
function translateContent(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang]?.[key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

/**
 * Traduce los elementos de navegación con el atributo data-section
 * @param {string} lang - Código del idioma
 */
function translateNavigation(lang) {
    const navLinks = document.querySelectorAll('[data-section]');

    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        if (translations[lang]?.[section]) {
            link.textContent = translations[lang][section];
        }
    });
}

/**
 * Obtiene el idioma actual
 * @returns {string} Código del idioma actual
 */
function getCurrentLanguage() {
    return currentLanguage;
}

/**
 * Verifica si un idioma es soportado
 * @param {string} lang - Código del idioma a verificar
 * @returns {boolean} true si el idioma es soportado
 */
function isLanguageSupported(lang) {
    return translations.hasOwnProperty(lang);
}

/**
 * Agrega una nueva traducción a un idioma existente
 * @param {string} lang - Código del idioma
 * @param {string} key - Clave de la traducción
 * @param {string} value - Valor de la traducción
 */
function addTranslation(lang, key, value) {
    if (translations[lang]) {
        translations[lang][key] = value;
    }
}

// Exportar funciones para uso global (si se necesita en módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeLanguage,
        getCurrentLanguage,
        isLanguageSupported,
        addTranslation,
        translations
    };
}