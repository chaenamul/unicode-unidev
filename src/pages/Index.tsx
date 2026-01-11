import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { SessionCard } from "@/pages/Sessions";
import { allSessions, Session } from "@/data/sessions";
import unicodeLogo from "@/assets/unicode-logo.png";
import unidevLogo from "@/assets/modified_UNIDEV_Horizontal.png";
import devsistersLogo from "@/assets/BLACK_DEVSISTERS_CI.png";
import pearlAbyssLogo from "@/assets/Pearlabyss_Black.png";
import thebackendLogo from "@/assets/BI_kr_black.png";
import kraftonLogo from "@/assets/KRAFTON_Black.png";
import nhnLogo from "@/assets/NHN CI_Black.png";

// Set the conference date - January 10, 2025 (Saturday) 10AM
const CONFERENCE_DATE = new Date("2026-01-10T10:00:00");

// Helper function to get current session based on time
const getCurrentSession = (debugDate?: Date): Session | null => {
  const now = debugDate || new Date();
  const currentDate = now.getDate();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute; // Convert to minutes

  // Determine if it's Saturday (10th) or Sunday (11th)
  const day = currentDate === 10 ? "saturday" : currentDate === 11 ? "sunday" : null;
  if (!day) return null;

  // Filter sessions for the current day
  const todaySessions = allSessions.filter((s) => s.day === day);

  // Find the current session
  for (const session of todaySessions) {
    const [startTime, endTime] = session.time.split(" - ");
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    const sessionStart = startHour * 60 + startMinute;
    const sessionEnd = endHour * 60 + endMinute;

    if (currentTime >= sessionStart && currentTime < sessionEnd) {
      return session;
    }
  }

  return null;
};

