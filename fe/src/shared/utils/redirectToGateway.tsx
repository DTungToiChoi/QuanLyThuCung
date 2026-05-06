// import { createRoot } from 'react-dom/client';
// import RedirectSSO from '../components/redirect-SSO';

// /** Chuyển hướng sang Gateway đăng nhập chung */
// export const redirectToGateway = () => {
//   const gatewayUrl = import.meta.env.VITE_GATEWAY_LOGIN_URL;
//   // if (!gatewayUrl) return;

//   // Tạm thời ẩn chức năng redirect SSO theo yêu cầu
//   return;

//   // Tránh tạo nhiều modal nếu đã tồn tại
//   if (document.getElementById('redirect-modal-overlay')) return;

//   const container = document.createElement('div');
//   container.id = 'redirect-sso-root';
//   document.body.appendChild(container);

//   const root = createRoot(container);
  
//   const handleRedirect = () => {
//     window.location.href = gatewayUrl;
//   };

//   root.render(<RedirectSSO onRedirect={handleRedirect} />);
// };
