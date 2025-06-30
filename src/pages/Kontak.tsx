
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Navigation } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}

const Kontak = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Error",
          description: "Mohon lengkapi semua field yang wajib diisi.",
          variant: "destructive",
        });
        return;
      }

      // Create message object
      const newMessage: Message = {
        id: Date.now().toString(),
        ...formData,
        timestamp: new Date().toISOString()
      };

      // Get existing messages from localStorage
      const existingMessages = localStorage.getItem('hospital-messages');
      const messages: Message[] = existingMessages ? JSON.parse(existingMessages) : [];
      
      // Add new message
      messages.push(newMessage);
      localStorage.setItem('hospital-messages', JSON.stringify(messages));

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      toast({
        title: "Pesan Terkirim! 🎉",
        description: "Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda kembali dalam 1x24 jam.",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon & WhatsApp',
      details: ['+62 21 1234 5678', '+62 812 3456 7890 (WhatsApp)'],
      description: 'Hubungi kami untuk informasi dan janji temu',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ciptahospital.co.id', 'cs@ciptahospital.co.id'],
      description: 'Kirim email untuk pertanyaan detail',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Alamat Lengkap',
      details: ['Jl. Kesehatan Raya No. 123', 'Kebayoran Baru, Jakarta Selatan', 'DKI Jakarta 12345'],
      description: 'Lokasi rumah sakit kami',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['IGD: 24 Jam Non-Stop', 'Poliklinik: 08:00 - 20:00', 'Administrasi: 07:00 - 21:00', 'Lab & Radiologi: 06:00 - 22:00'],
      description: 'Waktu pelayanan kami',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const quickServices = [
    { title: 'Pendaftaran Online', description: 'Daftar antrian poliklinik', icon: Calendar },
    { title: 'Konsultasi Darurat', description: 'Hubungi IGD 24 jam', icon: Phone },
    { title: 'Info Kamar', description: 'Cek ketersediaan rawat inap', icon: MessageCircle },
    { title: 'Navigasi', description: 'Petunjuk arah ke rumah sakit', icon: Navigation }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2834&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📞 Hubungi Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Tim kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami 
              untuk informasi, konsultasi, atau layanan darurat medis.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-3">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
                  <p className="text-xs text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Send className="h-6 w-6 text-blue-600" />
                    </div>
                    Kirim Pesan
                  </CardTitle>
                  <CardDescription className="text-base">
                    Isi form di bawah ini untuk mengirim pesan kepada kami. 
                    Tim customer service akan merespons dalam 1x24 jam.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium">Nama Lengkap *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Contoh: Dr. John Doe"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="contoh@email.com"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium">Nomor Telepon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+62 812 3456 7890"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-sm font-medium">Subjek</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Subjek pesan Anda"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">Pesan *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tulis pesan Anda di sini... (minimal 10 karakter)"
                        rows={6}
                        className="mt-1 resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-3"
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? 'Mengirim...' : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h2>
              </div>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${info.color}`}>
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-3">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-700 font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Google Maps Placeholder */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                      <p className="text-gray-600 font-medium">Peta Lokasi</p>
                      <p className="text-sm text-gray-500">Jl. Kesehatan Raya No. 123</p>
                      <Button variant="outline" className="mt-3 text-blue-600 border-blue-200 hover:bg-blue-50">
                        Buka di Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=6000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Phone className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Kondisi Darurat Medis?
            </h2>
            <p className="text-lg text-red-100 mb-8 leading-relaxed">
              Untuk kondisi darurat medis, segera hubungi IGD kami yang beroperasi 24 jam non-stop 
              atau datang langsung ke rumah sakit. Tim medis darurat kami siap membantu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                IGD: +62 21 1234 5678
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold bg-transparent">
                🚑 Ambulans: 119
              </Button>
            </div>
            <div className="mt-6 text-sm text-red-100">
              <p>💡 Tips: Simpan nomor ini di kontak darurat ponsel Anda</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontak;
