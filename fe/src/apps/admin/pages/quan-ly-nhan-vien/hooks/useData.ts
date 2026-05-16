import { useTaiKhoanNhanVienQuery, type ITaiKhoanNhanVien, type TFilter } from "../services";

export const useData = (filter: TFilter) => {
  const breadcrumbData = [
    { title: 'Quản trị' },
    { title: 'Quản lý nhân viên' },
  ];

  const { data: apiRes, isLoading, refetch } = useTaiKhoanNhanVienQuery(filter);

  const mapData = (data: ITaiKhoanNhanVien[]) =>
    data.map((item:any, index:number) => ({
      index: index + 1,
      key: item.id,
      id: item.id,
      tenNhanVien: item.tenNhanVien,
      email: item.email,
      chucVu: item.chucVu,
      raw: item,
    }));

  return {
    breadcrumbData,
    data: mapData(apiRes?.data ?? []),
    isLoading,
    refetch,
    total: apiRes?.metaData?.total,
  };
};

export default useData;
