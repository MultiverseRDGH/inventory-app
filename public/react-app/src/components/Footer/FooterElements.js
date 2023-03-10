import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #0c0c0c;
`;

export const FooterWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;
`;

export const FooterLinkContainer = styled.div`
  display: flex
  justify-content: center;

  @media screen and (max-width: 820px){
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  padding-left: 25px;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 0%;
  }
`;

export const FooterLinkTitle = styled.h5`
  color: #e3c770;
  font-weight: 400;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  font-weight: 300;
  text-decoration: none;
  margin-bottom: 0.6rem;
  font-size: 12px;

  &:hover {
    color: #e3c770;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin-left: 0 auto;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-top: 20px;
  font-size: 0.75rem;
`;
