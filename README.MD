# Seminário Acadêmico – Framework NestJS  
#### Por: Diego Chruscinski de Souza e Gustavo Moretto Dalla Costa

---
## 1. Apresentação

---
### 1.1 Introdução 

Nest é um framework para construção de aplicações **Node.js** eficientes e escaláveis do lado do servidor. Ele permite a utilização de **JavaScript** e **TypeScript**, combinando conceitos de:

- **POO** (Programação Orientada a Objetos)  
- **FP** (Programação Funcional)  
- **FRP** (Programação Reativa Funcional)  

Internamente, o Nest utiliza o servidor HTTP [Express](https://expressjs.com/) por padrão, mas pode ser configurado para rodar sobre [Fastify](https://www.fastify.io/) para ganhos de performance.

---
### 1.2 Vantagens e Desvantagens

### Vantagens

- **Arquitetura Modular**  
  Divide sua aplicação em módulos independentes e fáceis de manter.
- **TypeScript nativo**  
  Tipagem estática, autocompletar e refatoração segura.  
- **Injeção de Dependências**  
  Facilita testes e desacoplamento de componentes.  
- **CLI Poderosa**  
  Geração de *boilerplate* em segundos.  
- **Ecossistema Rico**  
  Suporte oficial a ORM (TypeORM, Prisma), validação (class-validator), WebSockets, Micro-services, etc.

### Desvantagens

- **Boilerplate**  
  Para APIs muito simples, a quantidade de arquivos gerados pode parecer exagerada.  
- **Curva de Aprendizado**  
  Conceitos de decorators, módulos e providers podem assustar iniciantes.  
- **Overhead**  
  Performance ligeiramente menor que micro-frameworks ultra-leves, salvo otimizações.

---

### 1.3 Principais Características

- **Módulos**: encapsulamento lógico de funcionalidades.  
- **Controllers**: definem rotas e manipulam requisições HTTP.  
- **Providers**: serviços injetáveis, como repositórios e clients externos.  
- **Guards, Pipes, Interceptors e Filters**: tratamento de autorização, validação e erros em um pipeline unificado.  
- **WebSockets & GraphQL**: suporte nativo.  
- **Micro-services**: abstração para comunicação RPC e eventos.

---
### 1.4 Servidores Web Disponíveis

- **Express**
- **Fastify**
- **Custom HTTP Adapter**: você pode criar o seu se precisar de outro servidor.

---
### 1.5 Configurações necessárias para rodar uma aplicação

   - Node.js ≥ 20  
   - NPM ou Yarn 

---
### 1.6 Licença

O Nest é um projeto de código aberto licenciado pelo **MIT**, cujo desenvolvimento contínuo é possível graças ao apoio da comunidade.

---
### 1.7 Desenvolvimento e Comunidade

- **Criador / Mantenedor principal:** Kamil Myśliwiec
- **Contribuições**: comunidade ativa no GitHub
- **Repositório**: [https://github.com/nestjs/nest](https://github.com/nestjs/nest)

---
### 1.8 Conclusões: 

- **Facilidade de aprendizado**: ótima documentação e tutoriais oficiais.
- **Qualidade dos materiais**: exemplos claros, atualizados e revisados pela equipe responsável pelo projeto.
- **Configuração**: CLI intuitiva, estrutura padronizada — ideal para times grandes.
- **Recomendação**: excelente escolha para projetos de tamanho médio a grande, onde manutenção e escalabilidade são prioritárias.

---
## 2. Tutorial de instalação e criação de uma aplicação NestJS

---
### 2.1 Instalação

```
npm install -g @nestjs/cli
```

### 2.2 Criação

```
nest new <nome-do-projeto>
```

### 2.3 Seleção do gerenciador de pacotes

```
? Which package manager would you ❤️ to use? (Use arrow keys)
> npm
  yarn
  pnpm
```

### 2.4 Execução da aplicação

```
npm run start
```

---
## 3. Tutorial de instalação e execução desta aplicação NestJS

---

### 3.1 Clone o repositório

Em uma pasta do seu computador, clone este repositório executando o seguinte comando no terminal:

```
git clone https://github.com/chruscinskiDiego/pw45s-seminar.git
```
### 3.2 Acesse a pasta e instale os pacotes

Acesse a pasta **pw45s-seminar** e execute o seguinte comando no terminal:

```
npm install
```

### 3.3 Execute a API

Execute a API com o seguinte comando no terminal:

```
npm run start
```
---
#### Referências

- Documentação oficial NestJS: [https://docs.nestjs.com/](https://docs.nestjs.com/)
- Repositório no GitHub: [https://github.com/nestjs/nest](https://github.com/nestjs/nest)
