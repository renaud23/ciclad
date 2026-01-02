import { FooterContainer } from "./FooterContainer";
import { FooterBody } from "./FooterBody";
import { FooterBottom } from "./FooterBottom";
import { NumeroVersion } from "./NumeroVersion";

export function Footer() {
  return (
    <FooterContainer>
      <FooterBody />
      <FooterBottom />
      <NumeroVersion />
    </FooterContainer>
  );
}
