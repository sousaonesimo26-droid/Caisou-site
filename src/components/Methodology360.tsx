import React from 'react';
import {
  Compass,
  PackageCheck,
  Wrench,
  GraduationCap,
  Headset,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

interface Methodology360Props {
  onOpenQuoteBuilder: () => void;
  onExploreAcademy: () => void;
}

export const Methodology360: React.FC<Methodology360Props> = ({
  onOpenQuoteBuilder,
  onExploreAcademy,
}) => {
  const steps = [
    {
      number: '01',
      title: 'Consultoria & Diagnóstico da Ideia',
      subtitle: 'Entendimento pedagógico e clínico',
      description:
        'Analisamos a demanda real da sua instituição: espaço físico, grade curricular, volume de exames clínicos ou capacidade de rede de TI. Desenhamos a especificação técnica sem compras desnecessárias.',
      icon: Compass,
      color: 'bg-blue-600',
      badge: 'Planejamento Inicial'
    },
    {
      number: '02',
      title: 'Fornecimento com Rastreabilidade',
      subtitle: 'Marcas certificadas e durabilidade',
      description:
        'Equipamentos de alta precisão com conformidade estrita às normas técnicas (ISO, IANORQ, MINSA, CE e directivas internacionais). Logística segura e embalagens com protecção para vidrarias e sensores sensíveis.',
      icon: PackageCheck,
      color: 'bg-emerald-600',
      badge: 'Qualidade Garantida'
    },
    {
      number: '03',
      title: 'Instalação, Calibração & Montagem',
      subtitle: 'Engenharia e segurança técnica',
      description:
        'A nossa equipa técnica realiza a montagem de bancadas, instalação eléctrica e de rede, testes de exaustão em hottes e calibração metrológica inicial com emissão de relatório técnico.',
      icon: Wrench,
      color: 'bg-indigo-600',
      badge: 'Execução Técnica'
    },
    {
      number: '04',
      title: 'CAISOU Academy: Formação Docente & Técnica',
      subtitle: 'Capacitação prática para uso real',
      description:
        'Treinamento prático direto com professores de ciências, biomédicos e equipes de suporte. Ensinamos do manuseio correto à elaboração de experimentos e rotinas seguras de esterilização.',
      icon: GraduationCap,
      color: 'bg-emerald-700',
      badge: 'Diferencial Exclusivo'
    },
    {
      number: '05',
      title: 'Suporte Técnico Contínuo & Pós-Venda',
      subtitle: 'Manutenção preventiva e peças de reposição',
      description:
        'Contratos com SLA ágil, canal direto de chamados técnicos, revisões periódicas programadas e fornecimento contínuo de consumíveis e reagentes analíticos.',
      icon: Headset,
      color: 'bg-blue-800',
      badge: 'Assistência Permanente'
    }
  ];

  return (
    <section id="metodologia" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Metodologia 360° CAISOU
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Da Concepção da Ideia à Formação Contínua dos Profissionais
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Não somos apenas fornecedores de produtos. Somos parceiros estratégicos que garantem que sua instituição aproveite 100% do potencial de cada equipamento adquirido.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm" style={{ backgroundColor: step.color === 'bg-blue-600' ? '#0F52BA' : step.color === 'bg-emerald-600' ? '#16783D' : step.color === 'bg-indigo-600' ? '#4F46E5' : step.color === 'bg-emerald-700' ? '#0F6D38' : '#07244C' }}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 mb-3">{step.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Etapa {idx + 1} de 5</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Value Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#07244C] to-[#0F52BA] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Sua instituição precisa de consultoria técnica para um novo laboratório ou sala de servidores?
            </h3>
            <p className="text-sm text-slate-200 max-w-2xl">
              Nossos especialistas em laboratórios e infraestrutura de TI realizam uma avaliação diagnóstica sem custos para dimensionar a solução exata.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteBuilder}
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Solicitar Consultoria Gratuita
            </button>
            <button
              onClick={onExploreAcademy}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
            >
              Ver Formações Academy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
