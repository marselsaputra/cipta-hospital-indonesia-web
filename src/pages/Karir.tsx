
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Heart, Users, Clock, MapPin, Briefcase, GraduationCap, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Karir = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    posisi: '',
    pengalaman: '',
    pendidikan: '',
    cv: null as File | null,
    motivasi: ''
  });

  const jobPositions = [
    {
      title: 'Dokter Spesialis Jantung',
      department: 'Kardiologi',
      type: 'Full-time',
      experience: '5+ tahun',
      education: 'Sp.JP',
      description: 'Mencari dokter spesialis jantung berpengalaman untuk bergabung dengan tim kardiologi kami.'
    },
    {
      title: 'Perawat ICU',
      department: 'Intensive Care Unit',
      type: 'Full-time',
      experience: '2+ tahun',
      education: 'D3/S1 Keperawatan',
      description: 'Dibutuhkan perawat ICU yang berpengalaman dalam perawatan pasien kritis.'
    },
    {
      title: 'Radiografer',
      department: 'Radiologi',
      type: 'Full-time',
      experience: '1+ tahun',
      education: 'D3 Radiologi',
      description: 'Posisi untuk radiografer yang mampu mengoperasikan peralatan radiologi modern.'
    },
    {
      title: 'Farmasis',
      department: 'Farmasi',
      type: 'Full-time',
      experience: '2+ tahun',
      education: 'S1 Farmasi + STR',
      description: 'Mencari farmasis untuk mengelola dan mengawasi distribusi obat-obatan.'
    },
    {
      title: 'Admin Pendaftaran',
      department: 'Customer Service',
      type: 'Full-time',
      experience: '1+ tahun',
      education: 'SMA/D3',
      description: 'Posisi untuk menangani pendaftaran pasien dan layanan administrasi.'
    },
    {
      title: 'Teknisi Laboratorium',
      department: 'Laboratorium',
      type: 'Full-time',
      experience: '1+ tahun',
      education: 'D3 Analis Kesehatan',
      description: 'Dibutuhkan teknisi laboratorium untuk pemeriksaan sampel medis.'
    }
  ];

  const benefits = [
    'Gaji kompetitif sesuai pengalaman',
    'Asuransi kesehatan keluarga',
    'Tunjangan transportasi',
    'Pelatihan dan pengembangan karir',
    'Lingkungan kerja yang profesional',
    'Kesempatan untuk berkembang'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simpan ke localStorage
    const applications = JSON.parse(localStorage.getItem('job-applications') || '[]');
    const newApplication = {
      ...formData,
      id: Date.now(),
      tanggal: new Date().toISOString(),
      status: 'Diterima'
    };
    applications.push(newApplication);
    localStorage.setItem('job-applications', JSON.stringify(applications));
    
    alert('Terima kasih! Lamaran Anda telah berhasil dikirim. Tim HR kami akan menghubungi Anda dalam 1-2 minggu ke depan.');
    
    // Reset form
    setFormData({
      nama: '',
      email: '',
      telepon: '',
      posisi: '',
      pengalaman: '',
      pendidikan: '',
      cv: null,
      motivasi: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=4470&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              💼 Bergabunglah dengan Tim Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Karir di PT. Cipta Hospital Indonesia
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Wujudkan impian karir Anda bersama tim medis terbaik. 
              Kami menyediakan lingkungan kerja yang profesional dan kesempatan pengembangan yang tak terbatas.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mengapa Bekerja dengan Kami?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami percaya bahwa karyawan yang bahagia adalah kunci pelayanan kesehatan yang berkualitas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tim Profesional</h3>
                <p className="text-gray-600">Bekerja bersama tim medis berpengalaman dan profesional</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="p-3 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pengembangan Karir</h3>
                <p className="text-gray-600">Pelatihan berkelanjutan dan kesempatan untuk berkembang</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="p-3 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fasilitas Lengkap</h3>
                <p className="text-gray-600">Fasilitas kerja modern dan benefit yang kompetitif</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Benefit & Fasilitas</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Posisi yang Tersedia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan posisi yang sesuai dengan keahlian dan minat Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {jobPositions.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-blue-700">{job.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-1">{job.department}</CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Pengalaman: {job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Pendidikan: {job.education}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kirim Lamaran Anda
              </h2>
              <p className="text-lg text-gray-600">
                Isi formulir di bawah ini untuk melamar posisi yang Anda inginkan
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nama">Nama Lengkap *</Label>
                      <Input
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="telepon">Nomor Telepon *</Label>
                      <Input
                        id="telepon"
                        name="telepon"
                        value={formData.telepon}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="posisi">Posisi yang Dilamar *</Label>
                      <select
                        id="posisi"
                        name="posisi"
                        value={formData.posisi}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Pilih Posisi</option>
                        {jobPositions.map((job, index) => (
                          <option key={index} value={job.title}>{job.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="pengalaman">Pengalaman Kerja</Label>
                      <Input
                        id="pengalaman"
                        name="pengalaman"
                        value={formData.pengalaman}
                        onChange={handleInputChange}
                        placeholder="Contoh: 3 tahun di rumah sakit"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pendidikan">Pendidikan Terakhir</Label>
                      <Input
                        id="pendidikan"
                        name="pendidikan"
                        value={formData.pendidikan}
                        onChange={handleInputChange}
                        placeholder="Contoh: S1 Kedokteran"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="motivasi">Motivasi & Pengalaman Relevan</Label>
                    <Textarea
                      id="motivasi"
                      name="motivasi"
                      value={formData.motivasi}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1"
                      placeholder="Ceritakan motivasi Anda bergabung dengan tim kami dan pengalaman yang relevan..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Kirim Lamaran
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ada Pertanyaan?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Tim HR kami siap membantu menjawab pertanyaan seputar karir dan proses rekrutmen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                <a href="tel:+622112345678">
                  <Phone className="mr-2 h-5 w-5" />
                  HR: +62 21 1234 5678
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold bg-transparent">
                <a href="mailto:hr@ciptahospital.co.id">
                  <Mail className="mr-2 h-5 w-5" />
                  hr@ciptahospital.co.id
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

export default Karir;
