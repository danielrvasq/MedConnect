# 🏥 MedConnect - Guía Completa del Proyecto

## ¿Qué es MedConnect?

MedConnect es una **plataforma de telemedicina accesible** diseñada para pacientes con diferentes niveles de alfabetización digital. Combina UX Writing claro, accesibilidad WCAG AA y una interfaz intuitiva para crear una experiencia de consulta médica sin fricción.

## 🚀 ¿Cómo Iniciar?

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación abrirá en: **http://localhost:5174/**

### 3. Build para producción

```bash
npm build
```

## 📱 Flujo de la Aplicación

### Primera Visita

1. **Onboarding** → Tutorial interactivo (4 pasos)
2. Se almacena en localStorage para no repetir

### Después del Onboarding

1. **Home** → Landing page con características
2. **Login/Register** → Autenticación
3. **Dashboard** → Panel principal
4. **Agendar Cita** → Proceso multi-paso
5. **Videollamada** → Consulta en vivo
6. **Historial** → Registro de consultas

## 🎯 Características Implementadas

### ✅ UX Writing Inclusivo

- **397 textos** cuidadosamente redactados
- Lenguaje simple sin tecnicismos médicos
- Mensajes empáticos y alentadores
- Hints y ayuda en cada campo
- Errores específicos y sugestivos

### ✅ Accesibilidad (WCAG 2.1 AA)

- **Navegación por teclado** - Tab, Shift+Tab, Enter, Escape
- **Screen readers** - ARIA labels, roles, live regions
- **Contraste** - 4.5:1 mínimo
- **Focus visible** - Outline 3px en elementos interactivos
- **Validación accesible** - Errores y hints conectados
- **Responsive** - 5 breakpoints desde 280px

### ✅ Componentes Reutilizables

1. **Button** - Con variantes y estados
2. **FormField** - Con validación integrada
3. **Onboarding** - Tutorial personalizable
4. **Dashboard** - Panel principal
5. **BookAppointment** - Multi-paso
6. **VideoCall** - Tres fases (pre, in, post)
7. **MedicalHistory** - Con búsqueda y filtros

## 📂 Estructura de Archivos

```
src/
├── components/
│   ├── Button.jsx/css              # Botón accesible
│   ├── FormField.jsx/css           # Campo de formulario
│   ├── Onboarding.jsx/css          # Tutorial
│   ├── Home.jsx/css                # Landing page
│   ├── Login.jsx                   # Login
│   ├── Register.jsx                # Registro
│   ├── Auth.css                    # Estilos compartidos
│   ├── Dashboard.jsx/css           # Panel principal
│   ├── BookAppointment.jsx/css     # Agendar cita
│   ├── VideoCall.jsx/css           # Videollamada
│   └── MedicalHistory.jsx/css      # Historial
├── data/
│   └── copy.js                     # Centro de contenido
├── App.jsx                         # App principal
├── App.css                         # Estilos globales
└── main.jsx                        # Punto de entrada
```

## 💡 Guía de Uso Por Pantalla

### Onboarding

- Muestra 4 pasos informativos
- Incluye consejos prácticos
- Opción para saltar
- Progreso visual

### Home

- Explica qué es MedConnect
- Muestra 4 características
- Describe el proceso en 4 pasos
- Invita a registrarse

### Login

- Email y contraseña
- Mostrar/ocultar contraseña
- Validación en tiempo real
- Recuperación de contraseña (link)

### Registro

- 8 campos: nombre, email, teléfono, fecha nacimiento, ID, contraseña, confirmar, términos
- Validación robusta
- Hints contextuales
- Errores específicos

### Dashboard

- Bienvenida personalizada
- Próxima cita destacada
- 4 acciones rápidas
- 4 consejos de salud
- Info de emergencia

### Agendar Cita

- **Paso 1**: 5 especialidades
- **Paso 2**: Doctors con ratings (3 opciones)
- **Paso 3**: Fechas (7 días) y horas (10 opciones)
- **Paso 4**: Confirmación con totales

### Videollamada

- **Pre-llamada**: Checklist + pruebas + countdown
- **En-llamada**: Video + controles + chat + documentos
- **Post-llamada**: Resumen + rating + feedback + descargas

### Historial

- Lista de consultas previas
- Busca por doctor, especialidad, diagnóstico
- Modal con detalles completos
- Descargas y opciones

## 🎨 Guía de Estilos

### Colores

