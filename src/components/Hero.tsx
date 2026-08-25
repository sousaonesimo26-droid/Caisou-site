import React from 'react';
import {
  GraduationCap,
  Microscope,
  Server,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Zap,
  Award,
  Users
} from 'lucide-react';

interface HeroProps {
  onExploreCatalog: () => void;
  onExploreAcademy: () => void;
  onOpenQuoteBuilder: () => void;
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onExploreAcademy,
  onOpenQuoteBuilder,
  onSelectCategory,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#07244C] to-[#0A3875] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Graphic Pattern: Subtle Tech Grid & Scientific Nodes */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="techGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60A5FA" strokeWidth="0.8" />
              <circle cx="40" cy="40" r="1.5" fill="#34D399" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
      </div>

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>CAISOU • Comércio & Serviços Especializados</span>
              <span className="hidden sm:inline text-blue-300/40">•</span>
              <span className="hidden sm:inline text-emerald-300 font-bold">Da Ideia à Formação</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Soluções que transformam laboratórios e a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-emerald-300">
                infraestrutura digital
              </span>{' '}
              da sua instituição.
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Fornecimento de equipamentos de alta precisão para <strong>laboratórios educacionais</strong> (escolas e universidades) e <strong>clínico-hospitalares</strong>, infraestrutura robusta de <strong>TI e redes</strong>, e capacitação contínua para docentes e profissionais através da <strong>CAISOU Academy</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreCatalog}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-900/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Microscope className="w-5 h-5" />
                <span>Explorar Equipamentos & Catálogo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreAcademy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-xs transition-all cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <span>CAISOU Academy (Cursos)</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-blue-400/20 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Escolas Públicas & Privadas</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hospitais & Clínicas MINSA</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Infraestrutura de TI & Redes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Formação com Certificado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Solution Navigator Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/80 border border-blue-400/30 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    O que sua instituição precisa hoje?
                  </h2>
                  <p className="text-xs text-slate-300">Selecione para atendimento direcionado</p>
                </div>
                <span className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                  Ciclo 360°
                </span>
              </div>

              {/* 4 Clickable Quick Focus Areas */}
              <div className="space-y-2.5">
                {/* 1. Educacional */}
                <button
                  onClick={() => {
                    onSelectCategory('educacional');
                    scrollTo('catalogo');
                  }}
                  className="w-full group flex items-center justify-between p-3.5 rounded-xl bg-slate-800/70 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/60 transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-300 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-blue-200">
                        Laboratório Escolar ou Universitário
                      </div>
                      <div className="text-xs text-slate-400">
                        Kits de Física, Química, Biologia, Vidrarias e Robótica
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                </button>

                {/* 2. Hospitalar / Clínico */}
                <button
                  onClick={() => {
                    onSelectCategory('hospitalar_clinico');
                    scrollTo('catalogo');
                  }}
                  className="w-full group flex items-center justify-between p-3.5 rounded-xl bg-slate-800/70 hover:bg-emerald-950/50 border border-slate-700 hover:border-emerald-400/60 transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Microscope className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-200">
                        Equipamentos Clínicos & Hospitalares
                      </div>
                      <div className="text-xs text-slate-400">
                        Analisadores bioquímicos, centrífugas, autoclaves e calibração
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                </button>

                {/* 3. TI & Infraestrutura */}
                <button
                  onClick={() => {
                    onSelectCategory('ti_infraestrutura');
                    scrollTo('catalogo');
                  }}
                  className="w-full group flex items-center justify-between p-3.5 rounded-xl bg-slate-800/70 hover:bg-indigo-950/50 border border-slate-700 hover:border-indigo-400/60 transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-300 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-indigo-200">
                        TI, Servidores & Redes Institucionais
                      </div>
                      <div className="text-xs text-slate-400">
                        Servidores Rack, Wi-Fi 6, Nobreaks e Suporte Especializado
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                </button>

                {/* 4. CAISOU Academy */}
                <button
                  onClick={() => {
                    scrollTo('academy');
                  }}
                  className="w-full group flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-emerald-900/30 to-blue-900/30 hover:from-emerald-900/50 hover:to-blue-900/50 border border-emerald-500/40 hover:border-emerald-400 transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500 text-white shadow-xs">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-emerald-300 flex items-center gap-1.5">
                        CAISOU Academy: Capacitação
                        <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-bold">
                          NOVO
                        </span>
                      </div>
                      <div className="text-xs text-slate-300">
                        Treinamento prático de professores, técnicos e biomédicos
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
                </button>
              </div>

              {/* Fast Quote CTA in Card */}
              <div className="pt-2">
                <button
                  onClick={onOpenQuoteBuilder}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm shadow-md transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Montar Lista de Cotação Personalizada</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Numbers / Metrics Ribbon */}
        <div className="mt-14 pt-8 border-t border-blue-400/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
            <div className="text-xs sm:text-sm text-slate-300">Conformidade com Normas e Rastreabilidade</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">+4.800</div>
            <div className="text-xs sm:text-sm text-slate-300">Professores e Técnicos Capacitados</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">360°</div>
            <div className="text-xs sm:text-sm text-slate-300">Da Ideia até a Formação e Suporte</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">SLA 4h</div>
            <div className="text-xs sm:text-sm text-slate-300">Suporte Técnico e Peças Originais</div>
          </div>
        </div>
      </div>
    </div>
  );
};
