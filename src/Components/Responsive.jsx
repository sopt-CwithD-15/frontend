import { useMediaQuery } from 'react-responsive';
import { deviceQuery } from 'Constants/deviceInfo';

export function useMedia() {
  const isMobile = useMediaQuery({
    query: deviceQuery.mobile,
  });

  const isTablet = useMediaQuery({
    query: deviceQuery.tablet,
  });

  const isDesktop = useMediaQuery({
    query: deviceQuery.desktop,
  });

  return { isMobile, isTablet, isDesktop };
}

function Responsive(props) {
  const { children, mobile, tablet, desktop } = props;
  const { isMobile, isTablet, isDesktop } = useMedia();

  let shouldRender = false;

  if (mobile) shouldRender = shouldRender || isMobile;
  if (tablet) shouldRender = shouldRender || isTablet;
  if (desktop) shouldRender = shouldRender || isDesktop;

  return <>{shouldRender && children}</>;
}

export default Responsive;
