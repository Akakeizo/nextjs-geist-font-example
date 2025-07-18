# CRM com IA - Sistema de Gestão de Relacionamento

Sistema CRM moderno com inteligência artificial para gestão completa de clientes, leads, campanhas e automações.

## 🚀 Funcionalidades Implementadas

### ✅ Estrutura Base
- **Página Inicial**: Dashboard com métricas e ações rápidas
- **Layout Responsivo**: Navegação integrada e design moderno
- **Sistema de Componentes**: Componentes reutilizáveis (Card, MetricCard, Navigation)
- **Estilos Globais**: CSS customizado com classes utilitárias

### ✅ Páginas Funcionais
- **Dashboard**: Métricas e visão geral do sistema
- **Leads**: Gestão de leads e oportunidades
- **Campanhas**: Criação e gerenciamento de campanhas
- **Workflows**: Automações e fluxos de trabalho
- **Dicionário de Dados**: Padronização de informações
- **Histórico de Relacionamento**: Registro de interações
- **Autenticação**: Login e registro de usuários

### ✅ APIs Implementadas
- `/api/auth` - Autenticação de usuários
- `/api/campaigns` - Gestão de campanhas
- `/api/contacts` - Gestão de contatos
- `/api/leads` - Gestão de leads
- `/api/workflows` - Automações
- `/api/data-dictionary` - Dicionário de dados
- `/api/relationship-history` - Histórico de relacionamento
- `/api/sales-funnel` - Funil de vendas

## 🛠️ Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **CSS3**: Estilos customizados e responsivos
- **Prisma**: ORM para banco de dados
- **Node.js**: Runtime JavaScript

## 📦 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── api/               # Rotas da API
│   ├── auth/              # Páginas de autenticação
│   ├── dashboard/         # Dashboard
│   ├── leads/             # Gestão de leads
│   ├── campaigns/         # Gestão de campanhas
│   ├── workflows/         # Automações
│   ├── data-dictionary/   # Dicionário de dados
│   └── relationship-history/ # Histórico
├── components/            # Componentes reutilizáveis
│   ├── Navigation.tsx     # Navegação principal
│   ├── Card.tsx          # Componente de card
│   └── MetricCard.tsx    # Card de métricas
└── lib/                  # Bibliotecas e serviços
    ├── services/         # Serviços de negócio
    └── middleware/       # Middlewares
```

## 🚀 Como Executar

1. **Instalar dependências**:
```bash
npm install
```

2. **Executar em desenvolvimento**:
```bash
npm run dev
```

3. **Acessar o sistema**:
```
http://localhost:3000
```

## 📊 Métricas do Dashboard

- **Total de Contatos**: 1.247
- **Leads Ativos**: 89
- **Campanhas Ativas**: 12
- **Taxa de Conversão**: 23.5%
- **Crescimento Mensal**: +15.2%
- **Workflows Ativos**: 8

## 🎯 Recursos Principais

### 🤖 IA Integrada
- Automação inteligente de processos
- Análise preditiva de leads
- Sugestões automáticas

### 📈 Analytics
- Relatórios detalhados
- Métricas em tempo real
- Dashboards personalizáveis

### 🔄 Automação
- Workflows personalizados
- Triggers automáticos
- Sequências de e-mail

### 🔗 Integrações
- APIs e conectores
- Webhooks
- Sincronização de dados

## 🎨 Design System

### Cores Principais
- **Azul**: #3b82f6 (Primária)
- **Verde**: #10b981 (Sucesso)
- **Amarelo**: #f59e0b (Atenção)
- **Roxo**: #8b5cf6 (Destaque)
- **Cinza**: #6b7280 (Texto secundário)

### Componentes
- **Cards**: Containers com sombra e bordas arredondadas
- **Botões**: Variações primary, secondary, success, danger
- **Formulários**: Inputs, selects e textareas estilizados
- **Tabelas**: Layout responsivo com hover effects
- **Métricas**: Cards especiais para exibição de números

## 📱 Responsividade

- **Desktop**: Layout completo com sidebar
- **Tablet**: Navegação adaptada
- **Mobile**: Menu colapsável e cards empilhados

## 🔒 Segurança

- Autenticação implementada
- Middleware de proteção
- Validação de dados
- Sanitização de inputs

## 🚧 Próximas Implementações

### Fase 2 - Recursos Avançados
- [ ] Gráficos interativos
- [ ] Filtros avançados
- [ ] Exportação de relatórios
- [ ] Notificações em tempo real
- [ ] Chat interno

### Fase 3 - IA Avançada
- [ ] Machine Learning para leads
- [ ] Análise de sentimento
- [ ] Previsão de vendas
- [ ] Chatbot inteligente
- [ ] Automação com IA

### Fase 4 - Integrações
- [ ] WhatsApp Business
- [ ] E-mail marketing
- [ ] Redes sociais
- [ ] ERPs externos
- [ ] Ferramentas de pagamento

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através dos canais de suporte do sistema.

---

**Desenvolvido com ❤️ para otimizar sua gestão de relacionamento com clientes**
