import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { Methodology360 } from './components/Methodology360';
import { CatalogSection } from './components/CatalogSection';
import { AcademySection } from './components/AcademySection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { SupportTicketSection } from './components/SupportTicketSection';
import { QuickQuoteForm } from './components/QuickQuoteForm';
import { ContactFooter } from './components/ContactFooter';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteBuilderModal } from './components/QuoteBuilderModal';
import { CloudflareHugoGuideModal } from './components/CloudflareHugoGuideModal';
import { productsData } from './data/productsData';
import { Product, QuoteItem } from './types';

export default function App() {
  // Quote Cart State (Pre-seed with 1 educational microscope to make the experience immediately demonstrable)
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([
    {
      product: productsData[0], // Microscópio Educacional 1000x
      quantity: 5,
      includeInstallation: true,
      includeAcademyTraining: true
    }
  ]);

  // UI Navigation & Filters
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteBuilderOpen, setIsQuoteBuilderOpen] = useState(false);
  const [isCloudflareGuideOpen, setIsCloudflareGuideOpen] = useState(false);

  // Quote Cart Management Functions
  const handleAddToQuote = (
    product: Product,
    quantity: number,
    includeInstallation: boolean,
    includeTraining: boolean
  ) => {
    setQuoteItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.product.id === product.id);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + quantity,
          includeInstallation,
          includeAcademyTraining: includeTraining
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            quantity,
            includeInstallation,
            includeAcademyTraining: includeTraining
          }
        ];
      }
    });
  };

  const handleQuickAddToQuote = (product: Product) => {
    handleAddToQuote(product, 1, true, product.includesTraining);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setQuoteItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleToggleInstallation = (productId: string) => {
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, includeInstallation: !item.includeInstallation }
          : item
      )
    );
  };

  const handleToggleTraining = (productId: string) => {
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, includeAcademyTraining: !item.includeAcademyTraining }
          : item
      )
    );
  };

  const handleRemoveFromQuote = (productId: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const handleAddProductById = (productId: string) => {
    const prod = productsData.find((p) => p.id === productId);
    if (prod) {
      handleQuickAddToQuote(prod);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Header / Navbar */}
      <Navbar
        quoteItems={quoteItems}
        onOpenQuoteBuilder={() => setIsQuoteBuilderOpen(true)}
        onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('catalogo');
        }}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCatalog={() => scrollToSection('catalogo')}
          onExploreAcademy={() => scrollToSection('academy')}
          onOpenQuoteBuilder={() => setIsQuoteBuilderOpen(true)}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            scrollToSection('catalogo');
          }}
        />

        {/* 4 Pillars Section */}
        <PillarsSection
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            scrollToSection('catalogo');
          }}
          onExploreAcademy={() => scrollToSection('academy')}
        />

        {/* Methodology 360° (Da Ideia à Formação) */}
        <Methodology360
          onOpenQuoteBuilder={() => setIsQuoteBuilderOpen(true)}
          onExploreAcademy={() => scrollToSection('academy')}
        />

        {/* Interactive Products Catalog */}
        <CatalogSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSelectProduct={setSelectedProduct}
          onQuickAddToQuote={handleQuickAddToQuote}
          onOpenQuoteBuilder={() => setIsQuoteBuilderOpen(true)}
        />

        {/* CAISOU Academy Dedicated Section */}
        <AcademySection onOpenQuoteBuilder={() => setIsQuoteBuilderOpen(true)} />

        {/* Case Studies & Real Results */}
        <CaseStudiesSection onOpenQuoteBuilder={() => setIsQuoteBuilderOpen(true)} />

        {/* Technical Support & SLA Section */}
        <SupportTicketSection />

        {/* Fast Consultation & Quote Banner */}
        <QuickQuoteForm />
      </main>

      {/* Footer */}
      <ContactFooter
        onOpenCloudflareGuide={() => setIsCloudflareGuideOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('catalogo');
        }}
        onExploreAcademy={() => scrollToSection('academy')}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToQuote={handleAddToQuote}
        />
      )}

      {/* Interactive Quote Builder / Proposal Generator Modal */}
      {isQuoteBuilderOpen && (
        <QuoteBuilderModal
          quoteItems={quoteItems}
          onClose={() => setIsQuoteBuilderOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onToggleInstallation={handleToggleInstallation}
          onToggleTraining={handleToggleTraining}
          onRemoveItem={handleRemoveFromQuote}
          onClearQuote={handleClearQuote}
          onAddProductQuick={handleAddProductById}
        />
      )}

      {/* Cloudflare Pages & Hugo Guide Modal */}
      {isCloudflareGuideOpen && (
        <CloudflareHugoGuideModal onClose={() => setIsCloudflareGuideOpen(false)} />
      )}
    </div>
  );
}
