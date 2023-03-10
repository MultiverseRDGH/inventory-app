import {
  FooterContainer,
  FooterWrapper,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterWrapper>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Check Out</FooterLinkTitle>
              <FooterLink to="/team">About Us</FooterLink>
              <FooterLink to="/">Something Here</FooterLink>
              <FooterLink to="/">Something Here</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Inventory App © {new Date().getFullYear()} All Rights Reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
