import { useState } from 'react';
import { Sparkles, ArrowRight, Eye, Zap, ArrowLeft, Send } from 'lucide-react';
import { products, categories } from './data';

export default function App() {
  const [view, setView] = useState<'home' | 'catalog'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const handleWhatsAppClick = (productName?: string, productPrice?: number) => {
    let message = "Olá! Gostaria de falar com um consultor sobre a coleção Ferracini.";
    if (productName && productPrice !== undefined) {
      message = `Olá! Vim do catálogo e tenho interesse no modelo: ${productName} (R$ ${productPrice.toFixed(2).replace('.', ',')}).`;
    } else if (productName) {
      message = `Olá! Vim do catálogo e tenho interesse no modelo: ${productName}.`;
    }
    const whatsappUrl = `https://wa.me/559294439582?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navigateTo = (newView: 'home' | 'catalog') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F5F2EB] font-sans selection:bg-amber-100 selection:text-amber-950 text-neutral-900 pb-24 relative overflow-x-hidden">
      
      {/* DECORATIVE TOP STRIPE (Yellow/Green Diagonal Hatching from Reference) */}
      <div 
        className="h-2.5 w-full bg-[repeating-linear-gradient(45deg,#E6C300,#E6C300_12px,#008B39_12px,#008B39_24px)] border-b border-black/10" 
        style={{ backgroundSize: '100% 100%' }}
      />

      {/* HEADER */}
      <header className="py-6 px-4 max-w-5xl mx-auto grid grid-cols-3 items-center">
        <div className="justify-self-start">
          {view === 'catalog' ? (
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-950 font-bold uppercase tracking-wider transition-colors bg-white/60 hover:bg-white px-3 py-1.5 rounded-full border border-neutral-300/60 shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Início
            </button>
          ) : (
            <div className="hidden sm:block"></div>
          )}
        </div>
        
        {/* CENTERED BRAND LOGO */}
        <div className="justify-self-center col-span-2 sm:col-span-1">
          <button onClick={() => navigateTo('home')} className="flex items-center gap-1 group">
            <span className="font-serif tracking-[0.2em] text-2xl font-black uppercase text-neutral-950 group-hover:text-amber-900 transition-colors">
              FERRACINI
            </span>
            <span className="w-3.5 h-1.5 bg-[#00A344] transform -skew-x-[25deg] mt-1.5 transition-transform group-hover:translate-x-1"></span>
          </button>
        </div>

        {/* RIGHT ACTION STATUS */}
        <div className="justify-self-end">
          <button 
            onClick={() => navigateTo('catalog')}
            className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full text-xs font-bold border border-neutral-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.03)] hover:border-neutral-350 hover:bg-neutral-50 transition-all text-neutral-800"
          >
            <span className="text-emerald-500 text-sm leading-none">💚</span>
            Coleção 2026
          </button>
        </div>
      </header>

      {/* DYNAMIC VIEW */}
      {view === 'home' ? (
        <main className="max-w-2xl mx-auto px-4 mt-8 lg:mt-12 flex flex-col items-center text-center animate-in fade-in duration-500">
          
          {/* HIGH-END TYPOGRAPHY HEADINGS */}
          <h1 className="text-[2.6rem] sm:text-[4rem] font-serif leading-[1.08] tracking-tight text-neutral-950 mb-5 text-center font-medium">
            O seu estilo <br />
            <span className="italic font-serif text-neutral-800 font-medium">merece</span> <br />
            <span className="font-bold text-neutral-950">o melhor.</span>
          </h1>
          
          {/* GEOLOCALIZED STATEMENT */}
          <p className="text-neutral-500 text-sm md:text-base max-w-sm mx-auto mb-10 leading-relaxed font-sans font-medium">
            Sapatos selecionados Ferracini Manauara.<br />
            Curadoria rápida pra você encontrar o seu par ideal.
          </p>

          {/* CURADORIA CARD PANEL (Perfect reproduction of the black box) */}
          <div className="w-full bg-[#151515] rounded-[2.5rem] p-6 sm:p-10 mb-8 relative overflow-hidden text-left shadow-2xl border border-neutral-800">
            {/* Top right gold angled geometric badge */}
            <div className="absolute top-0 right-12 w-16 h-2 bg-[#FFCC00] transform -skew-x-[25deg]"></div>
            
            <div className="relative z-10">
              {/* Golden tag of exclusivity */}
              <div className="inline-flex items-center border border-[#FFCC00]/80 text-[#FFCC00] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-4.5 py-1.5 rounded-full mb-6 relative">
                CURADORIA EXCLUSIVA
              </div>
              
              <h2 className="text-2xl sm:text-[2.2rem] font-serif text-white mb-2 tracking-tight leading-tight font-medium">
                 {products.length} {products.length === 1 ? 'modelo selecionado' : 'modelos selecionados'} <br />
                 <span className="italic text-[#FFCC00] mt-1 font-serif text-lg sm:text-xl block">pra surpreender</span>
              </h2>
              
              <p className="text-neutral-400 text-xs sm:text-sm font-medium mb-8">
                Social · Esporte Fino · Sapatênis · Sneaker · Bota
              </p>

              {/* CARD SHOWCASE CAROUSEL */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {products.slice(0, 4).map((product) => (
                  <button 
                    key={product.id}
                    onClick={() => {
                      setSelectedCategory('Todos');
                      navigateTo('catalog');
                    }}
                    className="relative w-full aspect-square bg-white rounded-2xl overflow-hidden group shadow-lg duration-300 hover:scale-[1.03] hover:shadow-xl focus:outline-none flex flex-col items-center justify-center p-2.5 border border-neutral-200/50"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center z-10">
                      <span className="bg-[#151515] text-[#FFCC00] text-[8px] sm:text-[9px] font-bold px-2 py-1 rounded-md line-clamp-1 shadow-sm text-center">
                        VER DETALHES
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN GREEN CTA (Exactly modeled on the screenshot button) */}
          <button 
            onClick={() => {
              setSelectedCategory('Todos');
              navigateTo('catalog');
            }}
            className="w-full bg-[#00A344] hover:bg-[#008A38] text-white rounded-2xl py-5 text-sm sm:text-base font-black tracking-widest transition-all transform hover:scale-[1.01] shadow-[0_8px_30px_-6px_rgba(0,163,68,0.4)] flex items-center justify-center gap-2"
          >
            ENCONTRAR MEU PAR <span>➔</span>
          </button>

          {/* SECONDARY WHITE BUTTONS (Left: "Ver tudo", Right: "Pra hoje") */}
          <div className="flex gap-4 w-full mt-4">
            <button 
              onClick={() => {
                setSelectedCategory('Todos');
                navigateTo('catalog');
              }}
              className="flex-1 bg-white hover:bg-neutral-50 py-4 rounded-2xl border border-neutral-200 text-neutral-850 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <span className="text-neutral-500 text-sm">👁️</span>
              Ver tudo
            </button>
            
            <button 
              onClick={() => {
                // Focuses on our primary featured item
                setSelectedCategory('Todos');
                navigateTo('catalog');
              }}
              className="flex-1 bg-white hover:bg-neutral-50 py-4 rounded-2xl border border-neutral-200 text-neutral-850 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <span className="text-amber-500 text-sm">⚡</span>
              Pra hoje
            </button>
          </div>

        </main>
      ) : (
        <main className="max-w-4xl mx-auto px-4 mt-8 lg:mt-12 w-full animate-in fade-in duration-500">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <button 
              onClick={() => navigateTo('home')}
              className="self-start flex items-center text-neutral-700 font-bold hover:text-neutral-950 transition-colors bg-white px-4 py-2 border border-neutral-200 rounded-full hover:bg-neutral-50 shadow-sm text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </button>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600 animate-pulse" />
              Catálogo Ferracini
            </h2>
          </div>

          {/* FILTER BY CATEGORIES TO MATCH STRETCH CAPABILITIES */}
          <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar mb-8 mt-4 justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap shadow-sm border ${
                  selectedCategory === cat
                    ? 'bg-neutral-950 border-neutral-950 text-white'
                    : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ACTIVE PRODUCTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="aspect-square bg-neutral-100 relative overflow-hidden border-b border-neutral-200/60 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-amber-800 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full z-10 shadow-md">
                      Modelo Especial
                    </span>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-lg text-neutral-950 leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block bg-[#F5F2EB] text-neutral-900 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg border border-neutral-200">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  {product.description && (
                    <p className="text-sm text-neutral-500 mb-6 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  )}

                  <div className="mt-auto pt-2">
                    <button 
                      onClick={() => handleWhatsAppClick(product.name, product.price)}
                      className="w-full py-4 bg-[#00A344] hover:bg-[#008A38] text-white font-black text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm uppercase tracking-wider"
                    >
                      Quero este modelo
                      <Send className="w-4 h-4 text-white fill-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200 p-8">
              <p className="text-neutral-500 font-semibold text-sm">Nenhum calçado nesta categoria durante a fase de testes.</p>
              <button 
                onClick={() => setSelectedCategory('Todos')}
                className="mt-4 text-xs font-bold text-amber-800 underline uppercase tracking-wider"
              >
                Ver tudo
              </button>
            </div>
          )}
        </main>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
