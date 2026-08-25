import React, { useState } from 'react';
import { QuoteItem, InstitutionInfo, ANGOLA_PROVINCES } from '../types';
import { productsData } from '../data/productsData';
import { Logo } from './Logo';
import {
  X,
  Plus,
  Minus,
  Trash2,
  FileSpreadsheet,
  Printer,
  Send,
  MessageCircle,
  Building,
  CheckCircle2,
  GraduationCap,
  Wrench,
  Sparkles,
  Info
} from 'lucide-react';

interface QuoteBuilderModalProps {
  quoteItems: QuoteItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, qty: number) => void;
  onToggleInstallation: (productId: string) => void;
  onToggleTraining: (productId: string) => void;
  onRemoveItem: (productId: string) => void;
  onClearQuote: () => void;
  onAddProductQuick: (productId: string) => void;
}

export const QuoteBuilderModal: React.FC<QuoteBuilderModalProps> = ({
  quoteItems,
  onClose,
  onUpdateQuantity,
  onToggleInstallation,
  onToggleTraining,
  onRemoveItem,
  onClearQuote,
  onAddProductQuick,
}) => {
  const [activeTab, setActiveTab] = useState<'items' | 'institution' | 'preview'>('items');
  const [institution, setInstitution] = useState<InstitutionInfo>({
    type: 'escola_privada',
    name: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: 'Luanda',
    province: 'Luanda',
    taxId: '',
    projectStage: 'planejamento',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const totalItemsCount = quoteItems.reduce((sum, item) => sum + item.quantity, 0);

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppSend = () => {
    const lines = [
      `*SOLICITAÇÃO DE COTAÇÃO - CAISOU COMÉRCIO E SERVIÇOS (ANGOLA)*`,
      `*Instituição:* ${institution.name || 'Não informada'} (${institution.type})`,
      `*Responsável:* ${institution.contactPerson || 'Não informado'}`,
      `*Contacto:* ${institution.phone || ''} | ${institution.email || ''}`,
      `*Localização:* ${institution.city || ''} - Província de ${institution.province || 'Luanda'}`,
      `*NIF:* ${institution.taxId || 'Não informado'}`,
      `*Etapa do Projecto:* ${institution.projectStage}`,
      ``,
      `*ITENS SELECCIONADOS:*`
    ];

    quoteItems.forEach((item, idx) => {
      lines.push(
        `${idx + 1}. [${item.product.modelCode}] ${item.product.name} - Qtd: ${item.quantity} un.`
      );
      if (item.includeInstallation) lines.push(`   └ Com Montagem e Instalação Técnica`);
      if (item.includeAcademyTraining) lines.push(`   └ Com Capacitação CAISOU Academy`);
    });

    if (institution.additionalNotes) {
      lines.push(``, `*Observações:* ${institution.additionalNotes}`);
    }

    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/244937283789?text=${message}`, '_blank');
  };

  const handleSubmitFormal = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate sent
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] animate-in zoom-in-95">
        {/* Modal Header */}
        <div className="bg-[#07244C] text-white px-6 py-4 flex items-center justify-between border-b border-blue-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/40 text-blue-200 border border-blue-500/40">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                Simulador & Construtor de Cotação Institucional
              </h2>
              <p className="text-xs text-blue-200">
                {totalItemsCount} item(s) selecionado(s) para proposta técnica
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 flex items-center justify-between text-xs font-bold shrink-0">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('items')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'items'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Itens da Cotação ({quoteItems.length})
            </button>
            <button
              onClick={() => setActiveTab('institution')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'institution'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Dados da Instituição
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3. Resumo & Envio
            </button>
          </div>

          {quoteItems.length > 0 && activeTab === 'items' && (
            <button
              onClick={onClearQuote}
              className="text-red-600 hover:text-red-800 text-[11px] font-semibold flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Limpar Lista
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: Items List */}
          {activeTab === 'items' && (
            <div className="space-y-4">
              {quoteItems.length === 0 ? (
                <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800">Sua lista de cotação está vazia</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                    Navegue pelo nosso catálogo e clique no botão <strong>"+ Cotação"</strong> nos equipamentos de interesse para sua escola, universidade, clínica ou hospital em Angola.
                  </p>

                  <div className="mt-6 text-left max-w-lg mx-auto">
                    <div className="text-xs font-bold text-slate-700 mb-2">
                      Adicionar equipamentos sugeridos rapidamente:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {productsData.slice(0, 4).map((p) => (
                        <button
                          key={p.id}
                          onClick={() => onAddProductQuick(p.id)}
                          className="p-2 bg-white rounded-lg border border-slate-200 hover:border-blue-500 text-left text-xs font-semibold text-slate-800 flex items-center justify-between"
                        >
                          <span className="truncate">{p.name}</span>
                          <Plus className="w-4 h-4 text-blue-600 shrink-0 ml-1" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {quoteItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      {/* Product Info */}
                      <div className="flex items-start gap-3 sm:max-w-md">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-14 h-14 rounded-lg object-cover bg-white border border-slate-200 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded">
                            {item.product.modelCode}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 leading-snug mt-0.5">
                            {item.product.name}
                          </h4>
                          <span className="text-xs text-slate-500">{item.product.subcategory}</span>
                        </div>
                      </div>

                      {/* Services checkboxes */}
                      <div className="flex flex-col gap-1.5 text-xs">
                        <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={item.includeInstallation}
                            onChange={() => onToggleInstallation(item.product.id)}
                            className="rounded text-blue-600"
                          />
                          <span>Instalação Técnica</span>
                        </label>
                        <label className="flex items-center gap-2 text-emerald-800 font-semibold cursor-pointer">
                          <input
                            type="checkbox"
                            checked={item.includeAcademyTraining}
                            onChange={() => onToggleTraining(item.product.id)}
                            className="rounded text-emerald-600"
                          />
                          <span className="flex items-center gap-1">
                            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                            Capacitação Academy
                          </span>
                        </label>
                      </div>

                      {/* Quantity & Delete */}
                      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                        <div className="flex items-center bg-white border border-slate-300 rounded-lg overflow-hidden">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                            }
                            className="p-1.5 text-slate-600 hover:bg-slate-100"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1.5 text-slate-600 hover:bg-slate-100"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                          title="Remover da cotação"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-medium">
                      Quer adicionar mais produtos? Feche este simulador ou avance para informar os dados institucionais.
                    </span>
                    <button
                      onClick={() => setActiveTab('institution')}
                      className="px-5 py-2 rounded-xl bg-blue-700 text-white text-xs font-bold hover:bg-blue-800 transition-colors cursor-pointer"
                    >
                      Avançar para Dados da Instituição →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Institution Info Form */}
          {activeTab === 'institution' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Estes dados são utilizados para emitir a proposta técnica formal timbrada da CAISOU, calcular prazos de entrega em Angola e dimensionar as etapas de montagem e capacitação in-company.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tipo de Instituição *
                  </label>
                  <select
                    value={institution.type}
                    onChange={(e) =>
                      setInstitution({
                        ...institution,
                        type: e.target.value as InstitutionInfo['type']
                      })
                    }
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="escola_privada">Colégio / Escola Privada (I e II Ciclos)</option>
                    <option value="escola_publica">Complexo Escolar / Escola Pública</option>
                    <option value="universidade">Universidade / Instituto Superior Politécnico</option>
                    <option value="hospital">Hospital Central / Geral / Municipal</option>
                    <option value="clinica_laboratorio">Clínica Médica / Centro de Diagnóstico</option>
                    <option value="orgao_publico_licitacao">Ministério / Governo Provincial / Concurso Público</option>
                    <option value="outro">Outra Instituição ou Empresa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nome da Instituição / Razão Social *
                  </label>
                  <input
                    type="text"
                    required
                    value={institution.name}
                    onChange={(e) => setInstitution({ ...institution, name: e.target.value })}
                    placeholder="Ex: Complexo Escolar Zango / Hospital Geral de Luanda"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nome do Responsável *
                  </label>
                  <input
                    type="text"
                    required
                    value={institution.contactPerson}
                    onChange={(e) =>
                      setInstitution({ ...institution, contactPerson: e.target.value })
                    }
                    placeholder="Ex: Prof. Manuel / Dra. Teresa"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    E-mail Institucional *
                  </label>
                  <input
                    type="email"
                    required
                    value={institution.email}
                    onChange={(e) => setInstitution({ ...institution, email: e.target.value })}
                    placeholder="geral@instituicao.ao"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={institution.phone}
                    onChange={(e) => setInstitution({ ...institution, phone: e.target.value })}
                    placeholder="+244 937 283 789"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Município / Cidade *</label>
                  <input
                    type="text"
                    value={institution.city}
                    onChange={(e) => setInstitution({ ...institution, city: e.target.value })}
                    placeholder="Ex: Icolo e Bengo, Viana, Luanda..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Província *
                  </label>
                  <select
                    value={institution.province || 'Luanda'}
                    onChange={(e) => setInstitution({ ...institution, province: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    {ANGOLA_PROVINCES.map((prov) => (
                      <option key={prov} value={prov}>
                        {prov}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    NIF Institucional (Angola)
                  </label>
                  <input
                    type="text"
                    value={institution.taxId}
                    onChange={(e) => setInstitution({ ...institution, taxId: e.target.value })}
                    placeholder="Ex: 5000123456"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Fase do Projecto
                  </label>
                  <select
                    value={institution.projectStage}
                    onChange={(e) =>
                      setInstitution({
                        ...institution,
                        projectStage: e.target.value as InstitutionInfo['projectStage']
                      })
                    }
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="planejamento">Planeamento & Orçamento Prévia</option>
                    <option value="compra_imediata">Aquisição Imediata / Aprovada</option>
                    <option value="licitacao">Concurso Público / Termo de Referência</option>
                    <option value="modernizacao">Modernização de Instalações Existentes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Observações Técnicas, Prazos ou Requisitos Especiais
                  </label>
                  <textarea
                    rows={2}
                    value={institution.additionalNotes}
                    onChange={(e) =>
                      setInstitution({ ...institution, additionalNotes: e.target.value })
                    }
                    placeholder="Ex: Necessitamos de 2 turmas de capacitação para professores e entrega antes do início do ano lectivo..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-between">
                <button
                  onClick={() => setActiveTab('items')}
                  className="px-4 py-2 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300"
                >
                  ← Voltar para Itens
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className="px-5 py-2 rounded-xl bg-blue-700 text-white text-xs font-bold hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Gerar Prévia da Proposta →
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: Preview & Submit */}
          {activeTab === 'preview' && (
            <div className="space-y-6">
              {submitted ? (
                <div className="text-center py-10 space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Proposta Técnica Registada com Sucesso!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    A equipa de engenharia e consultores comerciais da CAISOU em Angola já recebeu a sua solicitação. Receberá a proposta formal timbrada em PDF no e-mail <strong>{institution.email || 'cadastrado'}</strong>.
                  </p>
                  <div className="pt-3 flex justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Agilizar no WhatsApp da CAISOU</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="px-4 py-2.5 rounded-xl bg-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-300 cursor-pointer"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-6 print:m-0 print:border-none">
                  {/* Proposta Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
                    <Logo size="sm" />
                    <div className="text-right text-xs text-slate-500">
                      <div className="font-bold text-slate-800">
                        PROPOSTA TÉCNICA DE FORNECIMENTO & CAPACITAÇÃO
                      </div>
                      <div>Endereço: Zango 0, Icolo e Bengo - Angola</div>
                      <div>Emissão: {new Date().toLocaleDateString('pt-PT')}</div>
                      <div>Protocolo: CAISOU-AO-{Math.floor(100000 + Math.random() * 900000)}</div>
                    </div>
                  </div>

                  {/* Institution Details Review */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3 rounded-xl text-xs">
                    <div>
                      <span className="text-slate-400 block font-medium">Instituição:</span>
                      <span className="font-bold text-slate-800">
                        {institution.name || 'Não informada'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Responsável:</span>
                      <span className="font-bold text-slate-800">
                        {institution.contactPerson || 'Não informado'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Contacto:</span>
                      <span className="font-bold text-slate-800">{institution.phone || '-'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Localização:</span>
                      <span className="font-bold text-slate-800">
                        {institution.city ? `${institution.city}, ${institution.province || 'Luanda'}` : (institution.province || '-')}
                      </span>
                    </div>
                  </div>

                  {/* Items Table */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                        <tr>
                          <th className="p-2.5">Item / Equipamento</th>
                          <th className="p-2.5">Código</th>
                          <th className="p-2.5 text-center">Qtd</th>
                          <th className="p-2.5">Serviços Integrados</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {quoteItems.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="p-2.5 font-bold text-slate-900">
                              {item.product.name}
                              <div className="text-[10px] text-slate-500 font-normal">
                                {item.product.subcategory}
                              </div>
                            </td>
                            <td className="p-2.5 font-mono text-slate-600">{item.product.modelCode}</td>
                            <td className="p-2.5 text-center font-bold text-slate-900">
                              {item.quantity}
                            </td>
                            <td className="p-2.5 space-y-0.5">
                              {item.includeInstallation && (
                                <span className="inline-block bg-blue-50 text-blue-800 px-1.5 py-0.2 rounded text-[10px] mr-1 font-semibold">
                                  + Montagem / Instalação
                                </span>
                              )}
                              {item.includeAcademyTraining && (
                                <span className="inline-block bg-emerald-50 text-emerald-800 px-1.5 py-0.2 rounded text-[10px] font-semibold">
                                  + Formação Academy
                                </span>
                              )}
                              {!item.includeInstallation && !item.includeAcademyTraining && (
                                <span className="text-slate-400 text-[10px]">Apenas fornecimento</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {institution.additionalNotes && (
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <span className="font-bold text-slate-700 block mb-1">Notas do Solicitante:</span>
                      <p className="text-slate-600">{institution.additionalNotes}</p>
                    </div>
                  )}

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
                    <div className="flex gap-2">
                      <button
                        onClick={handlePrint}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Imprimir / Salvar PDF</span>
                      </button>

                      <button
                        onClick={handleWhatsAppSend}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-bold shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enviar pelo WhatsApp</span>
                      </button>
                    </div>

                    <button
                      onClick={handleSubmitFormal}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0F52BA] hover:bg-[#0B408C] text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmitir Solicitação Oficial</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
