import React, { useState } from 'react';
import {
  GraduationCap,
  Microscope,
  Server,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  Layers,
  Wrench,
  FileCheck
} from 'lucide-react';

interface PillarsSectionProps {
  onSelectCategory: (category: string) => void;
  onExploreAcademy: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  onSelectCategory,
  onExploreAcademy,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'edu' | 'clin' | 'ti' | 'academy'>('all');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pillars = [
    {
      id: 'edu',
      categoryKey: 'educacional',
      title: 'Laboratórios Educacionais',
      subtitle: 'Escolas do I e II Ciclos, Institutos Médios, Técnicos e Universidades',
      badge: 'Escolas Públicas & Privadas',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: GraduationCap,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      borderColor: 'border-blue-200 hover:border-blue-400',
      accentColor: '#0F52BA',
      description:
        'Transformamos salas convencionais em polos vivos de investigação científica. Soluções completas com materiais resistentes ao choque mecânico e térmico, adaptados para o currículo pedagógico e feiras de ciências.',
      highlights: [
        'Kits de Física Experimental (Mecânica, Óptica, Electromagnetismo e Termologia)',
        'Vidrarias de Borossilicato 3.3 calibradas com alta resistência térmica',
        'Microscopia Óptica e Digital com protecção antiqueda para estudantes',
        'Kits de Robótica Educacional e Sensores de Recolha de Dados STEM',
        'Mobiliário escolar ergonómico, bancadas com pias e hottes didáticas'
      ],
      targetInstitutions: 'Colégios, Complexos Escolares, Institutos Médios Politécnicos, Faculdades de Ciências e Engenharia.',
      ctaText: 'Ver Equipamentos Educacionais',
      action: () => {
        onSelectCategory('educacional');
        scrollToSection('catalogo');
      }
    },
    {
      id: 'clin',
      categoryKey: 'hospitalar_clinico',
      title: 'Laboratórios Clínicos & Hospitalares',
      subtitle: 'Alta Precisão, Durabilidade e Conformidade Diagnóstica',
      badge: 'Grau Médico & Pesquisa',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: Microscope,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      borderColor: 'border-emerald-200 hover:border-emerald-400',
      accentColor: '#16783D',
      description:
        'Equipamentos hospitalares e de análises clínicas desenvolvidos para rotinas intensivas 24 horas por dia. Precisão metrológica rigorosa, rastreabilidade e calibração para assistência médica e pesquisas de ponta.',
      highlights: [
        'Analisadores Bioquímicos e Hematológicos Automáticos de alta velocidade',
        'Centrífugas Clínicas Microprocessadas com rotores balanceados e silenciosos',
        'Autoclaves Classe B a Vácuo Fracionado para esterilização profunda',
        'Espectrofotômetros UV-VIS e Câmaras de Conservação Biológica com alarme',
        'Micropipetas autoclaváveis com relatório de calibração metrológica certificada (ISO/IANORQ)'
      ],
      targetInstitutions: 'Hospitais Centrais, Gerais e Municipais, Centros de Diagnóstico e Laboratórios Clínicos.',
      ctaText: 'Ver Linha Clínico-Hospitalar',
      action: () => {
        onSelectCategory('hospitalar_clinico');
        scrollToSection('catalogo');
      }
    },
    {
      id: 'ti',
      categoryKey: 'ti_infraestrutura',
      title: 'TI & Infraestrutura Digital',
      subtitle: 'Servidores, Redes de Alta Densidade e Suporte Especializado',
      badge: 'Missão Crítica',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      icon: Server,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      borderColor: 'border-indigo-200 hover:border-indigo-400',
      accentColor: '#4F46E5',
      description:
        'A espinha dorsal digital da sua instituição. Projetamos, fornecemos e gerenciamos servidores dedicados, redes cabeadas e Wi-Fi 6 de alta densidade, energia ininterrupta e proteção de dados sigilosos.',
      highlights: [
        'Servidores Rack 2U Enterprise com RAID NVMe e fontes redundantes',
        'Cabeamento estruturado Cat6A/Fibra e switches gerenciáveis PoE+ Layer 3',
        'Nobreaks Senoidais Online Dupla Conversão (0ms de transferência)',
        'Firewalls UTM, segurança perimetral e isolamento seguro de redes',
        'Contratos de Suporte Técnico Especializado com SLA de resposta rápido'
      ],
      targetInstitutions: 'Campi Universitários, Redes Escolares, Complexos Hospitalares e Clínicas Integradas.',
      ctaText: 'Ver Soluções de TI',
      action: () => {
        onSelectCategory('ti_infraestrutura');
        scrollToSection('catalogo');
      }
    },
    {
      id: 'academy',
      categoryKey: 'academy',
      title: 'CAISOU Academy',
      subtitle: 'Capacitação Contínua: Do Manuseio à Metodologia Prática',
      badge: 'Formação com Certificado',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
      icon: BookOpen,
      iconColor: 'text-emerald-700',
      iconBg: 'bg-emerald-50',
      borderColor: 'border-emerald-300 hover:border-emerald-500',
      accentColor: '#10B981',
      description:
        'O grande diferencial da CAISOU. Não apenas entregamos caixas: formamos professores, equipes técnicas e profissionais de saúde no manuseio seguro, calibração diária e melhores práticas pedagógicas e clínicas.',
      highlights: [
        'Capacitação Prática de Professores para Aulas Experimentais Dinâmicas',
        'Treinamento Operacional de Analisadores Bioquímicos e Validação de Testes',
        'Cursos de Biossegurança, Boas Práticas (BPL) e Descarte Correto de Resíduos',
        'Workshops In-Company e Híbridos com emissão de certificado oficial',
        'Acompanhamento contínuo e suporte pedagógico para elaboração de roteiros'
      ],
      targetInstitutions: 'Corpo Docente, Técnicos de Laboratório, Biomédicos, Enfermeiros e Gestores de TI.',
      ctaText: 'Conhecer Todos os Cursos da Academy',
      action: () => {
        onExploreAcademy();
        scrollToSection('academy');
      }
    }
  ];

  const filteredPillars = activeTab === 'all' ? pillars : pillars.filter((p) => p.id === activeTab);

  return (
    <section id="pilares" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            Nossos 4 Pilares de Excelência
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Soluções completas e integradas para impulsionar o ensino, a saúde e a tecnologia
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Unimos o fornecimento de ponta à formação humana especializada, garantindo que cada equipamento entregue gere impacto real e duradouro.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0F52BA] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Todos os Pilares (4)
            </button>
            <button
              onClick={() => setActiveTab('edu')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'edu'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              1. Laboratório Educacional
            </button>
            <button
              onClick={() => setActiveTab('clin')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'clin'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              2. Hospitalar & Clínico
            </button>
            <button
              onClick={() => setActiveTab('ti')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'ti'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              3. TI & Infraestrutura
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'academy'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300'
              }`}
            >
              4. CAISOU Academy
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`bg-white rounded-2xl p-6 sm:p-8 border ${pillar.borderColor} shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-xl ${pillar.iconBg} ${pillar.iconColor}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span
                          className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${pillar.badgeColor} mb-1`}
                        >
                          {pillar.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-slate-500 mb-4">{pillar.subtitle}</p>
                  <p className="text-sm text-slate-700 leading-relaxed mb-6">{pillar.description}</p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Principais Soluções & Recursos:
                    </div>
                    {pillar.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Target Institutions Tag */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 mb-6">
                    <span className="font-bold text-slate-800">Público Atendido: </span>
                    {pillar.targetInstitutions}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={pillar.action}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-bold text-sm transition-all group cursor-pointer"
                >
                  <span>{pillar.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
