import React, { useEffect, useState } from 'react';
import { LoginOutlined } from '@ant-design/icons';
import {
  Overlay,
  ModalCard,
  IconWrapper,
  Title,
  Description,
  ProgressContainer,
  ProgressBar,
  TimerText,
} from './styled';
import { Button } from 'antd';

interface RedirectSSOProps {
  onRedirect: () => void;
}

const RedirectSSO: React.FC<RedirectSSOProps> = ({ onRedirect }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onRedirect();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onRedirect]);

  return (
    <Overlay id="redirect-modal-overlay">
      <ModalCard id="redirect-modal-card">
        <IconWrapper>
          <LoginOutlined />
        </IconWrapper>
        <Title>Chuyển hướng hệ thống</Title>
        <Description>
          Bạn đang được chuyển hướng sang nền tảng <br />
          <strong>Đăng ký / Đăng nhập tập trung</strong>.
        </Description>
        <ProgressContainer>
          <ProgressBar />
        </ProgressContainer>
        <TimerText>
          Tự động chuyển hướng sau <span>{timeLeft}</span> giây...
        </TimerText>
        <Button onClick={onRedirect}>
          Chuyển ngay
        </Button>
      </ModalCard>
    </Overlay>
  );
};

export default RedirectSSO;
