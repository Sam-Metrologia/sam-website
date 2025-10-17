# 🚀 Guía de Despliegue - SAM Metrología

## 📋 Configuración Completa del Dominio

**Dominio Principal**: sammetrologia.com
**Proveedor**: Namecheap
**Página Web**: sammetrologia.com (GitHub Pages)
**Plataforma SAM**: app.sammetrologia.com (Render)

---

## PARTE 1: Desplegar Página Web en GitHub Pages

### 1. Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `sam-website` (o el que prefieras)
3. Descripción: "Sitio web corporativo SAM Metrología"
4. Visibilidad: **Public** (necesario para GitHub Pages gratis)
5. Click en "Create repository"

### 2. Subir el Código a GitHub

Abre Git Bash o Terminal en la carpeta del proyecto y ejecuta:

```bash
cd C:\Users\LENOVO\OneDrive\Escritorio\sam-website

# Inicializar repositorio
git init

# Agregar todos los archivos
git add .

# Crear primer commit
git commit -m "Initial commit: SAM Metrología website"

# Conectar con GitHub (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/sam-website.git

# Renombrar rama a main
git branch -M main

# Subir código
git push -u origin main
```

### 3. Activar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings** (Configuración)
2. En el menú lateral, click en **Pages**
3. En "Source", selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click en **Save**
5. Espera 1-2 minutos

GitHub detectará automáticamente el archivo `CNAME` que ya está creado.

---

## PARTE 2: Configurar DNS en Namecheap

### 1. Acceder a Namecheap

1. Inicia sesión en https://www.namecheap.com
2. Ve a **Domain List**
3. Click en **Manage** junto a `sammetrologia.com`

### 2. Configurar DNS Records

1. Click en la pestaña **Advanced DNS**
2. **ELIMINA** todos los registros A y CNAME existentes (excepto los de email si los tienes)
3. **AGREGA** los siguientes registros:

#### Para la Página Web (GitHub Pages):

```
Tipo    Host    Value                   TTL
A       @       185.199.108.153         Automatic
A       @       185.199.109.153         Automatic
A       @       185.199.110.153         Automatic
A       @       185.199.111.153         Automatic
CNAME   www     tu-usuario.github.io    Automatic
```

**IMPORTANTE**: Reemplaza `tu-usuario.github.io` con tu usuario real de GitHub.

#### Para la Plataforma (Render):

```
Tipo    Host    Value                           TTL
CNAME   app     sam-metrologia.onrender.com     Automatic
```

**IMPORTANTE**: Reemplaza `sam-metrologia.onrender.com` con la URL real de tu app en Render (la encontrarás en el dashboard de Render).

### 3. Guardar Cambios

- Click en el icono de **✓** (check) para guardar cada registro
- Los cambios DNS pueden tardar **5 minutos a 48 horas** (usualmente 10-30 minutos)

---

## PARTE 3: Configurar Dominio Custom en Render

### 1. Acceder a Render

1. Inicia sesión en https://dashboard.render.com
2. Selecciona tu servicio de Django (SAM Metrología)

### 2. Agregar Custom Domain

1. Ve a la pestaña **Settings**
2. Scroll hasta **Custom Domains**
3. Click en **Add Custom Domain**
4. Escribe: `app.sammetrologia.com`
5. Click en **Save**

### 3. Verificar SSL

- Render automáticamente configurará SSL (HTTPS)
- Espera 5-10 minutos para que se active
- Verás un ✓ verde cuando esté listo

### 4. Actualizar Django Settings

Render detectará automáticamente el nuevo dominio, pero verifica que en tu `settings.py`:

```python
ALLOWED_HOSTS = [
    'app.sammetrologia.com',
    'sam-metrologia.onrender.com',  # Mantén el original por si acaso
    'localhost',
    '127.0.0.1',
]

CSRF_TRUSTED_ORIGINS = [
    'https://app.sammetrologia.com',
    'https://sam-metrologia.onrender.com',
]
```

---

## PARTE 4: Actualizar el Botón de Login en la Web

El archivo `index.html` ya está preparado. Solo necesitas verificar que el botón de "Solicitar Trial de 30 Días" redirija a:

```html
<a href="https://app.sammetrologia.com/accounts/login/" class="btn btn-secondary">Solicitar Trial de 30 Días</a>
```

O puedes agregar un botón específico de "Iniciar Sesión" en la navbar.

---

## ✅ Verificación Final

### Cuando todo esté configurado, verifica:

1. **Página Web**: https://sammetrologia.com
   - Debe mostrar tu sitio web corporativo
   - SSL activo (candado en el navegador)

2. **Página Web con www**: https://www.sammetrologia.com
   - Debe redireccionar a sammetrologia.com

3. **Plataforma SAM**: https://app.sammetrologia.com
   - Debe mostrar el login de Django
   - SSL activo

4. **Test de Login**:
   - Desde la web: click en "Solicitar Trial"
   - Debe llevar a `app.sammetrologia.com/accounts/login/`
   - Login funcional
   - Redirecciona al dashboard

---

## 🔧 Troubleshooting

### Si la página web no carga:
- Espera 30 minutos (propagación DNS)
- Verifica que GitHub Pages esté activo (verde)
- Revisa que los registros A estén correctos

### Si app.sammetrologia.com no funciona:
- Verifica el CNAME en Namecheap
- Confirma que Render muestre el dominio como "Verified"
- Espera que SSL se active (puede tardar 10 min)

### Si hay error de CSRF en Django:
- Actualiza `CSRF_TRUSTED_ORIGINS` en settings.py
- Redeploy en Render

---

## 📞 URLs Finales

- **Web Corporativa**: https://sammetrologia.com
- **Plataforma Login**: https://app.sammetrologia.com/accounts/login/
- **Dashboard**: https://app.sammetrologia.com/dashboard/ (después de login)

---

**¡Listo!** 🎉
