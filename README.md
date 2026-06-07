# Melete — App de práctica para músicos

> *Melete (μελέτη): la Musa griega de la práctica. La única palabra que une música y ejercicio en un solo concepto.*

---

## El problema

Las apps de práctica musical que existen tienen alguno de estos problemas:

- Son visualmente feas o infantiles
- Bloquean las features más útiles detrás de un paywall agresivo
- No están pensadas específicamente para músicos (son genéricas de "productividad")
- No te dicen si tu estudio es **balanceado**, solo si practicaste mucho o poco
- No son motivadoras a largo plazo

El músico que practica 2 horas diarias de escalas y nada más no está progresando de forma integral. Ninguna app le dice eso visualmente de forma clara.

---

## La visión

Una app que sea el **compañero de práctica ideal** para un músico:

- Registra qué practicás, cuánto, y cuándo
- Te muestra si tu estudio está balanceado o tiene puntos ciegos
- Te motiva a mantener una racha
- Es visualmente agradable, no infantil ni aburrida
- Es accesible económicamente, con casi todo disponible en el plan pago base

**Frase guía del producto:** *"No es cuánto practicás. Es qué tan bien practicás todo lo que necesitás."*

---

## Público objetivo

### Primario
- Músicos en formación (estudiantes de conservatorio, autodidactas serios, músicos que dan clases)
- Instrumento cualquiera, género cualquiera
- Edad: 16–35 años

### Secundario (v2)
- La app puede adaptarse a cualquier práctica disciplinada: idiomas, ajedrez, deporte mental
- El framework de "áreas de práctica balanceadas" aplica a muchos dominios

---

## Modelo de negocio

### Principio central
> Las features importantes están en el plan pago. Las extras opcionales están en el plan premium. **Nada crítico queda bloqueado para siempre.**

### Tiers

#### Free
- Registrar sesiones (ilimitadas, últimas 30 días de historial)
- 3 áreas de práctica fijas
- Temporizador simple
- Estadísticas básicas (tiempo por día/semana)
- Racha de días

#### Pro — ~USD 3–5/mes
- Historial completo e ilimitado
- Gráfico de araña (balance de práctica)
- Modo Pomodoro configurable
- Notificaciones y recordatorios
- Gráficos avanzados (tendencias semanales, mensuales)
- Metas por área

#### Premium — ~USD 8–10/mes (a futuro, no prioritario)
- Todo lo anterior
- Orfeo: coach virtual con IA (chat motivacional, análisis de tu práctica, sugerencias de plan)
- Reportes semanales automáticos por email/Telegram

> **Nota:** el coach IA (Orfeo) queda fuera del alcance inicial. Se evalúa para una etapa posterior, una vez validado el producto base.

### Estrategia de lanzamiento
- **Beta gratuita** para los primeros 500 usuarios (feedback y validación)
- **Precio de lanzamiento** con descuento para early adopters
- Distribución inicial: comunidades de músicos online, foros, grupos de conservatorio

---

## Cómo funciona la app — Features

### 1. Áreas de práctica
Las 8 áreas son **fijas** (no configurables), basadas en los frameworks de ABRSM, Royal Conservatory of Music y la investigación de Jonathan Harnum. Esto simplifica el onboarding, mantiene comparable el gráfico de araña entre usuarios, y evita la complejidad de UI de la personalización:

| Área | Qué incluye |
|------|-------------|
| Técnica | Escalas, arpegios, ejercicios mecánicos |
| Repertorio | Aprendizaje y mantenimiento de piezas |
| Lectura | Sightreading, decodificación de partituras |
| Teoría | Armonía, análisis, contrapunto |
| Oído | Ear training, dictado, transcripción |
| Ritmo | Trabajo con metrónomo, subdivisión |
| Improvisación | Creatividad libre, composición |
| Performance | Run-throughs completos, práctica mental |

### 2. Registro de sesión
Flujo principal de la app:

```
Abrir app → Elegir área → Iniciar temporizador → Pausar/Detener →
Agregar nota opcional → Guardar sesión
```

- El temporizador corre en background (no cierra si cambiás de app)
- Puede registrar múltiples áreas en una misma sesión (sesión multi-área)
- Nota de texto libre opcional al cerrar la sesión ("hoy me costó el pasaje del compás 32")

### 3. Modo Pomodoro
- Ciclos configurables: trabajo / descanso corto / descanso largo
- Predeterminado: 25 min trabajo / 5 min descanso / 15 min descanso largo
- Notificación de fin de ciclo
- Estadísticas de cuántos pomodoros por área

### 4. Gráfico de araña (Balance de práctica)
El corazón visual de la app.

- 8 ejes en un polígono regular
- Cada eje representa el porcentaje de tiempo dedicado a esa área vs. el total de la semana/mes
- Un estudio ideal = octágono regular
- Un estudio desbalanceado = forma irregular con picos y huecos
- Seleccionable por período: última semana, último mes, últimos 3 meses

**Por qué importa:** Un músico puede estar practicando 2 horas por día y seguir con puntos ciegos enormes. El gráfico de araña lo hace visible de un vistazo.

### 5. Dashboard de estadísticas
- Tiempo total por semana/mes
- Desglose por área (barras o torta)
- Racha de días consecutivos practicando
- Récord personal de racha
- Promedio diario del mes

