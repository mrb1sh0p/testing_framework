# 🚀 Automation Testing Framework

Projeto de automação de testes com integração em banco de dados e geração de relatórios, desenvolvido para demonstração de estudo técnicas.

## 📌 Funcionalidades Principais

- ✅ Automação de testes web com Selenium
- ✅ Armazenamento de resultados em banco de dados MySQL
- ✅ Geração de relatórios HTML
- ✅ Padrão Page Object Model
- ✅ Configuração via variáveis de ambiente
- ✅ Tratamento de erros e logging
- ✅ Suporte a ES Modules

## 🛠 Pré-requisitos

- Node.js v18+
- MySQL Server 8.0+
- Chrome Browser
- ChromeDriver

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/projeto-ibm-automation.git
cd projeto-ibm-automation

npm install

mysql -u root -p < database-setup.sql
```

## 🔧 Configuração

1. Crie um arquivo .env na raiz do projeto:

```bash
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```

2. chromedriver --version

```bash
chromedriver --version
```

## 🏃 Execução

```bash
npm start
```

O relatório será gerado em: 
```bash
test-report.html
```

# 🗂 Estrutura do Projeto

```
testing_framework/
├── config/          # Configurações do banco de dados
├── models/          # Modelos de acesso ao banco
├── pages/           # Page Objects do Selenium
├── tests/           # Casos de teste
├── utils/           # Utilitários (gerador de relatório)
├── .env             # Variáveis de ambiente
├── package.json     # Dependências e scripts
└── test-runner.js   # Executor principal
```

## 🧪 Exemplo de Teste
```js
it('Deve realizar uma pesquisa no Google', async () => {
  const googlePage = new GooglePage(driver);
  await googlePage.search('IBM Careers');
  const title = await googlePage.getTitle();
  expect(title).to.include('IBM Careers');
});
```

## 🛠 Tecnologias Utilizadas
- Selenium WebDriver: Automação de testes web
- MySQL2: Conexão com banco de dados
- Chai: Assertions para testes
- Dotenv: Gerenciamento de variáveis de ambiente
- ES Modules: Sistema de módulos do JavaScript

## 📚 Melhorias Futuras
- [] Adicionar suporte a screenshots nos relatórios
- [] Implementar testes paralelos
- [] Adicionar métricas de performance
- [] Criar Dockerfile para containerização
- [] Integrar com CI/CD (GitHub Actions)

## 📄 Licença
Este projeto está licenciado sob a MIT License.

## Desenvolvido com ❤️ por João "mrb1sh0p" Bispo - 🔗 [Github](https://github.com/mrb1sh0p)
