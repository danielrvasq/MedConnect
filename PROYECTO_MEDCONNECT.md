# MedConnect - Plataforma de Teleconsulta Médica Accesible

## 📋 Descripción General

MedConnect es un prototipo de interfaz para un sistema de telemedicina centrado en pacientes con diferentes niveles de alfabetización digital. Prioriza la claridad del contenido, accesibilidad WCAG y UX Writing inclusivo para reducir errores y mejorar la experiencia del usuario.

## ✅ Objetivos Cumplidos

### 1. **Contenido y UX Writing**

- ✔ Redacción de etiquetas para botones, formularios y navegación
- ✔ Mensajes de error y confirmación con tono empático
- ✔ Textos para pantalla de videollamada claros y comprensibles
- ✔ Tutorial de onboarding para usuarios nuevos
- ✔ Microcopia (hints, help text) en todos los formularios

### 2. **Accesibilidad**

- ✔ Uso consistente de lenguaje claro sin tecnicismos
- ✔ Alternativas textuales para todos los iconos (ARIA labels)
- ✔ Soporte para navegación por teclado
- ✔ Contraste suficiente (WCAG AA)
- ✔ Focus visible en elementos interactivos
- ✔ Validación accesible de formularios
- ✔ Roles ARIA apropiados (buttons, alerts, etc.)

### 3. **Prototipo**

- ✔ Flujo completo: Inicio → Registro → Agendar cita → Videollamada → Historial médico

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Button.jsx                 # Componente botón accesible
│   ├── Button.css
│   ├── FormField.jsx              # Campo de formulario con validación
│   ├── FormField.css
│   ├── Onboarding.jsx             # Tutorial para nuevos usuarios
│   ├── Onboarding.css
│   ├── Home.jsx                   # Landing page
│   ├── Home.css
│   ├── Login.jsx                  # Pantalla de login
│   ├── Register.jsx               # Formulario de registro
│   ├── Auth.css                   # Estilos compartidos de auth
│   ├── Dashboard.jsx              # Panel principal
│   ├── Dashboard.css
│   ├── BookAppointment.jsx        # Agendar cita (multi-paso)
│   ├── BookAppointment.css
│   ├── VideoCall.jsx              # Videollamada y consulta
│   ├── VideoCall.css
│   ├── MedicalHistory.jsx         # Historial de consultas
│   └── MedicalHistory.css
├── data/
│   └── copy.js                    # Centro de contenido y copias
├── App.jsx                        # Componente raíz
├── App.css
├── main.jsx
└── index.css
```

## 🎯 Pantallas Implementadas

### 1. **Onboarding** (Primer uso)

- Tutorial interactivo de 4 pasos
- Explicación de beneficios
- Progreso visual
- Opción para saltar

### 2. **Home / Landing**

- Presentación de MedConnect
- Características principales
- Cómo funciona (4 pasos)
- CTA para registro/login
- Footer con enlaces

### 3. **Login**

- Validación de email
- Mostrar/ocultar contraseña
- Recordar sesión
- Enlace a registro
- Mensajes de error empáticos

### 4. **Registro**

- Formulario multi-campo
- Validación robusta:
  - Nombre (solo letras)
  - Email (formato válido)
  - Teléfono (con soporte internacional)
  - Fecha de nacimiento (mayor de 18)
  - Documento de identidad
  - Contraseña fuerte (8+ caracteres, mayúsculas, minúsculas, números, símbolos)
- Aceptación de términos
- Hints y ayuda en cada campo

### 5. **Dashboard**

- Bienvenida personalizada
- Próxima cita con detalles
- Acciones rápidas (4 opciones)
- Consejos de salud
- Información de emergencia
- Navegación principal sticky

### 6. **Agendar Cita** (Multi-paso)

- Paso 1: Seleccionar especialidad (5 opciones)
- Paso 2: Elegir doctor (con ratings y experiencia)
- Paso 3: Fecha y hora (próximos 7 días, 10 horarios)
- Paso 4: Confirmación con resumen de detalles
- Indicador de progreso visual

### 7. **Videollamada**

- **Pre-llamada**: Checklist, prueba de cámara/micrófono, countdown
- **En-llamada**:
  - Área de video remota e local
  - Controles (audio, video, chat, documentos, terminar)
  - Chat integrado
  - Compartir documentos
- **Post-llamada**:
  - Resumen de consulta
  - Calificación (estrellas)
  - Feedback
  - Descargas (resumen, receta)
  - Opciones para agendar nuevamente

### 8. **Historial Médico**

- Lista de consultas previas
- Búsqueda y filtros
- Tarjetas con información resumida
- Modal con detalles completos
- Descargas y opciones

## 🎨 Características de Diseño

### Colores

- **Primario**: #667eea (Azul violeta)
- **Secundario**: #764ba2 (Púrpura)
- **Éxito**: #28a745 (Verde)
- **Peligro**: #dc3545 (Rojo)
- **Fondo**: #f5f7fa (Azul claro)

### Tipografía

- **Fuente**: Sistema (Inter, Segoe UI, etc.)
- **Tamaños**: Escalas 12px, 14px, 16px, 18px, 20px, 24px, 28px, 32px, 36px, 48px

### Espaciado

- **Padding/Margin**: Escala 4px, 8px, 12px, 16px, 24px, 32px, 40px

## ♿ Accesibilidad (WCAG 2.1 AA)

### Implementaciones

1. **Navegación por teclado**

   - Tab/Shift+Tab para navegar
   - Enter para activar botones
   - Escape para cerrar modales
   - Focus outline visible (3px)

2. **Screen Readers**

   - ARIA labels en botones
   - ARIA describedby para errores y hints
   - ARIA live regions para alertas
   - Roles semánticos (button, alert, navigation)
   - Atributos aria-invalid, aria-required, aria-pressed

3. **Contraste**

   - Ratio mínimo 4.5:1 para texto normal
   - Ratio mínimo 3:1 para texto grande
   - Colores no como única forma de comunicación

4. **Validación**

   - Mensajes de error claros
   - Campos requeridos marcados
   - Hints y ayuda disponibles
   - Sin frustración en errores

5. **Responsivo**
   - Mobile-first
   - Breakpoints: 480px, 640px, 768px, 1024px
   - Touch targets mínimo 44x44px
   - Texto legible en todos los tamaños

## 📝 UX Writing - Principios

### 1. **Claridad**

- Lenguaje simple, sin tecnicismos
- Frases cortas y directas
- Vocabulario común

### 2. **Empatía**

- Mensajes amables y alentadores
- Ayuda disponible en todo momento
- Errores sin culpa al usuario

### 3. **Inclusividad**

- Múltiples formas de expresar conceptos
- Opciones y explicaciones
- Accesibilidad en el contenido

### 4. **Consistencia**

- Terminología uniforme
- Patrones de microcopia consistentes
- Tono constante

## 🚀 Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview
```

