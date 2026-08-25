import React, { useState } from 'react';
import { caseStudiesData } from '../data/caseStudiesData';
import { CaseStudy } from '../types';
import {
  CheckCircle,
  TrendingUp,
  Building,
  Quote,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenQuoteBuilder: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenQuoteBuilder }) => {
  const [activeCase, setActiveCase] = useState<CaseStudy>(caseStudiesData[0]);

  return (
    <section id="casos-sucesso" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
            Resultados Comprovados
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Projetos Reais da Concepção ao Impacto Educacional e Clínico
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Veja como instituições de ensino, hospitais e universidades transformaram suas rotinas com os equipamentos, infraestrutura e capacitação da CAISOU.
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {caseStudiesData.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(study)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCase.id === study.id
                  ? 'bg-[#0F52BA] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {study.clientType}
            </button>
          ))}
        </div>

        {/* Active Case Study Detail Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Image & Testimonial */}
          <div className="lg:col-span-5 relative bg-slate-900 flex flex-col justify-between text-white p-6 sm:p-8">
            <div className="absolute inset-0 opacity-40">
              <img
                src={activeCase.image}
                alt={activeCase.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>

            {/* Content overlaid on image */}
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-full inline-block">
                {activeCase.location}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {activeCase.title}
              </h3>
            </div>

            {/* Testimonial Quote */}
            {activeCase.testimonial && (
              <div className="relative z-10 mt-8 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs">
                <Quote className="w-5 h-5 text-emerald-400 mb-2 opacity-80" />
                <p className="italic text-slate-100 mb-3 leading-relaxed">
                  "{activeCase.testimonial.quote}"
                </p>
                <div className="font-bold text-white">{activeCase.testimonial.author}</div>
                <div className="text-[11px] text-emerald-300">{activeCase.testimonial.role}</div>
              </div>
            )}
          </div>

          {/* Right Column: Challenge, Solution & Results */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
                  <div className="text-xs font-bold text-red-800 uppercase tracking-wider mb-1">
                    O Desafio da Instituição:
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{activeCase.challenge}</p>
                </div>

                <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                    A Solução Integrada CAISOU:
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{activeCase.solution}</p>
                </div>
              </div>

              {/* Scope of delivery */}
              <div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Escopo Entregue (Equipamentos & Formação):
                </div>
                <div className="space-y-1.5">
                  {activeCase.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measured Results */}
              <div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Resultados Alcançados:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeCase.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 text-center"
                    >
                      {res}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Quer um projeto customizado para a sua instituição?
              </span>
              <button
                onClick={onOpenQuoteBuilder}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
              >
                <span>Solicitar Estudo Prévio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
