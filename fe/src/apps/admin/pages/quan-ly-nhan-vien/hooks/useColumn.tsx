import { DeleteOutlined, FormOutlined } from '@ant-design/icons'
import RowActionsEllipsis from '@shared/components/tables/row-actions-ellipsis'
import type { ColumnsType } from 'antd/es/table'
import type { ITaiKhoanNhanVien } from '../services'

type UseColumnParams = {
  handleUpdate: (id: number) => void
  handleOpenConfirmDelete: (id: number) => void
}

const formatChucVu = (chucVu: ITaiKhoanNhanVien['chucVu']) => {
  if (chucVu === 'QUAN_LY') return 'Quản lý'
  if (chucVu === 'BAC_SI') return 'Bác sĩ'

  return 'Chưa cập nhật'
}

export const useColumn = ({
  handleUpdate,
  handleOpenConfirmDelete,
}: UseColumnParams) => {
  const actions = (record: ITaiKhoanNhanVien) => [
    {
      label: 'Cập nhật',
      icon: <FormOutlined style={{ color: 'var(--primary)' }} />,
      onClick: () => handleUpdate(record.id),
    },
    {
      label: 'Xóa',
      icon: <DeleteOutlined style={{ color: 'var(--error)' }} />,
      onClick: () => handleOpenConfirmDelete(record.id),
    },
  ]

  const columns: ColumnsType<ITaiKhoanNhanVien> = [
    {
      title: 'Tên nhân viên',
      dataIndex: 'tenNhanVien',
      key: 'tenNhanVien',
      width: 250,
      render: (tenNhanVien: string) => (
        <div style={{ color: '#2c3320', fontWeight: 700 }}>
          {tenNhanVien}
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 250,
      render: (email?: string) => (
        <div style={{ color: '#7a8a6a', fontSize: 12 }}>
          {email || 'Chưa có email'}
        </div>
      ),
    },
    {
      title: 'Chức vụ',
      dataIndex: 'chucVu',
      key: 'chucVu',
      width: 160,
      render: (chucVu: ITaiKhoanNhanVien['chucVu']) =>
        formatChucVu(chucVu),
    },
    {
      title: 'Thao tác',
      key: 'actions',
      width: 100,
      align: 'center',
      render: (_, record) => (
        <RowActionsEllipsis actions={actions(record)} />
      ),
    },
  ]

  return { columns }
}

export default useColumn
