const fs = require('fs');

const esPath = './locales/es.json';
const enPath = './locales/en.json';

let es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
let en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const esWorks = {
  "subtitle": "Selección de proyectos e investigaciones recientes.",
  "ref_viz": "Visualización de referencia",
  "items": {
    "tizne_primal": {
      "title": "TIZNE PRIMAL",
      "subtitle": "Madera carbonizada por descarga real — instalación mural",
      "desc": "Pertenece a CHARQUEMAL. Un nicho rectangular practicado en el muro contiene una masa comprimida de ramas carbonizadas. La carbonización no es una pigmentación: un fragmento original afectado por una descarga eléctrica atmosférica —la Madera Madre— transmitió la transformación al resto de la masa por contacto. La obra opera en pasado perfecto: la fuerza ya no está, pero su huella persiste como condición activa en la materia. El grabado en bajorrelieve bajo el nicho registra coordenadas y fecha del evento. El espectador se sitúa frente a un volumen contenido bajo presión, sin distancia contemplativa."
    },
    "persistem": {
      "title": "PERSISTEM",
      "subtitle": "Tubo de cemento industrial — instalación en piso",
      "desc": "Pertenece a CHARQUEMAL. Un tubo de cemento horizontal emerge del piso de la sala como si el edificio se hubiera construido encima. El interior está pintado de rojo óxido. En el umbral donde el tubo desaparece bajo el suelo, una inscripción híbrida —cota hidráulica, diámetro, unidad estratigráfica— está grabada y continúa enterrada. La obra opera en pasado arqueológico: enfrenta al espectador a la consecuencia de un gesto restitutivo cuya causa está fuera de la percepción. No hay pedestal. La experiencia no es de reconocimiento sino de sospecha."
    },
    "canal_ombrosc": {
      "title": "CANAL OMBROSC",
      "subtitle": "Vidrio soplado artesanal — objeto único",
      "desc": "Pertenece a CHARQUEMAL. Un objeto de vidrio soplado de 80–90 cm descansa directamente en el suelo sobre su propia morfología. Su forma híbrida —entre esfera tensa y globo cometa de observación atmosférica— surge de dispositivos técnicos que nunca llegaron a existir como estándar. Producido en colaboración con Cristalería San Carlos (Santa Fe), la pieza conserva en su superficie burbujeada y sus variaciones de espesor el registro del calor y la presión pulmonar del soplado. Opera en presente de posibilidad técnica no realizada. Tensores de metal la anclan al suelo sin ocultar su condición de artificio."
    },
    "fuga_noir": {
      "title": "FUGA NOIR",
      "subtitle": "Arcillas del Paraná, sistema hidráulico y sonido — instalación en piso",
      "desc": "Pertenece a CHARQUEMAL. Un volumen asimétrico de arcillas y sedimentos del litoral exuda agua del Paraná espesada por un punto único en su superficie densa. La gota impacta el suelo; micrófonos piezoeléctricos traducen la vibración en un campo sonoro de bajas frecuencias (20–60 Hz) que se transmite por el piso al cuerpo del espectador. La obra opera en presente continuo de pérdida: algo se sustrae del objeto en tiempo real, y esa sustracción se inscribe antes como vibración que como rastro visible. El mantenimiento visible —reposición de fluido— forma parte de la pieza."
    },
    "traza_crono": {
      "title": "TRAZA CRONO",
      "subtitle": "Filtros HEPA con sedimento atmosférico real — retícula mural",
      "desc": "Pertenece a CHARQUEMAL. Una retícula de filtros HEPA llega a la sala con nueve meses de aire del litoral santafesino acumulado en su superficie. Los filtros fueron instalados durante la temporada completa de la golondrina parda (Progne tapera). La distribución de los módulos en la retícula —eje X: locación geográfica de oeste a este; eje Y: secuencia temporal de septiembre a marzo— es fija. Lo que varía es la profundidad de cada módulo (0–40 mm), dictada por la masa de sedimento que capturó. La obra opera en pasado acumulado: no captura en tiempo real, es un archivo. La iluminación rasante revela la topografía sedimentaria."
    },
    "cedencia_pleuro": {
      "title": "CEDENCIA PLEURO",
      "subtitle": "Micelio vivo de Pleurotus ostreatus — instalación en pared",
      "desc": "Pertenece a CHARQUEMAL. Un volumen de micelio en fase vegetativa activa sobre fibras agrícolas del litoral emerge de la unión de dos paredes. El micelio segrega hidrofobinas —proteínas que modifican la tensión superficial del agua. El agua del Paraná, introducida por capilaridad, queda retenida en los intersticios. La presencia del espectador altera esa geometría: la espuma emerge y colapsa en segundos, dejando un rastro húmedo. La obra opera en presente de activación: el espectador no llega tarde —desencadena el evento y lo consume simultáneamente. Es el polo opuesto a RASVNTE: una porta algo hasta el límite del contacto y lo libera en presencia del espectador; la otra dispersa todo contacto antes de que se convierta en registro."
    },
    "rasvnte": {
      "title": "RASVNTE",
      "subtitle": "Aluminio anodizado mate — instalación suspendida",
      "desc": "Pertenece a CHARQUEMAL. Es el caso límite del conjunto: el sistema que estructuralmente no puede portar nada. Una rampa arquitectónica invertida suspendida del techo, de aluminio anodizado mate, cubierta por un gradiente de espinas organizado por capas atmosféricas (Tropósfera, Estratósfera, Mesósfera). La superficie de micro-contactos discontinuos fragmenta cualquier flujo sin bloquearlo. Ningún contacto tiene extensión suficiente para convertirse en apoyo o inscripción. La obra opera en presente continuo de fricción sin huella: todo su mecanismo está expuesto en tiempo real. Mientras CEDENCIA PLEURO libera el contacto, RASVNTE lo dispersa antes de que se produzca. La pregunta que atraviesa CHARQUEMAL —qué persiste cuando el origen ha desaparecido— encuentra aquí su respuesta más extrema: nada persiste. Solo el tránsito."
    }
  }
};

