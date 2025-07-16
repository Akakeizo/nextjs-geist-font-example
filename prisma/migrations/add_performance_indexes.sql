-- Migration: Adicionar índices de performance
-- Created at: 2024-01-01

-- Índices para queries frequentes de CRM
CREATE INDEX IF NOT EXISTS idx_contatos_email ON contatos(email);
CREATE INDEX IF NOT EXISTS idx_contatos_status ON contatos(status);
CREATE INDEX IF NOT EXISTS idx_contatos_criado_em ON contatos(criado_em DESC);

-- Índices para oportunidades
CREATE INDEX IF NOT EXISTS idx_oportunidades_responsavel ON oportunidades(responsavel_id);
CREATE INDEX IF NOT EXISTS idx_oportunidades_estagio ON oportunidades(estagio);
CREATE INDEX IF NOT EXISTS idx_oportunidades_data_fechamento ON oportunidades(data_fechamento_esperada);

-- Índices para tarefas
CREATE INDEX IF NOT EXISTS idx_tarefas_vencimento ON tarefas(data_vencimento);
CREATE INDEX IF NOT EXISTS idx_tarefas_status ON tarefas(status);
CREATE INDEX IF NOT EXISTS idx_tarefas_atribuido_para ON tarefas(atribuido_para_id);

-- Índices para atividades
CREATE INDEX IF NOT EXISTS idx_atividades_data ON atividades(data DESC);
CREATE INDEX IF NOT EXISTS idx_atividades_usuario ON atividades(usuario_id);

-- Índices para campanhas
CREATE INDEX IF NOT EXISTS idx_campanhas_status ON campanhas(status);
CREATE INDEX IF NOT EXISTS idx_campanhas_data_inicio ON campanhas(data_inicio DESC);

-- Índices compostos para queries complexas
CREATE INDEX IF NOT EXISTS idx_contatos_status_criado ON contatos(status, criado_em DESC);
CREATE INDEX IF NOT EXISTS idx_oportunidades_responsavel_estagio ON oportunidades(responsavel_id, estagio);

-- Índices para busca textual
CREATE INDEX IF NOT EXISTS idx_contatos_nome_trgm ON contatos USING gin(nome gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_empresas_nome_trgm ON empresas USING gin(nome gin_trgm_ops);

-- Índices para JSON fields (campos personalizados)
CREATE INDEX IF NOT EXISTS idx_contatos_campos_personalizados ON contatos USING gin(campos_personalizados);
CREATE INDEX IF NOT EXISTS idx_empresas_campos_personalizados ON empresas USING gin(campos_personalizados);
