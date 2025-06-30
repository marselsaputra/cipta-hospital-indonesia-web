
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

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
    { name: 'Kontak', href: '/kontak' },
    { name: 'Karir', href: '#', onClick: () => alert('Halaman Karir sedang dalam pengembangan. Hubungi HR kami di +62 21 1234 5678 untuk informasi lowongan kerja.') },
    { name: 'Berita', href: '#', onClick: () => alert('Halaman Berita sedang dalam pengembangan. Ikuti media sosial kami untuk update terbaru.') }
  ];

  const services = [
    { name: 'Instalasi Gawat Darurat', href: '/layanan' },
    { name: 'Poliklinik Spesialis', href: '/layanan' },
    { name: 'Rawat Inap', href: '/layanan' },
    { name: 'Laboratorium', href: '/layanan' },
    { name: 'Radiologi', href: '/layanan' },
    { name: 'Fisioterapi', href: '/layanan' }
  ];

  const handlePolicyClick = (type: string) => {
    alert(`Halaman ${type} sedang dalam pengembangan. Untuk informasi lebih lanjut, hubungi customer service kami di +62 21 1234 5678.`);
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=4221&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
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
                  {link.onClick ? (
                    <button 
                      onClick={link.onClick}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link to={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 PT. Cipta Hospital Indonesia. Semua hak cipta dilindungi.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button 
                onClick={() => handlePolicyClick('Kebijakan Privasi')}
                className="hover:text-blue-400 transition-colors"
              >
                Kebijakan Privasi
              </button>
              <button 
                onClick={() => handlePolicyClick('Syarat & Ketentuan')}
                className="hover:text-blue-400 transition-colors"
              >
                Syarat & Ketentuan
              </button>
              <button 
                onClick={() => handlePolicyClick('Sitemap')}
                className="hover:text-blue-400 transition-colors"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
