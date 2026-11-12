"use client";

import { useState } from 'react';

export default function Home() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
const [showPrivacy, setShowPrivacy] = useState(false);

const galleries: Record<string, string[]> = {
  pos: ["/pos1.png", "/pos2.png", "/pos3.png", "/pos4.png"],
  vende: ["/vende1.png", "/vende2.png", "/vende3.png", "/vende4.png", "/vende5.png"],
  aqua: ["/aqua1.png", "/aqua2.png", "/aqua3.png", "/aqua4.png"],
  wifi: ["/wifi1.png", "/wifi2.png", "/wifi3.png", "/wifi4.png"],
};

const galleryTitles: Record<string, string> = {
  pos: "G-Net Punto de Venta",
  vende: "Vende+",
  aqua: "Gestion Aqua Clean",
  wifi: "Wifirouter"
};

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
     {/* Navbar con Menú Móvil */}
<nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gnet-light">
  <div className="container mx-auto px-4 py-2 flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center space-x-3">
      <img src="/logo.png" alt="G-Net Studio Logo" className="h-16 w-auto object-contain" />
      <span className="text-xl font-bold text-gnet-dark hidden sm:block">G-Net Studio</span>
    </div>

    {/* Menú de Escritorio (Se oculta en celular) */}
    <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
      <li><a href="#inicio" className="hover:text-gnet-primary transition">Inicio</a></li>
      <li><a href="#nosotros" className="hover:text-gnet-primary transition">Nosotros</a></li>
      <li><a href="#programas" className="hover:text-gnet-primary transition">Programas</a></li>
      <li><a href="#servicios" className="hover:text-gnet-primary transition">Servicios</a></li>
      <li><a href="#galeria" className="hover:text-gnet-primary transition">Galería</a></li>
      <li><a href="#contacto" className="bg-gnet-dark text-white px-4 py-2 rounded-lg hover:bg-gnet-primary transition">Contacto</a></li>
    </ul>

    {/* Botón de Menú Móvil (Hamburguesa) */}
    <button 
      className="md:hidden text-gnet-dark focus:outline-none p-2"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Abrir menú"
    >
      {isMenuOpen ? (
        // Ícono de X (Cerrar)
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      ) : (
        // Ícono de Hamburguesa (Abrir)
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      )}
    </button>
  </div>

  {/* Menú Desplegable Móvil */}
  {isMenuOpen && (
    <div className="md:hidden bg-white border-t border-gnet-light shadow-lg absolute w-full left-0 z-40">
      <ul className="flex flex-col p-4 space-y-4 text-gray-700 font-medium text-center">
        <li><a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-gnet-primary hover:bg-gray-50 rounded">Inicio</a></li>
        <li><a href="#nosotros" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-gnet-primary hover:bg-gray-50 rounded">Nosotros</a></li>
        <li><a href="#programas" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-gnet-primary hover:bg-gray-50 rounded">Programas</a></li>
        <li><a href="#servicios" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-gnet-primary hover:bg-gray-50 rounded">Servicios</a></li>
        <li><a href="#galeria" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-gnet-primary hover:bg-gray-50 rounded">Galería</a></li>
        <li>
          <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block bg-gnet-dark text-white px-4 py-3 rounded-lg hover:bg-gnet-primary transition text-center">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  )}
</nav>

      {/* ===== INICIO ===== */}
      <section id="inicio" className="bg-gradient-to-br from-gnet-dark via-gnet-primary to-gray-900 text-white py-24">
        <div className="container mx-auto text-center px-4">
          <div className="inline-block bg-gnet-light bg-opacity-20 text-gnet-light px-4 py-1 rounded-full text-sm font-semibold mb-6">
            🌟 Nuestro Producto Estrella
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Potencia tu Negocio con <span className="text-gnet-light">G-Net Punto de Venta</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
            La solución definitiva para abarrotes, farmacias, ferreterías y más. Control total de ventas, inventarios, impresión de tickets y envío de comprobante por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#programas" className="bg-gnet-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gnet-light hover:text-gnet-dark transition shadow-lg">
              Ver Características
            </a>
                             <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-4">
                    {/* Botón de Descarga Directa (Mediafire) */}
                    <a 
                      href="https://bit.ly/3X0XfEM" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-md"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                      Descargar Instalador
                    </a>
                    
                    {/* Botón de WhatsApp */}
                    <a 
                      href="https://wa.me/522205291846?text=Hola,%20quiero%20información%20sobre%20G-Net%20Punto%20de%20Venta" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 bg-white text-gnet-dark px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition border border-gray-200"
                    >
                      <span>💬</span> Solicitar Demostración
                    </a>
                  </div>
          </div>
        </div>
      </section>

      {/* ===== SOBRE NOSOTROS ===== */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gnet-dark mb-4">Nuestra Historia</h2>
            <div className="w-24 h-1 bg-gnet-primary mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Una historia de evolución constante, impulsada por la pasión de brindar soluciones tecnológicas reales.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gnet-light"></div>
              
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gnet-dark mb-2">GolfoNet</h3>
                    <p className="text-gnet-primary font-semibold mb-2">Noviembre 2025</p>
                    <p className="text-gray-600">
                      Nace formalmente la empresa bajo el liderazgo del <strong>Lic. Bertín García Cruz</strong>. 
                      Iniciamos comercializando equipos de Puntos de Venta con el respaldo de <strong>Eleventa</strong>, 
                      brindando soporte tecnológico a pequeños negocios locales.
                    </p>
                  </div>
                  <div className="w-full md:w-2/12 flex justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white z-10 flex-shrink-0 bg-white">
                      <img src="/golfo.png" alt="GolfoNet" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="w-full md:w-5/12"></div>
                </div>
              </div>
              
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-5/12 order-1 md:order-1"></div>
                  <div className="w-full md:w-2/12 flex justify-center order-2 md:order-2 mb-4 md:mb-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white z-10 flex-shrink-0 bg-white">
                      <img src="/surve.png" alt="Surve Technologies" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="w-full md:w-5/12 pl-0 md:pl-8 text-center md:text-left order-3 md:order-3">
                    <h3 className="text-2xl font-bold text-gnet-dark mb-2">Surve Technologies</h3>
                    <p className="text-gnet-primary font-semibold mb-2">Primera Evolución</p>
                    <p className="text-gray-600">
                      Respondiendo a las crecientes necesidades de nuestros clientes, evolucionamos hacia un enfoque más 
                      tecnológico y profesional. Ampliamos nuestros servicios y fortalecimos nuestra capacidad de brindar 
                      soluciones integrales.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gnet-dark mb-2">G-Net Studio</h3>
                    <p className="text-gnet-primary font-semibold mb-2">Nuestra Identidad Actual</p>
                    <p className="text-gray-600">
                      Hoy somos un <strong>estudio tecnológico</strong> donde se desarrolla y prueban nuevas aplicaciones 
                      para negocios. Un espacio de innovación donde cada proyecto es una oportunidad de transformar ideas 
                      en herramientas digitales poderosas.
                    </p>
                  </div>
                  <div className="w-full md:w-2/12 flex justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white z-10 flex-shrink-0 bg-white">
                      <img src="/gnet.png" alt="G-Net Studio" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="w-full md:w-5/12"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gnet-dark">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gnet-dark mb-3">Misión</h3>
                <p className="text-gray-600">
                  Desarrollar soluciones tecnológicas innovadoras y accesibles que impulsen el crecimiento de profesionales 
                  y emprendedores, brindando soporte continuo y personalizado.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gnet-primary">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gnet-dark mb-3">Visión</h3>
                <p className="text-gray-600">
                  Ser el aliado tecnológico de referencia para negocios en crecimiento, reconocidos por nuestra capacidad 
                  de transformar ideas en aplicaciones funcionales y rentables.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gnet-gray">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-gnet-dark mb-3">Valores</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Innovación constante</li>
                  <li>✓ Compromiso con el cliente</li>
                  <li>✓ Calidad en cada proyecto</li>
                  <li>✓ Transparencia y honestidad</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gnet-light relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gnet-primary opacity-10 rounded-bl-full"></div>

              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white mx-auto md:mx-0 bg-white">
                    <img src="/ceo.png" alt="Lic. Bertín García Cruz" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="text-center md:text-left flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-gnet-dark mb-1">Lic. Bertín García Cruz</h4>
                  <p className="text-gnet-primary font-semibold mb-4 text-lg">Fundador y CEO | Lic. en Gestión y Desarrollo Empresarial</p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Con una sólida formación en gestión empresarial y una profunda pasión por la tecnología, el Lic. Bertín García Cruz 
                    fundó esta empresa con el objetivo de cerrar la brecha digital para los pequeños y medianos negocios. 
                    Su liderazgo ha guiado la evolución de la empresa desde sus inicios como GolfoNet hasta convertirse en el 
                    estudio de innovación que es hoy.
                  </p>

                  <blockquote className="border-l-4 border-gnet-primary pl-4 italic text-gray-700 mb-6">
                    "Nuestra visión es ser el aliado tecnológico que todo emprendedor necesita para transformar sus ideas en negocios rentables y sostenibles."
                  </blockquote>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-4 py-2 bg-gnet-light bg-opacity-30 text-gnet-dark rounded-full text-sm font-semibold">Gestión Empresarial</span>
                    <span className="px-4 py-2 bg-gnet-light bg-opacity-30 text-gnet-dark rounded-full text-sm font-semibold">Desarrollo Tecnológico</span>
                    <span className="px-4 py-2 bg-gnet-light bg-opacity-30 text-gnet-dark rounded-full text-sm font-semibold">Innovación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMAS ===== */}
      <section id="programas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gnet-dark mb-4">Nuestros Programas</h2>
            <div className="w-24 h-1 bg-gnet-primary mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Soluciones de software diseñadas para optimizar tu negocio y aumentar tu productividad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
                        <div className="md:col-span-2 bg-gradient-to-r from-gnet-dark to-gnet-primary p-8 rounded-2xl shadow-xl text-white border-4 border-gnet-light">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 bg-white p-4 rounded-xl">
                  <img src="/pos.png" alt="G-Net Punto de Venta" className="w-32 h-32 object-contain" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-yellow-400 text-gnet-dark px-3 py-1 rounded-full text-xs font-bold mb-3">⭐ PRODUCTO ESTRELLA</div>
                  <h3 className="text-3xl font-bold mb-3">G-Net Punto de Venta</h3>
                  <p className="text-gray-100 mb-4">Programa de Punto de Venta para Negocios de Abarrotes, Refaccionarias, Papelerías, Farmacias, Verdulerías, Novedades, Ferreterías, entre otros.</p>
                  
                  <div className="mb-4">
                    <ul className="text-gray-100 text-sm space-y-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li>✓ Control de Ventas</li>
                      <li>✓ Entrada y salida de efectivos</li>
                      <li>✓ Control de inventarios</li>
                      <li>✓ Reporte de ventas diarias</li>
                      <li>✓ Impresión de ticket</li>
                      <li>✓ Envío de ticket por WhatsApp</li>
                      <li>✓ Ventas de recargas telefónicas</li>
                      <li>✓ Pagos de servicios</li>
                    </ul>
                  </div>

                  {/* PLATAFORMAS CON ÍCONOS VISIBLES */}
                  <div className="mb-6">
                    <p className="text-gnet-light text-sm font-semibold mb-2 uppercase tracking-wide">Plataformas disponibles:</p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <div className="flex items-center gap-2 bg-white text-gnet-dark px-4 py-2 rounded-full shadow-md">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                        </svg>
                        <span className="font-bold text-sm">Windows</span>
                      </div>
                      <div className="flex items-center gap-2 bg-yellow-400 text-gnet-dark px-4 py-2 rounded-full shadow-md">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.523 15.341c-.551 0-.999-.448-.999-.999s.448-.999.999-.999c.551 0 .999.448.999.999.001.551-.448.999-.999.999m-11.046 0c-.551 0-.999-.448-.999-.999s.448-.999.999-.999c.551 0 .999.448.999.999s-.448.999-.999.999m11.404-6.02l1.997-3.459a.416.416 0 00-.152-.567.416.416 0 00-.567.152l-2.022 3.503C15.59 8.478 13.853 8.199 12 8.199c-1.853 0-3.59.279-5.137.751L4.841 5.447a.416.416 0 00-.567-.152.415.415 0 00-.152.567l1.997 3.459C2.688 11.186.343 14.658 0 18.761h24c-.344-4.103-2.689-7.575-6.119-9.44"/>
                        </svg>
                        <span className="font-bold text-sm">Android (Próximamente)</span>
                      </div>
                    </div>
                  </div>

                  {/* BOTONES DE ACCIÓN */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <a 
                      href="https://bit.ly/3X0XfEM" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-md"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                      Descargar Instalador
                    </a>
                    <a 
                      href="https://wa.me/522205291846?text=Hola,%20quiero%20información%20sobre%20G-Net%20Punto%20de%20Venta" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 bg-white text-gnet-dark px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition border border-gray-200"
                    >
                      <span>💬</span> Solicitar Demostración
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-gnet-light hover:border-gnet-primary transition duration-300">
              <img src="/vende.png" alt="Vende+" className="w-20 h-20 object-contain mb-4" />
              <h3 className="text-xl font-bold text-gnet-dark mb-2">Vende+</h3>
              <p className="text-gnet-primary font-semibold mb-3">Para proveedores independientes</p>
              <p className="text-gray-600 mb-4 text-sm">Aplicación que funciona en Android, iOS, Windows y Mac.</p>
              <div className="mb-4">
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>✓ Registro de Clientes</li>
                  <li>✓ Registro de Pedidos de Clientes</li>
                  <li>✓ Agendas de Visitas</li>
                  <li>✓ Localización GPS</li>
                  <li>✓ Venta en tiempo real</li>
                  <li>✓ Control de inventarios</li>
                  <li>✓ Reportes de ventas y gastos</li>
                  <li>✓ Control y Pago de Nómina a empleados</li>
                  <li>✓ Funciona con internet y sin internet</li>
                  <li>✓ El administrador puede agregar a sus vendedores</li>
                </ul>
              </div>
              <div className="bg-gnet-light bg-opacity-30 p-4 rounded-lg mb-4">
                <p className="text-gnet-dark font-bold text-lg">$79 <span className="text-sm font-normal">/ mes</span></p>
                <p className="text-gray-600 text-sm">Prueba gratis 15 días</p>
              </div>
              <a href="https://wa.me/522205291846?text=Hola,%20me%20interesa%20Vende+" target="_blank" rel="noopener noreferrer" className="block text-center bg-gnet-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-gnet-dark transition">
                Solicitar prueba gratis
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-gnet-light hover:border-gnet-primary transition duration-300">
              <img src="/aqua.png" alt="Gestion Aqua Clean" className="w-20 h-20 object-contain mb-4" />
              <h3 className="text-xl font-bold text-gnet-dark mb-2">Gestion Aqua Clean</h3>
              <p className="text-gnet-primary font-semibold mb-3">Para Negocios de Purificadores de Agua</p>
              <p className="text-gray-600 mb-4 text-sm">Funciona únicamente en Windows. Se personaliza a tu purificadora.</p>
              <div className="mb-4">
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>✓ Control de ventas e inventario</li>
                  <li>✓ Control de Gastos</li>
                  <li>✓ Control y pago de nóminas</li>
                  <li>✓ Asistencia de Empleados</li>
                  <li>✓ Entrada y salida de equipos de repartos</li>
                  <li>✓ Agenda de visitas</li>
                  <li>✓ Registro de clientes</li>
                  <li>✓ Control de insumos (Precio tratable)</li>
                </ul>
              </div>
              <div className="bg-gnet-light bg-opacity-30 p-4 rounded-lg mb-4">
                <p className="text-gnet-dark font-bold text-lg">Personalizado</p>
                <p className="text-gray-600 text-sm">Se adapta a tu purificadora</p>
              </div>
              <a href="https://wa.me/522205291846?text=Hola,%20me%20interesa%20Gestion%20Aqua%20Clean" target="_blank" rel="noopener noreferrer" className="block text-center bg-gnet-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-gnet-dark transition">
                Solicitar cotización
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-gnet-light hover:border-gnet-primary transition duration-300 md:col-span-2">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img src="/wifi.png" alt="Wifirouter" className="w-20 h-20 object-contain" />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gnet-dark mb-2">Wifirouter</h3>
                  <p className="text-gnet-primary font-semibold mb-2">Disponible para Windows</p>
                  <p className="text-gray-600 text-sm mb-4">Sistema para venta de fichas de internet y control de uso de Wifi.</p>
                </div>
                <a href="https://wa.me/522205291846?text=Hola,%20me%20interesa%20Wifirouter" target="_blank" rel="noopener noreferrer" className="bg-gnet-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-gnet-dark transition text-sm whitespace-nowrap">
                  Solicitar información
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-gnet-dark to-gnet-primary rounded-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas algo diferente?</h3>
              <p className="text-lg mb-6">
                También se trabaja en <strong>programas personalizados</strong> adaptados a las necesidades específicas de tu negocio.
              </p>
              <a href="#contacto" className="inline-block bg-white text-gnet-dark px-8 py-3 rounded-lg font-bold hover:bg-gnet-light transition">
                Hablemos de tu proyecto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gnet-dark mb-4">Nuestros Servicios</h2>
            <div className="w-24 h-1 bg-gnet-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl border-2 border-gnet-light hover:border-gnet-primary hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gnet-dark mb-3">Desarrollo Web</h3>
              <p className="text-gray-600">Sitios web modernos, rápidos y optimizados para que tus clientes te encuentren fácilmente.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-gnet-light hover:border-gnet-primary hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gnet-dark mb-3">Soporte Tecnológico</h3>
              <p className="text-gray-600">Mantenimiento, resolución de problemas y asesoría técnica para que tu equipo nunca se detenga.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-gnet-light hover:border-gnet-primary hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gnet-dark mb-3">Software a Medida</h3>
              <p className="text-gray-600">Programas y aplicaciones diseñados específicamente para resolver los retos de tu negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALERÍA ===== */}
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gnet-dark mb-4">Galería de Programas</h2>
            <div className="w-24 h-1 bg-gnet-primary mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Haz clic en cualquier programa para ver sus capturas de pantalla.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Object.keys(galleries).map((key) => (
              <div 
                key={key}
                onClick={() => setActiveGallery(key)}
                className="cursor-pointer transform hover:scale-105 transition duration-300"
              >
                <div className="bg-gradient-to-br from-gnet-dark to-gnet-primary rounded-xl shadow-lg p-6 h-64 flex flex-col items-center justify-center">
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
                    <img src={`/${key}.png`} alt={galleryTitles[key]} className="w-20 h-20 object-contain" style={{ display: 'block' }} />
                  </div>
                  <h3 className="text-white text-xl font-bold text-center">{galleryTitles[key]}</h3>
                  <p className="text-gnet-light text-sm mt-2">Ver {galleries[key].length} fotos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Galería */}
      {activeGallery && !fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setActiveGallery(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-2xl font-bold text-gnet-dark flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg p-1">
                  <img src={`/${activeGallery}.png`} alt="Logo" className="w-full h-full object-contain" />
                </div>
                {galleryTitles[activeGallery]}
              </h3>
              <button onClick={() => setActiveGallery(null)} className="text-gray-500 hover:text-red-500 text-3xl font-bold">&times;</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleries[activeGallery].map((img, i) => (
                <div key={i} className="cursor-pointer hover:opacity-80 transition" onClick={() => setFullScreenImage(img)}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-200">
                    <img src={img} alt={`Foto ${i+1}`} className="w-full h-auto object-contain" style={{ display: 'block', backgroundColor: 'white' }} />
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setActiveGallery(null)} className="mt-8 w-full bg-gnet-dark text-white py-3 rounded-lg font-bold hover:bg-gnet-primary transition">
              Cerrar Galería
            </button>
          </div>
        </div>
      )}

      {/* Modal de Imagen Completa */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-[60] flex items-center justify-center p-4" onClick={() => setFullScreenImage(null)}>
          <button className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition z-50">&times;</button>
          <div className="bg-white rounded-lg p-4 max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img src={fullScreenImage} alt="Vista completa" className="max-w-full max-h-[85vh] object-contain" style={{ display: 'block' }} />
          </div>
          <p className="absolute bottom-6 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">Haz clic fuera para cerrar</p>
        </div>
      )}

      {/* ===== MODAL DE AVISO DE PRIVACIDAD (NUEVO) ===== */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[70] flex items-center justify-center p-4" onClick={() => setShowPrivacy(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-2xl font-bold text-gnet-dark">Aviso de Privacidad</h3>
              <button onClick={() => setShowPrivacy(false)} className="text-gray-500 hover:text-red-500 text-3xl font-bold">&times;</button>
            </div>
            <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
              <p><strong>Responsable:</strong> G-Net Studio, representado por el Lic. Bertín García Cruz, con domicilio en Calle Miguel Alemán, Morelos, Soteapan, Veracruz, México.</p>
              <p><strong>Datos que recopilamos:</strong> Para atender sus solicitudes, recopilamos datos de identificación y contacto (nombre, correo electrónico, número de teléfono) y el contenido de su mensaje.</p>
              <p><strong>Finalidad:</strong> Sus datos serán utilizados únicamente para responder a sus consultas, brindar información sobre nuestros servicios y programas, y dar seguimiento a sus solicitudes. No compartimos su información con terceros con fines comerciales.</p>
              <p><strong>Derechos ARCO:</strong> Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede enviar un correo a <strong>gnetstudio@protonmail.com</strong> con el asunto "Derechos ARCO".</p>
              <p><strong>Consentimiento:</strong> Al enviar el formulario de contacto en este sitio web, usted otorga su consentimiento expreso para el tratamiento de sus datos bajo los términos de este aviso.</p>
              <p className="text-xs text-gray-500 mt-6">Última actualización: 2026</p>
            </div>
            <button onClick={() => setShowPrivacy(false)} className="mt-8 w-full bg-gnet-dark text-white py-3 rounded-lg font-bold hover:bg-gnet-primary transition">
              Entendido y Cerrar
            </button>
          </div>
        </div>
      )}

      {/* ===== CONTACTO ===== */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gnet-dark mb-4">Contáctanos</h2>
            <div className="w-24 h-1 bg-gnet-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gnet-dark mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h4 className="font-bold text-gnet-dark">Email</h4>
                    <a href="mailto:gnetstudio@protonmail.com" className="text-gray-600 hover:text-gnet-primary transition">gnetstudio@protonmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h4 className="font-bold text-gnet-dark">WhatsApp</h4>
                    <a href="https://wa.me/522205291846" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition font-semibold">+52 220 529 1846</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h4 className="font-bold text-gnet-dark">Ubicación</h4>
                    <p className="text-gray-600">Calle Miguel Alemán, Morelos,<br/>Soteapan, Veracruz, México.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">⏰</div>
                  <div>
                    <h4 className="font-bold text-gnet-dark">Horario</h4>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gnet-dark mb-6">Envíanos un mensaje</h3>
              <form action="https://formsubmit.co/gnetstudio@protonmail.com" method="POST" className="space-y-4 mb-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://localhost:3000/#contacto" />
                <input type="hidden" name="_subject" value="Nuevo mensaje desde G-Net Studio" />
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                  <input type="text" name="nombre" required className="w-full px-4 py-3 border-2 border-gnet-light rounded-lg focus:border-gnet-primary focus:outline-none transition bg-white" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 border-2 border-gnet-light rounded-lg focus:border-gnet-primary focus:outline-none transition bg-white" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                  <textarea name="mensaje" rows={4} required className="w-full px-4 py-3 border-2 border-gnet-light rounded-lg focus:border-gnet-primary focus:outline-none transition bg-white" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                </div>
                
                {/* CHECKBOX DE PRIVACIDAD OBLIGATORIO */}
                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" id="privacy" name="privacidad" required className="mt-1 w-4 h-4 text-gnet-primary border-gnet-light rounded focus:ring-gnet-primary" />
                  <label htmlFor="privacy" className="text-sm text-gray-600 leading-tight">
                    He leído y acepto el <button type="button" onClick={() => setShowPrivacy(true)} className="text-gnet-primary underline hover:text-gnet-dark font-semibold">Aviso de Privacidad</button> y autorizo el manejo de mis datos personales para ser contactado.
                  </label>
                </div>

                <button type="submit" className="w-full bg-gnet-dark text-white py-3 rounded-lg font-bold hover:bg-gnet-primary transition flex items-center justify-center gap-2">
                  <span>📧</span> Enviar por Correo
                </button>
              </form>

              <div className="relative flex py-2 items-center mb-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink-0 mx-4 text-gray-500 text-sm font-medium">O si prefieres una respuesta inmediata</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <a href="https://wa.me/522205291846?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20G-Net%20Studio" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 text-white py-3 px-6 rounded-lg font-bold text-center hover:bg-green-600 transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                <span className="text-xl">💬</span> Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gnet-dark text-gray-300 py-12">
        <div className="container mx-auto px-4 text-center">
          <img src="/logo.png" alt="G-Net Studio" className="h-24 w-auto object-contain mx-auto mb-6" />
          <p className="text-xl font-bold text-white mb-2">G-Net Studio</p>
          <p className="text-sm mb-6 max-w-md mx-auto">Soluciones tecnológicas a tu medida. Desarrollo de software y soporte para hacer crecer tu negocio.</p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm">© 2026 G-Net Studio. Todos los derechos reservados.</p>
            <p className="text-xs text-gray-500 mt-2">
              <button onClick={() => setShowPrivacy(true)} className="hover:text-white underline transition cursor-pointer">Aviso de Privacidad</button> | Soteapan, Veracruz, México
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}