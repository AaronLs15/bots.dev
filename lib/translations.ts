export type Language = "en" | "es";

export const translations = {
    en: {
        navbar: {
            links: {
                services: "Services",
                process: "Process",
                benefits: "Benefits",
                results: "Results",
            },
            cta: "Book a call",
            toEnglish: "Switch to English",
            toSpanish: "Switch to Spanish",
        },
        hero: {
            badgeLabel: "New",
            badgeText: "Automated Lead Generation",
            titleLines: ["Modern Software Solutions", "That Scale Your Business"],
            subtitle:
                "ERP, CRM, POS, e-commerce, Web Design, AI and custom software tailored to modern businesses.",
            buttons: {
                primary: "Get in touch",
                secondary: "Services",
            },
        },
        services: {
            introBadge: "Our Services",
            introTitle: "Solutions That Take Your Business to the Next Level",
            introBody:
                "We design, develop, and implement tools that help you work smarter, move faster, and keep teams aligned from the front desk to the boardroom.",
            blockOne: {
                badge: "AI Assistant",
                title: "Delegate Daily Tasks",
                paragraphs: [
                    "Move calendar management, reporting, and routine approvals into AI workflows that keep your teams moving without bottlenecks.",
                    "Keep operations consistent across locations while your team focuses on higher-impact decisions.",
                ],
                tags: ["ERP", "CRM", "POS"],
                filters: ["All Tasks", "Waiting for approval"],
                tasks: [
                    { title: "Payment reminder", meta: "Sent to selected clients", tone: "accent" },
                    { title: "Payroll management", meta: "Due on 2nd July", tone: "accent" },
                    { title: "Employee tracking", meta: "2 days ago", tone: "muted" },
                    { title: "Social media post", meta: "Canceled by user", tone: "muted" },
                ],
            },
            blockTwo: {
                badge: "Sales & Marketing",
                title: "Accelerate Sales Growth",
                paragraphs: [
                    "Support outreach, nurturing, and customer engagement with automation that feels human and consistent across every channel.",
                    "Turn attention into revenue with tailored journeys, analytics, and content that scales with demand.",
                ],
                tags: ["E-Commerce", "Web Design"],
                demo: {
                    title: "Generate",
                    input: "Add document",
                    actions: ["Analyze", "Generate Image", "Research"],
                },
            },
            listTitle: "Solutions",
            services: [
                {
                    label: "ERP",
                    title: "Enterprise Resource Planning",
                    description:
                        "Unify your inventory, finance, and operations in one system with dashboards that stay in sync.",
                    detail:
                        "Replace spreadsheet chaos with clean approvals, forecasting, and visibility across teams.",
                },
                {
                    label: "CRM",
                    title: "Customer Relationship Management",
                    description:
                        "Track every lead, deal, and interaction in one timeline so your team never loses context.",
                    detail:
                        "Automate follow-ups, reminders, and notes to keep pipeline momentum moving.",
                },
                {
                    label: "POS",
                    title: "Point of Sale",
                    description:
                        "Modern checkout experiences that keep inventory, sales, and customer data aligned in real time.",
                    detail:
                        "Support multi-location reporting and reconciliation without manual overhead.",
                },
                {
                    label: "E-Commerce",
                    title: "E-Commerce Platforms",
                    description:
                        "Conversion-focused storefronts with personalized catalogs, smart merchandising, and automation.",
                    detail:
                        "Integrate payments, shipping, and marketing flows so your store runs end to end.",
                },
                {
                    label: "Web Design",
                    title: "Web Design & UX",
                    description:
                        "Premium web experiences that balance storytelling with performance and technical clarity.",
                    detail:
                        "Launch faster sites with UX strategy, SEO-ready structure, and clean visuals.",
                },
                {
                    label: "Consulting",
                    title: "Process & Technology Consulting",
                    description:
                        "Map workflows, identify bottlenecks, and design automation roadmaps aligned with business goals.",
                    detail:
                        "Translate strategy into systems, timelines, and measurable outcomes your teams can execute.",
                },
            ],
        },
        process: {
            badge: "Our Process",
            title: "Our Simple, Smart, and Scalable Process",
            subtitle:
                "We design, develop, and implement automation tools that help you work smarter, not harder.",
            steps: [
                {
                    step: "Step 1",
                    title: "Smart Analyzing",
                    description:
                        "We assess your workflows, map dependencies, and identify AI opportunities to remove friction.",
                },
                {
                    step: "Step 2",
                    title: "AI Development",
                    description:
                        "We design automation systems and build reliable pipelines tailored to your operations.",
                },
                {
                    step: "Step 3",
                    title: "Seamless Integration",
                    description:
                        "We connect bots.dev to your stack without disruption, so teams can adopt quickly.",
                },
                {
                    step: "Step 4",
                    title: "Continuous Optimization",
                    description:
                        "We monitor performance, improve outputs, and keep workflows evolving with your goals.",
                },
            ],
            analysisChecks: [
                "System check",
                "Process check",
                "Speed check",
                "Manual work",
                "Repetitive task",
            ],
            integrationNote: "Secure API connections with minimal disruption.",
            devBadge: "AI Core",
            statusLabel: "status",
            statusValue: "optimized",
            demo: {
                title: "Generate",
                input: "Add document",
                actions: ["Analyze", "Generate Image", "Research"],
            },
            optimizationItems: [
                { label: "Chatbot system", detail: "Efficiency up by 20%" },
                { label: "Workflow system", detail: "Update available" },
                { label: "Sales system", detail: "Up to date" },
            ],
        },
        benefits: {
            badge: "Benefits",
            title: "The Key Benefits of Bots.dev for Your Business Growth",
            subtitle:
                "Discover how intelligent automation increases efficiency, reduces costs, and keeps your organization moving faster with smarter processes.",
            items: [
                {
                    title: "Increased Productivity",
                    description:
                        "Automate repetitive work so your team can focus on higher-value decisions and execution.",
                },
                {
                    title: "Better Customer Experience",
                    description:
                        "Deliver faster responses and personalized interactions that improve satisfaction and retention.",
                },
                {
                    title: "24/7 Availability",
                    description:
                        "Always-on systems handle requests around the clock without downtime or delays.",
                },
                {
                    title: "Cost Reduction",
                    description:
                        "Reduce manual overhead and optimize resources with smarter, automated workflows.",
                },
                {
                    title: "Data-Driven Insights",
                    description:
                        "Turn complex data into clear signals that guide strategy and improve accuracy.",
                },
                {
                    title: "Scalability & Growth",
                    description:
                        "Scale operations smoothly without increasing headcount or sacrificing quality.",
                },
            ],
        },
        landing: {
            results: {
                eyebrow: "Results",
                title: "Measurable results from day one",
                body: "Highlight metrics, use cases, and the real impact on business growth.",
            },
        },
        footer: {
            caption: "Automated systems that keep your business moving faster.",
            links: {
                services: "Services",
                process: "Process",
                benefits: "Benefits",
                privacy: "Privacy",
                terms: "Terms",
            },
            rights: "All rights reserved.",
        },
    },
    es: {
        navbar: {
            links: {
                services: "Servicios",
                process: "Proceso",
                benefits: "Beneficios",
                results: "Resultados",
            },
            cta: "Agenda una llamada",
            switchLabel: "Cambiar idioma",
            toEnglish: "Cambiar a ingles",
            toSpanish: "Cambiar a espanol",
        },
        hero: {
            badgeLabel: "Nuevo",
            badgeText: "Generacion automatizada de leads",
            titleLines: ["Soluciones de Software Modernas", "Que escalan tu negocio"],
            subtitle:
                "ERP, CRM, POS, e-commerce, diseno web, IA y software a medida para negocios modernos.",
            buttons: {
                primary: "Hablemos",
                secondary: "Servicios",
            },
        },
        services: {
            introBadge: "Nuestros servicios",
            introTitle: "Soluciones que llevan tu negocio al siguiente nivel",
            introBody:
                "Disenamos, desarrollamos e implementamos herramientas que te ayudan a trabajar mejor, avanzar mas rapido y mantener equipos alineados.",
            blockOne: {
                badge: "Asistente IA",
                title: "Delegar tareas diarias",
                paragraphs: [
                    "Lleva calendarios, reportes y aprobaciones rutinarias a flujos de IA que eliminan cuellos de botella.",
                    "Manten operaciones consistentes mientras tu equipo se enfoca en decisiones de mayor impacto.",
                ],
                tags: ["ERP", "CRM", "POS"],
                filters: ["Todas las tareas", "En espera de aprobacion"],
                tasks: [
                    { title: "Recordatorio de pago", meta: "Enviado a clientes seleccionados", tone: "accent" },
                    { title: "Gestion de nomina", meta: "Vence el 2 de julio", tone: "accent" },
                    { title: "Seguimiento de empleados", meta: "Hace 2 dias", tone: "muted" },
                    { title: "Publicacion en redes", meta: "Cancelado por usuario", tone: "muted" },
                ],
            },
            blockTwo: {
                badge: "Ventas y Marketing",
                title: "Acelera el crecimiento de ventas",
                paragraphs: [
                    "Automatiza outreach, seguimiento y engagement con mensajes consistentes en cada canal.",
                    "Convierte atencion en ingresos con journeys, analitica y contenido que escala con la demanda.",
                ],
                tags: ["E-Commerce", "Diseno web"],
                demo: {
                    title: "Generar",
                    input: "Agregar documento",
                    actions: ["Analizar", "Generar imagen", "Investigar"],
                },
            },
            listTitle: "Soluciones",
            services: [
                {
                    label: "ERP",
                    title: "Planeacion de recursos empresariales",
                    description:
                        "Unifica inventario, finanzas y operaciones en un solo sistema con tableros sincronizados.",
                    detail:
                        "Reemplaza hojas de calculo con aprobaciones claras, pronosticos y visibilidad.",
                },
                {
                    label: "CRM",
                    title: "Gestion de relaciones con clientes",
                    description:
                        "Centraliza leads, deals e interacciones en una linea de tiempo clara.",
                    detail:
                        "Automatiza seguimientos y recordatorios para mantener el pipeline activo.",
                },
                {
                    label: "POS",
                    title: "Punto de venta",
                    description:
                        "Experiencias de cobro modernas que sincronizan ventas, inventario y clientes.",
                    detail:
                        "Soporta reportes multi-sucursal y conciliacion sin trabajo manual.",
                },
                {
                    label: "E-Commerce",
                    title: "Plataformas e-commerce",
                    description:
                        "Tiendas con alta conversion y automatizacion de catalogos, pagos y envios.",
                    detail:
                        "Integra marketing y logistica para operar de punta a punta.",
                },
                {
                    label: "Diseno web",
                    title: "Diseno web y UX",
                    description:
                        "Experiencias premium que equilibran storytelling y rendimiento.",
                    detail:
                        "Lanza sitios con estrategia UX, SEO listo y visuales limpios.",
                },
                {
                    label: "Consultoria",
                    title: "Consultoria de procesos y tecnologia",
                    description:
                        "Mapea procesos, detecta cuellos de botella y define hojas de ruta.",
                    detail:
                        "Traduce estrategia en sistemas, tiempos y resultados medibles.",
                },
            ],
        },
        process: {
            badge: "Nuestro proceso",
            title: "Un proceso simple, inteligente y escalable",
            subtitle:
                "Disenamos, desarrollamos e implementamos automatizaciones que te ayudan a trabajar mejor.",
            steps: [
                {
                    step: "Paso 1",
                    title: "Analisis inteligente",
                    description:
                        "Evaluamos tus flujos, mapeamos dependencias y detectamos oportunidades de IA.",
                },
                {
                    step: "Paso 2",
                    title: "Desarrollo de IA",
                    description:
                        "Disenamos sistemas de automatizacion y pipelines confiables para tu operacion.",
                },
                {
                    step: "Paso 3",
                    title: "Integracion sin fricciones",
                    description:
                        "Conectamos bots.dev a tu stack sin interrupciones para una adopcion rapida.",
                },
                {
                    step: "Paso 4",
                    title: "Optimizacion continua",
                    description:
                        "Monitoreamos resultados, refinamos salidas y mejoramos con tus objetivos.",
                },
            ],
            analysisChecks: [
                "Revision del sistema",
                "Revision de procesos",
                "Revision de velocidad",
                "Trabajo manual",
                "Tarea repetitiva",
            ],
            integrationNote: "Conexiones API seguras con minima interrupcion.",
            devBadge: "Nucleo IA",
            statusLabel: "estado",
            statusValue: "optimizado",
            demo: {
                title: "Generar",
                input: "Agregar documento",
                actions: ["Analizar", "Generar imagen", "Investigar"],
            },
            optimizationItems: [
                { label: "Sistema de chatbot", detail: "Eficiencia +20%" },
                { label: "Sistema de flujos", detail: "Actualizacion disponible" },
                { label: "Sistema de ventas", detail: "Al dia" },
            ],
        },
        benefits: {
            badge: "Beneficios",
            title: "Los beneficios clave de bots.dev para tu crecimiento",
            subtitle:
                "Descubre como la automatizacion inteligente mejora la eficiencia, reduce costos y acelera el crecimiento.",
            items: [
                {
                    title: "Mayor productividad",
                    description:
                        "Automatiza trabajo repetitivo para que tu equipo se enfoque en decisiones clave.",
                },
                {
                    title: "Mejor experiencia del cliente",
                    description:
                        "Respuestas mas rapidas y personalizadas que elevan satisfaccion y lealtad.",
                },
                {
                    title: "Disponibilidad 24/7",
                    description:
                        "Sistemas siempre activos que atienden solicitudes sin pausas.",
                },
                {
                    title: "Reduccion de costos",
                    description:
                        "Menos carga manual y recursos optimizados con flujos inteligentes.",
                },
                {
                    title: "Insights basados en datos",
                    description:
                        "Convierte datos complejos en senales claras para decisiones precisas.",
                },
                {
                    title: "Escalabilidad y crecimiento",
                    description:
                        "Escala operaciones sin aumentar plantilla ni perder calidad.",
                },
            ],
        },
        landing: {
            results: {
                eyebrow: "Resultados",
                title: "Resultados medibles desde el dia uno",
                body: "Destaca metricas, casos de uso y el impacto real en el crecimiento.",
            },
        },
        footer: {
            caption: "Sistemas automatizados que mantienen tu negocio en movimiento.",
            links: {
                services: "Servicios",
                process: "Proceso",
                benefits: "Beneficios",
                privacy: "Privacidad",
                terms: "Terminos",
            },
            rights: "Todos los derechos reservados.",
        },
    },
} as const;
