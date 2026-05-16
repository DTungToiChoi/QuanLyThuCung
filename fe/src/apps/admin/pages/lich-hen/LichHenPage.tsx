import AdminStaticPage from '../shared/AdminStaticPage'

export default function LichHenPage() {
  return (
    <AdminStaticPage
      title="Lịch hẹn"
      description="Theo dõi và quản lý lịch hẹn đã đặt cho spa thú cưng trong một giao diện quản trị thống nhất."
      stats={[
        { label: 'Tổng lịch hẹn', value: '142' },
        { label: 'Chờ xác nhận', value: '18' },
        { label: 'Đã hoàn thành', value: '110' },
      ]}
    >
      <p>
        Trang quản lý Lịch hẹn đang được xây dựng. Tại đây sẽ hiển thị danh sách lịch hẹn,
        trạng thái xác nhận và thông tin khách hàng.
      </p>
    </AdminStaticPage>
  )
}
