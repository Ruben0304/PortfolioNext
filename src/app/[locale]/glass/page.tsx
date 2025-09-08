
"use client";

import GlassSurface from "@/components/ui/glass-surface";


export default function GlassPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Contenido scrolleable de fondo */}
      <div className="h-[300vh] w-full bg-gray-900">
        {/* Elementos de fondo con colores oscuros - Primera sección */}
        <div className="relative h-screen">
          <div className="absolute top-20 left-20 w-96 h-96 bg-slate-800/40 rounded-3xl rotate-12"></div>
          <div className="absolute top-40 right-32 w-80 h-80 bg-gray-800/50 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-zinc-800/35 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-stone-800/45 rounded-2xl rotate-[-15deg]"></div>
          <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-neutral-800/40 rounded-full transform -translate-x-1/2"></div>
        </div>

        {/* Segunda sección */}
        <div className="relative h-screen bg-slate-900">
          <div className="absolute top-32 right-40 w-80 h-80 bg-gray-700/50 rounded-2xl rotate-45"></div>
          <div className="absolute top-60 left-20 w-64 h-64 bg-zinc-700/40 rounded-full"></div>
          <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-stone-700/35 rotate-12"></div>
          <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-neutral-700/45 rounded-3xl rotate-[-30deg]"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-slate-700/30 transform -translate-x-1/2 -translate-y-1/2 rotate-30"></div>
        </div>

        {/* Tercera sección */}
        <div className="relative h-screen bg-zinc-900">
          <div className="absolute top-16 left-1/4 w-88 h-88 bg-gray-800/45 rounded-full"></div>
          <div className="absolute top-48 right-16 w-72 h-72 bg-slate-800/40 rotate-[-20deg] rounded-2xl"></div>
          <div className="absolute bottom-32 left-16 w-64 h-64 bg-stone-800/50 rounded-3xl rotate-15"></div>
          <div className="absolute bottom-60 right-1/3 w-80 h-80 bg-neutral-800/35 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-zinc-800/40 rotate-45"></div>
        </div>

        {/* Líneas decorativas que se extienden por todo el scroll */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-slate-600/30 via-gray-600/20 to-zinc-600/30"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-gray-600/25 via-slate-600/15 to-neutral-600/25"></div>
      </div>

      {/* Contenedor de componentes glass FIJOS */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <div className="pointer-events-auto">
          <GlassSurface
              width={400}
              height={80}
              borderRadius={24}
              className="my-custom-class"
          >
              <div className="flex items-center justify-around w-full h-full px-4">
                {/* Icono Home */}
                <button className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-xs text-white/60 mt-1">Home</span>
                </button>

                {/* Icono Search */}
                <button className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-xs text-white/60 mt-1">Search</span>
                </button>

                {/* Icono Heart */}
                <button className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-xs text-white/60 mt-1">Likes</span>
                </button>

                {/* Icono Profile */}
                <button className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs text-white/60 mt-1">Profile</span>
                </button>

                {/* Icono Settings */}
                <button className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs text-white/60 mt-1">Settings</span>
                </button>
              </div>
          </GlassSurface>
        </div>
      </div>
    </div>
  );
}

