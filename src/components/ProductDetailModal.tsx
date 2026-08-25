import React, { useState } from 'react';
import { Product } from '../types';
import {
  X,
  ShieldCheck,
  Award,
  CheckCircle2,
  Plus,
  Minus,
  FileSpreadsheet,
  GraduationCap,
  Sparkles,
  Phone,
  MessageSquare
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product, quantity: number, includeInstallation: boolean, includeTraining: boolean) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [includeInstallation, setIncludeInstallation] = useState(true);
  const [includeTraining, setIncludeTraining] = useState(product?.includesTraining ?? true);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToQuote(product, quantity, includeInstallation, includeTraining);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono bg-blue-600 px-2 py-0.5 rounded text-white font-bold">
              {product.modelCode}
            </span>
            <span className="text-xs text-slate-300">• {product.subcategory}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Image Column */}
            <div className="md:col-span-5 space-y-3">
              <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-4/3 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {product.featured && (
                  <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    Destaque CAISOU
                  </span>
                )}
              </div>

              {/* Badges / Certifications */}
              <div className="space-y-1.5 pt-2">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Certificações & Padrões
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[11px] font-semibold"
                    >
                      <ShieldCheck className="w-3 h-3 text-blue-600" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 text-slate-700">
                <div className="font-bold text-slate-900 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  Garantia CAISOU 360°
                </div>
                <p>{product.warranty}</p>
              </div>
            </div>

            {/* Details Column */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold text-blue-700 mt-1">{product.tagline}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Especificações Técnicas
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 divide-y divide-slate-200/80 text-xs">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="py-1.5 flex justify-between gap-2">
                      <span className="font-semibold text-slate-600">{spec.label}:</span>
                      <span className="font-bold text-slate-900 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Diferenciais & Recursos
                </div>
                <div className="space-y-1">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Configuration & Add to Quote Box */}
          <div className="bg-blue-50/60 rounded-xl p-4 border border-blue-200/80 space-y-4">
            <div className="text-xs font-bold text-blue-950 uppercase tracking-wider">
              Serviços Inclusos na Proposta
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-blue-200 text-xs cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={includeInstallation}
                  onChange={(e) => setIncludeInstallation(e.target.checked)}
                  className="rounded text-blue-600 mt-0.5 focus:ring-blue-500"
                />
                <div>
                  <span className="font-bold text-slate-800 block">Instalação & Calibração Técnica</span>
                  <span className="text-[11px] text-slate-500">Montagem e laudo técnico inicial</span>
                </div>
              </label>

              <label className="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-blue-200 text-xs cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={includeTraining}
                  onChange={(e) => setIncludeTraining(e.target.checked)}
                  className="rounded text-emerald-600 mt-0.5 focus:ring-emerald-500"
                />
                <div>
                  <span className="font-bold text-emerald-900 block flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                    Treinamento CAISOU Academy
                  </span>
                  <span className="text-[11px] text-slate-500">Capacitação prática para equipe</span>
                </div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-blue-200/60">
              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-700">Quantidade:</span>
                <div className="flex items-center bg-white border border-slate-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-sm font-bold text-slate-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAdd}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white transition-all shadow-sm ${
                  addedNotice ? 'bg-emerald-600 scale-95' : 'bg-[#0F52BA] hover:bg-[#0B408C]'
                }`}
              >
                {addedNotice ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Adicionado à Cotação!</span>
                  </>
                ) : (
                  <>
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Adicionar à Lista de Cotação</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
