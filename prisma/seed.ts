import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Criar usuário admin
  const senhaHash = await bcrypt.hash('admin123', 10)
  
  const admin = await prisma.usuario.upsert({
    where: { email: 'admin@crm.com' },
    update: {},
    create: {
      nome: 'Administrador',
      email: 'admin@crm.com',
      senha: senhaHash,
      papel: 'ADMIN',
      departamento: 'Administrativo',
    },
  })

  // Criar usuário vendedor
  const vendedor = await prisma.usuario.upsert({
    where: { email: 'vendedor@crm.com' },
    update: {},
    create: {
      nome: 'Vendedor Exemplo',
      email: 'vendedor@crm.com',
      senha: senhaHash,
      papel: 'VENDEDOR',
      departamento: 'Vendas',
    },
  })

  // Criar empresas exemplo
  const empresa1 = await prisma.empresa.create({
    data: {
      nome: 'Tech Solutions Ltda',
      nomeFantasia: 'TechSol',
      cnpj: '12.345.678/0001-90',
      email: 'contato@techsol.com.br',
      telefone: '(11) 98765-4321',
      website: 'www.techsol.com.br',
      setor: 'Tecnologia',
      tamanho: 'MEDIA',
      faturamento: 5000000,
      endereco: {
        create: {
          rua: 'Rua das Flores',
          numero: '123',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP',
          cep: '01234-567',
        },
      },
      criadoPorId: admin.id,
    },
  })

  const empresa2 = await prisma.empresa.create({
    data: {
      nome: 'Marketing Digital Pro',
      nomeFantasia: 'MD Pro',
      cnpj: '98.765.432/0001-10',
      email: 'contato@mdpro.com.br',
      telefone: '(21) 99876-5432',
      website: 'www.mdpro.com.br',
      setor: 'Marketing',
      tamanho: 'PEQUENA',
      faturamento: 1500000,
      endereco: {
        create: {
          rua: 'Avenida Principal',
          numero: '456',
          bairro: 'Jardim Paulista',
          cidade: 'Rio de Janeiro',
          estado: 'RJ',
          cep: '20000-000',
        },
      },
      criadoPorId: admin.id,
    },
  })

  // Criar contatos exemplo
  const contato1 = await prisma.contato.create({
    data: {
      nome: 'João Silva',
      email: 'joao.silva@techsol.com.br',
      telefone: '(11) 98765-4321',
      celular: '(11) 99876-5432',
      cargo: 'Gerente de TI',
      departamento: 'Tecnologia',
      empresaId: empresa1.id,
      origem: 'SITE',
      status: 'QUALIFICADO',
      pontuacao: 85,
      tags: ['cliente-potencial', 'alto-valor'],
      observacoes: 'Interessado em nossa solução de CRM',
      criadoPorId: vendedor.id,
    },
  })

  const contato2 = await prisma.contato.create({
    data: {
      nome: 'Maria Santos',
      email: 'maria@mdpro.com.br',
      telefone: '(21) 99876-5432',
      celular: '(21) 98765-4321',
      cargo: 'Diretora de Marketing',
      departamento: 'Marketing',
      empresaId: empresa2.id,
      origem: 'INDICACAO',
      status: 'CONTATADO',
      pontuacao: 75,
      tags: ['cliente-recorrente', 'marketing'],
      observacoes: 'Já é cliente, quer expandir serviços',
      criadoPorId: vendedor.id,
    },
  })

  // Criar produtos exemplo
  const produto1 = await prisma.produto.create({
    data: {
      nome: 'CRM Premium',
      descricao: 'Plano completo de CRM com todas funcionalidades',
      preco: 299.90,
      categoria: 'Software',
      ativo: true,
    },
  })

  const produto2 = await prisma.produto.create({
    data: {
      nome: 'Consultoria CRM',
      descricao: 'Consultoria especializada em implementação de CRM',
      preco: 5000.00,
      categoria: 'Serviço',
      ativo: true,
    },
  })

  // Criar oportunidades exemplo
  const oportunidade1 = await prisma.oportunidade.create({
    data: {
      titulo: 'Implementação CRM TechSol',
      valor: 15000,
      moeda: 'BRL',
      estagio: 'PROPOSTA',
      probabilidade: 75,
      dataFechamentoEsperada: new Date('2024-12-31'),
      contatoId: contato1.id,
      empresaId: empresa1.id,
      responsavelId: vendedor.id,
      produtos: {
        create: [
          {
            produtoId: produto1.id,
            quantidade: 10,
            precoUnitario: 299.90,
            desconto: 10,
          },
          {
            produtoId: produto2.id,
            quantidade: 1,
            precoUnitario: 5000.00,
            desconto: 5,
          },
        ],
      },
      observacoes: 'Cliente muito interessado, aguardando aprovação da diretoria',
    },
  })

  // Criar tarefas exemplo
  await prisma.tarefa.create({
    data: {
      titulo: 'Enviar proposta para TechSol',
      descricao: 'Preparar e enviar proposta detalhada para implementação do CRM',
      tipo: 'FOLLOW_UP',
      prioridade: 'ALTA',
      status: 'PENDENTE',
      dataVencimento: new Date('2024-12-20'),
      contatoId: contato1.id,
      oportunidadeId: oportunidade1.id,
      criadoPorId: vendedor.id,
      atribuidoParaId: vendedor.id,
    },
  })

  // Criar atividades exemplo
  await prisma.atividade.create({
    data: {
      tipo: 'REUNIAO',
      titulo: 'Apresentação de produto',
      descricao: 'Apresentação inicial do CRM para equipe da TechSol',
      data: new Date('2024-12-10'),
      duracao: 60,
      status: 'CONCLUIDA',
      resultado: 'Cliente demonstrou grande interesse',
      proximaAcao: 'Enviar proposta formal',
      usuarioId: vendedor.id,
      contatoId: contato1.id,
      oportunidadeId: oportunidade1.id,
    },
  })

  console.log('Dados de exemplo criados com sucesso!')
  console.log({
    admin: { email: 'admin@crm.com', senha: 'admin123' },
    vendedor: { email: 'vendedor@crm.com', senha: 'admin123' },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
