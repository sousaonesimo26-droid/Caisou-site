import { Product } from '../types';
import micEdu1000Img from '../assets/images/caisou_mic_edu1000_1787751369856.jpg';
import physExpImg from '../assets/images/caisou_phys_exp_1787751392496.jpg';
import cent5000Img from '../assets/images/caisou_cent_5000_1787751413929.jpg';

export const productsData: Product[] = [
  // --- EDUCACIONAL (Escolas e Universidades) ---
  {
    id: 'mic-edu-1000x',
    name: 'Microscópio Biológico Educacional Binocular LED 1000x',
    category: 'educacional',
    subcategory: 'Microscopia Didática',
    tagline: 'Ideal para aulas práticas de biologia, histologia e ciências em escolas e universidades.',
    description: 'Equipamento de alta durabilidade mecânica com corpo em liga metálica, ótica acromática de alto contraste, iluminação LED fria de longa vida útil e sistema de proteção para lâminas (evita quebra por estudantes).',
    features: [
      'Aumentos óticos: 40x, 100x, 400x e 1000x (imersão a óleo)',
      'Cabeçote binocular ergonômico giratório 360° inclinado a 30°',
      'Platina mecânica dupla com charriot e escala Vernier milimétrica',
      'Foco coaxial macrométrico e micrométrico de precisão (0.002mm)',
      'Iluminação LED 3W recarregável com bateria interna (permite uso sem tomada)'
    ],
    specs: [
      { label: 'Ótica', value: 'Objetivas Acromáticas 4x, 10x, 40x(S), 100x(S, Óleo)' },
      { label: 'Oculares', value: 'WF 10x / 18mm com ajuste de dioptria' },
      { label: 'Condensador', value: 'Abbe N.A. 1.25 com diafragma de íris e porta-filtro' },
      { label: 'Alimentação', value: 'Bivolt Automático 110/220V + Bateria de Lítio' },
      { label: 'Garantia', value: '3 Anos com suporte e peças de reposição' }
    ],
    targetAudience: ['Escolas de Ensino Fundamental/Médio', 'Universidades', 'Cursos Técnicos de Saúde'],
    certifications: ['ISO 9001', 'CE Certified', 'Garantia CAISOU 360°'],
    image: micEdu1000Img,
    featured: true,
    modelCode: 'CAISOU-MIC-EDU1000',
    warranty: '36 meses com calibração anual inclusa',
    includesTraining: true
  },
  {
    id: 'kit-quim-avancado',
    name: 'Kit Completo de Vidraria e Reagentes Didáticos para Laboratório Escolar',
    category: 'educacional',
    subcategory: 'Química & Vidraria Didática',
    tagline: 'Conjunto completo de vidrarias borossilicato 3.3 calibradas com suportes universais e reagentes seguros.',
    description: 'Conjunto planejado pedagogicamente para cobrir mais de 45 experimentos curriculares de química geral, inorgânica e orgânica. Vidrarias resistentes ao choque térmico e graduadas com alta precisão.',
    features: [
      'Mais de 120 peças em Vidro Borossilicato 3.3 de grau de pesquisa',
      'Béqueres, erlenmeyers, provetas graduadas, balões volumétricos e pipetas',
      'Suportes universais pesados em ferro fundido com garras e anéis',
      'Kit de reagentes com fichas FISPQ e rotulagem GHS adequada para escolas',
      'Guia didático de 45 práticas alinhadas à matriz curricular nacional'
    ],
    specs: [
      { label: 'Material', value: 'Vidro Borossilicato 3.3 de expansão térmica ultrabaixa' },
      { label: 'Calibração', value: 'Classe A e Classe B segundo normas DIN / ISO' },
      { label: 'Capacidade', value: 'Atende turmas de até 40 alunos simultaneamente' },
      { label: 'Acessórios', value: 'Termômetros ecológicos, pinças, espátulas e estantes' }
    ],
    targetAudience: ['Escolas Públicas e Privadas', 'Faculdades de Ciências, Química e Farmácia em Angola'],
    certifications: ['DIN ISO 3585', 'Norma ISO/IEC 17025', 'Conformidade IANORQ'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modelCode: 'CAISOU-KIT-CHEM45',
    warranty: '12 meses contra defeitos de fabricação',
    includesTraining: true
  },
  {
    id: 'bancada-escolar-fisica',
    name: 'Bancada Didática de Física Experimental, Mecânica e Eletromagnetismo',
    category: 'educacional',
    subcategory: 'Física & Engenharia',
    tagline: 'Estação modular com sensores digitais e painéis de ensaios de dinâmica, ótica e circuitos.',
    description: 'Sistema integrado que une experimentos clássicos com coleta de dados digital via USB/Bluetooth para computadores e tablets dos estudantes, facilitando a compreensão visual de gráficos e leis físicas.',
    features: [
      'Trilho de ar para estudo de colisões elásticas e conservação de momento',
      'Banco ótico de precisão com fontes laser, prismas, lentes e espelhos',
      'Painel elétrico modular protegido contra curto-circuito e choque elétrico',
      'Interface digital de aquisição de dados compatível com Windows e Linux'
    ],
    specs: [
      { label: 'Estrutura', value: 'Alumínio estrutural anodizado e tampo fórmico antiestático' },
      { label: 'Sensores', value: 'Força, Foto-sensores de tempo, Tensão, Corrente e Campo Magnético' },
      { label: 'Segurança', value: 'Chave geral de emergência e disjuntor diferencial' }
    ],
    targetAudience: ['Ensino Médio / Secundário', 'Institutos Politécnicos', 'Engenharias e Física Universitária'],
    certifications: ['CE', 'Segurança Elétrica IEC 61010'],
    image: physExpImg,
    featured: false,
    modelCode: 'CAISOU-PHYS-EXP',
    warranty: '24 meses',
    includesTraining: true
  },

  // --- HOSPITALAR & CLÍNICO ---
  {
    id: 'analisador-bioq-auto',
    name: 'Analisador Bioquímico Clínico Automático de Alta Performance (200 Testes/Hora)',
    category: 'hospitalar_clinico',
    subcategory: 'Bioquímica Clínica & Diagnóstico',
    tagline: 'Precisão diagnóstica com sistema ótico selado e baixo consumo de água e reagentes.',
    description: 'Equipamento robusto para laboratórios clínicos de rotina, hospitais centrais/municipais e centros de pesquisa biomédica. Realiza perfis lipídicos, hepáticos, renais, glicemia e enzimas com repetibilidade rigorosa e sistema inteligente de lavagem de cubetas.',
    features: [
      'Velocidade constante de 200 testes/hora (bioquímica clínica)',
      'Sistema de refrigeração contínua 24h para reagentes e calibradores',
      'Sonda com detector de nível de líquido, proteção contra colisão e pré-aquecimento',
      'Interface LIS bidirecional para integração total ao sistema hospitalar',
      'Software intuitivo em Português com controle de qualidade Levey-Jennings'
    ],
    specs: [
      { label: 'Metodologia', value: 'Ponto final, Cinética, Dois pontos, Turbidimetria' },
      { label: 'Comprimentos de Onda', value: '8 filtros: 340nm a 670nm com fotômetro de grade invertida' },
      { label: 'Consumo de Reagente', value: 'Microlitros (economia de até 30% em insumos)' },
      { label: 'Rastreabilidade', value: 'Leitor de código de barras para amostras e reagentes' }
    ],
    targetAudience: ['Hospitais Gerais, Centrais e Municipais', 'Laboratórios de Análises Clínicas', 'Faculdades de Medicina e Saúde'],
    certifications: ['Homologação MINSA / DNME', 'ISO 13485 (Dispositivos Médicos)', 'CE IVD', 'Padrão OMS'],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modelCode: 'CAISOU-BIO-200X',
    warranty: '24 meses com plano de manutenção preventiva CAISOU',
    includesTraining: true
  },
  {
    id: 'centrifuga-clinica-microproc',
    name: 'Centrífuga Clínica Digital Microprocessada para Tubos Vacutainer e Sangue',
    category: 'hospitalar_clinico',
    subcategory: 'Equipamentos de Bancada',
    tagline: 'Operação ultrassilenciosa (<56 dB) com motor por indução sem escovas (Brushless).',
    description: 'Projetada para centrifugação segura de soro, plasma, urina e fluidos biológicos. Possui tampa com trava eletromagnética de segurança, display digital LCD para RPM/RCF e balanceamento automático.',
    features: [
      'Velocidade ajustável até 5.000 RPM (RCF máx: 3.500 xg)',
      'Rotor de ângulo fixo ou oscilante para 12/24 tubos de coleta de sangue',
      'Sistema de amortecimento avançado com pés de sucção antivibração',
      'Trava de segurança que impede abertura durante a rotação',
      'Função de frenagem suave para não ressuspender sedimentos'
    ],
    specs: [
      { label: 'Capacidade', value: 'Até 24 x 10ml ou 12 x 15ml com adaptadores para tubos pediátricos' },
      { label: 'Precisão de Giro', value: '± 20 RPM com ajuste em incrementos de 10 RPM' },
      { label: 'Nível de Ruído', value: 'Menor que 56 dBA em velocidade máxima' },
      { label: 'Estrutura', value: 'Câmara interna em aço inoxidável 304 escovado' }
    ],
    targetAudience: ['Laboratórios Hospitalares', 'Clínicas e Postos de Saúde', 'Bancos de Sangue'],
    certifications: ['ISO 13485', 'ISO 9001', 'IEC 61010-2-020', 'CE'],
    image: cent5000Img,
    featured: false,
    modelCode: 'CAISOU-CENT-5000',
    warranty: '36 meses de garantia estrutural',
    includesTraining: true
  },
  {
    id: 'autoclave-hospitalar-b',
    name: 'Autoclave Hospitalar a Vácuo Fracionado Classe B (45 Litros)',
    category: 'hospitalar_clinico',
    subcategory: 'Esterilização & Biossegurança',
    tagline: 'Ciclos de esterilização validados para materiais ocos, porosos, tecidos e instrumental cirúrgico.',
    description: 'Garante esterilização absoluta segundo os padrões mais exigentes de biossegurança hospitalar. Bomba de vácuo de alta eficiência, impressora térmica embutida para relatórios de ciclo e sensor de qualidade de água.',
    features: [
      'Triplo vácuo pulsante inicial para retirada de ar e penetração profunda do vapor',
      'Secagem a vácuo com porta fechada (elimina umidade no instrumental)',
      'Impressão automática dos parâmetros de temperatura, pressão e tempo do ciclo',
      'Múltiplos sensores de pressão e temperatura com alarme visual e sonoro',
      'Tanque de água limpa e tanque de água residual separados'
    ],
    specs: [
      { label: 'Capacidade Útil', value: '45 Litros com 4 bandejas em Aço Inox 316L' },
      { label: 'Temperatura', value: '121°C e 134°C (Ciclos Príon, Poroso, Rápido e Teste Bowie-Dick)' },
      { label: 'Pressão de Trabalho', value: '2.1 a 2.3 bar com válvula de alívio calibrada' },
      { label: 'Consumo', value: '2.200 W - 220V 50Hz/60Hz' }
    ],
    targetAudience: ['Centros Cirúrgicos', 'Clínicas Médicas e Odontológicas', 'Laboratórios de Microbiologia e Pesquisa'],
    certifications: ['Normas MINSA / Biossegurança', 'EN 13060 Classe B', 'Diretiva de Equipamentos sob Pressão CE'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modelCode: 'CAISOU-AUTO-B45',
    warranty: '24 meses com certificado de teste hidrostático e calibração',
    includesTraining: true
  },

  // --- TI & INFRAESTRUTURA DIGITAL ---
  {
    id: 'servidor-rack-enterprise',
    name: 'Servidor Rack 2U Enterprise para Gestão Hospitalar e Acadêmica',
    category: 'ti_infraestrutura',
    subcategory: 'Servidores & Datacenter',
    tagline: 'Alta disponibilidade com processadores duplos, RAID de armazenamento NVMe e fontes redundantes.',
    description: 'Servidor desenhado para sustentar sistemas de gestão hospitalar, ambientes virtuais de aprendizagem, sistemas LIS/PACS de imagem médica e bancos de dados institucionais com 99.99% de disponibilidade.',
    features: [
      'Dual Socket com processadores de alta contagem de núcleos (64 threads)',
      'Memória RAM ECC Registered de até 512GB com correção de erros',
      'Controladora RAID por hardware com bateria de backup e hot-swap',
      'Duas fontes redundantes Platinum 80 Plus hot-plug',
      'Placas de rede 10GbE SFP+ para tráfego veloz de imagens e exames pesados'
    ],
    specs: [
      { label: 'Processamento', value: 'Dual Intel Xeon Silver / AMD EPYC 32C' },
      { label: 'Armazenamento', value: '4x 3.84TB SSD Enterprise NVMe em RAID 10 (expansível a 8 baias)' },
      { label: 'Gerenciamento Remoto', value: 'Módulo iLO/iDRAC dedicado com controle KVM sobre IP' },
      { label: 'Chassi', value: 'Rack 2U com trilhos deslizantes e organizador de cabos' }
    ],
    targetAudience: ['Universidades e Institutos Superiores', 'Hospitais Gerais e Redes Clínicas', 'Ministérios e Governos Provinciais'],
    certifications: ['Energy Star', 'UL / RoHS', 'ISO 27001 Ready'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modelCode: 'CAISOU-SRV-2U99',
    warranty: '36 meses com atendimento On-Site em Angola',
    includesTraining: true
  },
  {
    id: 'rede-wifi6-institucional',
    name: 'Infraestrutura de Rede e Wi-Fi 6 de Alta Densidade para Campi e Clínicas',
    category: 'ti_infraestrutura',
    subcategory: 'Redes Estruturadas & Conectividade',
    tagline: 'Switches PoE+ gerenciáveis Layer 3 e Access Points para cobertura de até 500 conexões por AP.',
    description: 'Solução completa de cabeamento estruturado Cat6A/Fibra Óptica, armários rack refrigerados e gerenciamento centralizado em nuvem com isolamento seguro de redes de alunos, corpo médico e administração.',
    features: [
      'Switches Gigabit PoE+ com portas de uplink de 10Gbps para fibra',
      'Access Points Wi-Fi 6 de nível corporativo com roaming contínuo sem queda',
      'Firewall UTM com inspeção profunda de pacotes, VPN segura e antivírus de rede',
      'Segmentação de VLANs para proteger equipamentos médicos e sistemas acadêmicos',
      'Monitoramento em tempo real com alertas automáticos por Telegram e E-mail'
    ],
    specs: [
      { label: 'Throughput', value: 'Até 5.4 Gbps agregado por ponto de acesso' },
      { label: 'Portas PoE', value: '24 e 48 portas 802.3at (30W por porta)' },
      { label: 'Segurança', value: 'WPA3 Enterprise com autenticação 802.1X / RADIUS' },
      { label: 'Cabeamento', value: 'Certificação Fluke Networks inclusa em cada ponto' }
    ],
    targetAudience: ['Campi Universitários', 'Complexos Escolares Públicos e Privados', 'Clínicas e Hospitais'],
    certifications: ['Homologação INACOM / Angola', 'IEEE 802.11ax', 'ISO/IEC 11801 / TIA-568'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    featured: false,
    modelCode: 'CAISOU-NET-W6',
    warranty: '36 meses para hardware de rede',
    includesTraining: true
  },
  {
    id: 'nobreak-senoidal-online',
    name: 'UPS / Nobreak Senoidal Online Dupla Conversão 10kVA para Laboratórios e TI',
    category: 'ti_infraestrutura',
    subcategory: 'Energia Ininterrupta & Proteção',
    tagline: 'Energia pura sem tempo de transferência (0ms) para proteger analisadores e servidores críticos.',
    description: 'Elimina surtos, ruídos harmônicos, quedas e variações frequentes da rede elétrica em Angola, evitando queima de placas eletrônicas sensíveis de equipamentos de laboratório e desligamentos abruptos de servidores.',
    features: [
      'Tecnologia Online Dupla Conversão com onda senoidal pura (THD < 2%)',
      'Tempo de comutação zero milissegundos (0ms) entre rede e baterias',
      'Bypass manual e automático para manutenção sem interrupção da carga',
      'Módulo SNMP integrado para desligamento ordenado de servidores via rede',
      'Banco de baterias seladas VRLA com expansão modular de autonomia'
    ],
    specs: [
      { label: 'Potência', value: '10.000 VA / 10.000 W (Fator de Potência 1.0 Unitário)' },
      { label: 'Tensão Entrada/Saída', value: 'Monofásico / Trifásico 220V/380V 50Hz (Padrão Angola)' },
      { label: 'Autonomia', value: 'A partir de 30 minutos em plena carga (expansível para horas)' },
      { label: 'Display', value: 'LCD gráfico touchscreen com sinóptico de fluxo de energia' }
    ],
    targetAudience: ['Hospitais e Unidades de Cuidados Intensivos', 'Laboratórios de Análises e Investigação', 'Centros de Dados e Salas de Servidores'],
    certifications: ['IEC 62040-3', 'ISO 9001', 'CE Certified'],
    image: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&w=800&q=80',
    featured: false,
    modelCode: 'CAISOU-UPS-10K',
    warranty: '24 meses com suporte a baterias',
    includesTraining: true
  },

  // --- MOBILIÁRIO TÉCNICO & EXAUSTÃO ---
  {
    id: 'capela-exaustao-gases',
    name: 'Capela de Exaustão de Gases Química e Toxicológica com Lavador de Gases',
    category: 'mobiliario_tecnico',
    subcategory: 'Segurança Coletiva & Mobiliário',
    tagline: 'Proteção total ao operador e meio ambiente contra vapores corrosivos e tóxicos.',
    description: 'Fabricada com estrutura em fibra de vidro reforçada e tampo em resina epóxi resistente a ácidos concentrados. Guilhotina em vidro temperado com contrapeso e exaustor centrífugo em polipropileno anticorrosivo.',
    features: [
      'Exaustor centrífugo com carcaça e rotor em polipropileno imune a ácidos',
      'Painel digital microprocessado para controle de vazão de ar e iluminação',
      'Pia em resina com torneira para água e bico para gás GLP/Natural',
      'Válvula de segurança com alarme sonoro de fluxo de ar inadequado',
      'Módulo inferior ventilado para guarda segura de solventes e reagentes'
    ],
    specs: [
      { label: 'Dimensões Úteis', value: '1.200mm / 1.500mm / 1.800mm de largura' },
      { label: 'Velocidade Facial', value: '0.5 m/s constante conforme norma ASHRAE 110' },
      { label: 'Iluminação', value: 'LED 1000 Lux isolada da câmara de trabalho' },
      { label: 'Exaustor', value: 'Motor blindado IP55 com vazão de até 1.800 m³/h' }
    ],
    targetAudience: ['Laboratórios Universitários', 'Indústria Química e Farmacêutica', 'Centros de Investigação Científica'],
    certifications: ['ASHRAE 110', 'EN 14175', 'Normas Internacionais de Biossegurança'],
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modelCode: 'CAISOU-CAP-150',
    warranty: '36 meses com certificação de teste de fumaça inicial',
    includesTraining: true
  },
  {
    id: 'bancada-modular-epoxi',
    name: 'Bancada Laboratorial Modular com Tampo em Resina Epóxi e Cuba Integrada',
    category: 'mobiliario_tecnico',
    subcategory: 'Mobiliário Especializado',
    tagline: 'Superfície monolítica sem juntas, resistente a calor, choque mecânico e solventes.',
    description: 'Projetada para atender padrões ergonômicos internacionais e resistir ao uso contínuo em ambientes acadêmicos e hospitalares. Estrutura tubular em aço tratado com pintura eletrostática e armários em acabamento naval.',
    features: [
      'Tampo monolítico em Resina Epóxi quimicamente inerte e não porosa',
      'Pontos embutidos para eletricidade 220V 50Hz, rede lógica Cat6 e gases especiais',
      'Prateleiras superiores com borda de contenção para reagentes de uso frequente',
      'Pés niveladores antivibratórios em polímero de alta resistência'
    ],
    specs: [
      { label: 'Módulos', value: 'Comprimentos de 1.2m, 1.8m, 2.4m lineares ou em ilha central' },
      { label: 'Carga Máxima', value: 'Até 400 kg distribuídos por metro linear' },
      { label: 'Resistência Química', value: 'Ácido Clorídrico, Sulfúrico, Nítrico e Solventes Orgânicos' }
    ],
    targetAudience: ['Escolas e Complexos Escolares', 'Universidades', 'Laboratórios de Patologia e Análises'],
    certifications: ['SEFA-8 (Scientific Equipment and Furniture Association)', 'ISO 9001'],
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80',
    featured: false,
    modelCode: 'CAISOU-BAN-EPOX',
    warranty: '5 anos na estrutura e tampo',
    includesTraining: false
  },

  // --- REAGENTES & CONSUMÍVEIS ---
  {
    id: 'kit-micropipetas-autoclavaveis',
    name: 'Conjunto de Micropipetas Monocanal e Multicanal Totalmente Autoclaváveis',
    category: 'reagentes_consumiveis',
    subcategory: 'Manuseio de Líquidos',
    tagline: 'Ergonomia premiada com mecanismo de baixa força de ejeção e alta precisão ISO 8655.',
    description: 'Conjunto essencial para dosagens volumétricas rigorosas em biologia molecular, PCR, bioquímica e rotina clínica. Totalmente autoclavável a 121°C sem necessidade de desmontagem.',
    features: [
      'Gama volumétrica completa: 0.5-10µL, 10-100µL, 20-200µL e 100-1000µL',
      'Resistência extrema a UV e reagentes químicos corrosivos',
      'Ejetor de ponteiras com amortecimento para prevenir lesões por esforço repetitivo',
      'Acompanha suporte de bancada rotativo para 6 pipetas e ferramenta de calibração rápida'
    ],
    specs: [
      { label: 'Exatidão', value: 'Erro sistemático < 0.6% em volume nominal' },
      { label: 'Precisão', value: 'Desvio padrão < 0.2% (repetibilidade impecável)' },
      { label: 'Certificado', value: 'Acompanha relatório individual de calibração com rastreabilidade metrológica' }
    ],
    targetAudience: ['Laboratórios de Investigação', 'Hospitais e Clínicas', 'Faculdades de Ciências da Saúde'],
    certifications: ['ISO 8655', 'CE IVD', 'Calibração Certificada'],
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    modelCode: 'CAISOU-PIP-SET4',
    warranty: '24 meses com recalibração anual',
    includesTraining: true
  }
];
