# Academic seminar — NestJS framework
#### By Diego Chruscinski de Souza and Gustavo Moretto Dalla Costa

## 1. Framework overview

### 1.1 Introduction

Nest is a framework for building server-side Node.js applications. It supports JavaScript and TypeScript and combines object-oriented programming (OOP), functional programming (FP) and functional reactive programming (FRP).

Nest uses Express as its default HTTP server and can also run with a Fastify adapter.

### 1.2 Advantages and trade-offs

**Advantages**

- Modular architecture separates application responsibilities.
- Native TypeScript support provides static typing, completion and refactoring tools.
- Dependency injection supports testing and decoupling.
- The CLI generates project structure and components.
- The ecosystem includes ORM integration, validation, WebSockets and microservice support.

**Trade-offs**

- Small APIs can require more boilerplate than a minimal framework.
- Decorators, modules and providers introduce a learning curve.
- Framework abstractions can add overhead; performance depends on configuration and workload.

### 1.3 Main concepts

- **Modules:** group related functionality.
- **Controllers:** define routes and handle HTTP requests.
- **Providers:** injectable services, repositories and external clients.
- **Guards, pipes, interceptors and filters:** authorization, validation and error-handling stages.
- **WebSockets and GraphQL:** supported application interfaces.
- **Microservices:** abstractions for RPC and event-based communication.

### 1.4 HTTP server options

- Express.
- Fastify.
- Custom HTTP adapters.

### 1.5 Environment

- Node.js 20 or newer, as stated for this coursework.
- npm or Yarn.

### 1.6 Framework license and community

Nest is an open-source framework distributed under the MIT license. This describes the framework's license, not a separate license grant for this coursework repository.

The seminar credits Kamil Myśliwiec as the framework's creator and highlights community contributions. See the [Nest repository](https://github.com/nestjs/nest).

### 1.7 Seminar conclusions

The seminar highlights Nest's documentation, TypeScript tooling and consistent structure as useful foundations for maintainable applications. The framework is particularly relevant when a project benefits from explicit modules and dependency injection.

## 2. Create a NestJS application

### Install the CLI

```bash
npm install -g @nestjs/cli
```

### Generate a project

```bash
nest new <project-name>
```

Choose npm, Yarn or pnpm when prompted, then start the generated application:

```bash
npm run start
```

## 3. Run this coursework application

```bash
git clone https://github.com/chruscinskiDiego/pw45s-seminar.git
cd pw45s-seminar
npm install
npm run start
```

Review database configuration and dependencies before starting the API.

## References

- [Official NestJS documentation](https://docs.nestjs.com/).
- [NestJS source repository](https://github.com/nestjs/nest).
