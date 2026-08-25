import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import {
  Phone,
  Mail,
  FileSpreadsheet,
  Menu,
  X,
  Search,
  BookOpen,
  GraduationCap,
  Microscope,
  Server,
  ShieldCheck,
  Headphones,
  Cloud,
  ChevronDown
} from 'lucide-react';
import { QuoteItem } from '../types';

interface NavbarProps {
  quoteItems: QuoteItem[];
  onOpenQuoteBuilder: () => void;
  onOpenCloudflareGuide: () => void;
  onSelectCategory: (category: string) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  quoteItems,
  onOpenQuoteBuilder,
  onOpenCloudflareGuide,
  onSelectCategory,
  searchTerm,
  onSearchChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalQuoteCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setSolutionsDropdown(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#07244C] text-slate-200 text-xs py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center flex-wrap gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Atendimento Especializado para Escolas, Universidades e Hospitais
            </span>
            <span className="hidden md:inline text-blue-300/40">•</span>
            <a
              href="mailto:geral@caisou.ao"
              className="hidden md:flex items-center gap-1 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              geral@caisou.ao
            </a>
            <a
              href="tel:+244937283789"
              className="hidden lg:flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              +244 937 283 789
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCloudflareGuide}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-900/60 hover:bg-blue-800 text-blue-200 border border-blue-700/50 transition-colors text-[11px] font-medium"
              title="Informações de Deploy Cloudflare & Hugo"
            >
              <Cloud className="w-3.5 h-3.5 text-amber-400" />
              Cloudflare Pages Ready
            </button>
            <span className="text-blue-400/40">|</span>
            <button
              onClick={() => scrollToSection('suporte-tecnico')}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors font-medium"
            >
              <Headphones className="w-3.5 h-3.5 text-emerald-400" />
              Suporte & Chamados
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled ? 'shadow-md border-slate-200 py-2.5' : 'border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} showTagline={!isScrolled} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Soluções Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setSolutionsDropdown(!solutionsDropdown)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Soluções
                <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-2">
                <button
                  onClick={() => {
                    onSelectCategory('educacional');
                    scrollToSection('catalogo');
                  }}
                  className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-blue-50/70 text-left transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-100/70 text-blue-700">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Laboratório Educacional</div>
                    <div className="text-xs text-slate-500">Escolas, Faculdades e Universidades</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onSelectCategory('hospitalar_clinico');
                    scrollToSection('catalogo');
                  }}
                  className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-emerald-50/70 text-left transition-colors"
                >
                  <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-700">
                    <Microscope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Laboratório Clínico & Hospitalar</div>
                    <div className="text-xs text-slate-500">Alta precisão, diagnósticos e pesquisas</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onSelectCategory('ti_infraestrutura');
                    scrollToSection('catalogo');
                  }}
                  className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-indigo-50/70 text-left transition-colors"
                >
                  <div className="p-2 rounded-lg bg-indigo-100/70 text-indigo-700">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">TI & Infraestrutura Digital</div>
                    <div className="text-xs text-slate-500">Servidores, redes, nobreaks e suporte</div>
                  </div>
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('metodologia')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Metodologia 360°
            </button>

            <button
              onClick={() => scrollToSection('catalogo')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Catálogo de Produtos
            </button>

            {/* CAISOU Academy Highlight */}
            <button
              onClick={() => scrollToSection('academy')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              CAISOU Academy
              <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">
                Capacitação
              </span>
            </button>

            <button
              onClick={() => scrollToSection('casos-sucesso')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Casos Reais
            </button>

            <button
              onClick={() => scrollToSection('suporte-tecnico')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Suporte Técnico
            </button>
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Trigger */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-slate-100 border border-blue-500 rounded-lg px-2 py-1 transition-all">
                  <Search className="w-4 h-4 text-blue-600 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Buscar equipamento, curso ou peça..."
                    className="bg-transparent text-xs sm:text-sm focus:outline-none w-36 sm:w-56 text-slate-800"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      onSearchChange('');
                    }}
                    className="p-1 hover:text-slate-900 text-slate-500"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-slate-600 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Buscar produtos e cursos"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Quote Cart Button */}
            <button
              onClick={onOpenQuoteBuilder}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 font-semibold text-sm transition-all shadow-xs"
              title="Abrir Construtor de Cotação"
            >
              <FileSpreadsheet className="w-4 h-4 text-blue-700" />
              <span className="hidden sm:inline">Cotação</span>
              {totalQuoteCount > 0 ? (
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-blue-700 rounded-full animate-bounce">
                  {totalQuoteCount}
                </span>
              ) : (
                <span className="text-xs text-blue-600 hidden md:inline">(0)</span>
              )}
            </button>

            {/* Main CTA: Solicitar Proposta */}
            <button
              onClick={() => scrollToSection('orcamento-rapido')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F52BA] hover:bg-[#0B408C] text-white font-bold text-sm shadow-sm transition-all transform active:scale-95"
            >
              <span>Falar com Consultor</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Abrir menu móvel"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pt-2">
              Soluções Principais
            </div>

            <button
              onClick={() => {
                onSelectCategory('educacional');
                scrollToSection('catalogo');
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-blue-50 rounded-lg text-left"
            >
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Laboratórios Educacionais (Escolas & Universidades)
            </button>

            <button
              onClick={() => {
                onSelectCategory('hospitalar_clinico');
                scrollToSection('catalogo');
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-emerald-50 rounded-lg text-left"
            >
              <Microscope className="w-4 h-4 text-emerald-600" />
              Laboratórios Hospitalares & Clínicos
            </button>

            <button
              onClick={() => {
                onSelectCategory('ti_infraestrutura');
                scrollToSection('catalogo');
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-indigo-50 rounded-lg text-left"
            >
              <Server className="w-4 h-4 text-indigo-600" />
              TI & Infraestrutura Digital Especializada
            </button>

            <div className="border-t border-slate-100 my-2 pt-2">
              <button
                onClick={() => scrollToSection('academy')}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-emerald-800 bg-emerald-50 rounded-lg mb-1"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  CAISOU Academy (Capacitação)
                </span>
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                  Cursos & Treinamentos
                </span>
              </button>

              <button
                onClick={() => scrollToSection('metodologia')}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg text-left"
              >
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Metodologia 360° (Da Ideia à Formação)
              </button>

              <button
                onClick={() => scrollToSection('catalogo')}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg text-left"
              >
                <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                Catálogo Geral de Produtos
              </button>

              <button
                onClick={() => scrollToSection('casos-sucesso')}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg text-left"
              >
                Casos de Sucesso
              </button>

              <button
                onClick={() => scrollToSection('suporte-tecnico')}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg text-left"
              >
                <Headphones className="w-4 h-4 text-emerald-600" />
                Suporte Técnico e Chamados
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteBuilder();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-blue-600 text-white font-bold text-center text-sm shadow-sm"
              >
                Ver Cotação ({totalQuoteCount} itens)
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCloudflareGuide();
                }}
                className="w-full py-2 px-3 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold text-center flex items-center justify-center gap-1.5"
              >
                <Cloud className="w-4 h-4 text-amber-500" />
                Guia de Deploy Cloudflare & Hugo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
