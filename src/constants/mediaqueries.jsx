import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
  return useMediaQuery({ query: '(max-width: 767px)' });
};

export const useIsMobileOrTablet = () => {
  return useMediaQuery({ query: '(max-width: 1280px' });
};

export const useIsDesktop = () => {
  return useMediaQuery({ query: '(min-width: 1280px' });
};
