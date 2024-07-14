import styled from "styled-components";
import FAQs from "../components/FAQs/FAQs";

export default function AboutUs() {
  return (
    <Wrapper>
      <div className="formatpage">
        <h2 style={{ textAlign: "center" }}>About Us</h2>
        <div id="content">
          <div id="introduction">
            <h3 style={{ marginBottom: "10px", marginTop: "40px" }}>
              The Legacy of VMST
            </h3>
            <p style={{ marginLeft: "12px", marginBottom: "40px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div id="Frequently-Asked-Questions">
            <h3 style={{ marginBottom: "20px" }}>Frequently Asked Questions</h3>
            <FAQs />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background-color: var(--content-bkd-color);
  padding: var(--content-padding);
`;
