
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Info, CheckCircle, AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';

interface CustomAlertProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  type?: 'info' | 'success' | 'warning';
}

const CustomAlert = ({ trigger, title, description, type = 'info' }: CustomAlertProps) => {
  const [open, setOpen] = useState(false);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      default:
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const getColorClass = () => {
    switch (type) {
      case 'success':
        return 'border-green-200 bg-green-50';
      case 'warning':
        return 'border-orange-200 bg-orange-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {getIcon()}
            {title}
          </DialogTitle>
        </DialogHeader>
        <Alert className={`${getColorClass()} border`}>
          <AlertDescription className="text-gray-700 leading-relaxed">
            {description}
          </AlertDescription>
        </Alert>
        <div className="flex justify-end mt-4">
          <Button onClick={() => setOpen(false)} className="bg-blue-600 hover:bg-blue-700">
            Tutup
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomAlert;
