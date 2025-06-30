
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Users, FileText, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const KebijakanPrivasi = () => {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Keamanan Data',
      description: 'Kami menggunakan teknologi enkripsi terdepan untuk melindungi data pribadi Anda'
    },
    {
      icon: Lock,
      title: 'Akses Terbatas',
      description: 'Hanya personel yang berwenang yang memiliki akses ke informasi medis Anda'
    },
    {
      icon: Eye,
      title: 'Transparansi',
      description: 'Kami selalu transparan tentang bagaimana data Anda dikumpulkan dan digunakan'
    },
    {
      icon: Users,
      title: 'Kontrol Pengguna',
      description: 'Anda memiliki kontrol penuh atas data pribadi dan informasi medis Anda'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=4470&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🛡️ Privasi & Keamanan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Komitmen kami dalam melindungi privasi dan keamanan data pribadi 
              serta informasi medis Anda dengan standar tertinggi.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prinsip Perlindungan Data
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk melindungi privasi Anda dengan prinsip-prinsip berikut
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <principle.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Kebijakan Privasi PT. Cipta Hospital Indonesia</CardTitle>
                <p className="text-center text-gray-600">Terakhir diperbarui: 25 Juni 2024</p>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-600" />
                      1. Pendahuluan
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      PT. Cipta Hospital Indonesia ("kami", "rumah sakit", atau "Cipta Hospital") berkomitmen untuk melindungi 
                      privasi dan keamanan informasi pribadi serta data medis Anda. Kebijakan Privasi ini menjelaskan bagaimana 
                      kami mengumpulkan, menggunakan, dan melindungi informasi Anda ketika Anda menggunakan layanan kami.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h3>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">a. Informasi Pribadi:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Nama lengkap, tanggal lahir, dan jenis kelamin</li>
                        <li>Alamat rumah, nomor telepon, dan email</li>
                        <li>Nomor identitas (KTP/SIM/Paspor)</li>
                        <li>Informasi asuransi kesehatan</li>
                      </ul>
                      
                      <h4 className="font-semibold text-gray-800 mt-4">b. Informasi Medis:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Riwayat kesehatan dan rekam medis</li>
                        <li>Hasil pemeriksaan dan tes laboratorium</li>
                        <li>Diagnosis dan rencana perawatan</li>
                        <li>Obat-obatan yang diresepkan</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Penggunaan Informasi</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Kami menggunakan informasi Anda untuk:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Memberikan pelayanan medis dan perawatan kesehatan</li>
                      <li>Membuat janji temu dan koordinasi perawatan</li>
                      <li>Memproses klaim asuransi kesehatan</li>
                      <li>Menghubungi Anda untuk follow-up perawatan</li>
                      <li>Keperluan administrasi dan billing</li>
                      <li>Meningkatkan kualitas layanan</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Perlindungan Data</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Kami menerapkan langkah-langkah keamanan komprehensif:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Enkripsi data dengan standar industri</li>
                      <li>Akses terbatas berdasarkan peran dan kebutuhan</li>
                      <li>Audit rutin terhadap sistem keamanan</li>
                      <li>Pelatihan privasi untuk seluruh staff</li>
                      <li>Backup data yang aman dan terenkripsi</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Berbagi Informasi</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Kami hanya akan berbagi informasi Anda dalam situasi berikut:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Dengan persetujuan tertulis dari Anda</li>
                      <li>Kepada dokter atau tenaga medis yang terlibat dalam perawatan</li>
                      <li>Untuk keperluan asuransi kesehatan yang sah</li>
                      <li>Ketika diwajibkan oleh hukum atau peraturan</li>
                      <li>Dalam keadaan darurat medis</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Hak-Hak Anda</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Sebagai pasien, Anda memiliki hak untuk:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Mengakses dan melihat rekam medis Anda</li>
                      <li>Meminta koreksi informasi yang tidak akurat</li>
                      <li>Membatasi penggunaan informasi medis</li>
                      <li>Menerima salinan rekam medis</li>
                      <li>Mengajukan keluhan terkait privasi</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Penyimpanan Data</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Kami menyimpan informasi medis sesuai dengan peraturan yang berlaku di Indonesia. 
                      Rekam medis akan disimpan minimal 5 tahun setelah perawatan terakhir, atau sesuai 
                      dengan ketentuan hukum yang berlaku.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Perubahan Kebijakan</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan signifikan 
                      akan dikomunikasikan kepada Anda melalui website kami atau pemberitahuan langsung.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Kontak</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Jika Anda memiliki pertanyaan atau keluhan terkait kebijakan privasi ini, 
                      silakan hubungi kami:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-2 text-gray-700">
                        <p><strong>PT. Cipta Hospital Indonesia</strong></p>
                        <p>Jl. Kesehatan Raya No. 123, Jakarta Selatan</p>
                        <p>Telepon: +62 21 1234 5678</p>
                        <p>Email: privacy@ciptahospital.co.id</p>
                      </div>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ada Pertanyaan tentang Privasi?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Tim privacy officer kami siap membantu menjawab pertanyaan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+622112345678"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-lg transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Privacy Officer
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KebijakanPrivasi;
