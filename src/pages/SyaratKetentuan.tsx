
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, AlertTriangle, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SyaratKetentuan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=4470&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📋 Syarat & Ketentuan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ketentuan penggunaan layanan kesehatan di PT. Cipta Hospital Indonesia. 
              Mohon dibaca dengan seksama sebelum menggunakan layanan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-yellow-100 rounded-lg border border-yellow-200">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">Pemberitahuan Penting</h3>
                <p className="text-yellow-700 text-sm">
                  Dengan menggunakan layanan PT. Cipta Hospital Indonesia, Anda menyetujui untuk terikat 
                  dengan syarat dan ketentuan berikut. Harap membaca dengan cermat sebelum melanjutkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Syarat & Ketentuan Penggunaan Layanan</CardTitle>
                <p className="text-center text-gray-600">PT. Cipta Hospital Indonesia</p>
                <p className="text-center text-gray-500 text-sm">Berlaku sejak: 1 Januari 2024</p>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Scale className="h-5 w-5 mr-2 text-blue-600" />
                      1. Ketentuan Umum
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="leading-relaxed">
                        Syarat dan ketentuan ini mengatur penggunaan layanan kesehatan yang disediakan oleh 
                        PT. Cipta Hospital Indonesia ("Rumah Sakit", "kami", atau "Cipta Hospital").
                      </p>
                      <p className="leading-relaxed">
                        Dengan menggunakan layanan kami, Anda ("Pasien" atau "Anda") setuju untuk mematuhi 
                        seluruh syarat dan ketentuan yang tercantum dalam dokumen ini.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Layanan yang Disediakan</h3>
                    <div className="space-y-3">
                      <p className="text-gray-700 leading-relaxed">
                        PT. Cipta Hospital Indonesia menyediakan berbagai layanan kesehatan meliputi:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Pelayanan gawat darurat 24 jam</li>
                        <li>Pelayanan rawat jalan dan rawat inap</li>
                        <li>Pelayanan poliklinik spesialis</li>
                        <li>Pelayanan penunjang medis (laboratorium, radiologi, farmasi)</li>
                        <li>Pelayanan fisioterapi dan rehabilitasi medis</li>
                        <li>Pelayanan bedah dan tindakan medis</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Hak dan Kewajiban Pasien</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Hak Pasien:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>Mendapat pelayanan kesehatan yang berkualitas</li>
                          <li>Mendapat informasi yang jelas tentang kondisi kesehatan</li>
                          <li>Memberikan persetujuan atau menolak tindakan medis</li>
                          <li>Mendapat privasi dan kerahasiaan medis</li>
                          <li>Mengajukan keluhan dan saran</li>
                          <li>Mendapat akses terhadap rekam medis</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Kewajiban Pasien:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>Memberikan informasi yang akurat tentang kondisi kesehatan</li>
                          <li>Mematuhi instruksi pengobatan yang diberikan</li>
                          <li>Membayar biaya pelayanan sesuai ketentuan</li>
                          <li>Menghormati hak pasien lain dan tenaga medis</li>
                          <li>Menjaga kebersihan dan ketertiban di lingkungan rumah sakit</li>
                          <li>Melaporkan jika terjadi perubahan kondisi kesehatan</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Pembayaran dan Biaya</h3>
                    <div className="space-y-3 text-gray-700">
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Biaya pelayanan harus dibayar sesuai dengan tarif yang berlaku</li>
                        <li>Pembayaran dapat dilakukan tunai, kartu kredit/debit, atau asuransi</li>
                        <li>Untuk pasien asuransi, wajib menunjukkan kartu asuransi yang masih berlaku</li>
                        <li>Biaya tambahan dapat dikenakan untuk layanan khusus atau obat-obatan tertentu</li>
                        <li>Rumah sakit berhak menahan dokumen medis jika ada tunggakan pembayaran</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Informed Consent</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="leading-relaxed">
                        Setiap tindakan medis yang akan dilakukan memerlukan persetujuan dari pasien atau 
                        keluarga yang berwenang. Persetujuan ini diberikan setelah mendapat penjelasan lengkap 
                        tentang:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Diagnosis dan kondisi medis</li>
                        <li>Tindakan medis yang akan dilakukan</li>
                        <li>Risiko dan komplikasi yang mungkin terjadi</li>
                        <li>Alternatif pengobatan lain</li>
                        <li>Prognosis atau perkiraan hasil pengobatan</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Kerahasiaan Medis</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="leading-relaxed">
                        Kami berkomitmen untuk menjaga kerahasiaan informasi medis Anda sesuai dengan 
                        peraturan yang berlaku. Informasi medis hanya akan dibagikan kepada:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Tim medis yang terlibat dalam perawatan</li>
                        <li>Pihak asuransi untuk keperluan klaim</li>
                        <li>Otoritas kesehatan jika diwajibkan oleh hukum</li>
                        <li>Pihak lain dengan persetujuan tertulis dari pasien</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Batasan Tanggung Jawab</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="leading-relaxed">
                        PT. Cipta Hospital Indonesia tidak bertanggung jawab atas:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Kerugian akibat ketidakpatuhan pasien terhadap instruksi medis</li>
                        <li>Komplikasi yang timbul dari kondisi medis yang sudah ada sebelumnya</li>
                        <li>Kehilangan atau kerusakan barang pribadi di area rumah sakit</li>
                        <li>Keterlambatan pelayanan akibat keadaan force majeure</li>
                        <li>Hasil pengobatan yang tidak sesuai harapan namun sesuai standar medis</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Kebijakan Pembatalan dan Perubahan</h3>
                    <div className="space-y-3 text-gray-700">
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Pembatalan janji temu harus dilakukan minimal 24 jam sebelumnya</li>
                        <li>Pembatalan mendadak dapat dikenakan biaya administrasi</li>
                        <li>Perubahan jadwal tindakan medis harus dikonfirmasi dengan dokter yang bersangkutan</li>
                        <li>Rumah sakit berhak membatalkan layanan jika kondisi tidak memungkinkan</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Penyelesaian Sengketa</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="leading-relaxed">
                        Setiap sengketa yang timbul akan diselesaikan melalui:
                      </p>
                      <ol className="list-decimal list-inside space-y-1 ml-4">
                        <li>Musyawarah dan mediasi secara kekeluargaan</li>
                        <li>Melalui komite medis rumah sakit</li>
                        <li>Melalui Majelis Kehormatan Etik Kedokteran (MKEK)</li>
                        <li>Melalui pengadilan yang berwenang jika diperlukan</li>
                      </ol>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">10. Perubahan Syarat dan Ketentuan</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="leading-relaxed">
                        PT. Cipta Hospital Indonesia berhak mengubah syarat dan ketentuan ini sewaktu-waktu. 
                        Perubahan akan diberitahukan melalui pengumuman di rumah sakit atau website resmi. 
                        Penggunaan layanan setelah perubahan dianggap sebagai persetujuan terhadap ketentuan baru.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">11. Kontak dan Keluhan</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Untuk pertanyaan, keluhan, atau klarifikasi mengenai syarat dan ketentuan ini, 
                        silakan hubungi:
                      </p>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>PT. Cipta Hospital Indonesia</strong></p>
                        <p>Customer Service & Complaint Center</p>
                        <p>Jl. Kesehatan Raya No. 123, Jakarta Selatan, DKI Jakarta</p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-blue-600" />
                            <span>+62 21 1234 5678</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-blue-600" />
                            <span>cs@ciptahospital.co.id</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Pertanyaan tentang Syarat & Ketentuan?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Tim customer service kami siap membantu menjelaskan ketentuan yang berlaku
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+622112345678"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-lg transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Customer Service
              </a>
              <a 
                href="mailto:cs@ciptahospital.co.id"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold rounded-lg transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SyaratKetentuan;
