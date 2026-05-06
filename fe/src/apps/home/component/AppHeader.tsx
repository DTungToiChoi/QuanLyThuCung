import styled, { keyframes } from "styled-components";
import { useNavigate, useLocation } from "@tanstack/react-router";
import logo from "../../../assets/logo-removebg-preview.png";
import { DAT_LICH, DICH_VU, TRA_CUU, TRANG_CHU } from "../constants";
import { LOGIN } from "../../auth/constant";

// ─── TOKENS ───────────────────────────────────────────────────────────────────
const C = {
  primary:       "#6b7e46",
  primaryLight:  "#8a9e5a",
  primaryDark:   "#4f5e32",
  primaryMuted:  "rgba(107,126,70,0.08)",
  primaryGlow:   "rgba(107,126,70,0.18)",
  surface:       "#fcfbf7",
  surfaceBlur:   "rgba(252,251,247,0.88)",
  border:        "rgba(107,126,70,0.15)",
  text:          "#2c3320",
  textMuted:     "#7a8a6a",
  white:         "#ffffff",
};

// ─── ANIMATIONS ───────────────────────────────────────────────────────────────
const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0);     opacity: 1; }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

// ─── WRAPPER ──────────────────────────────────────────────────────────────────
const HeaderWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  animation: ${slideDown} 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;

  /* Frosted glass over a warm off-white */
  background: ${C.surfaceBlur};
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);

  /* Subtle leaf-green tinted bottom border */
  border-bottom: 1px solid ${C.border};

  /* Soft shadow with a green tint */
  box-shadow:
    0 1px 0 0 ${C.border},
    0 4px 24px -4px rgba(107,126,70,0.10);
`;

// Thin accent line at the very top
const TopAccent = styled.div`
  height: 3px;
  background: linear-gradient(
    90deg,
    ${C.primaryDark} 0%,
    ${C.primary} 40%,
    ${C.primaryLight} 70%,
    ${C.primaryDark} 100%
  );
  background-size: 200% auto;
  animation: ${shimmer} 4s linear infinite;
`;

const Container = styled.div`
  width: 100%;              /* 👈 full width */
  padding: 0 28px;          /* 👈 giữ khoảng cách lề */
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// ─── LOGO ─────────────────────────────────────────────────────────────────────
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  flex-shrink: 0;
  transition: opacity 0.18s;

  &:hover { opacity: 0.85; }
  &:active { opacity: 0.7; }
`;

const LogoImg = styled.img`
  height: 34px;
  width: auto;
  /* Give the logo a subtle green tint to tie it to the brand */
  filter: drop-shadow(0 1px 3px rgba(107,126,70,0.25));
`;

const Brand = styled.span`
  font-family: 'Playfair Display', 'Georgia', serif;
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  color: ${C.primary};
  letter-spacing: -0.01em;
  white-space: nowrap;

  /* Prevent font-flash if Playfair isn't loaded */
  line-height: 1;
`;

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
const NavList = styled.div`
  display: none;
  align-items: center;
  gap: 4px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavItem = styled.span<{ $active?: boolean }>`
  position: relative;
  cursor: pointer;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? "600" : "500")};
  color: ${({ $active }) => ($active ? C.primary : C.textMuted)};
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;
  letter-spacing: 0.01em;

  /* Dot indicator under active item */
  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $active }) => ($active ? "18px" : "0")};
    height: 2px;
    border-radius: 2px;
    background: ${C.primary};
    transition: width 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover {
    color: ${C.primary};
    &::after {
      width: 18px;
    }
  }

  &:active {
    opacity: 0.75;
  }
`;

// ─── CTA BUTTON ───────────────────────────────────────────────────────────────
const LoginButton = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 22px;
  border-radius: 999px;
  border: 1.5px solid ${C.primary};
  background: ${C.primary};
  color: ${C.white};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  white-space: nowrap;

  transition: background 0.2s, transform 0.15s, box-shadow 0.2s, border-color 0.2s;

  /* Small leaf icon via CSS */
  &::before {
    content: "🌿";
    font-size: 13px;
    line-height: 1;
  }

  &:hover {
    background: ${C.primaryLight};
    border-color: ${C.primaryLight};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow:
      0 1px 0 0 ${C.primaryDark},
      0 2px 8px -2px ${C.primaryGlow};
    opacity: 0.9;
  }
`;

// ─── DIVIDER (visual spacer between nav and CTA) ──────────────────────────────
const Divider = styled.div`
  display: none;
  width: 1px;
  height: 22px;
  background: ${C.border};
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: block;
  }
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Trang chủ", path: TRANG_CHU },
  { label: "Dịch vụ",   path: DICH_VU },
  { label: "Đặt lịch",  path: DAT_LICH },
  { label: "Tra cứu",   path: TRA_CUU },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AppHeader() {
  const navigate  = useNavigate();
  const location  = useLocation();

  return (
    <HeaderWrapper>
      <TopAccent />
      <Container>
        {/* Logo */}
        <LogoWrapper onClick={() => navigate({ to: TRANG_CHU })}>
          <LogoImg src={logo} alt="Spa Trang Xinh logo" />
          <Brand>Spa Trang Xinh</Brand>
        </LogoWrapper>

        {/* Nav links */}
        <NavList>
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.path}
              $active={location.pathname === item.path}
              onClick={() => navigate({ to: item.path })}
            >
              {item.label}
            </NavItem>
          ))}
        </NavList>

        <Divider />

        {/* CTA */}
        <LoginButton onClick={() => navigate({ to: LOGIN })}>
          Đăng nhập
        </LoginButton>
      </Container>
    </HeaderWrapper>
  );
}