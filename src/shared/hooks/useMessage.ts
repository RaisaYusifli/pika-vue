import { useToast, POSITION } from "vue-toastification";

type ToastPosition = 
  | "top-left" 
  | "top-center" 
  | "top-right" 
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right";

type TToastConfig = {
  title?: string;
  description: string;
  status: 'success' | 'info' | 'warning' | 'error' | 'loading';
  position?: ToastPosition;
  duration?: number;
  statusCode?: number;
};

export const useMessage = () => {
  const toast = useToast();
  
  const getPosition = (pos?: ToastPosition) => {
    const positionMap = {
      'top-left': POSITION.TOP_LEFT,
      'top-center': POSITION.TOP_CENTER,
      'top-right': POSITION.TOP_RIGHT,
      'bottom-left': POSITION.BOTTOM_LEFT,
      'bottom-center': POSITION.BOTTOM_CENTER,
      'bottom-right': POSITION.BOTTOM_RIGHT,
    };
    return positionMap[pos || 'top-right'];
  };

  const successToast = (config?: Partial<TToastConfig>) => {
    toast.success(config?.description ?? 'Proses uğurla başa çatdı!', {
      position: getPosition(config?.position),
      timeout: config?.duration ?? 3000,
    });
  };

  const errorToast = (config?: Partial<TToastConfig>) => {
    toast.error(config?.description ?? 'Xəta baş verdi!', {
      position: getPosition(config?.position),
      timeout: config?.duration ?? 4000,
    });
  };

  const warningToast = (config?: Partial<TToastConfig>) => {
    toast.warning(config?.description ?? 'Diqqət!', {
      position: getPosition(config?.position),
      timeout: config?.duration ?? 4000,
    });
  };

  const infoToast = (config?: Partial<TToastConfig>) => {
    toast.info(config?.description ?? 'Məlumat!', {
      position: getPosition(config?.position),
      timeout: config?.duration ?? 3000,
    });
  };

  return {
    successToast,
    errorToast,
    warningToast,
    infoToast
  };
};

