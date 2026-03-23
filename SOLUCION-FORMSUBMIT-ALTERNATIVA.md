# Solución Alternativa: FormSubmit no funciona

## Opción 1: Usar Web3Forms (Similar a FormSubmit)

### Paso 1: Registrarse en Web3Forms (GRATIS)
1. Ve a: https://web3forms.com
2. Haz clic en "Get Started Free"
3. Ingresa tu email: metrologiasam@gmail.com
4. Te enviarán un ACCESS KEY

### Paso 2: Reemplazar en index.html

**Cambiar línea 991:**

ANTES:
```html
<form class="contact-form" id="contactForm" action="https://formsubmit.co/metrologiasam@gmail.com" method="POST">
```

DESPUÉS:
```html
<form class="contact-form" id="contactForm" action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="TU_ACCESS_KEY_AQUI">
```

---

## Opción 2: Usar EmailJS (Más confiable)

### Paso 1: Crear cuenta EmailJS
1. Ve a: https://www.emailjs.com/
2. Regístrate con metrologiasam@gmail.com
3. Crea un servicio (Gmail)
4. Crea un template
5. Obtén tu Public Key

### Paso 2: Agregar script en index.html

Antes de `</head>`:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
   (function(){
      emailjs.init('TU_PUBLIC_KEY');
   })();
</script>
```

### Paso 3: Modificar JavaScript

En `assets/js/main.js`, reemplazar la función del formulario:

```javascript
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validar formulario
    const formData = {
        nombre: document.getElementById('nombre').value,
        empresa: document.getElementById('empresa').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        servicio: document.getElementById('servicio').value,
        mensaje: document.getElementById('mensaje').value
    };

    if (!validateForm(formData)) {
        showMessage('Por favor completa todos los campos correctamente.', 'error');
        return;
    }

    showMessage('Enviando mensaje...', 'success');

    // Enviar con EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        nombre: formData.nombre,
        empresa: formData.empresa,
        email: formData.email,
        telefono: formData.telefono,
        servicio: formData.servicio,
        mensaje: formData.mensaje
    }).then(function() {
        showMessage('¡Mensaje enviado exitosamente!', 'success');
        contactForm.reset();
    }, function(error) {
        showMessage('Error al enviar. Intenta de nuevo.', 'error');
        console.log('FAILED...', error);
    });
});
```

---

## Opción 3: Backend propio (Django/Flask)

Si tienes backend en sam-2, puedes crear un endpoint:

### En Django (sam-2):

**1. Crear view en views.py:**
```python
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def contact_form(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        message = f"""
        Nuevo contacto desde SAM Web:

        Nombre: {data['nombre']}
        Empresa: {data['empresa']}
        Email: {data['email']}
        Teléfono: {data['telefono']}
        Servicio: {data['servicio']}
        Mensaje: {data['mensaje']}
        """

        send_mail(
            'Nuevo contacto desde SAM Web',
            message,
            'noreply@sammetrologia.com',
            ['metrologiasam@gmail.com'],
            fail_silently=False,
        )

        return JsonResponse({'success': True})
    return JsonResponse({'error': 'Method not allowed'}, status=405)
```

**2. Agregar URL en urls.py:**
```python
path('api/contact/', contact_form, name='contact_form'),
```

**3. Configurar email en settings.py:**
```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'metrologiasam@gmail.com'
EMAIL_HOST_PASSWORD = 'tu_app_password'  # Crear en Google
```

**4. Modificar JavaScript para enviar a tu API:**
```javascript
fetch('https://tu-dominio.com/api/contact/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    showMessage('¡Mensaje enviado!', 'success');
    contactForm.reset();
})
.catch(error => {
    showMessage('Error al enviar', 'error');
});
```

---

## ¿Cuál elegir?

| Opción | Dificultad | Confiabilidad | Costo |
|--------|-----------|---------------|-------|
| **Web3Forms** | 🟢 Fácil | 🟢 Alta | 🟢 Gratis |
| **EmailJS** | 🟡 Media | 🟢 Alta | 🟢 Gratis (100/mes) |
| **Backend Django** | 🔴 Difícil | 🟢 Muy Alta | 🟡 Hosting requerido |

**Recomendación:** Primero intenta **Web3Forms**, es más confiable que FormSubmit.
