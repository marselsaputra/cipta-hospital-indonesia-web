
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Stethoscope, Activity, Clock, Star, ArrowRight, Phone, MapPin, Calendar, Award, Shield, Microscope, Scan, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomAlert from '@/components/CustomAlert';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: 'Instalasi Gawat Darurat',
      description: 'Layanan darurat 24/7 dengan tim medis siaga',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Stethoscope,
      title: 'Poliklinik Spesialis',
      description: 'Berbagai spesialis untuk kebutuhan kesehatan Anda',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Rawat Inap',
      description: 'Fasilitas rawat inap dengan perawatan terbaik',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Microscope,
      title: 'Laboratorium',
      description: 'Pemeriksaan lab dengan teknologi canggih',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Scan,
      title: 'Radiologi',
      description: 'Pemeriksaan radiologi dan imaging terkini',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Activity,
      title: 'Fisioterapi',
      description: 'Rehabilitasi dan terapi fisik profesional',
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  const stats = [
    { number: '15+', label: 'Tahun Pengalaman', icon: Award },
    { number: '50+', label: 'Dokter Spesialis', icon: UserCheck },
    { number: '10k+', label: 'Pasien Terlayani', icon: Users },
    { number: '24/7', label: 'Layanan Darurat', icon: Clock }
  ];

  const testimonials = [
    {
      name: 'Ibu Sari Dewi',
      role: 'Pasien Rawat Jalan',
      image: '/public/image.png',
      comment: 'Pelayanan yang sangat memuaskan. Dokter dan perawat sangat ramah dan profesional. Fasilitas rumah sakit juga sangat bersih dan modern.'
    },
    {
      name: 'Bapak Ahmad Santoso',
      role: 'Keluarga Pasien',
      image: '/public/image.png',
      comment: 'Terima kasih atas perawatan terbaik untuk ayah saya. Tim medis sangat kompeten dan memberikan penjelasan yang detail tentang kondisi pasien.'
    },
    {
      name: 'Ibu Maya Putri',
      role: 'Pasien Rawat Inap',
      image: '/public/image.png',
      comment: 'Pengalaman rawat inap yang nyaman. Kamar bersih, makanan bergizi, dan perawat yang selalu siap membantu 24 jam.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=4470&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                🏥 Rumah Sakit Terpercaya
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Melayani Indonesia dengan 
                <span className="text-yellow-300"> Dedikasi Tinggi</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                PT. Cipta Hospital Indonesia hadir dengan layanan kesehatan berkualitas internasional, 
                didukung teknologi modern dan tim medis berpengalaman untuk kesehatan keluarga Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                  <a href="tel:+622112345678">
                    <Phone className="mr-2 h-5 w-5" />
                    Hubungi Sekarang
                  </a>
                </Button>
                <CustomAlert
                  trigger={
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold bg-transparent">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Pelajari Lebih Lanjut
                    </Button>
                  }
                  title="Tentang PT. Cipta Hospital Indonesia"
                  description="Kami adalah rumah sakit yang telah berpengalaman lebih dari 15 tahun dalam memberikan pelayanan kesehatan terbaik. Dengan fasilitas modern, teknologi canggih, dan tim medis profesional, kami berkomitmen untuk memberikan perawatan kesehatan berkualitas tinggi untuk seluruh keluarga Indonesia. Layanan kami meliputi IGD 24 jam, rawat jalan, rawat inap, dan berbagai layanan spesialis."
                  type="info"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=4470&auto=format&fit=crop" 
                  alt="Rumah Sakit Modern Indonesia"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-2xl">15+</p>
                      <p className="text-gray-600">Tahun Pengalaman</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              🏥 Layanan Unggulan
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kesehatan Terpadu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan kesehatan komprehensif dengan standar internasional 
              untuk memenuhi kebutuhan medis Anda dan keluarga.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to="/layanan">
                <Card className="hover:shadow-lg transition-all duration-300 h-full border-0 shadow-md group cursor-pointer">
                  <CardHeader>
                    <div className={`p-3 rounded-lg w-fit ${service.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="font-medium">Pelajari lebih lanjut</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              💬 Testimoni Pasien
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Pasien Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kepuasan pasien adalah prioritas utama kami. Berikut adalah cerita dari mereka 
              yang telah merasakan pelayanan terbaik kami.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.comment}"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Memberikan Pelayanan Terbaik
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Tim medis profesional kami siap melayani Anda 24/7. 
              Hubungi kami sekarang untuk konsultasi atau informasi lebih lanjut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                <a href="tel:+622112345678">
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi: +62 21 1234 5678
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold bg-transparent">
                <Link to="/kontak">
                  <MapPin className="mr-2 h-5 w-5" />
                  Lokasi & Jam Operasional
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
