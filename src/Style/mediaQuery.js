import { deviceQuery } from 'Constants/deviceInfo';

const { mobile, tablet, desktop } = deviceQuery;

const deviceMediaQuery = {
  mobile: `screen and ${mobile}`,
  tablet: `screen and ${tablet}`,
  desktop: `screen and ${desktop}`,
};

export const applyMediaQuery = (device) => `@media ${deviceMediaQuery[device]}`;

const theme = {
  device: deviceMediaQuery,
};

export default theme;
