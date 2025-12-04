/**
 * MedConnect - Copy & Microcopy
 * UX Writing inclusivo, accesible y empático
 * Lenguaje claro sin tecnicismos médicos
 */

export const copy = {
  // ==================== ONBOARDING ====================
  onboarding: {
    step1: {
      title: "¡Bienvenido a MedConnect!",
      subtitle: "Consultas médicas desde casa, de forma segura",
      description:
        "MedConnect te conecta con doctores verificados. Consulta desde cualquier lugar con video de calidad.",
      tip: "💡 Consejo: Asegúrate de tener buena conexión de internet",
    },
    step2: {
      title: "Agendar tu cita es fácil",
      subtitle: "Solo 3 pasos",
      description:
        "Elige el doctor y el horario que mejor se adapte a ti. Te recordaremos antes de la cita.",
      tip: "💡 Consejo: Los recordatorios llegan por email y mensaje",
    },
    step3: {
      title: "Tu privacidad es importante",
      subtitle: "Tus datos están protegidos",
      description:
        "Todas tus consultas son privadas y confidenciales. Solo tú y el doctor ven tu información.",
      tip: "💡 Consejo: Puedes revisar tu historial médico cuando quieras",
    },
    step4: {
      title: "¿Listo para comenzar?",
      subtitle: "Crea tu cuenta en 2 minutos",
      description:
        "Necesitamos algunos datos básicos para validar tu identidad y brindarte la mejor atención.",
      button: "Crear mi cuenta",
    },
    skip: "Saltar",
  },

  // ==================== INICIO (LOGIN/LANDING) ====================
  home: {
    title: "MedConnect",
    subtitle: "Tu doctor siempre disponible",
    tagline: "Consultas médicas seguras y accesibles desde casa",
    loginButton: "Inicia sesión",
    loginButtonAria: "Iniciar sesión en tu cuenta",
    registerButton: "Crear cuenta",
    registerButtonAria: "Crear una cuenta nueva",
    features: {
      feature1: {
        icon: "👨‍⚕️",
        title: "Doctores verificados",
        description: "Profesionales de salud certificados",
      },
      feature2: {
        icon: "🔒",
        title: "Privacidad garantizada",
        description: "Tus datos están seguros y protegidos",
      },
      feature3: {
        icon: "⏰",
        title: "Disponible 24/7",
        description: "Consulta cuando lo necesites",
      },
      feature4: {
        icon: "💬",
        title: "Atención rápida",
        description: "Respuestas en menos de 1 hora",
      },
    },
  },

  // ==================== REGISTRO ====================
  register: {
    title: "Crear tu cuenta",
    subtitle: "Toma solo 2 minutos",
    description: "Necesitamos información básica para verificar tu identidad",

    // Campos del formulario
    fields: {
      fullName: {
        label: "¿Cuál es tu nombre completo?",
        placeholder: "Ejemplo: Juan Pérez García",
        hint: "Usaremos este nombre en tus consultas",
        ariaLabel: "Campo para ingresar tu nombre completo",
        errorEmpty: "Por favor, ingresa tu nombre",
        errorShort: "Tu nombre debe tener al menos 3 caracteres",
        errorInvalid: "Por favor, usa solo letras y espacios",
      },
      email: {
        label: "¿Cuál es tu correo electrónico?",
        placeholder: "tu.email@ejemplo.com",
        hint: "Te enviaremos recordatorios y confirmaciones aquí",
        ariaLabel: "Campo para ingresar tu correo electrónico",
        errorEmpty: "Por favor, ingresa tu correo",
        errorInvalid: "El correo no es válido. Revisa que tenga @ y un dominio",
        errorExists: "Este correo ya está registrado. ¿Deseas iniciar sesión?",
      },
      phone: {
        label: "¿Cuál es tu número de teléfono?",
        placeholder: "+34 612 34 56 78",
        hint: "Lo usaremos para enviarte recordatorios",
        ariaLabel: "Campo para ingresar tu número de teléfono",
        errorEmpty: "Por favor, ingresa tu teléfono",
        errorInvalid:
          "El teléfono no es válido. Usa el formato +XX XXX XX XX XX",
      },
      dateOfBirth: {
        label: "¿Cuál es tu fecha de nacimiento?",
        placeholder: "DD/MM/AAAA",
        hint: "La usaremos para verificar tu edad",
        ariaLabel: "Campo para ingresar tu fecha de nacimiento",
        errorEmpty: "Por favor, ingresa tu fecha de nacimiento",
        errorInvalid: "La fecha no es válida",
        errorAge: "Debes ser mayor de 18 años para usar MedConnect",
      },
      documentId: {
        label: "¿Cuál es tu número de identificación?",
        placeholder: "Ej: 12345678A",
        hint: "Puede ser cédula, pasaporte o DNI",
        ariaLabel: "Campo para ingresar tu número de identificación",
        errorEmpty: "Por favor, ingresa tu identificación",
        errorInvalid: "El formato de identificación no es válido",
      },
      password: {
        label: "Crea una contraseña segura",
        placeholder: "Mínimo 8 caracteres",
        hint: "Usa mayúsculas, minúsculas, números y símbolos (!@#$)",
        ariaLabel: "Campo para crear tu contraseña",
        showPassword: "Mostrar contraseña",
        hidePassword: "Ocultar contraseña",
        errorEmpty: "Por favor, crea una contraseña",
        errorShort: "La contraseña debe tener al menos 8 caracteres",
        errorWeak:
          "La contraseña no es lo suficientemente segura. Incluye mayúsculas, minúsculas, números y símbolos",
      },
      confirmPassword: {
        label: "Confirma tu contraseña",
        placeholder: "Repite tu contraseña",
        ariaLabel: "Campo para confirmar tu contraseña",
        errorEmpty: "Por favor, confirma tu contraseña",
        errorMismatch: "Las contraseñas no coinciden",
      },
    },

    // Botones y acciones
    terms: "Acepto los términos de servicio y la política de privacidad",
    termsError: "Debes aceptar los términos para continuar",
    submitButton: "Crear mi cuenta",
    submitButtonAria: "Botón para crear tu cuenta",
    submittingButton: "Creando tu cuenta...",

    // Mensajes de éxito
    successTitle: "¡Cuenta creada con éxito!",
    successMessage: "Ahora puedes iniciar sesión y agendar tu primera cita",

    // Ayuda
    loginLink: "¿Ya tienes cuenta?",
    loginLinkText: "Inicia sesión aquí",
    help: "¿Necesitas ayuda?",
    helpText: "Contáctanos en soporte@medconnect.com",
  },

  // ==================== INICIAR SESIÓN ====================
  login: {
    title: "Inicia sesión en MedConnect",
    subtitle: "Accede a tu cuenta",

    fields: {
      email: {
        label: "Correo electrónico",
        placeholder: "tu.email@ejemplo.com",
        ariaLabel: "Campo para ingresar tu correo",
        errorEmpty: "Por favor, ingresa tu correo",
        errorInvalid: "El correo no es válido",
      },
      password: {
        label: "Contraseña",
        placeholder: "Tu contraseña segura",
        ariaLabel: "Campo para ingresar tu contraseña",
        showPassword: "Mostrar contraseña",
        hidePassword: "Ocultar contraseña",
        errorEmpty: "Por favor, ingresa tu contraseña",
        errorInvalid: "Correo o contraseña incorrectos",
      },
    },

    submitButton: "Iniciar sesión",
    submitButtonAria: "Botón para iniciar sesión",
    submittingButton: "Verificando...",

    rememberMe: "Recuerda mi sesión",
    forgotPassword: "¿Olvidaste tu contraseña?",

    registerLink: "¿No tienes cuenta?",
    registerLinkText: "Crea una ahora",

    errors: {
      networkError: "No hay conexión. Revisa tu internet e intenta de nuevo",
      serverError: "Algo salió mal. Intenta más tarde",
      loginFailed: "Correo o contraseña incorrectos",
    },
  },

  // ==================== AGENDAR CITA ====================
  bookAppointment: {
    title: "Agendar una cita",
    subtitle: "Elige el doctor y horario que mejor se adapte a ti",

    steps: {
      step1: "Selecciona el doctor",
      step2: "Elige la especialidad",
      step3: "Elige la fecha y hora",
      step4: "Confirma tu cita",
    },

    // Paso 1: Seleccionar especialidad
    specialty: {
      label: "¿Qué tipo de consulta necesitas?",
      hint: "Elige la especialidad más cercana a tu problema",
      ariaLabel: "Seleccionar especialidad médica",
      options: {
        generalMedicine: "Medicina General",
        generalMedicineDesc: "Para consultas generales y chequeos",
        cardiology: "Cardiología",
        cardiologyDesc: "Para problemas del corazón",
        neurology: "Neurología",
        neurologyDesc: "Para problemas del sistema nervioso",
        dermatology: "Dermatología",
        dermatologyDesc: "Para problemas de la piel",
        psychiatry: "Psiquiatría",
        psychiatryDesc: "Para salud mental",
      },
    },

    // Paso 2: Seleccionar doctor
    doctor: {
      label: "Elige tu doctor",
      hint: "Todos son profesionales verificados",
      ariaLabel: "Seleccionar doctor",
      filterLabel: "Filtrar por:",
      filters: {
        availability: "Disponibilidad",
        rating: "Calificación",
        language: "Idioma",
      },
      cardInfo: {
        experience: "años de experiencia",
        rating: "Calificación",
        consultationsCompleted: "consultas realizadas",
        availability: "Disponible hoy",
        price: "Por consulta",
      },
      selectButton: "Elegir este doctor",
      selectButtonAria: "Seleccionar a este doctor para tu cita",
    },

    // Paso 3: Seleccionar fecha y hora
    dateTime: {
      dateLabel: "¿Qué día prefieres?",
      dateHint: "Elige dentro de los próximos 7 días",
      dateAriaLabel: "Seleccionar fecha de la cita",
      timeLabel: "¿Qué hora prefieres?",
      timeHint: "Los horarios están en tu zona horaria",
      timeAriaLabel: "Seleccionar hora de la cita",
      noAvailability: "No hay horarios disponibles para este día",
      suggestionTitle: "Sugerencias alternativas:",
      suggestionTime: "Disponible el",
      selectButton: "Seleccionar este horario",
    },

    // Paso 4: Confirmar cita
    confirmation: {
      title: "Confirma tu cita",
      subtitle: "Revisa los detalles antes de confirmar",
      details: {
        doctor: "Doctor",
        specialty: "Especialidad",
        date: "Fecha",
        time: "Hora",
        duration: "Duración",
        price: "Costo de consulta",
      },
      totalPrice: "Total a pagar",
      paymentMethod: "Método de pago",
      selectPaymentMethod: "Elige cómo deseas pagar",
      confirmButton: "Confirmar y pagar",
      confirmButtonAria: "Botón para confirmar tu cita",
      confirmingButton: "Confirmando...",
      cancelButton: "Cancelar",
      cancelButtonAria: "Cancelar y volver atrás",
    },

    // Mensajes de éxito
    successTitle: "¡Cita agendada con éxito!",
    successMessage:
      "Tu cita está confirmada. Recibirás un recordatorio 24 horas antes.",
    appointmentNumber: "Número de cita:",
    nextSteps: "Pasos siguientes:",
    nextStepsItems: [
      "Revisa tu correo para más detalles",
      "Prepárate para la videollamada",
      "Ten lista la documentación médica relevante",
    ],
  },

  // ==================== VIDEOLLAMADA ====================
  videoCall: {
    // Pre-llamada
    preCall: {
      title: "Tu cita está por comenzar",
      subtitle: "Prepárate para la videollamada",
      hint: "La llamada comenzará en...",

      checklist: {
        title: "Checklist antes de la cita:",
        items: [
          "Asegúrate de tener buena luz en tu cara",
          "Prueba tu micrófono y cámara",
          "Cierra otras aplicaciones si es posible",
          "Ten a la mano documentos relevantes",
          "Encuentra un lugar tranquilo sin interrupciones",
        ],
      },

      cameraTest: "Probar cámara",
      microphoneTest: "Probar micrófono",
      audioTest: "¿Escuchas esto claramente?",

      buttons: {
        ready: "Estoy listo, iniciar cita",
        readyAria: "Botón para iniciar la videollamada",
        cancel: "Cancelar cita",
        cancelAria: "Cancelar la cita",
      },

      cancelConfirm: {
        title: "¿Estás seguro que deseas cancelar?",
        subtitle: "No se puede recuperar este horario",
        confirm: "Sí, cancelar cita",
        back: "Volver",
      },
    },

    // Durante la llamada
    inCall: {
      // Controles de video
      videoCall: "Videollamada con Dr. Juan Pérez",
      videoCallAria: "Estado de la videollamada en tiempo real",

      controls: {
        mute: "Silenciar micrófono",
        unmute: "Activar micrófono",
        toggleVideo: "Activar/Desactivar cámara",
        shareScreen: "Compartir pantalla",
        endCall: "Finalizar cita",
        endCallAria: "Botón para finalizar la videollamada",
        moreOptions: "Más opciones",
      },

      status: {
        connecting: "Conectando...",
        connected: "Conectado",
        disconnected: "Desconectado",
        connectionLoss: "Conexión perdida, reconectando...",
      },

      // Documentos
      uploadDocuments: "Compartir documentos",
      uploadDocumentsAria: "Opción para subir documentos médicos",
      uploadHint: "Sube imágenes o PDFs de documentos médicos relevantes",
      supportedFormats: "Formatos soportados: JPG, PNG, PDF",
      maxFileSize: "Tamaño máximo: 10 MB",

      documentList: "Documentos compartidos:",
      documentDeleteConfirm: "¿Eliminar este documento?",

      // Chat
      chatLabel: "Chat con el doctor",
      chatPlaceholder: "Escribe un mensaje...",
      sendMessage: "Enviar",
      sendMessageAria: "Enviar mensaje en el chat",

      // Receta
      prescriptionNotice: "El doctor ha enviado una receta",
      downloadPrescription: "Descargar receta",
      downloadPrescriptionAria: "Descargar receta en PDF",

      // Finalizar
      endCallConfirm: {
        title: "¿Terminar la cita?",
        subtitle: "No podrás volver a conectarte",
        confirm: "Sí, terminar cita",
        cancel: "Seguir en la cita",
      },
    },

    // Post-llamada
    postCall: {
      title: "Cita finalizada",
      subtitle: "Gracias por usar MedConnect",

      summary: {
        doctorName: "Doctor",
        duration: "Duración de la consulta",
        diagnosis: "Diagnóstico",
        prescription: "Receta",
        recommendations: "Recomendaciones",
      },

      actions: {
        downloadSummary: "Descargar resumen",
        downloadSummaryAria: "Descargar resumen de la consulta",
        downloadPrescription: "Descargar receta",
        downloadPrescriptionAria: "Descargar receta en PDF",
        rateDoctorTitle: "¿Cómo fue tu experiencia?",
        rateDoctorAria: "Calificar la consulta",
        reschedule: "Agendar otra cita",
        rescheduleAria: "Agendar otra consulta",
        home: "Ir al inicio",
        homeAria: "Volver al inicio de MedConnect",
      },

      feedback: {
        label: "Ayúdanos a mejorar",
        placeholder:
          "¿Qué te pareció la consulta? ¿Hay algo que podamos mejorar?",
        submit: "Enviar comentario",
        submitAria: "Enviar feedback sobre la consulta",
      },
    },

    // Errores
    errors: {
      noPermission:
        "No tienes permiso para usar la cámara o micrófono. Revisa la configuración de tu navegador.",
      noDevice:
        "No se detectó cámara o micrófono. Verifica que están conectados.",
      networkError: "Conexión perdida. Intenta reconectar.",
      timeout: "La llamada expiró. Intenta agendar una nueva cita.",
    },
  },

  // ==================== HISTORIAL MÉDICO ====================
  medicalHistory: {
    title: "Mi historial médico",
    subtitle: "Todas tus consultas en un solo lugar",

    emptyState: {
      title: "Aún no tienes consultas",
      subtitle: "Cuando tengas tu primera consulta, aparecerá aquí",
      button: "Agendar mi primera cita",
    },

    filters: {
      all: "Todas",
      recent: "Recientes",
      byDoctor: "Por doctor",
      bySpecialty: "Por especialidad",
      search: "Buscar en tu historial",
    },

    consultationCard: {
      date: "Fecha",
      time: "Hora",
      doctor: "Doctor",
      specialty: "Especialidad",
      diagnosis: "Diagnóstico",
      prescription: "Receta",
      notes: "Notas",
      viewDetails: "Ver detalles",
      viewDetailsAria: "Ver detalles completos de la consulta",
      downloadReport: "Descargar reporte",
      downloadReportAria: "Descargar reporte de la consulta",
      reschedule: "Agendar cita con este doctor",
      rescheduleAria: "Agendar otra cita con el mismo doctor",
    },

    details: {
      title: "Detalles de la consulta",
      sections: {
        summary: "Resumen",
        diagnosis: "Diagnóstico",
        prescription: "Receta",
        recommendations: "Recomendaciones",
        documents: "Documentos",
        chat: "Conversación",
      },
      close: "Cerrar",
      closeAria: "Cerrar detalles de la consulta",
    },
  },

  // ==================== ERRORES GENERALES ====================
  errors: {
    networkError:
      "No hay conexión a internet. Revisa tu conexión e intenta de nuevo.",
    serverError: "Algo salió mal de nuestro lado. Estamos trabajando en ello.",
    unauthorized: "Tu sesión ha expirado. Por favor, inicia sesión de nuevo.",
    forbidden: "No tienes permiso para acceder a esto.",
    notFound: "No encontramos lo que buscas.",
    validation: "Por favor, revisa que todos los campos sean correctos.",
    unknownError: "Algo inesperado sucedió. Intenta de nuevo más tarde.",
  },

  // ==================== MENSAJES DE CONFIRMACIÓN ====================
  confirmations: {
    deleteAccount: {
      title: "¿Eliminar mi cuenta?",
      message:
        "Esto eliminará toda tu información permanentemente. No se puede deshacer.",
      confirm: "Sí, eliminar mi cuenta",
      cancel: "No, mantener mi cuenta",
    },
    logout: {
      title: "¿Cerrar sesión?",
      confirm: "Sí, cerrar sesión",
      cancel: "No, seguir en MedConnect",
    },
  },

  // ==================== NOTIFICACIONES ====================
  notifications: {
    appointmentReminder: "Recordatorio: Tu cita es mañana a las",
    appointmentCancelled: "Tu cita ha sido cancelada",
    appointmentRescheduled: "Tu cita ha sido reprogramada para",
    doctorOnline: "Tu doctor está en línea",
    newPrescription: "Nueva receta disponible",
    newMessage: "Nuevo mensaje del doctor",
    paymentSuccessful: "Pago realizado exitosamente",
    paymentFailed: "El pago no se procesó",
  },

  // ==================== NAVEGACIÓN ====================
  navigation: {
    home: "Inicio",
    bookAppointment: "Agendar cita",
    medicalHistory: "Mi historial",
    profile: "Mi perfil",
    settings: "Configuración",
    help: "Ayuda",
    logout: "Cerrar sesión",
    menu: "Menú",
    close: "Cerrar",
  },
};

export default copy;
