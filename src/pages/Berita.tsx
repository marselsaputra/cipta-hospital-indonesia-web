
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

  useEffect(() => {
    // Inisialisasi data berita jika belum ada
    const savedNews = localStorage.getItem('hospital-news');
    if (!savedNews) {
      const initialNews = [
        {
          id: 1,
          title: 'PT. Cipta Hospital Indonesia Raih Sertifikasi Akreditasi Nasional',
          excerpt: 'Rumah sakit kami berhasil meraih sertifikasi akreditasi nasional dengan nilai tertinggi.',
          content: 'PT. Cipta Hospital Indonesia dengan bangga mengumumkan pencapaian sertifikasi akreditasi nasional dengan nilai tertinggi. Pencapaian ini merupakan bukti komitmen kami dalam memberikan pelayanan kesehatan berkualitas tinggi kepada masyarakat Indonesia.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=4631&auto=format&fit=crop',
          author: 'Tim Redaksi',
          date: '2025-06-25',
          category: 'Prestasi',
          readTime: '3 menit'
        },
        {
          id: 2,
          title: 'Peluncuran Layanan Telemedicine untuk Kemudahan Pasien',
          excerpt: 'Inovasi baru layanan konsultasi online untuk memudahkan akses kesehatan masyarakat.',
          content: 'Dalam upaya meningkatkan aksesibilitas layanan kesehatan, PT. Cipta Hospital Indonesia meluncurkan layanan telemedicine. Layanan ini memungkinkan pasien untuk berkonsultasi dengan dokter spesialis tanpa harus datang langsung ke rumah sakit.',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=4470&auto=format&fit=crop',
          author: 'Dr. Sarah Wijaya',
          date: '2025-06-20',
          category: 'Layanan',
          readTime: '4 menit'
        },
        {
          id: 3,
          title: 'Program Vaksinasi COVID-19 Booster Gratis untuk Lansia',
          excerpt: 'Kegiatan bakti sosial memberikan vaksinasi booster gratis untuk para lansia di Jakarta.',
          content: 'PT. Cipta Hospital Indonesia menggelar program vaksinasi COVID-19 booster gratis khusus untuk lansia di wilayah Jakarta. Program ini merupakan bentuk kepedulian kami terhadap kesehatan masyarakat, khususnya kelompok rentan.',
          image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=4470&auto=format&fit=crop',
          author: 'Dr. Ahmad Santoso',
          date: '2025-06-15',
          category: 'Kesehatan Masyarakat',
          readTime: '5 menit'
        },
        {
          id: 4,
          title: 'Penambahan Peralatan CT Scan Terbaru dengan Teknologi AI',
          excerpt: 'Investasi besar untuk peralatan medis canggih demi diagnosis yang lebih akurat.',
          content: 'Rumah sakit kami menambah investasi peralatan medis dengan menghadirkan CT Scan terbaru yang dilengkapi teknologi artificial intelligence. Peralatan ini akan meningkatkan akurasi diagnosis dan mempercepat pelayanan radiologi.',
          image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=4631&auto=format&fit=crop',
          author: 'Tim Radiologi',
          date: '2025-06-10',
          category: 'Teknologi',
          readTime: '6 menit'
        },
        {
          id: 5,
          title: 'Seminar Kesehatan: Pencegahan Penyakit Jantung di Era Modern',
          excerpt: 'Acara edukasi kesehatan untuk masyarakat umum tentang pencegahan penyakit jantung.',
          content: 'PT. Cipta Hospital Indonesia mengadakan seminar kesehatan dengan tema "Pencegahan Penyakit Jantung di Era Modern". Acara ini dihadiri oleh lebih dari 200 peserta dan menghadirkan para ahli kardiologi terkemuka.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=4631&auto=format&fit=crop',
          author: 'Dr. Maria Sari',
          date: '2025-06-05',
          category: 'Edukasi',
          readTime: '4 menit'
        },
        {
          id: 6,
          title: 'Kerjasama dengan Universitas untuk Program Magang Mahasiswa Kedokteran',
          excerpt: 'Membuka kesempatan magang bagi mahasiswa kedokteran untuk pengalaman praktis.',
          content: 'Rumah sakit kami menjalin kerjasama dengan beberapa universitas terkemuka untuk program magang mahasiswa kedokteran. Program ini bertujuan memberikan pengalaman praktis kepada calon tenaga medis masa depan.',
          image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=4470&auto=format&fit=crop',
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
    alert(`Artikel: ${newsItem.title}\n\n${newsItem.content}\n\nPenulis: ${newsItem.author}\nTanggal: ${new Date(newsItem.date).toLocaleDateString('id-ID')}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=4470&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
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
