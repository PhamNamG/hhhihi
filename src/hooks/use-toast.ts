import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
}

const defaultStyle = {
  background: '#1a1a1f',
  color: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const useToast = () => {
  const showToast = ({ message, type = 'info' }: ToastProps) => {
    const options: ToastOptions = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: defaultStyle,
      icon: ({ type }) => {
        switch (type) {
          case 'success':
            return '✅';
          case 'error':
            return '❌';
          case 'warning':
            return '⚠️';
          default:
            return 'ℹ️';
        }
      },
    };

    switch (type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      case 'warning':
        toast.warning(message, options);
        break;
      default:
        toast.info(message, options);
    }
  };

  return {
    success: (message: string) => showToast({ message, type: 'success' }),
    error: (message: string) => showToast({ message, type: 'error' }),
    warning: (message: string) => showToast({ message, type: 'warning' }),
    info: (message: string) => showToast({ message, type: 'info' }),
  };
};

export default useToast;

// Add this to your global CSS file:


