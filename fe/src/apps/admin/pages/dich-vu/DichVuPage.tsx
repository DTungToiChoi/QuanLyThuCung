import AdminStaticPage from '../shared/AdminStaticPage'

export default function DichVuPage() {
  return (
    <AdminStaticPage
      title="Dịch vụ & Combo"
      description="Quản lý danh mục dịch vụ và các gói combo chăm sóc thú cưng với giao diện admin rõ ràng."
      stats={[
        { label: 'Dịch vụ đang bán', value: '24' },
        { label: 'Combo hiện có', value: '8' },
        { label: 'Đang nổi bật', value: '5' },
      ]}
    >
      <p>
        Trang Dịch vụ & Combo đã được dựng tạm. Tại đây sẽ hiển thị các dịch vụ,
        giá gói, trạng thái kích hoạt và tùy chọn quản lý.
      </p>
    </AdminStaticPage>
  )
}
