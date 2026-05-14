const fs = require('fs');
const path = require('path');

const moves = [
  { old: 'Tizne_Primal.png', new: 'tizne-primal/0.webp' },
  { old: 'PERSISTEM.png', new: 'persistem/0.webp' },
  { old: 'CANAL OMBROSC.png', new: 'canal-ombrosc/0.webp' },
  { old: 'Fuga_Noir.png', new: 'fuga-noir/0.webp' },
  { old: 'Traza_Crono_2.png', new: 'traza-crono/0.webp' },
  { old: 'Cedencia_Pleuro_2.png', new: 'cedencia-pleuro/0.webp' },
  { old: 'RASVNTE.png', new: 'rasvnte/0.webp' },
  { old: 'Tramas_Inestables_3.png', new: 'tramas-inestables/0.webp' }
];

moves.forEach(m => {
  const dir = path.join('public', 'images', path.dirname(m.new));
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const oldPath = path.join('public', 'images', m.old);
  const newPath = path.join('public', 'images', m.new);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  }
});

console.log('Images reorganized');