## 🔧 Tecnologías

- **React 19.2.0** - Framework UI
- **Vite** - Build tool
- **CSS3** - Estilos
- **JavaScript ES6+** - Lógica

## 📦 Componentes Reutilizables

### Button

```jsx
<Button
  onClick={handler}
  variant="primary" | "secondary" | "danger" | "success"
  size="sm" | "md" | "lg"
  loading={boolean}
  disabled={boolean}
  ariaLabel="Descripción"
>
  Texto del botón
</Button>
```

### FormField

```jsx
<FormField
  label="Etiqueta"
  type="text" | "email" | "password" | "tel" | "date"
  name="fieldName"
  value={value}
  onChange={handler}
  error={errorMessage}
  hint="Texto de ayuda"
  placeholder="Placeholder"
  required={boolean}
/>
```

## 📊 Mock Data

El prototipo incluye datos simulados para:

- 5 especialidades médicas
- 3 doctores por especialidad
- 7 días de disponibilidad
- 10 horarios por día
- 3 consultas previas en historial

## 🎓 Lecciones de UX Writing

### Onboarding

- Explicar beneficios sin abrumar
- Ofrecer opción de saltar
- Progreso visual claro

### Formularios

- Label + Hint + Error juntos
- Validación en tiempo real
- Feedback positivo

### Errores

- Específicos (no "Error")
- Sugestivos (cómo corregir)
- Amables (sin culpa)

### Videollamada

- Preparación clara (checklist)
- Controles simples y etiquetados
- Resumen post-consulta

## 🔐 Consideraciones de Seguridad

- Validación en cliente y servidor (simulado)
- Campos de contraseña con toggle
- No almacena datos sensibles en localStorage
- HTTPS recomendado para producción

## 📱 Responsive Design

- **Mobile (< 480px)**: Una columna, touch-friendly
- **Tablet (480px - 768px)**: Dos columnas, navegación simplificada
- **Desktop (> 768px)**: Diseño completo con layout óptimo

## 🌐 Internacionalización

- Español como idioma base
- Estructurado para fácil traducción
- Fechas en formato local (es-ES)
- Números con separadores locales

## ✨ Características Futuras

- Integración con API de videollamada (WebRTC)
- Sistema de pagos
- Notificaciones push
- Aplicación móvil nativa
- Sistema de ratings y reviews
- Integración con calendarios
- Prescripciones digitales
- Historial médico completo
- Recordatorios automáticos

## 📞 Soporte

Para preguntas o issues con el prototipo, documentar en el README del proyecto.

---

**Proyecto Final: MedConnect** ✓ Completado
**Fecha**: Diciembre 2024
**Objetivo**: Crear plataforma de telemedicina accesible con UX Writing inclusivo
