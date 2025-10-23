# Guía Completa: Campaña de Email Marketing SAM Metrología

## 📋 Resumen de la Campaña

- **Total contactos**: ~150-200 organismos
- **Herramienta**: Google Sheets + Gmail (GRATIS)
- **Personalización**: Automática por nombre de organismo
- **Límite Gmail**: 500 emails/día
- **Costo**: $0 (100% gratis)

---

## 🚀 PASO 1: Preparar Google Sheets

### 1.1 Crear hoja de cálculo

1. Ve a: https://sheets.google.com
2. Crea nueva hoja de cálculo
3. Nómbrala: **"SAM Campaña Email 2025"**

### 1.2 Estructura de columnas

Crea exactamente estas columnas en la fila 1:

| A: Email | B: Nombre |
|----------|-----------|
| directoradm@oigas.co | ORGANISMO DE INSPECCIONES DE GAS |
| cdaza69@yahoo.com | CONSORCIO GRUPO GARCIA |
| ... | ... |

**IMPORTANTE**:
- Columna A: Email (sin espacios)
- Columna B: Nombre del organismo

### 1.3 Copiar tus datos

Copia todos los datos del PDF que te di y pégalos en Google Sheets en las columnas correspondientes.

---

## 🔧 PASO 2: Instalar extensión Mail Merge

### 2.1 Abrir Google Workspace Marketplace

1. En Google Sheets, ve a **Extensiones** > **Complementos** > **Obtener complementos**
2. Busca: **"Yet Another Mail Merge"** (YAMM)
3. Haz clic en **Instalar**
4. Autoriza el acceso a Gmail

**YAMM es GRATIS** hasta 50 emails/día. Para 150+ emails necesitarás la versión paga ($25/año) o usar alternativas:

### 2.2 Alternativa 100% GRATIS: Mail Merge by cloudHQ

1. Ve a Chrome Web Store
2. Busca: **"Mail Merge with Attachments by cloudHQ"**
3. Instala la extensión
4. GRATIS hasta 400 emails/día ✅

---

## ✉️ PASO 3: Crear el Email en Gmail

### 3.1 Plantilla de email (Versión Texto Plano)

```
Asunto: Optimice su gestión metrológica ISO 17020 - {{Nombre}}

Estimado equipo de {{Nombre}},

Me dirijo a ustedes conociendo el compromiso de su organización con la
excelencia en los procesos de inspección bajo acreditación ISO/IEC 17020.

En SAM Metrología hemos desarrollado una plataforma digital especializada
que optimiza la gestión integral de equipos de medición, respondiendo
específicamente a las necesidades normativas y operativas de organismos
de inspección en Colombia.

NUESTRA PLATAFORMA LE PERMITE:

✓ Centralizar el control digital de equipos de medición con hojas de
  vida completas

✓ Automatizar alertas de vencimientos de calibraciones y mantenimientos

✓ Generar reportes y documentación trazable para auditorías ISO 17020

✓ Mantener trazabilidad documental completa y almacenamiento seguro
  en la nube

✓ Acceder a panel de control con indicadores en tiempo real de
  cumplimiento normativo

Nuestra solución representa una alternativa significativamente más
económica que la contratación de personal especializado interno,
manteniendo los más altos estándares de control y cumplimiento normativo.

-----------------------------------------------------------
          PRUEBA GRATUITA DE 30 DÍAS
  Sin compromiso • Sin tarjeta de crédito • Implementación inmediata

  👉 Solicitar demostración: https://sammetrologia.com/#contacto
-----------------------------------------------------------

Estaré encantado de agendar una demostración personalizada de 15 minutos
para mostrarles cómo SAM puede optimizar la gestión metrológica de {{Nombre}}.

Quedo atento a su respuesta.

Cordialmente,

Equipo SAM Metrología
Gestión Metrológica Inteligente

WhatsApp: +57 324 799 0534
Email: metrologiasam@gmail.com
Web: sammetrologia.com

---
SAM Metrología S.A.S | Colombia
Este correo fue enviado a organismos de inspección ISO/IEC 17020 en Colombia.
Si no desea recibir más información, puede responder indicando su preferencia.
```

---

## 📧 PASO 4: Configurar Mail Merge

### 4.1 En Google Sheets con mail Merge instalado:

1. Ve a **Extensiones** > **Mail Merge** > **Start Mail Merge**
2. Configura:
   - **To**: Selecciona columna "Email"
   - **Subject**: `Optimice su gestión metrológica ISO 17020 - {{Nombre}}`
   - **Email body**: Pega la plantilla de arriba

3. **Personalización automática**:
   - `{{Nombre}}` se reemplazará automáticamente por el nombre del organismo
   - `{{Email}}` si quieres usarlo en algún lado

### 4.2 Opciones avanzadas:

- **Send emails as**: metrologiasam@gmail.com
- **Track opens**: Activar (para ver quién abre)
- **Track clicks**: Activar (para ver quién hace clic)
- **Schedule**: Opcional (programar envío)

---

## 🎨 PASO 5: Usar plantilla HTML elegante (OPCIONAL)

Si quieres el email MÁS ELEGANTE con diseño, usa el archivo HTML que creé:

### 5.1 Convertir HTML a Gmail:

1. Abre el archivo: `C:\Users\LENOVO\OneDrive\Escritorio\sam-website\email-campaign-template.html`
2. Abrelo en navegador (Chrome/Edge)
3. Selecciona TODO (Ctrl+A)
4. Copia (Ctrl+C)
5. En Gmail, crea nuevo email y pega (Ctrl+V)

El formato HTML se mantendrá con:
- Colores corporativos SAM
- Diseño profesional
- Botón CTA elegante
- Logo y footer corporativo

