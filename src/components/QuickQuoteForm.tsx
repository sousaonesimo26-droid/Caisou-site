import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Building,
  Sparkles,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';

export const QuickQuoteForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institution: '',
    type: 'Escola Privada',
    responsible: '',
    email: '',
    phone: '',
    interest: 'Laboratório Educacional Completo',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá, gostaria de solicitar uma cotação/consultoria da CAISOU para minha instituição: ${formData.institution || ''} (${formData.type}). Tenho interesse em: ${formData.interest}. Localização: Angola.`
    );
    window.open(`https://wa.me/244937283789?text=${text}`, '_blank');
  };

  return (
    <section id="orcamento-rapido" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Atendimento Consultivo em Angola
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Fale com nossos engenheiros e especialistas pedagógicos
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Seja para montar um novo laboratório escolar do zero em qualquer província, automatizar a rotina de análises de um hospital central ou municipal, ou modernizar o parque de servidores e rede da universidade, a equipa da CAISOU desenha a proposta sob medida a partir da nossa sede em Zango 0 (Icolo e Bengo).
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Atendimento especializado para Concursos Públicos, Ministérios e Governos Provinciais</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Dimensionamento de layout 3D e instalações eléctricas e hidráulicas</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Capacitação in-company inclusa através da CAISOU Academy</span>
              </div>
            </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +244 937 283 789</span>
                </button>
              </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6 bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Solicitação Recebida!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  O nosso consultor técnico em Angola já iniciou a análise da sua solicitação e entrará em contacto com brevidade.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl text-xs font-bold text-white cursor-pointer"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-700 pb-3">
                  <h3 className="text-lg font-bold text-white">Solicitar Proposta ou Contacto de Consultor</h3>
                  <p className="text-xs text-slate-400">Resposta técnica ágil e personalizada para instituições em Angola</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Instituição / Organização *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="Ex: Complexo Escolar / Hospital Geral"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Tipo de Organização
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option value="Colégio / Escola Privada">Colégio / Escola Privada</option>
                      <option value="Complexo Escolar Público">Complexo Escolar Público</option>
                      <option value="Universidade / Instituto Superior">Universidade / Instituto Superior</option>
                      <option value="Hospital / Centro de Saúde">Hospital / Centro de Saúde</option>
                      <option value="Ministério / Governo Provincial">Ministério / Governo Provincial</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Seu Nome / Cargo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.responsible}
                      onChange={(e) => setFormData({ ...formData, responsible: e.target.value })}
                      placeholder="Ex: Prof. Manuel (Director Geral)"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+244 937 283 789"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    E-mail Institucional *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="geral@instituicao.ao"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Principal Interesse
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="Laboratório Educacional Completo">Laboratório Educacional Completo (Física/Química/Biologia)</option>
                    <option value="Equipamentos Hospitalares e Clínicos">Equipamentos Hospitalares e Clínicos (Bioquímica/Autoclaves/Centrífugas)</option>
                    <option value="Servidores e Infraestrutura de TI">Servidores Rack, Redes Wi-Fi 6 e UPS Senoidal</option>
                    <option value="CAISOU Academy (Capacitação de Docentes e Técnicos)">CAISOU Academy (Capacitação de Docentes e Equipes de Saúde)</option>
                    <option value="Contrato de Manutenção Preventiva e Calibração">Contrato de Manutenção Preventiva e Calibração Certificada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Detalhes Adicionais (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Localização da instituição, província, número de laboratórios ou equipamentos requeridos..."
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitação de Contacto</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
