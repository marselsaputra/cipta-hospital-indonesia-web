
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Stethoscope, Activity, Microscope, Scan } from 'lucide-react';
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
        return 'bg-red-100 text-red-800';
      case 'Rawat Inap':
        return 'bg-blue-100 text-blue-800';
      case 'Poliklinik':
        return 'bg-green-100 text-green-800';
      case 'Spesialis':
        return 'bg-purple-100 text-purple-800';
      case 'Penunjang':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Layanan Kami
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Layanan kesehatan komprehensif dengan standar internasional 
              untuk memenuhi kebutuhan medis Anda dan keluarga.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  selectedCategory === category 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'hover:bg-blue-50'
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
                <Card key={service.id} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <Badge className={`mt-2 ${getCategoryColor(service.category)}`}>
                            {service.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        service.available ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <span className={`text-sm font-medium ${
                        service.available ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {service.available ? 'Tersedia' : 'Tidak Tersedia'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                Tidak ada layanan yang ditemukan untuk kategori "{selectedCategory}".
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Butuh Informasi Lebih Lanjut?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Tim customer service kami siap membantu Anda dengan informasi lengkap 
            mengenai layanan dan fasilitas yang tersedia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+622112345678"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Hubungi Kami: +62 21 1234 5678
            </a>
            <a
              href="/kontak"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              Kirim Pesan
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Layanan;
