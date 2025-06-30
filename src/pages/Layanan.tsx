
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Stethoscope, Activity, Microscope, Scan, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  available: boolean;
}

const Layanan = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  useEffect(() => {
    const savedServices = localStorage.getItem('hospital-services');
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    }
  }, []);

  const categories = ['Semua', ...Array.from(new Set(services.map(service => service.category)))];
  
  const filteredServices = selectedCategory === 'Semua' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Darurat':
        return Heart;
      case 'Rawat Inap':
        return Users;
      case 'Poliklinik':
        return Stethoscope;
      case 'Spesialis':
        return Activity;
      case 'Penunjang':
        return category.includes('Lab') ? Microscope : Scan;
      default:
        return Stethoscope;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Darurat':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Rawat Inap':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Poliklinik':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Spesialis':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Penunjang':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const facilities = [
    {
      name: 'Ruang Operasi Modern',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=6000&auto=format&fit=crop',
      description: 'Ruang operasi dengan teknologi canggih dan standar sterilisasi tinggi'
    },
    {
      name: 'ICU & NICU',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2834&auto=format&fit=crop',
      description: 'Unit perawatan intensif dengan monitoring 24 jam'
    },
    {
      name: 'Laboratorium Canggih',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=3857&auto=format&fit=crop',
      description: 'Laboratorium dengan peralatan otomatis dan hasil akurat'
    }
  ];

  const specialFeatures = [
    { icon: Clock, title: 'Layanan 24/7', description: 'IGD dan layanan darurat tersedia 24 jam setiap hari' },
    { icon: Star, title: 'Akreditasi A', description: 'Tersertifikasi dengan standar pelayanan internasional' },
    { icon: CheckCircle, title: 'ISO Certified', description: 'Memenuhi standar kualitas ISO untuk rumah sakit' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=4221&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🏥 Layanan Kesehatan Terpadu
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Layanan Kami
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Layanan kesehatan komprehensif dengan standar internasional 
              untuk memenuhi kebutuhan medis Anda dan keluarga dengan teknologi terdepan.
            </p>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md">
                <div className="p-3 bg-blue-100 rounded-full">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Daftar Layanan Medis
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih kategori layanan untuk melihat detail layanan yang tersedia
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 transition-all hover:scale-105 ${
                  selectedCategory === category 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'hover:bg-blue-50 border-blue-200 text-blue-700'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <Card key={service.id} className="hover:shadow-lg transition-all duration-300 h-full border-0 shadow-md group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg leading-tight">{service.name}</CardTitle>
                        </div>
                      </div>
                    </div>
                    <Badge className={`mt-2 w-fit ${getCategoryColor(service.category)}`}>
                      {service.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          service.available ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        <span className={`text-sm font-medium ${
                          service.available ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {service.available ? 'Tersedia' : 'Tidak Tersedia'}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🏥</div>
                <p className="text-gray-500 text-lg">
                  Tidak ada layanan yang ditemukan untuk kategori "{selectedCategory}".
                </p>
                <Button 
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setSelectedCategory('Semua')}
                >
                  Lihat Semua Layanan
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fasilitas Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fasilitas modern dan teknologi canggih untuk mendukung pelayanan terbaik
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Butuh Informasi Lebih Lanjut?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Tim customer service kami siap membantu Anda dengan informasi lengkap 
              mengenai layanan dan fasilitas yang tersedia. Konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                <a href="tel:+622112345678">
                  📞 Hubungi: +62 21 1234 5678
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold bg-transparent">
                <a href="/kontak">
                  💬 Kirim Pesan
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Layanan;
