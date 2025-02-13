import mocha from 'mocha';
import { expect } from 'chai';
import Database from './models/Database.js';
import searchTests from './tests/search.test.js';
import generateReport from './utils/reportGenerator.js';

(async () => {
  try {
    // Executar os testes
    const suite = new mocha.Suite('Test Suite');
    suite.addTest(new mocha.Test('Search Tests', searchTests));
    
    const runner = new mocha.Runner(suite);
    await new Promise((resolve) => {
      runner.run(resolve);
    });

    // Gerar relatório
    await generateReport();
    console.log('Relatório gerado em test-report.html');
    
  } catch (error) {
    console.error('Erro durante a execução:', error);
  }
})();