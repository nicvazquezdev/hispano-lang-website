const fs = require('fs');
const path = require('path');

// Import data
const dataPath = path.join(__dirname, '../lib/data.ts');
const dataContent = fs.readFileSync(dataPath, 'utf-8');

// Extract docsData by evaluating the export
// This is a simplified parser - we'll extract the structure manually

const slugMap = {
  'variables': 'variables',
  'constantes': 'constantes',
  'comentarios': 'comentarios',
  'tiposDatos': 'tipos-datos',
  'metodosStrings': 'metodos-strings',
  'templateStrings': 'template-strings',
  'operadores': 'operadores',
  'condicionales': 'condicionales',
  'elegirCaso': 'elegir-caso',
  'bucles': 'bucles',
  'funciones': 'funciones',
  'funcionesFlecha': 'funciones-flecha',
  'funcionesMatematicas': 'funciones-matematicas',
  'conversionTipos': 'conversion-tipos',
  'metodosNumericos': 'metodos-numericos',
  'listas': 'listas',
  'objetos': 'objetos',
  'buclesAvanzados': 'bucles-avanzados',
  'clases': 'clases',
  'herencia': 'herencia',
  'manejoErrores': 'manejo-errores',
};

function convertToMdx(section) {
  let mdx = `# ${section.title}\n\n${section.description}\n\n`;

  for (const sub of section.subsections) {
    mdx += `## ${sub.title}\n\n`;

    if (sub.description) {
      mdx += `${sub.description}\n\n`;
    }

    if (sub.syntax) {
      mdx += `<Syntax>${sub.syntax}</Syntax>\n\n`;
    }

    if (sub.code) {
      const code = sub.code.trim();
      mdx += `<Code code={\`${code}\`} />\n\n`;
    }

    if (sub.output) {
      mdx += `<Output text={\`${sub.output}\`} />\n\n`;
    }

    if (sub.notes && sub.notes.length > 0) {
      for (const note of sub.notes) {
        mdx += `- ${note}\n`;
      }
      mdx += '\n';
    }
  }

  return mdx;
}

// Since we can't easily parse TS, let's require the compiled version
// For now, output a message
console.log('Migration script created. Run with ts-node or after compilation.');
console.log('Slug map:', slugMap);
