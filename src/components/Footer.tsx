
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">PT. Cipta Hospital Indonesia</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Rumah sakit terpercaya yang berkomitmen memberikan pelayanan kesehatan 
              terbaik dengan fasilitas modern dan tim medis berpengalaman.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Clock className="h-4 w-4" />
              <span>IGD Buka 24 Jam</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">info@ciptahospital.co.id</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-sm text-gray-300">
                  Jl. Kesehatan Raya No. 123<br />
                  Jakarta Selatan, DKI Jakarta
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Utama</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Instalasi Gawat Darurat</li>
              <li>Poliklinik Spesialis</li>
              <li>Rawat Inap</li>
              <li>Laboratorium</li>
              <li>Radiologi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 PT. Cipta Hospital Indonesia. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
