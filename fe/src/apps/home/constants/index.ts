import { token } from "../styles/theme";

export const HOME_ROUTE = '/home';

export const TRANG_CHU = `${HOME_ROUTE}/trang-chu`;
export const TRANG_CHU_ROUTE = '/trang-chu';

export const DICH_VU = `${HOME_ROUTE}/dich-vu`;
export const DICH_VU_ROUTE = '/dich-vu';

export const DAT_LICH = `${HOME_ROUTE}/dat-lich`;
export const DAT_LICH_ROUTE = '/dat-lich';

export const TRA_CUU = `${HOME_ROUTE}/tra-cuu`;
export const TRA_CUU_ROUTE = '/tra-cuu'

export const testimonials = [
  {
    text: '"Bé Corgi nhà mình rất nhát nhưng đến đây các bạn chăm sóc rất nhẹ nhàng..."',
    initials: "TN",
    name: "Chị Thảo Nguyên",
    sub: "Chủ nuôi bé Milo",
    avatarBg: token.secondaryFixed,
    avatarColor: token.onSecondaryFixed,
  },
  {
    text: '"Dịch vụ cắt tỉa rất chuyên nghiệp..."',
    initials: "QD",
    name: "Anh Quang Dũng",
    sub: "Chủ nuôi bé Lu",
    avatarBg: token.primaryFixed,
    avatarColor: token.onPrimaryFixed,
  },
  {
    text: '"Khách sạn rất sạch và an toàn..."',
    initials: "HM",
    name: "Chị Hồng Minh",
    sub: "Chủ nuôi bé Meo",
    avatarBg: token.tertiaryFixed,
    avatarColor: token.onTertiaryFixed,
  },
  {
    text: '"Spa rất sạch sẽ và thơm..."',
    initials: "PL",
    name: "Anh Phúc Lâm",
    sub: "Chủ nuôi bé Bông",
    avatarBg: token.primaryFixedDim,
    avatarColor: token.onPrimaryFixed,
  },
];

