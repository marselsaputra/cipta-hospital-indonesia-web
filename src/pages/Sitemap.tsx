
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Home, Stethoscope, Phone, Briefcase, Newspaper, Shield, FileText, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Sitemap = () => {
  const pages = [
    {
      title: 'Halaman Utama',
      icon: Home,
      links: [
        { name: 'Beranda', path: '/', description: 'Halaman utama dengan informasi umum rumah sakit' }
      ]
    },
    {
      title: 'Layanan Medis',
      icon: Stethoscope,
      links: [
        { name: 'Daftar Layanan', path: '/layanan', description: 'Informasi lengkap tentang layanan medis yang tersedia' }
      ]
    },
    {
      title: 'Komunikasi',
      icon: Phone,
      links: [
        { name: 'Kontak Kami', path: '/kontak', description: 'Form kontak dan informasi cara menghubungi rumah sakit' }
      ]
    },
    {
      title: 'Karir & SDM',
      icon: Briefcase,
      links: [
        { name: 'Karir', path: '/karir', description: 'Informasi lowongan kerja dan cara melamar' }
      ]
    },
    {
      title: 'Informasi & Berita',
      icon: Newspaper,
      links: [
        { name: 'Berita', path: '/berita', description: 'Berita terbaru dan informasi seputar rumah sakit' }
      ]
    },
    {
      title: 'Kebijakan & Ketentuan',
      icon: Shield,
      links: [
        { name: 'Kebijakan Privasi', path: '/kebijakan-privasi', description: 'Kebijakan perlindungan data dan privasi pasien' },
        { name: 'Syarat & Ketentuan', path: '/syarat-ketentuan', description: 'Syarat dan ketentuan penggunaan layanan' }
      ]
    },
    {
      title: 'Navigasi',
      icon: FileText,
      links: [
        { name: 'Sitemap', path: '/sitemap', description: 'Peta situs untuk navigasi yang mudah' }
      ]
    }
  ];

  const externalLinks = [
    { name: 'Website Kementerian Kesehatan RI', url: 'https://www.kemkes.go.id' },
    { name: 'Ikatan Dokter Indonesia (IDI)', url: 'https://www.idionline.org' },
    { name: 'Perhimpunan Rumah Sakit Indonesia (PERSI)', url: 'https://www.persi.or.id' },
    { name: 'BPJS Kesehatan', url: 'https://www.bpjs-kesehatan.go.id' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=4456&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🗺️ Peta Situs
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sitemap
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Peta lengkap semua halaman dan fitur yang tersedia di website 
              PT. Cipta Hospital Indonesia untuk memudahkan navigasi Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                <div className="text-gray-600">Total Halaman</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                <div className="text-gray-600">Kategori Utama</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600">Layanan Medis</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                <div className="text-gray-600">Link Eksternal</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Struktur Website
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan dengan mudah halaman atau informasi yang Anda cari
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pages.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <section.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-l-4 border-blue-200 pl-4 hover:border-blue-400 transition-colors">
                        <Link 
                          to={link.path}
                          className="block hover:text-blue-600 transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900 mb-1">{link.name}</h4>
                          <p className="text-gray-600 text-sm">{link.description}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* External Links */}
          <div className="mt-16">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ExternalLink className="h-6 w-6 text-green-600" />
                  </div>
                  Link Eksternal Terkait
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {externalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
                    >
                      <span className="text-gray-700 group-hover:text-blue-700 transition-colors">
                        {link.name}
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Tips */}
          <div className="mt-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-teal-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Tips Navigasi Website
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="p-3 bg-blue-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <Home className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Navigasi Mudah</h4>
                    <p className="text-gray-600 text-sm">Menu navigasi tersedia di setiap halaman untuk akses cepat</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-3 bg-green-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Kontak Cepat</h4>
                    <p className="text-gray-600 text-sm">Informasi kontak tersedia di footer setiap halaman</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-3 bg-purple-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Responsif</h4>
                    <p className="text-gray-600 text-sm">Website dapat diakses optimal di desktop dan mobile</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Butuh Bantuan Navigasi?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Tim customer service kami siap membantu Anda menemukan informasi yang dibutuhkan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+622112345678"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-lg transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Hubungi: +62 21 1234 5678
              </a>
              <Link 
                to="/kontak"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold rounded-lg transition-colors"
              >
                Kirim Pesan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;
