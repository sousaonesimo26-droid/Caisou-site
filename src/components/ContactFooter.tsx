import React, { useState } from 'react';
import { Logo } from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  GraduationCap,
  Microscope,
  Server,
  BookOpen,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  Cloud
} from 'lucide-react';

interface ContactFooterProps {
  onOpenCloudflareGuide: () => void;
  onSelectCategory: (category: string) => void;
  onExploreAcademy: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onOpenCloudflareGuide,
  onSelectCategory,
  onExploreAcademy,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'A CAISOU atende compras públicas, ministérios e concursos em Angola?',
      a: 'Sim! Possuímos estrutura jurídica e fiscal regularizada em Angola (NIF regularizado, certidões fiscais e comerciais em dia), com capacidade para responder a concursos públicos, concursos limitados por prévia qualificação e contratações directas para o Ministério da Educação (MED), Ministério do Ensino Superior (MESCTI), Ministério da Saúde (MINSA) e Governos Provinciais.'
    },
    {
      q: 'Como funciona a capacitação da CAISOU Academy nas escolas, universidades e hospitais?',
      a: 'A capacitação pode ser realizada presencialmente in-company (nas próprias instalações da instituição em qualquer província de Angola) com os equipamentos montados e em funcionamento, ou em regime híbrido. Os nossos formadores fornecem manuais práticos, roteiros pedagógicos e emitem certificados oficiais de qualificação.'
    },
    {
      q: 'Os equipamentos clínicos e laboratoriais possuem certificação e calibração metrológica?',
      a: 'Sim, todos os equipamentos cumprem com as exigências sanitárias e regulamentares de Angola e padrões internacionais (ISO 9001, ISO 13485, CE IVD e conformidade com os requisitos do MINSA e do IANORQ - Instituto Angolano de Normalização e Qualidade), com emissão de laudo técnico de calibração.'
    },
    {
      q: 'Qual o prazo de garantia e assistência técnica em Angola?',
      a: 'Oferecemos garantia com cobertura técnica local em Angola de 12 a 36 meses, com peças de reposição em estoque no nosso centro operacional em Zango 0 (Icolo e Bengo), contratos de manutenção preventiva periódica e resposta técnica rápida para chamados críticos.'
    }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-[#051937] text-slate-300 pt-16 pb-12 border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* FAQ Section */}
        <div className="border-b border-blue-900/40 pb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Dúvidas Frequentes
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Perguntas Comuns sobre Fornecimento e Capacitação em Angola
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-xl border border-slate-800 p-4 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-bold text-xs sm:text-sm text-white hover:text-emerald-300 gap-3"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" size="md" />
            <p className="text-xs text-slate-400 leading-relaxed">
              Empresa angolana especializada no fornecimento integrado de materiais para laboratórios educacionais e clínicos, infraestrutura de TI e capacitação contínua de professores e profissionais de saúde com a CAISOU Academy.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Empresa Certificada ISO 9001 • Padrões IANORQ & MINSA</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Cloud className="w-4 h-4 text-sky-400" />
                <span>Pronto para Deploy no Cloudflare Pages</span>
              </div>
            </div>
          </div>

          {/* Solutions Navigation (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Soluções & Pilares
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('educacional');
                    scrollTo('catalogo');
                  }}
                  className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors text-left"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  Laboratórios Escolares & Universitários
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('hospitalar_clinico');
                    scrollTo('catalogo');
                  }}
                  className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors text-left"
                >
                  <Microscope className="w-3.5 h-3.5 text-emerald-400" />
                  Equipamentos Clínico-Hospitalares
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('ti_infraestrutura');
                    scrollTo('catalogo');
                  }}
                  className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors text-left"
                >
                  <Server className="w-3.5 h-3.5 text-indigo-400" />
                  Servidores, Redes & TI Institucional
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onExploreAcademy();
                    scrollTo('academy');
                  }}
                  className="hover:text-emerald-300 flex items-center gap-1.5 text-emerald-400 font-bold transition-colors text-left"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  CAISOU Academy (Cursos & Formação)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('metodologia')}
                  className="hover:text-slate-100 transition-colors"
                >
                  Metodologia 360° (Da Ideia à Formação)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('suporte-tecnico')}
                  className="hover:text-slate-100 transition-colors"
                >
                  Abertura de Chamados & Calibração
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contacts & Channels (Col 8-12) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Canais Oficiais de Atendimento em Angola
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Endereço Sede:</strong> Zango 0, Icolo e Bengo - Angola. Atendimento e logística para todas as 18 províncias.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+244937283789" className="hover:text-white transition-colors">
                  <span>Contacto Geral: <strong>+244 937 283 789</strong></span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/244937283789?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20CAISOU"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors font-medium"
                >
                  WhatsApp Directo: <strong>+244 937 283 789</strong>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:geral@caisou.ao" className="hover:text-white transition-colors">
                  <span>Email Oficial: <strong>geral@caisou.ao</strong></span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Segunda a Sexta: 08:00 às 17:30 | Plantão Hospitalar e Técnico 24h</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={onOpenCloudflareGuide}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-blue-300 text-[11px] font-semibold rounded-lg border border-slate-700 flex items-center gap-1"
              >
                <Cloud className="w-3.5 h-3.5 text-amber-400" />
                Configuração Cloudflare & Hugo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-8 border-t border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>CAISOU Comércio e Serviços</strong>. Zango 0, Icolo e Bengo - Angola.
            <span className="block sm:inline sm:ml-1 text-[11px] text-slate-400">
              Soluções que transformam, qualidade que faz a diferença.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Contratação Pública & Fornecimento</span>
            <span>Privacidade & Protecção de Dados</span>
            <span>Conformidade Sanitária & IANORQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
