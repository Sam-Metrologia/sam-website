// SAM Metrología - JavaScript Principal

document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ==========================================
    // Active Navigation Link on Scroll
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);

    // ==========================================
    // Smooth Scroll for Anchor Links
    // ==========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // Contact Form Handling
    // ==========================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form data for validation
            const formData = {
                nombre: document.getElementById('nombre').value,
                empresa: document.getElementById('empresa').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                servicio: document.getElementById('servicio').value,
                mensaje: document.getElementById('mensaje').value
            };

            // Validate form
            if (!validateForm(formData)) {
                e.preventDefault();
                showMessage('Por favor completa todos los campos correctamente.', 'error');
                return;
            }

            // Show success message (form will submit naturally to FormSubmit)
            showMessage('Enviando mensaje...', 'success');

            // Form will submit naturally to FormSubmit.co
            // FormSubmit will send email to metrologiasam@gmail.com
            // and redirect back to the page after submission
        });
    }

    // Form validation function
    function validateForm(data) {
        // Check all fields are filled
        for (let key in data) {
            if (!data[key] || data[key].trim() === '') {
                return false;
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return false;
        }

        // Validate phone format (basic)
        const phoneRegex = /^[0-9+\s()-]{7,}$/;
        if (!phoneRegex.test(data.telefono)) {
            return false;
        }

        return true;
    }

    // Create WhatsApp message
    function createWhatsAppMessage(data) {
        return `*Nuevo Contacto desde Web SAM Metrología*

📋 *Datos del Cliente:*
• Nombre: ${data.nombre}
• Empresa: ${data.empresa}
• Email: ${data.email}
• Teléfono: ${data.telefono}

🔧 *Servicio de Interés:*
${getServiceName(data.servicio)}

💬 *Mensaje:*
${data.mensaje}`;
    }

    // Create email body
    function createEmailBody(data) {
        return `Nuevo Contacto desde Web SAM Metrología

DATOS DEL CLIENTE:
Nombre: ${data.nombre}
Empresa: ${data.empresa}
Email: ${data.email}
Teléfono: ${data.telefono}

SERVICIO DE INTERÉS:
${getServiceName(data.servicio)}

MENSAJE:
${data.mensaje}`;
    }

    // Get service name from value
    function getServiceName(serviceValue) {
        const services = {
            'plataforma': 'Plataforma SAM',
            'gestion': 'Gestión por Suscripción',
            'comprobaciones': 'Comprobaciones Intermedias',
            'logistica': 'Logística de Calibración',
            'documentacion': 'Gestión Documental',
            'acompanamiento': 'Acompañamiento Técnico',
            'otro': 'Otro servicio'
        };
        return services[serviceValue] || serviceValue;
    }

    // Show message function
    function showMessage(message, type) {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.form-message');
        existingMessages.forEach(msg => msg.remove());

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            font-weight: 500;
            text-align: center;
            background: ${type === 'success' ? '#d1fae5' : '#fee2e2'};
            color: ${type === 'success' ? '#065f46' : '#991b1b'};
            border: 1px solid ${type === 'success' ? '#34d399' : '#f87171'};
        `;

        // Insert message after form
        contactForm.appendChild(messageDiv);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // ==========================================
    // Intersection Observer for Animations
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll('.service-card, .diff-card, .stat-card, .about-block, .value-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // ==========================================
    // Stats Counter Animation
    // ==========================================
    function animateValue(element, start, end, duration, suffix = '') {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const text = entry.target.textContent;

                // Check if it contains a number
                const match = text.match(/(\d+)/);
                if (match) {
                    const targetNumber = parseInt(match[1]);
                    const suffix = text.replace(match[1], '').trim();
                    animateValue(entry.target, 0, targetNumber, 2000, suffix);
                }
            }
        });
    }, { threshold: 0.5 });

    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ==========================================
    // Dashboard Animation
    // ==========================================

    // Animate dashboard stat values
    const dashboardStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const targetValue = parseInt(entry.target.getAttribute('data-target'));
                animateValue(entry.target, 0, targetValue, 2000);
            }
        });
    }, { threshold: 0.5 });

    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        dashboardStatsObserver.observe(stat);
    });

    // Animate donut charts
    function animateDonutChart(svg) {
        const completed = parseInt(svg.getAttribute('data-completed'));
        const pending = parseInt(svg.getAttribute('data-pending') || 0);
        const notCompleted = parseInt(svg.getAttribute('data-not-completed'));

        const circumference = 2 * Math.PI * 80; // 2πr where r=80

        // Calculate dasharray values
        const completedLength = (completed / 100) * circumference;
        const pendingLength = (pending / 100) * circumference;
        const notCompletedLength = (notCompleted / 100) * circumference;

        // Get segments
        const greenSegment = svg.querySelector('.green-segment');
        const orangeSegment = svg.querySelector('.orange-segment');
        const redSegment = svg.querySelector('.red-segment');

        // Animate segments with delay
        setTimeout(() => {
            if (greenSegment) {
                greenSegment.style.strokeDasharray = `${completedLength} ${circumference}`;
                greenSegment.style.strokeDashoffset = '0';
            }

            if (orangeSegment && pending > 0) {
                orangeSegment.style.strokeDasharray = `${pendingLength} ${circumference}`;
                orangeSegment.style.strokeDashoffset = `-${completedLength}`;
            }

            if (redSegment) {
                const offset = -(completedLength + pendingLength);
                redSegment.style.strokeDasharray = `${notCompletedLength} ${circumference}`;
                redSegment.style.strokeDashoffset = `${offset}`;
            }
        }, 300);
    }

    // Observe donut charts
    const donutChartsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateDonutChart(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const donutCharts = document.querySelectorAll('.donut-chart');
    donutCharts.forEach(chart => {
        donutChartsObserver.observe(chart);
    });

    // ==========================================
    // Line Chart Animation
    // ==========================================
    function animateLineChart(svg) {
        const programadasLine = svg.querySelector('.programadas-line');
        const realizadasLine = svg.querySelector('.realizadas-line');
        const programadasPoints = svg.querySelectorAll('.programadas-points circle');
        const realizadasPoints = svg.querySelectorAll('.realizadas-points circle');

        // Animate lines
        setTimeout(() => {
            if (programadasLine) {
                programadasLine.style.strokeDashoffset = '0';
            }
        }, 300);

        setTimeout(() => {
            if (realizadasLine) {
                realizadasLine.style.strokeDashoffset = '0';
            }
        }, 600);

        // Animate points with staggered delay
        setTimeout(() => {
            programadasPoints.forEach((point, index) => {
                setTimeout(() => {
                    point.style.opacity = '1';
                }, index * 100);
            });
        }, 1500);

        setTimeout(() => {
            realizadasPoints.forEach((point, index) => {
                setTimeout(() => {
                    point.style.opacity = '1';
                }, index * 100);
            });
        }, 1800);
    }

    // Observe line chart
    const lineChartObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateLineChart(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const lineChart = document.querySelector('#lineChart');
    if (lineChart) {
        lineChartObserver.observe(lineChart);
    }

    // ==========================================
    // Initialize
    // ==========================================
    console.log('SAM Metrología website loaded successfully!');
    setActiveNav(); // Set initial active nav
});

// ==========================================
// External Links Handler
// ==========================================
document.addEventListener('click', function(e) {
    const target = e.target.closest('a[target="_blank"]');
    if (target && target.hostname !== window.location.hostname) {
        // External links are already handled by target="_blank"
        console.log('Opening external link:', target.href);
    }
});
