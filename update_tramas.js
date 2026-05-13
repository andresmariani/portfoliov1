const fs = require('fs');

const esPath = './locales/es.json';
const enPath = './locales/en.json';

let es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
let en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

es.works.items.tramas_inestables = {
  "title": "TRAMAS INESTABLES",
  "subtitle": "Proyecto de instalación audiovisual",
  "desc": "Proyecto de instalación audiovisual que articula inteligencia artificial generativa, síntesis de video con Hydra Video Synth y técnicas textiles artesanales. Desarrollado como proyecto integrador de la Diplomatura en IA aplicada al Arte Multimedial de la Universidad Nacional de las Artes. Presentado en jornada de pitch en Fundación Andreani en 2026. En fase de prototipado."
};

en.works.items.tramas_inestables = {
  "title": "TRAMAS INESTABLES",
  "subtitle": "Audiovisual installation project",
  "desc": "Audiovisual installation project that articulates generative artificial intelligence, video synthesis with Hydra Video Synth, and artisanal textile techniques. Developed as an integrative project for the Diploma in AI applied to Multimedia Art at the Universidad Nacional de las Artes. Presented at a pitch session at Fundación Andreani in 2026. In prototyping phase."
};

fs.writeFileSync(esPath, JSON.stringify(es, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('JSON files updated with Tramas Inestables');