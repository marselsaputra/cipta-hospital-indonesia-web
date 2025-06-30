
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Award, Clock, Phone, MapPin, Mail, Star, Stethoscope, Activity, CheckCircle, ArrowRight, Shield, Zap, Globe } from 'lucide-react';
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
          description: 'Pelayanan 24 jam untuk penanganan kasus darurat medis dengan tim dokter dan perawat berpengalaman serta peralatan medis canggih.',
          category: 'Darurat',
          available: true
        },
        {
          id: 2,
          name: 'Rawat Inap VIP',
          description: 'Fasilitas kamar rawat inap mewah dengan berbagai kelas mulai dari VIP hingga kelas 3 dengan pelayanan terbaik dan fasilitas lengkap.',
          category: 'Rawat Inap',
          available: true
        },
        {
          id: 3,
          name: 'Poliklinik Umum',
          description: 'Pelayanan konsultasi dan pemeriksaan kesehatan umum dengan dokter umum berpengalaman dan peralatan medis modern.',
          category: 'Poliklinik',
          available: true
        },
        {
          id: 4,
          name: 'Poliklinik Spesialis Jantung',
          description: 'Pelayanan khusus untuk penyakit jantung dan pembuluh darah dengan teknologi canggih seperti EKG, Echo, dan Kateterisasi Jantung.',
          category: 'Spesialis',
          available: true
        },
        {
          id: 5,
          name: 'Laboratorium Klinik',
          description: 'Layanan pemeriksaan laboratorium lengkap dengan hasil akurat dan cepat menggunakan teknologi otomatis terkini.',
          category: 'Penunjang',
          available: true
        },
        {
          id: 6,
          name: 'Radiologi & Imaging',
          description: 'Pelayanan pemeriksaan radiologi termasuk Rontgen, CT Scan, MRI, dan USG dengan teknologi terdepan.',
          category: 'Penunjang',
          available: true
        },
        {
          id: 7,
          name: 'Fisioterapi & Rehabilitasi',
          description: 'Layanan rehabilitasi medik dan fisioterapi untuk pemulihan fungsi tubuh dengan terapis berpengalaman.',
          category: 'Spesialis',
          available: true
        },
        {
          id: 8,
          name: 'Poliklinik Anak',
          description: 'Pelayanan kesehatan khusus untuk bayi, anak, dan remaja dengan dokter spesialis anak berpengalaman.',
          category: 'Spesialis',
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
      description: 'Komitmen kami memberikan pelayanan kesehatan terbaik dengan penuh kasih sayang dan profesionalisme tinggi.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Users,
      title: 'Tim Medis Berpengalaman',
      description: 'Didukung oleh tim dokter spesialis dan perawat berpengalaman dengan dedikasi tinggi dan sertifikasi internasional.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Award,
      title: 'Fasilitas Modern',
      description: 'Dilengkapi dengan peralatan medis terkini dan fasilitas yang nyaman untuk memberikan pelayanan terbaik.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Clock,
      title: 'Layanan 24 Jam',
      description: 'Instalasi Gawat Darurat beroperasi 24 jam untuk memberikan pertolongan medis kapan saja diperlukan.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Tahun Pengalaman' },
    { number: '50+', label: 'Dokter Spesialis' },
    { number: '10,000+', label: 'Pasien Dilayani' },
    { number: '95%', label: 'Kepuasan Pasien' }
  ];

  const testimonials = [
    {
      name: 'Ibu Sari Wijaya',
      role: 'Pasien Rawat Jalan',
      content: 'Pelayanan di PT. Cipta Hospital sangat memuaskan. Dokter dan perawat sangat ramah dan profesional. Fasilitas juga sangat lengkap dan modern.',
      rating: 5
    },
    {
      name: 'Bapak Ahmad Santoso',
      role: 'Keluarga Pasien',
      content: 'Ketika istri saya membutuhkan perawatan darurat, tim IGD sangat cepat tanggap. Terima kasih atas pelayanan yang luar biasa.',
      rating: 5
    },
    {
      name: 'Dr. Maria Indah',
      role: 'Mitra Dokter',
      content: 'Sebagai dokter yang sering merujuk pasien ke sini, saya sangat puas dengan standar pelayanan dan fasilitas yang tersedia.',
      rating: 5
    }
  ];

  const handleLearnMore = () => {
    alert('Informasi lengkap tentang PT. Cipta Hospital Indonesia:\n\n✓ Rumah sakit dengan pengalaman 15+ tahun\n✓ Tim medis profesional dan bersertifikat\n✓ Fasilitas modern dan teknologi terdepan\n✓ Pelayanan 24/7 untuk kasus darurat\n\nHubungi kami di +62 21 1234 5678 untuk informasi lebih detail.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2834&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🏥 Rumah Sakit Terpercaya Indonesia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              PT. Cipta Hospital Indonesia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
              Melayani dengan Hati, Menyembuhkan dengan Profesional
            </p>
            <p className="text-lg mb-10 text-blue-50 max-w-2xl mx-auto animate-fade-in">
              Rumah sakit terpercaya dengan fasilitas modern dan tim medis berpengalaman, 
              siap memberikan pelayanan kesehatan terbaik untuk Anda dan keluarga dengan standar internasional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-lg">
                <Link to="/layanan">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Lihat Layanan Kami
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold">
                <Link to="/kontak">
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Komitmen kami adalah memberikan pelayanan kesehatan terbaik dengan 
              standar internasional dan teknologi terdepan di Indonesia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                Tentang Kami
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Melayani Indonesia dengan Dedikasi Tinggi
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                PT. Cipta Hospital Indonesia telah melayani masyarakat Indonesia selama lebih dari 15 tahun 
                dengan komitmen memberikan pelayanan kesehatan terbaik. Kami mengombinasikan keahlian medis 
                tradisional dengan teknologi modern untuk memberikan perawatan holistik.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Tim medis bersertifikat internasional</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Standar keamanan dan sterilisasi tinggi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Teknologi medis terdepan dan modern</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Jaringan kerjasama dengan RS internasional</span>
                </div>
              </div>
              <Button onClick={handleLearnMore} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold" size="lg">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=3857&auto=format&fit=crop" 
                  alt="Gedung Rumah Sakit Modern Indonesia"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Activity className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Standar Internasional</div>
                    <div className="text-sm text-gray-600">Sertifikat ISO & JCI Ready</div>
                  </div>
                </div>
              </div>
            </div>
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
              Berbagai layanan kesehatan komprehensif untuk memenuhi kebutuhan medis Anda dan keluarga.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                      <Heart className="h-5 w-5 text-red-500" />
                    </div>
                    <span>Instalasi Gawat Darurat</span>
                  </CardTitle>
                  <Badge className="bg-green-100 text-green-800">24 Jam</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Pelayanan 24 jam untuk penanganan kasus darurat medis dengan tim dokter berpengalaman 
                  dan peralatan medis canggih untuk penanganan cepat dan tepat.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <Users className="h-5 w-5 text-blue-500" />
                    </div>
                    <span>Poliklinik Spesialis</span>
                  </CardTitle>
                  <Badge className="bg-blue-100 text-blue-800">8 Spesialis</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Berbagai layanan spesialis dengan dokter ahli dan fasilitas pemeriksaan lengkap 
                  untuk diagnosa yang akurat dan pengobatan yang tepat.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                      <Award className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Rawat Inap</span>
                  </CardTitle>
                  <Badge className="bg-purple-100 text-purple-800">VIP - Kelas 3</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Fasilitas rawat inap yang nyaman dengan pelayanan perawatan 24 jam 
                  dan berbagai pilihan kelas sesuai kebutuhan Anda.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              <Link to="/layanan">
                <ArrowRight className="mr-2 h-5 w-5" />
                Lihat Semua Layanan
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimoni Pasien
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kepercayaan dan kepuasan pasien adalah prioritas utama kami.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=4221&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi Kami Sekarang
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Tim kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami untuk konsultasi atau kondisi darurat.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="p-4 bg-white/20 rounded-full mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telepon</h3>
              <p className="text-blue-100 mb-1">+62 21 1234 5678</p>
              <p className="text-blue-100">+62 21 8765 4321</p>
              <Badge className="mt-3 bg-green-500 text-white">IGD 24 Jam</Badge>
            </div>
            
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="p-4 bg-white/20 rounded-full mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100 mb-1">info@ciptahospital.co.id</p>
              <p className="text-blue-100">admin@ciptahospital.co.id</p>
              <Badge className="mt-3 bg-blue-500 text-white">Respon Cepat</Badge>
            </div>
            
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="p-4 bg-white/20 rounded-full mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alamat</h3>
              <p className="text-blue-100 mb-1">Jl. Kesehatan Raya No. 123</p>
              <p className="text-blue-100">Jakarta Selatan, DKI Jakarta</p>
              <Badge className="mt-3 bg-purple-500 text-white">Lokasi Strategis</Badge>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold bg-transparent">
              <Link to="/kontak">
                <Mail className="mr-2 h-5 w-5" />
                Kirim Pesan
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