### 6. Sistema de notificaciones
- Recordatorio configurable ("acordame de practicar a las 18hs")
- Aviso si llevas X días sin practicar
- Felicitación al cumplir un hito (7 días de racha, 100 horas acumuladas, etc.)

### 7. Orfeo — Coach virtual con IA (a futuro, fuera del alcance inicial)
> Queda definido como posible feature de una etapa posterior. No forma parte del desarrollo del sitio por ahora.

- Nombre: **Orfeo** (músico mítico griego, mentor)
- Chat conversacional dentro de la app
- Acceso al historial del usuario para dar contexto
- Puede: motivar, sugerir balance de práctica, responder dudas pedagógicas generales
- Tono: mentor cercano, no corporativo
- No reemplaza a un profesor, lo complementa

---

## Casos de uso

### Caso 1 — Primera vez en la app
> Lucas tiene 22 años y estudia guitarra. Nunca registró su práctica formalmente.

1. Descarga Melete, crea cuenta
2. En el onboarding ve sus 8 áreas de práctica (fijas)
3. Empieza su primera sesión: elige "Técnica", activa el temporizador
4. A los 30 minutos lo pausa, escribe "escalas pentatónicas en todas las posiciones"
5. Guarda. Ve su primer registro en el dashboard

### Caso 2 — Uso diario (semana 3)
> Lucas ya tiene 3 semanas de hábito. Abre la app antes de practicar.

1. Ve en el dashboard que esta semana no practicó Oído ni una vez
2. Decide arrancar la sesión de hoy con Ear Training
3. Usa Pomodoro: 25 minutos, luego 5 de descanso, luego 25 más de Repertorio
4. Al final del día tiene 50 min registrados, racha de 18 días

### Caso 3 — Revisión semanal
> Lucas revisa su semana el domingo.

1. Abre el gráfico de araña en vista "última semana"
2. Ve que Técnica y Repertorio están inflados, Ritmo e Improvisación casi vacíos
3. Anota mentalmente rebalancear la semana siguiente
4. Ve que su promedio diario subió de 45 a 62 minutos respecto al mes anterior

### Caso 4 — Uso de Orfeo (a futuro, no implementado en esta etapa)
> Lucas lleva 2 meses y siente que no avanza en Lectura.

1. Abre el chat de Orfeo
2. Escribe: "Hace 2 meses que practico pero la lectura no mejora"
3. Orfeo ve su historial: Lucas dedicó 3% del tiempo a Lectura en 2 meses
4. Responde con contexto específico, sugiere una rutina de 15 minutos diarios de sightreading
5. Lucas agenda un recordatorio desde la misma conversación

### Caso 5 — Notificación de re-enganche
> Lucas estuvo 4 días sin abrir la app por viaje.

1. Recibe notificación: *"Hace 4 días que no practicás. Tu racha de 22 días está en pausa. ¿Volvemos?"*
2. Abre la app, registra 20 minutos de Repertorio (no quería perder la racha)
3. La racha no se rompe

---

## Pantallas principales (flujo de navegación)

> Diseño **mobile-first**: cada pantalla se piensa primero para celular y se adapta hacia arriba a tablet/desktop.

```
Home / Dashboard
├── Iniciar sesión (→ Temporizador)
├── Gráfico de araña
├── Historial de sesiones
└── Estadísticas

Perfil
├── Configuración de notificaciones
└── Plan y suscripción
```

> Orfeo (chat con IA) queda fuera de esta etapa — no forma parte de la navegación inicial.

---

## Stack tecnológico

| Capa | Tecnología | Por qué |
|------|-----------|---------|
| Frontend | Next.js + TypeScript | PWA mobile-first, instalable en celular |
| Estilos | Tailwind CSS | Rápido, consistente, responsive desde mobile |
| Base de datos | Supabase (PostgreSQL) | Free tier generoso, Auth incluida |
| Deploy | Vercel | Free tier, integración nativa con Next.js |
| Gráficos | Recharts | Spider chart + estadísticas |

Todo en capa gratuita hasta tener tracción real. Sin costo inicial.

> Orfeo (Claude API) se evalúa más adelante — no forma parte del stack de esta etapa.

---

## Roadmap

### MVP (v0.1) — Validación
- [ ] Auth (registro / login)
- [ ] Onboarding de áreas
- [ ] Temporizador de sesión
- [ ] Historial básico
- [ ] Dashboard con tiempo por área
- [ ] Racha de días

### v1.0 — Lanzamiento
- [ ] Gráfico de araña
- [ ] Modo Pomodoro
- [ ] Notificaciones
- [ ] Estadísticas avanzadas (semana/mes/3 meses)
- [ ] Plan Pro con Stripe

### v2.0 — Crecimiento (a evaluar)
- [ ] Orfeo: coach con IA (chat con contexto del historial)
- [ ] Reportes automáticos semanales
- [ ] Versión adaptable a otros dominios (idiomas, ajedrez)

---

## Decisiones tomadas

- **Ejes del gráfico de araña:** fijos, no configurables. Mantiene el onboarding simple y los gráficos comparables entre usuarios.
- **Coach IA:** se llama **Orfeo**, pero queda **fuera del alcance inicial**. No se desarrolla en esta etapa.
- **Idioma:** solo español por ahora. Inglés se evalúa a futuro si hay tracción.
- **Plataforma:** PWA, con diseño **mobile-first** (pensado primero para celular, adaptado luego a pantallas más grandes). Nativa (React Native) queda descartada por ahora.
