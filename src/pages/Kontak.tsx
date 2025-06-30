
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
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
        title: "Pesan Terkirim!",
        description: "Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda kembali.",
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
      title: 'Telepon',
      details: ['+62 21 1234 5678', '+62 21 8765 4321'],
      description: 'Hubungi kami untuk informasi dan janji temu'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ciptahospital.co.id', 'admin@ciptahospital.co.id'],
      description: 'Kirim email untuk pertanyaan detail'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      details: ['Jl. Kesehatan Raya No. 123', 'Jakarta Selatan, DKI Jakarta 12345'],
      description: 'Lokasi rumah sakit kami'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['IGD: 24 Jam', 'Poliklinik: 08:00 - 20:00', 'Administrasi: 07:00 - 21:00'],
      description: 'Waktu pelayanan kami'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami 
              untuk informasi, konsultasi, atau layanan darurat.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-blue-600" />
                    Kirim Pesan
                  </CardTitle>
                  <CardDescription>
                    Isi form di bawah ini untuk mengirim pesan kepada kami.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nama Lengkap *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Contoh: John Doe"
                          required
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
                          placeholder="contoh@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Nomor Telepon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+62 812 3456 7890"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subjek</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Subjek pesan"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Pesan *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tulis pesan Anda di sini..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
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
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kondisi Darurat?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Untuk kondisi darurat medis, segera hubungi IGD kami yang beroperasi 24 jam 
              atau datang langsung ke rumah sakit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="h-5 w-5 mr-2" />
                IGD: +62 21 1234 5678
              </Button>
              <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50">
                Ambulans: 119
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontak;
