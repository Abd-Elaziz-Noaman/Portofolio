import { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { StyledButton } from "./ScrollToTopBtn.styled";

function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setIsVisible(scrollTop > 400);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledButton
      className="scroll-to-top"
      onClick={handleClick}
      //   style={{ opacity: isVisible ? 1 : 0 }}
      isVisible={isVisible}
    >
      <KeyboardDoubleArrowUpIcon fontSize="large" />
    </StyledButton>
  );
}

export default ScrollToTopBtn;
