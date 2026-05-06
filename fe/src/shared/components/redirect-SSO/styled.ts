import styled, { keyframes } from 'styled-components';

export const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const progressBarAnimation = keyframes`
  from { width: 100%; }
  to { width: 0%; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  font-family: 'Roboto', sans-serif;
  animation: fadeIn 0.4s ease forwards;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const ModalCard = styled.div`
  background-color: #fff;
  border-radius: 24px;
  padding: 40px;
  width: 90%;
  max-width: 480px;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: ${slideUp} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(23, 143, 226, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;

  .anticon {
    font-size: 40px;
    color: var(--primary);
  }
`;

export const Title = styled.h2`
  margin: 0 0 12px;
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  letter-spacing: -0.025em;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 16px;
  color: #4a5568;
  line-height: 1.6;

  strong {
    color: var(--primary);
  }
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: #edf2f7;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 32px;
  position: relative;
`;

export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--primary);
  border-radius: 4px;
  animation: ${progressBarAnimation} 10s linear forwards;
`;

export const TimerText = styled.p`
  margin-top: 16px;
  font-size: 15px;
  color: #718096;
  font-weight: 500;

  span {
    color: var(--primary);
    font-weight: 700;
  }
`;


