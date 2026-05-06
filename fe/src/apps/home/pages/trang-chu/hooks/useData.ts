
import { formatDate } from "@shared/utils/formatDate";
import { useEffect } from "react";
import { useDichVuQuery, type IDichVu, type TFilter } from "../../../services";
import { urlHinhAnh } from "@/shared/utils/mediaUrl";

export const useData = (filter: TFilter) => {
  const { data: apiRes, isLoading, refetch } = useDichVuQuery(filter);
  useEffect(() => {
    if (!apiRes) return;
  }, [apiRes]);
  const mapData = (data: IDichVu[]) =>
    data.map((item, index: number) => ({
      index: index + 1,
      key: item.id,
      id: item.id,
      tenDichVu: item.tenDichVu,
      moTaDichVu: item.moTaDichVu,
      giaDichVu: item.giaDichVu,
      hinhAnhUrl: urlHinhAnh(item.hinhAnhUrl),
      hoatDong: item.hoatDong,
      createdAt: formatDate(item.createdAt),
      updatedAt: formatDate(item.updatedAt),
      raw: item,
    }));

  return {
    data: mapData(apiRes?.data ?? []),
    isLoading,
    refetch,
    total: apiRes?.metaData?.total,
  };
};

export default useData;
