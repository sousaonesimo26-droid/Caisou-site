import { AcademyCourse } from '../types';

export const academyCourses: AcademyCourse[] = [
  {
    id: 'capacitacao-professores-ciencias',
    title: 'Capacitação Docente em Laboratórios de Ciências e Metodologias Ativas',
    category: 'Educacional',
    level: 'Intermediário',
    durationHours: 32,
    format: 'Híbrido',
    targetAudience: 'Professores de Biologia, Química, Física, Ciências e Coordenadores Pedagógicos de Escolas e Universidades',
    summary: 'Treinamento prático e pedagógico focado em como transformar o laboratório escolar em um polo de experimentação viva, engajando estudantes e aplicando os experimentos com segurança e fundamentação curricular.',
    modules: [
      'Módulo 1: Segurança, Noções de Risco Químico e Biossegurança Escolar',
      'Módulo 2: Manuseio e Conservação Correta de Microscópios e Lâminas Didáticas',
      'Módulo 3: Práticas Curriculares de Química com Vidraria e Reagentes de Baixo Risco',
      'Módulo 4: Experimentos de Física com Sensores Digitais e Bancadas Modulares',
      'Módulo 5: Elaboração de Roteiros de Aula Prática e Avaliação Baseada em Competências'
    ],
    includesCertification: true,
    skillsGained: [
      'Planejamento de aulas experimentais seguras',
      'Manuseio e manutenção básica de microscópios e vidrarias',
      'Gestão de estoque didático e reagentes químicos',
      'Dinâmicas ativas STEM com engajamento dos alunos'
    ],
    badge: 'Curso Mais Procurado',
    iconName: 'GraduationCap'
  },
  {
    id: 'operacao-analisadores-clinicos',
    title: 'Operação Avançada, Controle de Qualidade e Manutenção de Equipamentos Clínicos',
    category: 'Hospitalar & Clínico',
    level: 'Avançado',
    durationHours: 40,
    format: 'Presencial',
    targetAudience: 'Biomédicos, Farmacêuticos-Bioquímicos, Médicos Patologistas e Técnicos de Análises Clínicas',
    summary: 'Imersão técnica para extrair a máxima exatidão diagnóstica dos analisadores bioquímicos, centrífugas e fotômetros, dominando calibrações diárias, gráficos de Levey-Jennings e regras de Westgard.',
    modules: [
      'Módulo 1: Fundamentos Óticos, Eletromecânicos e Fluídicos dos Analisadores',
      'Módulo 2: Protocolos de Calibração, Curvas Padrão e Rastreabilidade Metrológica',
      'Módulo 3: Controle Interno de Qualidade (CIQ) e Resolução de Erros Sistemáticos e Aleatórios',
      'Módulo 4: Manutenção Preventiva de Nível 1: Troca de Lâmpadas, Selos, Sondas e Tubulações',
      'Módulo 5: Integração LIS/HIS e Boas Práticas de Amostragem Pré-Analítica'
    ],
    includesCertification: true,
    skillsGained: [
      'Diagnóstico ágil de alarmes e falhas instrumentais',
      'Execução de calibração multiponto com confiança metrológica',
      'Prevenção de paradas não programadas no laboratório de rotina',
      'Auditoria de qualidade em conformidade com normas MINSA e OMS'
    ],
    badge: 'Formação Hospitalar Especializada',
    iconName: 'Activity'
  },
  {
    id: 'biosseguranca-bpl-esterilizacao',
    title: 'Biossegurança Laboratorial, Boas Práticas (BPL) e Validação de Esterilização',
    category: 'Biossegurança & BPL',
    level: 'Fundamental',
    durationHours: 24,
    format: 'In-Company',
    targetAudience: 'Equipes de Laboratório, Auxiliares Técnicos, Fiscais de Higiene e Gestores de Ambientes Críticos',
    summary: 'Treinamento normativo e prático essencial para conformidade sanitária, prevenção de acidentes, uso adequado de EPIs/EPCs, manuseio de capelas de exaustão e ciclos de validação em autoclaves.',
    modules: [
      'Módulo 1: Mapa de Riscos: Físicos, Químicos, Biológicos, Ergonômicos e de Acidentes',
      'Módulo 2: Uso, Inspeção e Limitações de Capelas de Exaustão e Cabines de Fluxo Laminar',
      'Módulo 3: Protocolos de Autoclavação: Teste de Bowie-Dick, Indicadores Químicos e Biológicos',
      'Módulo 4: Gerenciamento, Segregação e Descarte de Resíduos Perigosos e Hospitalares',
      'Módulo 5: Plano de Ação para Derramamentos, Incêndios e Primeiros Socorros em Laboratório'
    ],
    includesCertification: true,
    skillsGained: [
      'Conformidade com Boas Práticas Laboratoriais (BPL/GLP) e normas sanitárias',
      'Validação física e microbiológica de ciclos de esterilização hospitalar',
      'Operação segura de capelas químicas com medição de velocidade facial',
      'Cultura proativa de prevenção de contaminações cruzadas'
    ],
    badge: 'Obrigatório para Acreditação',
    iconName: 'ShieldCheck'
  },
  {
    id: 'infraestrutura-ti-institucional',
    title: 'Gestão de Redes, Servidores e Segurança Digital para Instituições de Ensino e Saúde',
    category: 'TI & Infraestrutura',
    level: 'Intermediário',
    durationHours: 36,
    format: 'Híbrido',
    targetAudience: 'Administradores de Redes, Analistas de Suporte, Coordenadores de TI Educacional e Hospitalar',
    summary: 'Capacitação prática para manter a infraestrutura digital veloz, resiliente e segura, dominando servidores virtualizados, segmentação de VLANs para equipamentos médicos e políticas de backup automatizado.',
    modules: [
      'Módulo 1: Arquitetura de Servidores Enterprise: RAID, Fontes Redundantes e iLO/iDRAC',
      'Módulo 2: Projeto de Cabeamento Estruturado Cat6A e Wi-Fi 6 de Alta Densidade',
      'Módulo 3: Segurança Perimetral: Firewall UTM, VPN para Teletrabalho e Isolamento de VLANs',
      'Módulo 4: Estratégias de Backup 3-2-1 e Recuperação de Desastres (DRP) em Saúde e Educação',
      'Módulo 5: Monitoramento Proativo com Alertas Automáticos de Desempenho e Falhas'
    ],
    skillsGained: [
      'Configuração avançada de switches gerenciáveis e nobreaks senoidais',
      'Proteção de dados institucionais (registros clínicos e processos académicos)',
      'Redução de chamados de suporte técnico em mais de 60%',
      'Plano de continuidade de negócios para ambientes de missão crítica'
    ],
    includesCertification: true,
    badge: 'Alta Performance Digital',
    iconName: 'Server'
  },
  {
    id: 'metodologias-stem-robotica',
    title: 'Laboratórios Maker & STEM: Robótica, Sensores e Cultura Maker na Prática',
    category: 'Educacional',
    level: 'Fundamental',
    durationHours: 20,
    format: 'Presencial',
    targetAudience: 'Educadores, Monitores de Laboratório e Gestores Escolares de Inovação',
    summary: 'Como implantar e dinamizar espaços makers e laboratórios de física/robótica utilizando kits programáveis, eletrônica básica e desafios práticos interdisciplinares.',
    modules: [
      'Módulo 1: Fundamentos da Aprendizagem Baseada em Projetos (PBL) em Ciências',
      'Módulo 2: Montagem de Circuitos e Coleta Automatizada de Dados com Sensores',
      'Módulo 3: Introdução à Robótica Educacional e Automação de Bancada',
      'Módulo 4: Guia de Feiras de Ciências e Projetos de Iniciação Científica Escolar'
    ],
    skillsGained: [
      'Engajamento ativo dos alunos do 6º ano ao Ensino Médio',
      'Integração de disciplinas (Matemática, Física, Biologia e TI)',
      'Uso seguro de ferramentas e componentes eletrônicos em sala'
    ],
    includesCertification: true,
    badge: 'Inovação Pedagógica',
    iconName: 'Cpu'
  }
];
