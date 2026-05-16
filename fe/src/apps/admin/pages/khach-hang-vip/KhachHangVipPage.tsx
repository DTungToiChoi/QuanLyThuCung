import AdminStaticPage from '../shared/AdminStaticPage'

export default function KhachHangVipPage() {
  return (
    <AdminStaticPage
      title="Khách hàng VIP"
      description="Quản lý khách hàng VIP, lịch sử đặt dịch vụ và ưu đãi đặc biệt trong không gian admin."
      stats={[
        { label: 'Khách hàng VIP', value: '92' },
        { label: 'Ưu đãi hiện có', value: '3' },
        { label: 'Người theo dõi', value: '120' },
      ]}
    >
      <p>
        Mục Khách hàng VIP đang được dựng. Những thống kê và chi tiết khách hàng VIP sẽ
        được hiển thị ở đây.
      </p>
    </AdminStaticPage>
  )
}
