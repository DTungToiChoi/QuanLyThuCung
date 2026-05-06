import styled, { keyframes } from "styled-components";
import MainLayout from "../../component/MainLayout";
import { ArrowRightOutlined } from "@ant-design/icons";
import { LiaHandshakeSolid } from "react-icons/lia";
import { MdDomain, MdEco, MdOutlineStar } from "react-icons/md";
import spa from '../../../../assets/spa.png';
import { HomeGlobalStyle, token } from "../../styles/theme";

// ─── ANIMATIONS ──────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`;

// ─── HERO ─────────────────────────────────────────────────────────────────────
const HeroSection = styled.section`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const HeroBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(252, 249, 248, 0.93) 0%,
    rgba(252, 249, 248, 0.55) 55%,
    transparent 100%
  );
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
`;

const HeroContent = styled.div`
  max-width: 560px;
  animation: ${fadeUp} 0.7s ease both;
`;

const HeroBadge = styled.span`
  display: inline-block;
  background: ${token.primaryFixed};
  color: ${token.onPrimaryFixed};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: clamp(32px, 5vw, 46px);
  font-weight: 400;
  line-height: 1.15;
  color: ${token.onSurface};
  margin-bottom: 18px;
  letter-spacing: -0.01em;

  em {
    font-style: italic;
    color: ${token.primary};
  }
`;

const HeroDesc = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${token.onSurfaceVariant};
  margin-bottom: 32px;
  max-width: 460px;
`;

const HeroButton = styled.button`
  background: ${token.primary};
  color: ${token.onPrimary};
  border: none;
  border-radius: 14px;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 28px rgba(0, 106, 100, 0.3);
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;

  &:hover {
    background: ${token.primaryContainer};
    transform: scale(1.05);
    box-shadow: 0 12px 36px rgba(0, 106, 100, 0.4);
  }

  &:active { opacity: 0.85; }
`;

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────
const Section = styled.section<{ $bg?: string }>`
  padding: 80px 0;
  background: ${({ $bg }) => $bg || token.background};
`;

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionHead = styled.div`
  text-align: center;
  margin-bottom: 56px;
`;

const SectionTitle = styled.h2`
  font-family: 'DM Serif Display', serif;
  font-size: clamp(26px, 4vw, 34px);
  font-weight: 400;
  color: ${token.primary};
  margin-bottom: 14px;
`;

const TitleUnderline = styled.div`
  width: 56px;
  height: 3px;
  background: ${token.primaryContainer};
  border-radius: 50px;
  margin: 0 auto;
`;

// ─── SERVICES ─────────────────────────────────────────────────────────────────
const ServiceGrid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: ${token.surfaceContainerLowest};
  border: 1px solid ${token.outlineVariant};
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
  animation: ${scaleIn} 0.5s ease both;

  &:hover {
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

const ServiceImgWrap = styled.div`
  height: 200px;
  overflow: hidden;
`;

const ServiceImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ServiceBody = styled.div`
  padding: 22px;
`;

const ServiceTitle = styled.h3`
  font-family: 'DM Serif Display', serif;
  font-size: 21px;
  font-weight: 400;
  color: ${token.onSurface};
  margin-bottom: 8px;
`;

const ServiceDesc = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${token.onSurfaceVariant};
  margin-bottom: 18px;
`;

const ServiceFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ServicePrice = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${token.primary};
`;

const ArrowBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${token.surfaceContainerLow};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: ${token.primary};
  font-size: 20px;

  border: none;
  outline: none;

  transition: all 0.2s;

  &:hover {
    background: ${token.primaryFixed};
    transform: translateX(2px); /* 👈 thêm chút hiệu ứng */
  }

  &:active {
    transform: scale(0.95);
  }
`;

