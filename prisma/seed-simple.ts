import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Criar usuários de teste
  const senhaHash = await bcrypt.hash('admin123', 10)
  
  // Criar usuário admin
  const admin = await prisma.usuario.create({
    data: {
      nome: 'Administrador',
      email: 'admin@crm.com',
      senha: senhaHash,
      papel: 'ADMIN',
    },
  })

  // Criar usuário vendedor
  const vendedor = await prisma.usuario.create({
    data: {
      nome: 'Vendedor Exemplo',
      email: 'vendedor@crm.com',
      senha: senhaHash,
      papel: 'VENDEDOR',
    },
  })

  // Criar contatos de exemplo
  const contato1 = await prisma.contato.create({
    data: {
      nome: 'João Silva',
      email: 'joao.silva@techsol.com.br',
      telefone: '(11) 98765-4321',
      empresa: 'Tech Solutions Ltda',
      cargo: 'Gerente de TI',
      status: 'QUALIFICADO',
    },
  })

  const contato2 = await prisma.contato.create({
    data: {
      nome: 'Maria Santos',
      email: 'maria@mdpro.com.br',
      telefone: '(21) 99876-5432',
      empresa: 'Marketing Digital Pro',
      cargo: 'Diretora de Marketing',
      status: 'CONTATADO',
    },
  })

  // Criar campanhas de exemplo
  await prisma.campanha.create({
    data: {
      nome: 'Campanha Black Friday 2024',
      tipo: 'EMAIL',
      status: 'ATIVA',
    },
  })

  await prisma.campanha.create({
    data: {
      nome: 'Campanha Natal 2024',
      tipo: 'SMS',
      status: 'RASCUNHO',
    },
  })

  console.log('✅ Dados de teste criados com sucesso!')
  console.log('📧 Usuários criados:')
  console.log('- admin@crm.com / admin123 (ADMIN)')
  console.log('- vendedor@crm.com / admin123 (VENDEDOR)')
  console.log('')
  console.log('👥 Contatos criados:')
  console.log('- João Silva (Tech Solutions)')
  console.log('- Maria Santos (Marketing Digital Pro)')
  console.log('')
  console.log('📢 Campanhas criadas:')
  console.log('- Black Friday 2024 (EMAIL)')
  console.log('- Natal 2024 (SMS)')
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
