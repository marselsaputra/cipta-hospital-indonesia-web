
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Award, Clock, Phone, MapPin, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize sample services data in localStorage
  useEffect(() => {
    const existingServices = localStorage.getItem('hospital-services');
    if (!existingServices) {
      const sampleServices = [
        {
          id: 1,
          name: 'Instalasi Gawat Darurat (IGD)',
          description: 'Pelayanan 24 jam untuk penanganan kasus darurat medis dengan tim dokter dan perawat berpengalaman.',
          category: 'Darurat',
          available: true
        },
        {
          id: 2,
          name: 'Rawat Inap',
          description: 'Fasilitas kamar rawat inap dengan berbagai kelas mulai dari VIP hingga kelas 3 dengan pelayanan terbaik.',
          category: 'Rawat Inap',
          available: true
        },
        {
          id: 3,
          name: 'Poliklinik Umum',
          description: 'Pelayanan konsultasi dan pemeriksaan kesehatan umum dengan dokter umum berpengalaman.',
          category: 'Poliklinik',
          available: true
        },
        {
          id: 4,
          name: 'Poliklinik Spesialis Jantung',
          description: 'Pelayanan khusus untuk penyakit jantung dan pembuluh darah dengan teknologi canggih.',
          category: 'Spesialis',
          available: true
        },
        {
          id: 5,
          name: 'Laboratorium',
          description: 'Layanan pemeriksaan laboratorium lengkap dengan hasil akurat dan cepat.',
          category: 'Penunjang',
          available: true
        },
        {
          id: 6,
          name: 'Radiologi',
          description: 'Pelayanan pemeriksaan radiologi termasuk Rontgen, CT Scan, dan MRI.',
          category: 'Penunjang',
          available: true
        }
      ];
      localStorage.setItem('hospital-services', JSON.stringify(sampleServices));
    }
  }, []);

  const features = [
    {
      icon: Heart,
      title: 'Pelayanan Terbaik',
      description: 'Komitmen kami memberikan pelayanan kesehatan terbaik dengan penuh kasih sayang dan profesionalisme.'
    },
    {
      icon: Users,
      title: 'Tim Medis Berpengalaman',
      description: 'Didukung oleh tim dokter spesialis dan perawat berpengalaman dengan dedikasi tinggi.'
    },
    {
      icon: Award,
      title: 'Fasilitas Modern',
      description: 'Dilengkapi dengan peralatan medis terkini dan fasilitas yang nyaman untuk pasien.'
    },
    {
      icon: Clock,
      title: 'Layanan 24 Jam',
      description: 'Instalasi Gawat Darurat beroperasi 24 jam untuk memberikan pertolongan kapan saja.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              PT. Cipta Hospital Indonesia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
              Melayani dengan Hati, Menyembuhkan dengan Profesional
            </p>
            <p className="text-lg mb-10 text-blue-50 max-w-2xl mx-auto animate-fade-in">
              Rumah sakit terpercaya dengan fasilitas modern dan tim medis berpengalaman, 
              siap memberikan pelayanan kesehatan terbaik untuk Anda dan keluarga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link to="/layanan">Lihat Layanan Kami</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700">
                <Link to="/kontak">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Komitmen kami adalah memberikan pelayanan kesehatan terbaik dengan 
              standar internasional dan teknologi terdepan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai layanan kesehatan komprehensif untuk memenuhi kebutuhan medis Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Instalasi Gawat Darurat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pelayanan 24 jam untuk penanganan kasus darurat medis dengan tim dokter berpengalaman.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  Poliklinik Spesialis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Berbagai layanan spesialis dengan dokter ahli dan fasilitas pemeriksaan lengkap.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-500" />
                  Rawat Inap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fasilitas rawat inap yang nyaman dengan pelayanan perawatan 24 jam.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/layanan">Lihat Semua Layanan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Tim kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telepon</h3>
              <p className="text-blue-100">+62 21 1234 5678</p>
              <p className="text-blue-100">+62 21 8765 4321</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">info@ciptahospital.co.id</p>
              <p className="text-blue-100">admin@ciptahospital.co.id</p>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Alamat</h3>
              <p className="text-blue-100">Jl. Kesehatan Raya No. 123</p>
              <p className="text-blue-100">Jakarta Selatan, DKI Jakarta</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700">
              <Link to="/kontak">Kirim Pesan</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