### 5.2 Reemplazar variables:

En el HTML, cambia `{{Nombre del Organismo}}` por `{{Nombre}}` para que Mail Merge lo detecte.

---

## 🚀 PASO 6: Envío de Prueba

### 6.1 ANTES de enviar a todos:

1. **Envía 3 emails de prueba** a ti mismo:
   - metrologiasam@gmail.com
   - Tu email personal
   - Email de un amigo/colega

2. **Revisa**:
   - Que el nombre se personalice correctamente
   - Que los links funcionen
   - Que se vea bien en móvil
   - Que no caiga en SPAM

### 6.2 Evitar SPAM:

✅ **Hacer**:
- Usar tu email verificado (metrologiasam@gmail.com)
- Incluir link de "darse de baja" (ya está en el footer)
- Enviar máximo 100-150 emails por día
- Esperar 30-60 segundos entre emails

❌ **NO Hacer**:
- Enviar 200 emails de golpe
- Usar palabras spam ("GRATIS!!!", "GANAR DINERO", etc.)
- Poner muchos links
- Enviar sin probar

---

## 📊 PASO 7: Métricas y Seguimiento

### 7.1 Qué medir:

Con Mail Merge + Gmail puedes ver:

- **Tasa de apertura**: % que abrieron el email (esperado: 15-25%)
- **Tasa de clics**: % que hicieron clic (esperado: 3-8%)
- **Respuestas**: Conversaciones iniciadas
- **Bounces**: Emails inválidos

### 7.2 Resultados esperados:

Con 150 emails:

```
Enviados:        150 emails
Aperturas (20%): 30 organismos
Clics (5%):      7-8 organismos
Respuestas (2%): 3-4 organismos interesados
Clientes (0.5%): 1 cliente en el primer mes
```

---

## 🎯 PASO 8: Seguimiento de respuestas

### 8.1 Cuando respondan:

**Respuesta rápida (plantilla)**:

```
Hola [Nombre],

¡Excelente! Me alegra su interés en conocer SAM.

¿Le parece bien agendar una demostración de 15 minutos esta
semana? Tengo disponibilidad:

- Martes 10:00 AM o 3:00 PM
- Miércoles 11:00 AM o 4:00 PM
- Jueves 9:00 AM o 2:00 PM

Responda con la opción que mejor le convenga y le envío el
enlace de la videollamada.

¡Saludos!
```

### 8.2 Crear Google Meet automático:

1. Ve a Google Calendar
2. Crea evento con videollamada
3. Invita al contacto
4. Prepara demostración de 15 min

---

## 💡 ESTRATEGIA DE ENVÍO

### Opción 1: Envío gradual (RECOMENDADO)

```
Día 1:  50 emails (lunes 9 AM)
Día 2:  50 emails (martes 9 AM)
Día 3:  50 emails (miércoles 9 AM)
Día 4:  Resto (jueves 9 AM)
```

**Ventajas**:
- No activa filtros de spam
- Puedes ajustar el mensaje si algo no funciona
- Manejas respuestas sin saturarte

### Opción 2: Envío por segmento

```
Lunes:    Organismos de gas (50 emails)
Martes:   Certificadoras (50 emails)
Miércoles: Inspecciones (50 emails)
```

---

## ⚠️ NOTAS IMPORTANTES

### Legal:

✅ **Tu campaña es LEGAL** porque:
- Son contactos corporativos (B2B)
- Ofreces servicio relevante a su negocio
- Incluyes opción de darse de baja
- No es publicidad masiva indiscriminada

### Mejores prácticas:

1. **Horario**: Envía 8-10 AM (martes-jueves mejor)
2. **Día**: Evita lunes (ocupados) y viernes (fin de semana)
3. **Frecuencia**: Si no responden, espera 2 semanas para segundo email
4. **Persistencia**: Segundo email tiene 50% más respuestas

---

## 🔄 EMAIL DE SEGUIMIENTO (2 semanas después)

Para quienes NO respondieron:

```
Asunto: Re: Optimice su gestión metrológica ISO 17020

Hola equipo de {{Nombre}},

Hace unos días les compartí información sobre SAM Metrología,
nuestra plataforma digital para organismos ISO 17020.

Entiendo que pueden estar ocupados, pero quería asegurarme
de que recibieron la información y ver si tienen alguna
pregunta sobre cómo podemos ayudarles a optimizar la gestión
de sus equipos de medición.

¿Les interesaría una demostración breve de 15 minutos?

Si prefieren no recibir más información, por favor responda
indicándolo y los retiraré de nuestra lista inmediatamente.

Saludos,
Equipo SAM Metrología
+57 324 799 0534
```

---

## ✅ CHECKLIST FINAL

Antes de enviar, verifica:

- [ ] Google Sheets con todos los contactos
- [ ] Mail Merge instalado y configurado
- [ ] Plantilla de email lista
- [ ] Variables {{Nombre}} configuradas
- [ ] 3 emails de prueba enviados y revisados
- [ ] Links funcionan correctamente
- [ ] Email se ve bien en móvil
- [ ] Signature profesional incluida
- [ ] Horario de envío configurado (8-10 AM)
- [ ] Respuestas automáticas desactivadas en Gmail

---

## 📞 Siguiente paso AHORA:

1. Abre Google Sheets
2. Crea la hoja con tus 150 contactos
3. Instala Mail Merge
4. Configura el primer email de PRUEBA
5. Envía a ti mismo
6. Si se ve bien → programa envío gradual

---

**Tiempo estimado de setup**: 30-45 minutos
**Tiempo de envío por lote**: 15-20 minutos
**Resultados esperados**: 3-5 respuestas en primera semana

¡Éxito con tu campaña! 🚀
