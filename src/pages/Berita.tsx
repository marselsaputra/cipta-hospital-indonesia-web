import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface News {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const Berita = () => {
  const [news, setNews] = useState<News[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Force reset berita data by clearing localStorage first
    localStorage.removeItem('hospital-news');
    
    // Inisialisasi data berita jika belum ada
    const savedNews = localStorage.getItem('hospital-news');
    if (!savedNews) {
      const initialNews = [
        {
          id: 1,
          title: 'PT. Cipta Hospital Indonesia Raih Akreditasi Joint Commission International',
          excerpt: 'Rumah sakit kami berhasil meraih sertifikasi akreditasi internasional yang bergengsi.',
          content: 'Jakarta, 2025 - PT. Cipta Hospital Indonesia dengan bangga mengumumkan pencapaian sertifikasi akreditasi Joint Commission International (JCI), standar gold dalam akreditasi layanan kesehatan global. Pencapaian ini menjadikan Cipta Hospital sebagai salah satu rumah sakit terbaik di Indonesia dengan standar internasional. Menteri Kesehatan RI turut menghadiri sertifikasi yang diselenggarakan di Jakarta dan menyampaikan apresiasi atas komitmen rumah sakit dalam meningkatkan kualitas layanan kesehatan di Indonesia.',
          image: '/berita1.png',
          author: 'Tim Redaksi',
          date: '2025-06-25',
          category: 'Prestasi',
          readTime: '3 menit'
        },
        {
          id: 2,
          title: 'Cipta Hospital Luncurkan Aplikasi Telemedicine dengan Fitur AI Diagnosis',
          excerpt: 'Inovasi terbaru untuk memudahkan akses layanan kesehatan di seluruh Indonesia.',
          content: 'Jakarta, 2025 - Dalam upaya meningkatkan aksesibilitas layanan kesehatan, PT. Cipta Hospital Indonesia meluncurkan aplikasi telemedicine "Cipta Sehat" yang dilengkapi teknologi kecerdasan buatan (AI) untuk pre-diagnosis. Layanan ini memungkinkan pasien di seluruh pelosok Indonesia untuk berkonsultasi dengan dokter spesialis tanpa harus datang langsung ke rumah sakit. Peluncuran aplikasi ini didukung oleh Kementerian Kesehatan dan Kementerian Komunikasi dan Informatika sebagai bagian dari program Indonesia Sehat Digital 2025.',
          image: '/berita2.png',
          author: 'Dr. Sarah Wijaya',
          date: '2025-06-20',
          category: 'Layanan',
          readTime: '4 menit'
        },
        {
          id: 3,
          title: 'Program Vaksinasi Terpadu untuk Daerah 3T Indonesia',
          excerpt: 'Bakti sosial kesehatan untuk daerah tertinggal, terdepan, dan terluar Indonesia.',
          content: 'Maluku, 2025 - PT. Cipta Hospital Indonesia bekerjasama dengan Kementerian Kesehatan RI menggelar program vaksinasi terpadu di daerah 3T (tertinggal, terdepan, dan terluar) Indonesia. Program ini menjangkau pulau-pulau terpencil di Maluku, Papua, dan Nusa Tenggara Timur. Total lebih dari 50.000 dosis vaksin telah diberikan, meliputi vaksin COVID-19 varian terbaru, influenza, dan vaksin dasar untuk anak-anak. Tim dokter relawan dari seluruh Indonesia bergabung dalam program bakti sosial ini.',
          image: '/berita3.png',
          author: 'Dr. Ahmad Santoso',
          date: '2025-06-15',
          category: 'Kesehatan Masyarakat',
          readTime: '5 menit'
        },
        {
          id: 4,
          title: 'Cipta Hospital Indonesia Hadirkan Robot Bedah Canggih Pertama di Asia Tenggara',
          excerpt: 'Investasi teknologi medis tercanggih untuk peningkatan kualitas layanan bedah presisi tinggi.',
          content: 'Jakarta, 2025 - Cipta Hospital Indonesia kembali mengukuhkan posisinya sebagai rumah sakit terdepan di Indonesia dengan menghadirkan robot bedah Da Vinci XI, sistem bedah robotik tercanggih yang pertama di Asia Tenggara. Peralatan ini dilengkapi teknologi artificial intelligence untuk membantu dokter melakukan operasi dengan presisi tinggi. Peresmian teknologi ini dihadiri oleh Presiden RI dan menandai era baru dalam dunia kesehatan Indonesia yang semakin maju dan kompetitif di tingkat global.',
          image: '/berita4.png',
          author: 'Tim Redaksi',
          date: '2025-06-10',
          category: 'Teknologi',
          readTime: '6 menit'
        },
        {
          id: 5,
          title: 'Seminar Nasional: Penanggulangan Penyakit Tropis di Era Perubahan Iklim',
          excerpt: 'Acara edukasi kesehatan bersama pakar penyakit tropis dari seluruh Indonesia.',
          content: 'Bandung, 2025 - PT. Cipta Hospital Indonesia bekerjasama dengan Institut Teknologi Bandung (ITB) mengadakan seminar nasional dengan tema "Penanggulangan Penyakit Tropis di Era Perubahan Iklim". Acara yang diselenggarakan di Bandung ini dihadiri oleh lebih dari 500 peserta dari berbagai institusi kesehatan dan universitas di seluruh Indonesia. Para pembicara meliputi pakar epidemiologi, dokter spesialis penyakit tropis, dan peneliti perubahan iklim yang membahas strategi komprehensif menghadapi peningkatan kasus penyakit tropis akibat perubahan iklim global.',
          image: '/berita5.png',
          author: 'Dr. Maria Sari',
          date: '2025-06-05',
          category: 'Edukasi',
          readTime: '4 menit'
        },
        {
          id: 6,
          title: 'Cipta Hospital Luncurkan Program Beasiswa Dokter Spesialis untuk Mahasiswa Berprestasi',
          excerpt: 'Kesempatan beasiswa pendidikan dan magang bagi mahasiswa kedokteran terbaik Indonesia.',
          content: 'Yogyakarta, 2025 - Cipta Hospital Indonesia bekerjasama dengan Fakultas Kedokteran Universitas Gadjah Mada (UGM) meluncurkan program beasiswa dokter spesialis untuk 50 mahasiswa kedokteran berprestasi dari seluruh Indonesia. Program ini mencakup pembiayaan pendidikan spesialis penuh dan jaminan penempatan kerja di jaringan Cipta Hospital. Peluncuran program ini merupakan bagian dari komitmen Cipta Hospital untuk meningkatkan kualitas dan pemerataan tenaga medis spesialis di Indonesia, terutama untuk daerah yang masih kekurangan dokter spesialis.',
          image: '/berita6.png',
          author: 'Tim Pendidikan',
          date: '2025-05-30',
          category: 'Pendidikan',
          readTime: '3 menit'
        }
      ];
      localStorage.setItem('hospital-news', JSON.stringify(initialNews));
      setNews(initialNews);
    } else {
      setNews(JSON.parse(savedNews));
    }
  }, []);

  const categories = ['Semua', ...Array.from(new Set(news.map(item => item.category)))];
  
  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Prestasi':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Layanan':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Kesehatan Masyarakat':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Teknologi':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Edukasi':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Pendidikan':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleNewsClick = (newsItem: News) => {
    setSelectedNews(newsItem);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* News Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedNews && (
            <>
              <DialogHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(selectedNews.category)}>
                    {selectedNews.category}
                  </Badge>
                  <Button variant="ghost" size="icon" onClick={() => setDialogOpen(false)} className="h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <DialogTitle className="text-2xl font-bold">{selectedNews.title}</DialogTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {selectedNews.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedNews.date).toLocaleDateString('id-ID')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {selectedNews.readTime}
                  </div>
                </div>
              </DialogHeader>
              <div className="h-[200px] md:h-[300px] overflow-hidden rounded-lg mb-4">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogDescription className="text-base text-gray-800 leading-relaxed whitespace-pre-line">
                {selectedNews.content}
              </DialogDescription>
              <Alert className="bg-blue-50 border border-blue-200 mt-4">
                <AlertDescription className="text-gray-700 leading-relaxed">
                  Untuk informasi lebih lanjut terkait berita ini, silakan hubungi <span className="font-semibold text-blue-700">humas@ciptahospital.co.id</span> atau kunjungi pusat informasi kami.
                </AlertDescription>
              </Alert>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-berita.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📰 Berita Terkini
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Berita & Informasi
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Dapatkan informasi terbaru seputar layanan, inovasi, dan kegiatan 
              PT. Cipta Hospital Indonesia untuk kemajuan kesehatan masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredNews.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {filteredNews.map((newsItem) => (
                <Card key={newsItem.id} className="hover:shadow-lg transition-all duration-300 h-full border-0 shadow-md group cursor-pointer" onClick={() => handleNewsClick(newsItem)}>
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={newsItem.image} 
                      alt={newsItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(newsItem.category)}>
                        {newsItem.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {newsItem.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight line-clamp-2">{newsItem.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                      {newsItem.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {newsItem.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(newsItem.date).toLocaleDateString('id-ID')}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-1">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">📰</div>
                <p className="text-gray-500 text-lg mb-2">
                  Tidak ada berita yang ditemukan
                </p>
                <p className="text-gray-400">
                  Coba ubah kata kunci pencarian atau kategori
                </p>
                <Button 
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    setSelectedCategory('Semua');
                    setSearchTerm('');
                  }}
                >
                  Lihat Semua Berita
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Berlangganan Newsletter
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Dapatkan informasi terbaru seputar kesehatan dan layanan rumah sakit 
              langsung ke email Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Masukkan email Anda"
                className="bg-white text-gray-900"
              />
              <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Berita; 