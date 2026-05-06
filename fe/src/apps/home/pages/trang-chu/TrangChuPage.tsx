import * as S from "./styled";
import MainLayout from "../../component/MainLayout";
import {
  ArrowRightOutlined,
  HeartOutlined,
  HomeOutlined,
  SafetyOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { HomeGlobalStyle, token } from "../../styles/theme";
import { useDichVuQuery, type IDichVu } from "./services";
import { urlHinhAnh } from "../../../../shared/utils/mediaUrl";

type ServiceUI = {
  id: number;
  title: string;
  desc: string;
  price: string;
  img: string;
};

const whyItems = [
  {
    icon: <HeartOutlined />,
    title: "Chuyên gia tận tâm",
    desc: "Đội ngũ kỹ thuật viên giàu kinh nghiệm, yêu thương động vật như người thân.",
  },
  {
    icon: <SafetyOutlined />,
    title: "Sản phẩm hữu cơ",
    desc: "Cam kết sử dụng 100% dầu gội và dưỡng chất từ thiên nhiên, an toàn tuyệt đối.",
  },
  {
    icon: <HomeOutlined />,
    title: "Không gian hiện đại",
    desc: "Cơ sở vật chất đạt chuẩn 5 sao, thoáng mát và luôn được khử trùng định kỳ.",
  },
  {
    icon: <StarOutlined />,
    title: "Dịch vụ chất lượng cao",
    desc: "Luôn đặt trải nghiệm khách hàng lên hàng đầu với tiêu chuẩn phục vụ chuyên nghiệp.",
  },
  {
    icon: <SafetyOutlined />,
    title: "Thân thiện môi trường",
    desc: "Giảm thiểu hóa chất, bảo vệ sức khỏe thú cưng và môi trường.",
  },
];

const testimonials = [
  {
    text: "Bé Corgi nhà mình rất nhát nhưng được chăm sóc rất tốt...",
    initials: "TN",
    name: "Chị Thảo Nguyên",
    sub: "Chủ nuôi bé Milo",
    avatarBg: token.secondaryFixed,
    avatarColor: token.onSecondaryFixed,
  },
  {
    text: "Dịch vụ cắt tỉa rất chuyên nghiệp...",
    initials: "QD",
    name: "Anh Quang Dũng",
    sub: "Chủ nuôi bé Lu",
    avatarBg: token.primaryFixed,
    avatarColor: token.onPrimaryFixed,
  },
  {
    text: "Khách sạn rất sạch và an toàn...",
    initials: "HM",
    name: "Chị Hồng Minh",
    sub: "Chủ nuôi bé Meo",
    avatarBg: token.tertiaryFixed,
    avatarColor: token.onTertiaryFixed,
  },
];

const mapDichVu = (s: IDichVu): ServiceUI => ({
  id: s.id,
  title: s.tenDichVu,
  desc: s.moTaDichVu || "",
  price: `từ ${Number(s.giaDichVu).toLocaleString("vi-VN")}đ`,
  img: urlHinhAnh(s.hinhAnhUrl),
});

export default function TrangChuPage() {
  const { data, isLoading } = useDichVuQuery({ Page: 1, PageSize: 4 });

  const services: ServiceUI[] =
    data?.data?.map(mapDichVu) ?? [];

  return (
    <MainLayout>
      <HomeGlobalStyle />

      {/* HERO */}
      <S.HeroSection>
        <S.HeroBg src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcz25RoIxAPo78lwOkpjexUYZkLuP0nPlKbbH-g4zG-8UKgt-VivUzLhtS4qKJRys7mO0Zue1nkd4kiWXKtbDi896als80uc_SLATta9-_Jl6P5JSV0t2NJ6HHOGueFQhP8RxAHtk1R-BC2T4smDYc9-UkiB5Zro7Lwv4PRcGU7qwz8XkQvAHnaMi80yQxc95tVgdQxh-uVYj8SRebmIM1vdZdTJocEEF1ZU6oFUh6d5H8JnX1bjJUMTWyYcbkuEb8ewwrXoRuHAs" />
        <S.HeroOverlay />
        <S.HeroInner>
          <S.HeroContent>
            <S.HeroBadge>✦ Premium Pet Care</S.HeroBadge>
            <S.HeroTitle>
              Chăm sóc thú cưng <em>bằng cả trái tim</em>
            </S.HeroTitle>
            <S.HeroDesc>
              Mang đến trải nghiệm làm đẹp và nghỉ dưỡng đẳng cấp cho thú cưng.
            </S.HeroDesc>
            <S.HeroButton>Đặt lịch ngay</S.HeroButton>
          </S.HeroContent>
        </S.HeroInner>
      </S.HeroSection>

      {/* SERVICES */}
      <S.Section $bg={token.surfaceContainerLow}>
        <S.Container>
          <S.SectionHead>
            <S.SectionTitle>Dịch vụ tiêu biểu</S.SectionTitle>
            <S.TitleUnderline />
          </S.SectionHead>

          <S.ServiceGrid>
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <S.ServiceCard key={i}>
                    <div>Loading...</div>
                  </S.ServiceCard>
                ))
              : services.map((s) => (
                  <S.ServiceCard key={s.id}>
                    <S.ServiceImgWrap>
                      <S.ServiceImg src={s.img} />
                    </S.ServiceImgWrap>

                    <S.ServiceBody>
                      <S.ServiceTitle>{s.title}</S.ServiceTitle>
                      <S.ServiceDesc>{s.desc}</S.ServiceDesc>

                      <S.ServiceFooter>
                        <S.ServicePrice>{s.price}</S.ServicePrice>
                        <S.ArrowBtn>
                          <ArrowRightOutlined />
                        </S.ArrowBtn>
                      </S.ServiceFooter>
                    </S.ServiceBody>
                  </S.ServiceCard>
                ))}
          </S.ServiceGrid>
        </S.Container>
      </S.Section>

      {/* WHY */}
      <S.Section $bg={token.background}>
        <S.Container>
          <S.WhyGrid>
            {whyItems.map((w, i) => (
              <S.WhyItem key={i}>
                <S.WhyIcon>{w.icon}</S.WhyIcon>
                <S.WhyTitle>{w.title}</S.WhyTitle>
                <S.WhyDesc>{w.desc}</S.WhyDesc>
              </S.WhyItem>
            ))}
          </S.WhyGrid>
        </S.Container>
      </S.Section>

      {/* TESTIMONIALS */}
      <S.Section $bg="rgba(0,106,100,0.04)">
        <S.Container>
          <S.SectionHead>
            <S.SectionTitle>Đánh giá khách hàng</S.SectionTitle>
            <S.TitleUnderline />
          </S.SectionHead>

          <S.TestGrid>
            {testimonials.map((t, i) => (
              <S.TestCard key={i}>
                <S.Stars>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <StarOutlined key={idx} />
                  ))}
                </S.Stars>

                <S.TestText>{t.text}</S.TestText>

                <S.TestAuthor>
                  <S.Avatar $bg={t.avatarBg} $color={t.avatarColor}>
                    {t.initials}
                  </S.Avatar>

                  <div>
                    <S.AuthorName>{t.name}</S.AuthorName>
                    <S.AuthorSub>{t.sub}</S.AuthorSub>
                  </div>
                </S.TestAuthor>
              </S.TestCard>
            ))}
          </S.TestGrid>
        </S.Container>
      </S.Section>
    </MainLayout>
  );
}
