import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from '@tanstack/react-router';

interface Props {
  title?: string;
  subTitle?: string;
}

const DangPhatTrien: React.FC<Props> = ({ 
  title = "Tính năng đang được phát triển", 
  subTitle = "Vui lòng quay lại sau. Chúng tôi đang nỗ lực hoàn thiện tính năng này." 
}) => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', background: '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Result
        status="404"
        title={title}
        subTitle={subTitle}
        extra={
          <Button type="primary" onClick={() => navigate({ to: '/ban-quan-ly/dashboard-tong-quan' })}>
            Quay về Trang chủ
          </Button>
        }
      />
    </div>
  );
};

export default DangPhatTrien;
