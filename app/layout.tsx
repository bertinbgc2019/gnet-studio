import "./globals.css";

export const metadata = {
  title: "G-Net Studio | Soluciones Tecnológicas a tu Medida",
  description: "Desarrollo de software, soporte tecnológico y soluciones digitales para profesionales y emprendedores. G-Net Punto de Venta, Vende+, Gestion Aqua Clean y más.",
  icons: {
    icon: "/icon.png",
  },
};

// Agregamos los tipos explícitos para children
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}