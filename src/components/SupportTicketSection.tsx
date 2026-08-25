import React, { useState } from 'react';
import { ServiceRequest } from '../types';
import {
  Headphones,
  Wrench,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Send,
  AlertTriangle,
  PhoneCall,
  Activity
} from 'lucide-react';

export const SupportTicketSection: React.FC = () => {
  const [ticketData, setTicketData] = useState<Partial<ServiceRequest>>({
    serviceType: 'calibracao',
    urgency: 'media',
    institutionName: '',
    contactEmail: '',
    contactPhone: '',
    equipmentType: '',
    description: ''
  });

  const [ticketGenerated, setTicketGenerated] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketGenerated(newId);
  };

  return (
    <section id="suporte-tecnico" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Support Overview & SLAs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Headphones className="w-3.5 h-3.5 text-blue-600" />
              Central de Assistência Técnica & Suporte TI
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Suporte Especializado para Manter Seus Laboratórios e Servidores em Operação Contínua
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Equipa de engenheiros clínicos e técnicos de redes prontos para atendimentos preventivos, calibração metrológica certificada, revisões de biossegurança e chamados de emergência em Angola.
            </p>

            {/* SLA Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  SLA de Emergência (4h)
                </div>
                <p className="text-[11px] text-slate-500">
                  Atendimento prioritário para paradas em hospitais e servidores críticos.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                  <Activity className="w-4 h-4 text-blue-600" />
                  Calibração Certificada (IANORQ)
                </div>
                <p className="text-[11px] text-slate-500">
                  Rastreabilidade metrológica para auditorias e certificações sanitárias MINSA.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                  <Wrench className="w-4 h-4 text-indigo-600" />
                  Peças Originais em Luanda
                </div>
                <p className="text-[11px] text-slate-500">
                  Lâmpadas, sensores, tubulações e componentes eletrónicos a pronta-entrega.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Garantia de Manutenção
                </div>
                <p className="text-[11px] text-slate-500">
                  Garantia técnica integral em todos os serviços e peças substituídas.
                </p>
              </div>
            </div>

            {/* Direct hotline */}
            <div className="p-4 rounded-xl bg-[#07244C] text-white flex items-center justify-between">
              <div>
                <div className="text-xs text-blue-200">Plantão Técnico & Emergências:</div>
                <div className="text-base font-bold text-emerald-400">+244 937 283 789</div>
              </div>
              <a
                href="https://wa.me/244937283789?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20da%20CAISOU%20Angola"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Ticket Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            {ticketGenerated ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Chamado Aberto com Sucesso!</h3>
                <div className="inline-block px-4 py-2 bg-white rounded-xl border border-slate-300 font-mono text-sm font-bold text-blue-700">
                  Protocolo: {ticketGenerated}
                </div>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Nossa equipe técnica entrará em contato com o responsável informado para confirmar o agendamento da visita técnica ou diagnóstico remoto.
                </p>
                <button
                  onClick={() => setTicketGenerated(null)}
                  className="px-5 py-2.5 rounded-xl bg-blue-700 text-white text-xs font-bold hover:bg-blue-800"
                >
                  Abrir Outro Chamado
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Abertura de Chamado Técnico / Agendamento de Manutenção
                  </h3>
                  <p className="text-xs text-slate-500">
                    Preencha os detalhes do equipamento ou da infraestrutura que necessita de suporte.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Tipo de Serviço Solicitado *
                    </label>
                    <select
                      value={ticketData.serviceType}
                      onChange={(e) =>
                        setTicketData({
                          ...ticketData,
                          serviceType: e.target.value as ServiceRequest['serviceType']
                        })
                      }
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    >
                      <option value="calibracao">Calibração & Emissão de Laudo Técnico</option>
                      <option value="manutencao_preventiva">Manutenção Preventiva Periódica</option>
                      <option value="manutencao_corretiva">Manutenção Corretiva (Reparo / Troca de Peças)</option>
                      <option value="consultoria_infra_ti">Suporte a Servidores & Redes de TI</option>
                      <option value="treinamento_equipe">Agendamento de Treinamento Técnico In-Loco</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nível de Urgência *
                    </label>
                    <select
                      value={ticketData.urgency}
                      onChange={(e) =>
                        setTicketData({
                          ...ticketData,
                          urgency: e.target.value as ServiceRequest['urgency']
                        })
                      }
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    >
                      <option value="baixa">Baixa (Planejamento / Preventiva de rotina)</option>
                      <option value="media">Média (Equipamento com oscilação, mas operando)</option>
                      <option value="alta">Alta (Equipamento inoperante em rotina)</option>
                      <option value="critica_parada_laboratorio">Crítica (Parada total de laboratório ou hospital)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Instituição / Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      value={ticketData.institutionName}
                      onChange={(e) =>
                        setTicketData({ ...ticketData, institutionName: e.target.value })
                      }
                      placeholder="Nome do Hospital, Escola ou Lab"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Equipamento / Modelo / Marca *
                    </label>
                    <input
                      type="text"
                      required
                      value={ticketData.equipmentType}
                      onChange={(e) =>
                        setTicketData({ ...ticketData, equipmentType: e.target.value })
                      }
                      placeholder="Ex: Analisador Bioquímico CAISOU / Servidor 2U"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      E-mail do Responsável *
                    </label>
                    <input
                      type="email"
                      required
                      value={ticketData.contactEmail}
                      onChange={(e) =>
                        setTicketData({ ...ticketData, contactEmail: e.target.value })
                      }
                      placeholder="geral@instituicao.ao"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Telefone / WhatsApp de Contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      value={ticketData.contactPhone}
                      onChange={(e) =>
                        setTicketData({ ...ticketData, contactPhone: e.target.value })
                      }
                      placeholder="+244 937 283 789"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Descrição do Problema ou do Escopo de Calibração *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={ticketData.description}
                    onChange={(e) =>
                      setTicketData({ ...ticketData, description: e.target.value })
                    }
                    placeholder="Descreva sintomas, códigos de erro no painel, datas limite ou periodicidade desejada..."
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0F52BA] hover:bg-[#0B408C] text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Registrar Chamado Técnico</span>
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