const enWorks = {
  "subtitle": "Selection of recent projects and research.",
  "ref_viz": "Reference visualization",
  "items": {
    "tizne_primal": {
      "title": "TIZNE PRIMAL",
      "subtitle": "Carbonized wood by real discharge — mural installation",
      "desc": "Belongs to CHARQUEMAL. A rectangular niche made in the wall contains a compressed mass of carbonized branches. The carbonization is not a pigmentation: an original fragment affected by an atmospheric electrical discharge —the Mother Wood— transmitted the transformation to the rest of the mass by contact. The work operates in the past perfect: the force is no longer there, but its trace persists as an active condition in the matter. The bas-relief engraving below the niche records the coordinates and date of the event. The spectator is situated in front of a volume contained under pressure, without contemplative distance."
    },
    "persistem": {
      "title": "PERSISTEM",
      "subtitle": "Industrial cement tube — floor installation",
      "desc": "Belongs to CHARQUEMAL. A horizontal cement tube emerges from the gallery floor as if the building had been constructed on top of it. The interior is painted in oxide red. At the threshold where the tube disappears under the ground, a hybrid inscription —hydraulic elevation, diameter, stratigraphic unit— is engraved and continues buried. The work operates in the archaeological past: it confronts the spectator with the consequence of a restitutive gesture whose cause is beyond perception. There is no pedestal. The experience is not of recognition but of suspicion."
    },
    "canal_ombrosc": {
      "title": "CANAL OMBROSC",
      "subtitle": "Artisanal blown glass — unique object",
      "desc": "Belongs to CHARQUEMAL. An 80–90 cm blown glass object rests directly on the floor on its own morphology. Its hybrid shape —between a tense sphere and an atmospheric observation kite balloon— arises from technical devices that never existed as standard. Produced in collaboration with Cristalería San Carlos (Santa Fe), the piece preserves in its bubbled surface and thickness variations the record of heat and pulmonary pressure from the blowing process. It operates in a present of unrealized technical possibility. Metal tensioners anchor it to the floor without hiding its condition of artifice."
    },
    "fuga_noir": {
      "title": "FUGA NOIR",
      "subtitle": "Paraná clays, hydraulic system and sound — floor installation",
      "desc": "Belongs to CHARQUEMAL. An asymmetrical volume of clays and sediments from the literal region exudes thickened Paraná water from a single point on its dense surface. The drop impacts the floor; piezoelectric microphones translate the vibration into a low-frequency sound field (20–60 Hz) that is transmitted through the floor to the spectator's body. The work operates in a continuous present of loss: something is subtracted from the object in real time, and that subtraction is inscribed first as vibration rather than a visible trace. The visible maintenance —fluid replacement— is part of the piece."
    },
    "traza_crono": {
      "title": "TRAZA CRONO",
      "subtitle": "HEPA filters with real atmospheric sediment — mural grid",
      "desc": "Belongs to CHARQUEMAL. A grid of HEPA filters arrives at the gallery with nine months of air from the Santa Fe literal region accumulated on its surface. The filters were installed during the entire season of the brown-chested martin (Progne tapera). The distribution of the modules in the grid —X axis: geographic location from west to east; Y axis: temporal sequence from September to March— is fixed. What varies is the depth of each module (0–40 mm), dictated by the mass of sediment it captured. The work operates in an accumulated past: it does not capture in real time, it is an archive. Grazing illumination reveals the sedimentary topography."
    },
    "cedencia_pleuro": {
      "title": "CEDENCIA PLEURO",
      "subtitle": "Living mycelium of Pleurotus ostreatus — wall installation",
      "desc": "Belongs to CHARQUEMAL. A volume of mycelium in active vegetative phase on agricultural fibers from the literal region emerges from the union of two walls. The mycelium secretes hydrophobins —proteins that modify the surface tension of water. Paraná water, introduced by capillarity, is retained in the interstices. The presence of the spectator alters that geometry: the foam emerges and collapses in seconds, leaving a wet trace. The work operates in an activation present: the spectator is not late —they trigger the event and consume it simultaneously. It is the opposite pole to RASVNTE: one carries something to the limit of contact and releases it in the presence of the spectator; the other disperses all contact before it becomes a record."
    },
    "rasvnte": {
      "title": "RASVNTE",
      "subtitle": "Matte anodized aluminum — suspended installation",
      "desc": "Belongs to CHARQUEMAL. It is the limit case of the set: the system that structurally cannot carry anything. An inverted architectural ramp suspended from the ceiling, made of matte anodized aluminum, covered by a gradient of spines organized by atmospheric layers (Troposphere, Stratosphere, Mesosphere). The surface of discontinuous micro-contacts fragments any flow without blocking it. No contact has enough extension to become support or inscription. The work operates in a continuous present of traceless friction: its entire mechanism is exposed in real time. While CEDENCIA PLEURO releases contact, RASVNTE disperses it before it occurs. The question that runs through CHARQUEMAL —what persists when the origin has disappeared— finds its most extreme answer here: nothing persists. Only transit."
    }
  }
};

es.works = esWorks;
en.works = enWorks;

fs.writeFileSync(esPath, JSON.stringify(es, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('JSON files updated');