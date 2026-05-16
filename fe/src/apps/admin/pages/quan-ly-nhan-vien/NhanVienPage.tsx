import {
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import {
  Button,
  Input,
  message,
} from 'antd'
import { useEffect } from 'react'

import TableWithPagination from '@/shared/components/tables/table-with-pagination'
import useFilter from '@/shared/hooks/useFilter'

import {
  PageContainer,
  PageLayout,
} from '../../component'

import useColumn from './hooks/useColumn'
import useData from './hooks/useData'

import {
  useTaiKhoanThongKeQuery,
  type TFilter,
} from './services'

import {
  Description,
  Hero,
  IntroPanel,
  StatCard,
  StatGrid,
  StatLabel,
  StatValue,
  Title,
  Toolbar,
} from './styled'
import { ContentWrapper } from '../../styled'

const { Search } = Input

export const initialFilter: TFilter = {
  page: 1,
  pageSize: 20,
}

export default function NhanVienPage() {
  const {
    filter,
    pagination,
    setFilter,
  } = useFilter(initialFilter)

  const {
    breadcrumbData,
    data,
    total,
    refetch,
  } = useData(filter)

  const {
    data: thongKeRes,
    isLoading: isLoadingThongKe,
  } = useTaiKhoanThongKeQuery()

  const thongKe = thongKeRes?.data

  useEffect(() => {
    refetch()
  }, [filter])

  const handleSearch = (value: string) => {
    setFilter((prev) => ({
      ...prev,
      page: 1,
      Keyword:
        value.trim() || undefined,
    }))
  }

  const { columns } = useColumn({
    handleUpdate: (id) =>
      message.info(
        `Cập nhật nhân viên ${id}`,
      ),

    handleOpenConfirmDelete: (
      id,
    ) =>
      message.info(
        `Xóa nhân viên ${id}`,
      ),
  })

  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={breadcrumbData}
      >
        <ContentWrapper>
          <Hero>
            <IntroPanel>
              <Title>
                Quản lý nhân viên
              </Title>

              <Description>
                Theo dõi thông tin
                nhân sự, vai trò làm
                việc và trạng thái tài
                khoản trong một không
                gian quản trị gọn
                gàng.
              </Description>

              <StatGrid>
                <StatCard>
                  <StatValue>
                    {isLoadingThongKe
                      ? '...'
                      : thongKe?.tongNhanVien ??
                        0}
                  </StatValue>

                  <StatLabel>
                    Nhân viên
                  </StatLabel>
                </StatCard>

                <StatCard>
                  <StatValue>
                    {isLoadingThongKe
                      ? '...'
                      : thongKe?.tongVaiTro ??
                        0}
                  </StatValue>

                  <StatLabel>
                    Vai trò
                  </StatLabel>
                </StatCard>

                <StatCard>
                  <StatValue>
                    3
                  </StatValue>

                  <StatLabel>
                    Ca trực hôm nay
                  </StatLabel>
                </StatCard>
              </StatGrid>
            </IntroPanel>
          </Hero>

          <Toolbar>
            <Search
              prefix={
                <SearchOutlined />
              }
              placeholder="Tìm theo tên, email hoặc vai trò"
              allowClear
              enterButton
              onSearch={
                handleSearch
              }
              style={{
                maxWidth: 360,
              }}
            />

            <Button
              type="primary"
              icon={<PlusOutlined />}
              style={{
                height: 42,
                background:
                  '#6b7e46',
              }}
            >
              Thêm nhân viên
            </Button>
          </Toolbar>

              <TableWithPagination
                columns={columns}
                dataSource={data}
                pagination={pagination(total)}
                paginationBackground="transparent"
              />
        </ContentWrapper>
      </PageContainer>
    </PageLayout>
  )
}