```css
--primary: #667eea      /* Azul violeta */
--secondary: #764ba2    /* Púrpura */
--success: #28a745      /* Verde */
--danger: #dc3545       /* Rojo */
--background: #f5f7fa   /* Azul claro */
```

### Tamaños de Texto

- 12px: Labels pequeños
- 14px: Texto de ayuda
- 16px: Párrafos y labels
- 18px: Subtítulos
- 20px: Títulos de sección
- 24px: Títulos menores
- 28px: Títulos principales
- 32px+ : Héroe

### Espaciado

4px → 8px → 12px → 16px → 24px → 32px → 40px

## ♿ Características de Accesibilidad

### Navegación por Teclado

```
Tab              → Avanza al siguiente elemento
Shift + Tab      → Retrocede al elemento anterior
Enter            → Activa botones
Escape           → Cierra modales
```

### Para Screen Readers

- Todos los botones tienen aria-label
- Los campos de error usan aria-describedby
- Los campos requeridos tienen aria-required
- Los estados se comunican con aria-invalid

### Validación Accesible

- Error conectado al input con aria-describedby
- Mensaje de error tiene role="alert"
- Hints disponibles sin bloquear el campo
- Errores específicos (no "Campo inválido")

## 🧪 Flujo de Prueba Recomendado

1. **Primera visita**: Ver onboarding completo
2. **Registro**: Completar con datos válidos
3. **Login**: Iniciar sesión
4. **Agendar cita**: Completar los 4 pasos
5. **Videollamada**: Recorrer pre, in, post
6. **Historial**: Ver consultas previas
7. **Accesibilidad**: Navegar solo con teclado

## 📊 Datos Mock

El prototipo incluye:

- **5 especialidades** médicas
- **3 doctors** por especialidad
- **7 días** de disponibilidad
- **10 horarios** por día
- **3 consultas previas** en historial

## 🔍 Validaciones Implementadas

### Email

- Formato válido (usuario@dominio.com)
- No duplicado

### Teléfono

- Formato internacional
- 10-15 dígitos

### Contraseña

- Mínimo 8 caracteres
- Mayúsculas, minúsculas, números, símbolos
- Coincide en confirmación

### Fecha de Nacimiento

- Mayor de 18 años
- Formato válido

## 🌍 Internacionalización

- **Idioma**: Español
- **Fechas**: Formato local (es-ES)
- **Números**: Separadores locales
- **Preparado para** traducción a otros idiomas

## 📈 Performance

- **Renderizado rápido** con React 19
- **Build optimizado** con Vite
- **CSS modular** por componente
- **Sin dependencias pesadas**
- **Optimizado para mobile**

## 🔐 Consideraciones de Seguridad

- Validación en cliente (UI)
- Preparado para validación en servidor
- Contraseñas enmascaradas
- Campos de formulario sin autocompletado de datos sensibles
- localStorage solo para "first time"

## 📱 Responsive Design

- **Mobile < 480px**

  - Una columna
  - Navegación por menú hamburguesa
  - Botones full-width
  - Touch-friendly (44x44px mínimo)

- **Tablet 480-768px**

  - Dos columnas donde aplique
  - Navegación simplificada
  - Flexible

- **Desktop > 768px**
  - Diseño completo
  - Multi-columna
  - Espaciado óptimo

## 🎓 Aprendizajes de UX Writing

### Claridad

- Sin tecnicismos: "Presión arterial" no "HTA"
- Frases cortas: "¿Cuál es tu nombre?" no "Por favor, indique su nombre completo"
- Directas: Ir al punto

### Empatía

- Alentador: "¡Estamos listos!" no "Confirmar"
- Util: Hints que ayudan, no confunden
- Sin culpa: "No válido" no "Error"

### Consistencia

- Mismo tono en toda la app
- Misma terminología
- Patrones repetidos

## 🚀 Próximos Pasos

1. Integrar API real de telemedicina
2. Implementar WebRTC para video real
3. Sistema de pagos
4. Notificaciones push
5. Aplicación móvil nativa
6. Multi-idioma completo
7. Análisis de uso (analytics)
8. A/B testing de textos

## 📞 Contacto y Soporte

Para más información sobre el proyecto, consulta:

- README.md
- PROYECTO_MEDCONNECT.md
- Comentarios en el código

---

**MedConnect - Telemedicina Accesible** ✓
Proyecto Final Completado - Diciembre 2024