const Index = () => {
  const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const [showDebug, setShowDebug] = useState(false);
  const [debugDate, setDebugDate] = useState<Date | undefined>(undefined);
  const [showYouTubeDebug, setShowYouTubeDebug] = useState(false);
  const [forceYouTube, setForceYouTube] = useState(false);

  useEffect(() => {
    // Update current session every minute
    const updateSession = () => {
      setCurrentSession(getCurrentSession(debugDate));
    };

    updateSession(); // Initial update
    const interval = setInterval(updateSession, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [debugDate]);

  const handleDebugDateChange = (dateStr: string) => {
    if (!dateStr) {
      setDebugDate(undefined);
      return;
    }
    const newDate = new Date(dateStr);
    setDebugDate(newDate);
  };

  const handleDebugTimeChange = (timeStr: string) => {
    if (!timeStr) return;
    const [hours, minutes] = timeStr.split(":").map(Number);
    const newDate = debugDate ? new Date(debugDate) : new Date();
    newDate.setHours(hours, minutes, 0, 0);
    setDebugDate(newDate);
  };

  const resetDebug = () => {
    setDebugDate(undefined);
    setCurrentSession(getCurrentSession());
  };

  // Check if conference has started (Jan 10, 2026 10AM or later)
  const hasConferenceStarted = () => {
    if (forceYouTube) return true;
    const now = new Date();
    return now >= CONFERENCE_DATE;
  };

  return (
    <Layout>
      <div className="page-fade-in">
        {/* SEO */}
        <title>UNICODE 26 - Indie Game Developer Conference</title>
        <meta
          name="description"
          content="Join UNICODE 26, the premier conference for indie game developers hosted by UNIDEV. Connect, learn, and grow with the game dev community."
        />

        {/* Hero Section */}
        <section className={`relative overflow-hidden bg-gradient-to-b from-primary/10 via-accent to-background ${
          hasConferenceStarted() ? 'py-6 md:py-8' : 'py-20 md:py-32'
        }`}>
          <div className="max-w-[1024px] mx-auto px-4">
            <div className="text-center">
              <img
                src={unicodeLogo}
                alt="UNICODE 26"
                className={`mx-auto mb-6 w-full h-auto ${
                  hasConferenceStarted() ? 'max-w-xs md:max-w-md' : 'max-w-md md:max-w-3xl'
                }`}
              />
              <div className="
                mx-auto w-fit flex flex-col items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-[2rem] text-sm font-medium mb-6
                md:flex-row md:gap-4 md:py-2 md:rounded-full
              ">
                {/* 날짜 섹션 */}
                <div className="flex items-center gap-2 shrink-0">
                  <Calendar className="h-4 w-4" />
                  <span>January 10-11, 2026</span>
                </div>

                {/* 구분선: 모바일 가로선(80px), 데스크탑 세로선 */}
                <div
                  className="
                    w-44 h-px bg-primary/20 
                    md:w-px md:h-4 md:bg-primary/30
                    my-1 md:my-0
                  "
                ></div>

                {/* 장소 섹션 */}
                <div className="flex items-center gap-2 shrink-0">
                  <MapPin className="h-4 w-4" />
                  <span>도산대로 414 한성청담빌딩 9층</span>
                </div>
              </div>

              {/* From Here */}
              {hasConferenceStarted() ? (
                // YouTube Live Stream
                <div className="flex flex-col items-center gap-4 mb-10">
                  <div className="w-full max-w-4xl aspect-video">
                    <iframe
                      className="w-full h-full rounded-lg shadow-lg"
                      src="https://youtube.com/live/ZHh7HYUPO4w?feature=share"
                      title="UNICODE 26 Live Stream"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowYouTubeDebug(!showYouTubeDebug)}
                    className="text-xs text-muted-foreground"
                  >
                    {showYouTubeDebug ? "Hide Debug" : "Debug YouTube"}
                  </Button> */}
                  {showYouTubeDebug && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setForceYouTube(false)}
                        className="text-xs"
                      >
                        Show Countdown
                      </Button>
                      <span className="text-xs text-muted-foreground flex items-center">
                        Conference started - showing live stream
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                // Countdown Timer and Buttons (before conference starts)
                <>
                  <div className="flex justify-center mb-10">
                    <CountdownTimer targetDate={CONFERENCE_DATE} />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="px-8">
                      <Link to="/sessions">
                        타임테이블
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="px-8">
                      <Link to="/directions">오시는 길</Link>
                    </Button>
                  </div>

                  {/* Debug Button */}
                  {/* <div className="mt-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setForceYouTube(true)}
                      className="text-xs text-muted-foreground"
                    >
                      Debug: Show YouTube
                    </Button>
                  </div> */}
                </>
              )}
              {/* To There */}
            </div>
          </div>
        </section>

        {/* Session Preview Section */}
        <section className="py-16 md:py-18 bg-gradient-to-b from-background to-[#F5F0FF]">
          <div className="max-w-[1024px] mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Now On Stage
                </h2>
              </div>
              {/* DEBUG BUTTON */}
              {/* <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDebug(!showDebug)}
                className="text-xs"
              >
                {showDebug ? "Hide Debug" : "Debug"}
              </Button> */}
              <p className="text-muted-foreground">
                Check out what's happening right now at UNICODE 26
              </p>
            </div>

            {/* Debug Controls */}
            {showDebug && (
              <div className="max-w-xl mx-auto mb-6 p-4 bg-background rounded-lg border border-border">
                <div className="text-sm font-medium mb-3">Debug Controls</div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="text-xs text-muted-foreground block mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 bg-card border border-input rounded-md text-sm"
                        value={
                          debugDate
                            ? debugDate.toISOString().split("T")[0]
                            : ""
                        }
                        onChange={(e) => handleDebugDateChange(e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs text-muted-foreground block mb-1">
                        Time
                      </label>
                      <input
                        type="time"
                        className="w-full px-3 py-2 bg-card border border-input rounded-md text-sm"
                        value={
                          debugDate
                            ? `${String(debugDate.getHours()).padStart(2, "0")}:${String(debugDate.getMinutes()).padStart(2, "0")}`
                            : ""
                        }
                        onChange={(e) => handleDebugTimeChange(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetDebug}
                      className="text-xs"
                    >
                      Reset to Current Time
                    </Button>
                    {debugDate && (
                      <div className="text-xs text-muted-foreground flex items-center">
                        Simulating: {debugDate.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentSession ? (
              <div className="max-w-xl mx-auto mb-8">
                <SessionCard session={currentSession} />
              </div>
            ) : (
              <div className="max-w-xl mx-auto mb-8 p-8 text-center bg-background rounded-lg border-2 border-dashed border-border">
                <p className="text-muted-foreground text-lg">
                  현재 진행중인 세션이 없습니다.
                  <br />
                  다음 세션을 기다려주세요.
                </p>
              </div>
            )}

            <div className="text-center">
              <Button asChild size="lg" className="px-8">
                <Link to="/sessions">
                  전체 타임테이블
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Preview Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#F5F0FF] to-[#F9F6FF]">
          <div className="max-w-[1024px] mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Host
              </h2>
              <div className="flex justify-center mb-8">
                <img src={unidevLogo} alt="UNIDEV Logo" className="h-16 md:h-20 w-auto" />
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                2023년부터 대학생 개발자들의 성장과 네트워킹을 지원하며, 매년 혁신적인 프로젝트들을 발굴하고 전시하는 플랫폼을 제공하고 있습니다.
              </p>
              {/* <Button asChild variant="secondary">
                <Link to="/about">Learn More About Us</Link>
              </Button> */}
            </div>
          </div>
        </section>
        {/* Sponsors Section */}
        <section className="py-16 md:py-18 overflow-hidden bg-gradient-to-b from-[#F9F6FF] to-card">
          <div className="max-w-[1024px] mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our Sponsors
            </h2>

            {/* Infinite Scrolling Conveyor */}
            <div className="relative overflow-hidden w-full">
              <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[hsl(var(--background))] to-transparent pointer-events-none" />
              <div className="flex animate-scroll w-max">
                {[
                  { src: devsistersLogo, alt: "DEVSISTERS" },
                  { src: pearlAbyssLogo, alt: "Pearl Abyss" },
                  { src: thebackendLogo, alt: "TheBackend" },
                  { src: nhnLogo, alt: "NHN" },
                  { src: kraftonLogo, alt: "Krafton" },
                  /* 복사본 */
                  { src: devsistersLogo, alt: "DEVSISTERS" },
                  { src: pearlAbyssLogo, alt: "Pearl Abyss" },
                  { src: thebackendLogo, alt: "TheBackend" },
                  { src: nhnLogo, alt: "NHN" },
                  { src: kraftonLogo, alt: "Krafton" },
                ].map((logo, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex-shrink-0 flex items-center justify-center pr-20"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[hsl(var(--background))] pointer-events-none" />
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Index;
