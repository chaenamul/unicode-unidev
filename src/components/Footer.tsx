import { Link } from "react-router-dom";
import unicodeLogo from "@/assets/unicode-logo-small.png";
import unidevLogo from "@/assets/modified_UNIDEV_Horizontal.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-[1024px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 pb-4">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold text-muted-foreground">바로가기</span>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              행사 개요
            </Link>
            <Link
              to="/sessions"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              타임테이블
            </Link>
            <Link
              to="/directions"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              오시는 길
            </Link>
            <Link
              to="/about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              UNIDEV 소개
            </Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold text-muted-foreground">후원사</span>
            <Link
              to="https://www.devsisters.com/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Devsisters
            </Link>
            <Link
              to="https://www.pearlabyss.com/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              펄어비스
            </Link>
            <Link
              to="https://www.thebackend.io/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              뒤끝
            </Link>
            <Link
              to="https://nhn.com/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              NHN
            </Link>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <img src={unidevLogo} alt="UNIDEV Logo" className="h-12 w-auto" />
            <span className="text-sm text-muted-foreground transition-colors">officialunidev@gmail.com</span>
            <Link
              to="http://pf.kakao.com/_LxgSvn"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              카카오톡
            </Link>
            <Link
              to="https://www.instagram.com/unidev.official"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              인스타그램
            </Link>
            <p className="text-sm text-muted-foreground">
              © 2026 UNIDEV. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-2">
          <div className="flex items-center gap-3">
            <img src={unicodeLogo} alt="UNICODE Logo" className="h-8 w-auto" />
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 UNIDEV. All Rights Reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
