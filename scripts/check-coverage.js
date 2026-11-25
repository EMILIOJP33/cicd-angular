const fs = require('fs');

const reportPath = 'coverage/cicd-angular/coverage-summary.json';
if (!fs.existsSync(reportPath)) {
  console.error(`No se encontró el informe de cobertura: ${reportPath}`);
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8')).total;
const minimums = {
  statements: 80,
  functions: 80,
  lines: 80,
  branches: 70,
};

console.log('Resumen de cobertura:');
for (const [metric, minimum] of Object.entries(minimums)) {
  const actual = report[metric].pct;
  console.log(`${metric}: ${actual}% (mínimo ${minimum}%)`);
  if (actual < minimum) {
    process.exitCode = 1;
  }
}
