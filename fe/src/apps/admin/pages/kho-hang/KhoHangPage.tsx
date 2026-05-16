import AdminStaticPage from '../shared/AdminStaticPage'

export default function KhoHangPage() {
  return (
    <AdminStaticPage
      title="Kho hàng"
      description="Quản lý tồn kho, sản phẩm và vật tư dành cho spa thú cưng trong một không gian quản trị thân thiện."
      stats={[
        { label: 'Sản phẩm', value: '128' },
        { label: 'Còn trong kho', value: '1.254' },
        { label: 'Cảnh báo tồn', value: '7' },
      ]}
    >
      <p>
        Trang Kho hàng đang trong giai đoạn hoàn thiện. Dữ liệu tồn kho và cảnh báo sẽ
        được hiển thị ở đây để giúp quản trị dễ dàng theo dõi.
      </p>
    </AdminStaticPage>
  )
}
