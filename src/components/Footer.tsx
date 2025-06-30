
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import CustomAlert from './CustomAlert';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Youtube', icon: Youtube, href: 'https://youtube.com' }
  ];

  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Karir', href: '/karir' },
    { name: 'Berita', href: '/berita' },
    { name: 'Kontak', href: '/kontak' }
  ];

  const services = [
    { name: 'Instalasi Gawat Darurat', href: '/layanan' },
    { name: 'Poliklinik Spesialis', href: '/layanan' },
    { name: 'Rawat Inap', href: '/layanan' },
    { name: 'Laboratorium', href: '/layanan' },
    { name: 'Radiologi', href: '/layanan' },
    { name: 'Fisioterapi', href: '/layanan' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-5"></div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
            <img src="/public/icon.png" alt="Logo" className="h-10 w-10" />
              <div>
                <span className="text-2xl font-bold">PT. Cipta Hospital Indonesia</span>
                <Badge className="ml-2 bg-green-500 text-white">Standar Internasional</Badge>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Rumah sakit terpercaya yang berkomitmen memberikan pelayanan kesehatan 
              terbaik dengan fasilitas modern dan tim medis berpengalaman selama lebih dari 15 tahun.
            </p>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-600 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-green-400">IGD Buka 24 Jam</span>
                <p className="text-sm text-gray-400">Layanan darurat siap membantu</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Hubungi Kami</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">Telepon</p>
                  <a href="tel:+622112345678" className="font-medium hover:text-blue-400 transition-colors">+62 21 1234 5678</a>
                  <br />
                  <a href="tel:+622187654321" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">+62 21 8765 4321</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:info@ciptahospital.co.id" className="font-medium hover:text-blue-400 transition-colors">info@ciptahospital.co.id</a>
                  <br />
                  <a href="mailto:cs@ciptahospital.co.id" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">cs@ciptahospital.co.id</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">Alamat</p>
                  <p className="font-medium">Jl. Kesehatan Raya No. 123</p>
                  <p className="text-sm text-gray-400">Jakarta Selatan, DKI Jakarta</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Layanan Utama</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-8 text-blue-400">Menu</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 PT. Cipta Hospital Indonesia. Semua hak cipta dilindungi.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link 
                to="/kebijakan-privasi"
                className="hover:text-blue-400 transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link 
                to="/syarat-ketentuan"
                className="hover:text-blue-400 transition-colors"
              >
                Syarat & Ketentuan
              </Link>
              <Link 
                to="/sitemap"
                className="hover:text-blue-400 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
