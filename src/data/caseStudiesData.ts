import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'complexo-escolar-ciencias',
    title: 'Modernização Integral de 4 Laboratórios de Ciências e Formação Docente',
    clientType: 'Complexo Escolar & Instituto Politécnico',
    location: 'Luanda / Icolo e Bengo (2.500 Estudantes)',
    scope: [
      'Laboratório Multidisciplinar de Biologia com 20 Microscópios Binoculares LED',
      'Laboratório de Química com Capela de Exaustão e Vidraria Borossilicato 3.3',
      'Espaço de Física Experimental com Bancadas Modulares e Sensores Didáticos',
      'CAISOU Academy: Capacitação Prática de 42 Professores e Técnicos Laboratoriais'
    ],
    challenge: 'A instituição possuía laboratórios com falta de vidraria técnica adequada e o corpo docente sentia insegurança para conduzir aulas práticas experimentais alinhadas ao programa de ensino.',
    solution: 'A CAISOU realizou o diagnóstico completo das instalações, forneceu equipamentos robustos e resistentes a quedas, montou bancadas com capela de exaustão e ministrou formação prática intensiva via CAISOU Academy.',
    results: [
      'Aumento de mais de 250% na frequência de aulas práticas semanais',
      'Zero incidentes laboratoriais registrados com os novos protocolos de segurança',
      'Excelente desempenho dos estudantes nas feiras provinciais de ciências e inovação'
    ],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote: 'A CAISOU não se limitou a entregar equipamentos de qualidade excepcional; esteve presente na nossa instituição a capacitar os nossos professores de biologia, química e física. A aprendizagem dos alunos deu um salto qualitativo.',
      author: 'Prof. Manuel Domingos',
      role: 'Director Pedagógico e Coordenador de Ciências'
    }
  },
  {
    id: 'hospital-analises-clinicas',
    title: 'Automação Bioquímica, Esterilização e Continuidade Energética 24 Horas',
    clientType: 'Centro Hospitalar & Laboratório de Análises Clínicas',
    location: 'Hospital Geral / Província de Luanda e Bengo',
    scope: [
      '2x Analisadores Bioquímicos Automáticos de 200 Testes/Hora de Alta Precisão',
      'Autoclave a Vácuo Fracionado Classe B para Central de Esterilização Hospitalar',
      'UPS Senoidal Online 10kVA com autonomia estendida contra oscilações de energia',
      'Suporte Técnico Dedicado e Manutenção Preventiva Programada com peças em estoque'
    ],
    challenge: 'As constantes oscilações e cortes na rede eléctrica causavam paragens em analisadores clínicos sensíveis e atrasos na emissão de exames urgentes para o banco de urgência.',
    solution: 'Instalação de UPS online de dupla conversão com comutação de 0ms, protecção integral dos sistemas analíticos, calibração metrológica certificada e treino operacional da equipa de análises clínicas.',
    results: [
      'Redução do tempo de entrega de resultados de exames de 3 horas para 45 minutos',
      'Economia substancial no consumo mensal de reagentes e consumíveis',
      '100% de disponibilidade operacional no banco de socorro e medicina interna'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote: 'A robustez dos equipamentos e a prontidão da assistência técnica da CAISOU em Angola deram total segurança e tranquilidade ao nosso corpo clínico e aos pacientes atendidos diariamente.',
      author: 'Dra. Teresa Sebastião',
      role: 'Directora Técnica de Laboratório Clínico'
    }
  },
  {
    id: 'campus-infra-ti',
    title: 'Infraestrutura de Servidores e Conectividade Wi-Fi 6 para Campus Universitário',
    clientType: 'Universidade & Instituto Superior Politécnico',
    location: 'Campus Universitário / Angola (5.000 Estudantes)',
    scope: [
      'Cluster de Servidores Rack 2U Enterprise com RAID NVMe e Fontes Redundantes',
      'Rede Estruturada Cat6A com backbone em Fibra Óptica e Switches Gerenciáveis',
      'Cobertura Wi-Fi 6 de alta densidade para anfiteatros, bibliotecas e laboratórios',
      'CAISOU Academy: Capacitação Avançada em Gestão de Redes e Segurança para Equipa de TI'
    ],
    challenge: 'Sobrecarga frequente nos sistemas de gestão académica durante matrículas e dificuldades na ligação de alta velocidade entre os laboratórios de informática e servidores centrais.',
    solution: 'Desenho de arquitectura de datacenter de alta disponibilidade, instalação de cablagem estruturada certificada e segmentação segura de redes com formação técnica da equipa local.',
    results: [
      'Capacidade para mais de 4.000 acessos simultâneos sem lentidão ou quedas',
      'Velocidade interna de rede maximizada com latência inferior a 3ms',
      'Sistemas de cópia de segurança e recuperação de desastres operando 100% automatizados'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    testimonial: {
      quote: 'Com o apoio da CAISOU, modernizámos toda a infraestrutura digital do nosso instituto. O suporte técnico e a formação da equipa foram decisivos para o sucesso da transição tecnológica.',
      author: 'Eng. António Kiala',
      role: 'Responsável pelo Gabinete de Tecnologias de Informação'
    }
  }
];

