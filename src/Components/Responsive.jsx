import { useMediaQuery } from 'react-responsive';
import { deviceQuery } from 'Constants/deviceInfo';

function Responsive(props) {
  const { children, mobile, tablet, desktop } = props;

  let shouldRender = false;

  const isMobile = useMediaQuery({
    query: deviceQuery.mobile,
  });

  const isTablet = useMediaQuery({
    query: deviceQuery.tablet,
  });

  const isDesktop = useMediaQuery({
    query: deviceQuery.desktop,
  });

  if (mobile) shouldRender = shouldRender || isMobile;
  if (tablet) shouldRender = shouldRender || isTablet;
  if (desktop) shouldRender = shouldRender || isDesktop;

  return <>{shouldRender && children}</>;
}

export default Responsive;
