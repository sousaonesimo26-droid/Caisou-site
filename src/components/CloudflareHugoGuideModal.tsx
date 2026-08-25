import React, { useState } from 'react';
import {
  X,
  Cloud,
  Terminal,
  FileCode,
  Check,
  Copy,
  ExternalLink,
  Zap,
  Globe,
  Layers
} from 'lucide-react';

interface CloudflareHugoGuideModalProps {
  onClose: () => void;
}

export const CloudflareHugoGuideModal: React.FC<CloudflareHugoGuideModalProps> = ({ onClose }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const hugoConfigToml = `# config.toml (Hugo Configuration for CAISOU Angola)
baseURL = "https://caisou.pages.dev/"
languageCode = "pt-ao"
title = "CAISOU - Comércio e Serviços"
theme = "caisou-theme"

[params]
  description = "Soluções que transformam, qualidade que faz a diferença. Laboratórios Educacionais, Clínicos e TI em Angola."
  slogan = "Soluções que transformam, qualidade que faz a diferença."
  address = "Zango 0, Icolo e Bengo - Angola"
  phone = "+244 937 283 789"
  email = "geral@caisou.ao"

[build]
  writeStats = true

[module]
  [module.hugoVersion]
    extended = true
    min = "0.120.0"`;

  const cloudflarePagesViteConfig = `# ⚡ Cloudflare Pages (Deploy Directo / Git - Recomendado):
# 1. No painel Cloudflare (dash.cloudflare.com) > Workers & Pages > Create application > Pages
# 2. Conecte seu repositório Git (GitHub ou GitLab)
# 3. Configurações de Build:
Framework preset: Vite (ou None)
Build command: npm run build
Build output directory: dist
Node.js Version (Variáveis de Ambiente): NODE_VERSION = 20

# 🚀 Deploy via Linha de Comando (Wrangler CLI):
# 1. npm run build
# 2. npx wrangler pages deploy dist --project-name=caisou-angola`;

  const cloudflarePagesConfig = `# Cloudflare Pages Build Settings (Hugo Variant):
Framework Preset: Hugo
Build command: hugo --gc --minify
Build output directory: public
Environment variables:
HUGO_VERSION = 0.125.0`;

  const tailwindHugoSnippet = `<!-- layouts/partials/head.html -->
<link rel="stylesheet" href="{{ (resources.Get "css/main.css" | css.PostCSS).RelPermalink }}">
<!-- Com Tailwind CSS v4 / v3 compilado para o Cloudflare Edge CDN -->`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[85vh] animate-in zoom-in-95">
        {/* Header */}
        <div className="bg-[#07244C] text-white px-6 py-4 flex items-center justify-between border-b border-blue-900 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                Guia de Deploy no Cloudflare Pages & Estrutura Hugo + Tailwind
              </h2>
              <p className="text-xs text-blue-200">
                Arquitetura estática ultrarrápida com CDN global Cloudflare e Tailwind CSS
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
          {/* Introduction Card */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 space-y-2">
            <div className="font-bold text-blue-900 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Pronto para Hospedagem no Cloudflare Pages
            </div>
            <p className="text-xs text-blue-800 leading-relaxed">
              O site da <strong>CAISOU Comércio e Serviços</strong> foi estruturado com base nas melhores práticas para alta velocidade de carregamento (Core Web Vitals 100), segurança SSL automática e CDN global com 0ms de latência.
            </p>
          </div>

          {/* Step 1: Cloudflare Pages Setup (React/Vite Direct Deploy) */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center">
                1
              </span>
              Hospedagem Simples no Cloudflare Pages (Direct / Git)
            </h3>
            <div className="bg-slate-900 text-slate-200 p-3.5 rounded-xl font-mono text-xs relative">
              <button
                onClick={() => copyToClipboard(cloudflarePagesViteConfig, 'cf-vite')}
                className="absolute top-3 right-3 p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] flex items-center gap-1 cursor-pointer"
              >
                {copiedSection === 'cf-vite' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copiar
                  </>
                )}
              </button>
              <pre className="overflow-x-auto whitespace-pre-wrap">{cloudflarePagesViteConfig}</pre>
            </div>
            <p className="text-[11px] text-slate-500">
              Arquivos de cabeçalhos de segurança (<code>public/_headers</code>) e roteamento SPA (<code>public/_redirects</code>) já estão configurados e prontos.
            </p>
          </div>

          {/* Step 2: Hugo config.toml */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white text-[11px] font-bold flex items-center justify-center">
                2
              </span>
              Configuração Hugo (`config.toml`) - Caso utilize Hugo
            </h3>
            <div className="bg-slate-900 text-slate-200 p-3.5 rounded-xl font-mono text-xs relative">
              <button
                onClick={() => copyToClipboard(hugoConfigToml, 'hugo')}
                className="absolute top-3 right-3 p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] flex items-center gap-1 cursor-pointer"
              >
                {copiedSection === 'hugo' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copiar
                  </>
                )}
              </button>
              <pre className="overflow-x-auto whitespace-pre-wrap">{hugoConfigToml}</pre>
            </div>
          </div>

          {/* Step 3: Tailwind Integration */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                3
              </span>
              Estilização com Tailwind CSS
            </h3>
            <div className="bg-slate-900 text-slate-200 p-3.5 rounded-xl font-mono text-xs relative">
              <button
                onClick={() => copyToClipboard(tailwindHugoSnippet, 'tw')}
                className="absolute top-3 right-3 p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] flex items-center gap-1"
              >
                {copiedSection === 'tw' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copiar
                  </>
                )}
              </button>
              <pre className="overflow-x-auto whitespace-pre-wrap">{tailwindHugoSnippet}</pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