// ─── WHY ──────────────────────────────────────────────────────────────────────
const WhyGrid = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const WhyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const WhyIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(0, 178, 169, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 34px;
  color: ${token.primary};
`;

const WhyTitle = styled.h4`
  font-family: 'DM Serif Display', serif;
  font-size: 20px;
  font-weight: 400;
  color: ${token.onSurface};
  margin-bottom: 10px;
`;

const WhyDesc = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${token.onSurfaceVariant};
`;

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const TestGrid = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const TestCard = styled.div`
  background: ${token.surfaceContainerLowest};
  border: 1px solid ${token.outlineVariant};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: ${token.primary};
  font-size: 20px;
  margin-bottom: 14px;
`;

const TestText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  font-style: italic;
  color: ${token.onSurfaceVariant};
  margin-bottom: 20px;
`;

const TestAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.div<{ $bg: string; $color: string }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
`;

const AuthorName = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${token.onSurface};
`;

const AuthorSub = styled.p`
  font-size: 11px;
  color: ${token.onSurfaceVariant};
  margin-top: 2px;
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const services = [
  {
    title: "Tắm & Sấy",
    desc: "Vệ sinh toàn diện với sản phẩm hữu cơ cao cấp, giúp thú cưng luôn thơm mát.",
    price: "từ 200.000đ",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPnQsaxKyJOUL2knLAYmJDRYgng8rIeRQ2GLx4Gh5wzBRJjMsDeoPJM3DqghGVzFHFPnPen4yCz66lFkJ3pYTWl4ittzUz2okOWlyd2h67fRMAl8X1OwBVo4wbcfuifPPt4z3_LbF1YR0-Mkeo3dITZZNxMX-iRUzUwYY8p5okvDystEqeQ8UvUaCCK7U01irnFfBlnQcUwFOIr4xAYXT4YLBv-c7A6KX0yy6zMlyT2oA2_DK3Q1KHu5njIWcGI3pCMq-4CVwxkfc",
  },
  {
    title: "Cắt tỉa thẩm mỹ",
    desc: "Tạo kiểu tóc thời thượng dưới bàn tay của các chuyên gia cắt tỉa hàng đầu.",
    price: "từ 350.000đ",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwrUhz2P9v6jTzPTvhznoMNIF9m-70liY6DM1HlMnjHAQlh7D1Q4Ux2WiT53Wh5udl9MY_3sGpoU0ptYc495HMrbfzImJeUT9TIW_dfgd6CDgPPROfzkimzdhuGcBNGiGC6GtNztuUBtjH_91t3B-suXXRbEwUc_MnzW1ulmvBqB1M_WcOTcelGMMt7iblqZmtLRJ26plVfJynWXQpJjZjSZXPJcKfPgdLaNq2yDwOJF_smfjydw2uhYB5TcOrS4mZE7HmAJ3Ny0E",
  },
  {
    title: "Khách sạn thú cưng",
    desc: "Không gian nghỉ dưỡng hiện đại, sạch sẽ và an toàn tuyệt đối cho thú cưng.",
    price: "từ 500.000đ",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUHEkcAR8W4FJxf2TSnAtAeOrsY_zHd4p86hRga10_E8AbowwR3twxuzfdgbI_7M13MAkYVagS2LCWV7bMjG2jGbgQHFBJoctcgLArbkUuEmAfOwjLCclzN6lvInrAl473jWQZrJpmS3Vsh8KgGZiJZ_E30DAzy0Pcs53nVFnBgX3BX76lWA-Qw0ooT_aPzNq_iVYtqRomUvHrR7pTQPpE1CaREeXYGUehS9o4TvZgB5XOOEVBekZ4Y9kAQ2YMMhisG6z9zCtGSJU",
  },
  {
    title: "Spa thư giãn",
    desc: "Massage nhẹ nhàng, thư giãn giúp thú cưng giảm stress và tăng cường sức khỏe.",
    price: "từ 300.000đ",
    img: spa
  },
];

const whyItems = [
  { 
    icon: <LiaHandshakeSolid />, 
    title: "Chuyên gia tận tâm", 
    desc: "Đội ngũ kỹ thuật viên giàu kinh nghiệm, yêu thương động vật như người thân." 
  },
  { 
    icon: <MdEco />,       
    title: "Sản phẩm hữu cơ",   
    desc: "Cam kết sử dụng 100% dầu gội và dưỡng chất từ thiên nhiên, an toàn tuyệt đối." 
  },
  { 
    icon: <MdDomain />,    
    title: "Không gian hiện đại", 
    desc: "Cơ sở vật chất đạt chuẩn 5 sao, thoáng mát và luôn được khử trùng định kỳ." 
  },
  { 
    icon: <MdOutlineStar />, 
    title: "Dịch vụ chất lượng cao", 
    desc: "Luôn đặt trải nghiệm khách hàng lên hàng đầu với tiêu chuẩn phục vụ chuyên nghiệp." 
  },
  { 
    icon: <MdEco />, 
    title: "Thân thiện môi trường", 
    desc: "Sử dụng quy trình chăm sóc giảm thiểu hóa chất, bảo vệ sức khỏe thú cưng và môi trường." 
  },
];

const testimonials = [
  {
    text: '"Bé Corgi nhà mình rất nhát nhưng đến đây các bạn chăm sóc rất nhẹ nhàng, bé về nhà rất thơm và sạch sẽ. Sẽ quay lại thường xuyên!"',
    initials: "TN",
    name: "Chị Thảo Nguyên",
    sub: "Chủ nuôi bé Milo",
    avatarBg: token.secondaryFixed,
    avatarColor: token.onSecondaryFixed,
  },
  {
    text: '"Dịch vụ cắt tỉa ở đây cực kỳ chuyên nghiệp. Nhân viên tư vấn kiểu tóc rất hợp với khuôn mặt bé Poodle nhà mình. Rất hài lòng."',
    initials: "QD",
    name: "Anh Quang Dũng",
    sub: "Chủ nuôi bé Lu",
    avatarBg: token.primaryFixed,
    avatarColor: token.onPrimaryFixed,
  },
  {
    text: '"Khách sạn thú cưng ở đây rất sạch, có camera theo dõi nên mình rất yên tâm khi đi công tác xa. Bé được cho ăn và chơi đùa đầy đủ."',
    initials: "HM",
    name: "Chị Hồng Minh",
    sub: "Chủ nuôi bé Meo",
    avatarBg: token.tertiaryFixed,
    avatarColor: token.onTertiaryFixed,
  },
  {
    text: '"Spa rất sạch sẽ và thơm. Bé nhà mình sau khi tắm xong nhìn xinh hẳn ra. Nhân viên nhiệt tình và tư vấn rất kỹ!"',
    initials: "PL",
    name: "Anh Phúc Lâm",
    sub: "Chủ nuôi bé Bông",
    avatarBg: token.primaryFixedDim,
    avatarColor: token.onPrimaryFixed,
  },
  {
    text: '"Spa rất sạch sẽ và thơm. Bé nhà mình sau khi tắm xong nhìn xinh hẳn ra. Nhân viên nhiệt tình và tư vấn rất kỹ!"',
    initials: "PL",
    name: "Anh Phúc Lâm",
    sub: "Chủ nuôi bé Bông",
    avatarBg: token.primaryFixedDim,
    avatarColor: token.onPrimaryFixed,
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function TrangChuPage() {
  return (
    <MainLayout>
      <HomeGlobalStyle />

      {/* HERO */}
      <HeroSection>
        <HeroBg
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcz25RoIxAPo78lwOkpjexUYZkLuP0nPlKbbH-g4zG-8UKgt-VivUzLhtS4qKJRys7mO0Zue1nkd4kiWXKtbDi896als80uc_SLATta9-_Jl6P5JSV0t2NJ6HHOGueFQhP8RxAHtk1R-BC2T4smDYc9-UkiB5Zro7Lwv4PRcGU7qwz8XkQvAHnaMi80yQxc95tVgdQxh-uVYj8SRebmIM1vdZdTJocEEF1ZU6oFUh6d5H8JnX1bjJUMTWyYcbkuEb8ewwrXoRuHAs"
          alt="Happy pets"
        />
        <HeroOverlay />
        <HeroInner>
          <HeroContent>
            <HeroBadge>✦ Premium Pet Care</HeroBadge>
            <HeroTitle>
              Chăm sóc thú cưng<br />
              bằng <em>cả trái tim</em>
            </HeroTitle>
            <HeroDesc>
              Mang đến trải nghiệm làm đẹp và nghỉ dưỡng đẳng cấp cho những người bạn bốn chân của bạn với đội ngũ chuyên gia tận tâm nhất.
            </HeroDesc>
            <HeroButton>Đặt lịch ngay</HeroButton>
          </HeroContent>
        </HeroInner>
      </HeroSection>

      {/* FEATURED SERVICES */}
      <Section $bg={token.surfaceContainerLow}>
        <Container>
          <SectionHead>
            <SectionTitle>Dịch vụ tiêu biểu</SectionTitle>
            <TitleUnderline />
          </SectionHead>
          <ServiceGrid>
            {services.map((s) => (
              <ServiceCard key={s.title}>
                <ServiceImgWrap>
                  <ServiceImg src={s.img} alt={s.title} />
                </ServiceImgWrap>
                <ServiceBody>
                  <ServiceTitle>{s.title}</ServiceTitle>
                  <ServiceDesc>{s.desc}</ServiceDesc>
                  <ServiceFooter>
                    <ServicePrice>{s.price}</ServicePrice>
                    <ArrowBtn>
                      <ArrowRightOutlined />
                    </ArrowBtn>
                  </ServiceFooter>
                </ServiceBody>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </Container>
      </Section>

      {/* WHY CHOOSE US */}
      <Section $bg={token.background}>
        <Container>
          <WhyGrid>
            {whyItems.map((w) => (
              <WhyItem key={w.title}>
                <WhyIcon>
                  <span className="material-symbols-outlined">{w.icon}</span>
                </WhyIcon>
                <WhyTitle>{w.title}</WhyTitle>
                <WhyDesc>{w.desc}</WhyDesc>
              </WhyItem>
            ))}
          </WhyGrid>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section $bg={`rgba(0,106,100,0.04)`}>
        <Container>
          <SectionHead>
            <SectionTitle>Đánh giá từ khách hàng</SectionTitle>
            <TitleUnderline />
          </SectionHead>
          <TestGrid>
            {testimonials.map((t) => (
              <TestCard key={t.initials}>
                <Stars>
                  {[...Array(5)].map((_) => (
                    <MdOutlineStar />
                  ))}
                </Stars>
                <TestText>{t.text}</TestText>
                <TestAuthor>
                  <Avatar $bg={t.avatarBg} $color={t.avatarColor}>
                    {t.initials}
                  </Avatar>
                  <div>
                    <AuthorName>{t.name}</AuthorName>
                    <AuthorSub>{t.sub}</AuthorSub>
                  </div>
                </TestAuthor>
              </TestCard>
            ))}
          </TestGrid>
        </Container>
      </Section>
    </MainLayout>
  );
}