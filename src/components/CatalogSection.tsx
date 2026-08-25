import React, { useState } from 'react';
import { productsData } from '../data/productsData';
import { Product, ProductCategory } from '../types';
import {
  GraduationCap,
  Microscope,
  Server,
  FlaskConical,
  Layers,
  Search,
  Filter,
  Check,
  Plus,
  Eye,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  FileSpreadsheet
} from 'lucide-react';

interface CatalogSectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAddToQuote: (product: Product) => void;
  onOpenQuoteBuilder: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
  onSelectProduct,
  onQuickAddToQuote,
  onOpenQuoteBuilder,
}) => {
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Produtos', icon: Layers, count: productsData.length },
    {
      id: 'educacional',
      label: 'Laboratório Educacional',
      icon: GraduationCap,
      count: productsData.filter((p) => p.category === 'educacional').length
    },
    {
      id: 'hospitalar_clinico',
      label: 'Hospitalar & Clínico',
      icon: Microscope,
      count: productsData.filter((p) => p.category === 'hospitalar_clinico').length
    },
    {
      id: 'ti_infraestrutura',
      label: 'TI & Infraestrutura',
      icon: Server,
      count: productsData.filter((p) => p.category === 'ti_infraestrutura').length
    },
    {
      id: 'mobiliario_tecnico',
      label: 'Mobiliário & Exaustão',
      icon: Layers,
      count: productsData.filter((p) => p.category === 'mobiliario_tecnico').length
    },
    {
      id: 'reagentes_consumiveis',
      label: 'Reagentes & Consumíveis',
      icon: FlaskConical,
      count: productsData.filter((p) => p.category === 'reagentes_consumiveis').length
    }
  ];

  // Filtering
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === 'todos' || product.category === selectedCategory;

    const term = searchTerm.toLowerCase().trim();
    if (!term) return matchesCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(term) ||
      product.subcategory.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.modelCode.toLowerCase().includes(term) ||
      product.targetAudience.some((a) => a.toLowerCase().includes(term));

    return matchesCategory && matchesSearch;
  });

  const handleQuickAdd = (product: Product) => {
    onQuickAddToQuote(product);
    setJustAddedId(product.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1000);
  };

  return (
    <section id="catalogo" className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Catálogo Técnico de Soluções
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Equipamentos de Alta Precisão e Infraestrutura
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Equipamentos certificados para instituições de ensino e saúde. Selecione itens para receber uma proposta técnica detalhada com instalação e treinamento inclusos.
            </p>
          </div>

          {/* Direct CTA button to Quote */}
          <button
            onClick={onOpenQuoteBuilder}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-sm shrink-0 transition-all"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Ver Lista de Cotação</span>
          </button>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-8 space-y-4">
          {/* Categories Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search and Quick Info Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Filtrar por nome, código, modelo ou aplicação..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Exibindo <strong>{filteredProducts.length}</strong> soluções disponíveis para cotação
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">Nenhum equipamento encontrado</h3>
            <p className="text-xs text-slate-500 mt-1">
              Tente buscar por outros termos ou limpe o filtro de categorias.
            </p>
            <button
              onClick={() => {
                onSelectCategory('todos');
                onSearchChange('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold"
            >
              Ver Todos os Produtos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Product Image Box */}
                  <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Category / Subcategory Badge */}
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                      <span className="bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs font-mono">
                        {product.modelCode}
                      </span>
                    </div>

                    {product.includesTraining && (
                      <span className="absolute bottom-2.5 left-2.5 bg-emerald-600/95 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs backdrop-blur-xs flex items-center gap-1">
                        <GraduationCap className="w-3 h-3" />
                        Treinamento Academy Incluso
                      </span>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-5 space-y-3">
                    <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                      {product.subcategory}
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Quick Specs preview */}
                    <div className="space-y-1 pt-1 border-t border-slate-100 text-[11px]">
                      {product.specs.slice(0, 2).map((spec, sIdx) => (
                        <div key={sIdx} className="flex justify-between text-slate-600 truncate">
                          <span className="font-semibold text-slate-700">{spec.label}:</span>
                          <span className="truncate ml-2 text-slate-900 font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Certifications preview */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {product.certifications.slice(0, 2).map((cert, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-600" />
                    <span>Detalhes</span>
                  </button>

                  <button
                    onClick={() => handleQuickAdd(product)}
                    className={`inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white transition-all shadow-xs cursor-pointer ${
                      justAddedId === product.id
                        ? 'bg-emerald-600'
                        : 'bg-[#0F52BA] hover:bg-[#0B408C]'
                    }`}
                  >
                    {justAddedId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Adicionado!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>+ Cotação</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
