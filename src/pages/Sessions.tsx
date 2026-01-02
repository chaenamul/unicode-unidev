import { Clock, User, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { saturdaySessions, sundaySessions, tagColors, Session } from "@/data/sessions";

export const SessionCard = ({ session }: { session: Session }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex flex-wrap gap-2">
          {session.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className={tagColors[tag] || "bg-muted text-muted-foreground"}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground flex-shrink-0">
          <Clock className="h-3 w-3" />
          <span>{session.time}</span>
        </div>
      </div>
      <CardTitle className="text-lg leading-tight h-[45px] flex items-center">{session.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-center gap-3">
        {/* <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary/10 text-primary text-xs">
            {session.speaker === "-" ? "?" : session.speaker.charAt(0)}
          </AvatarFallback>
        </Avatar> */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <User className="h-3 w-3" />
          <span className="pl-1">{session.speaker}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Sessions = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-[1024px] mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sessions
            </h1>
            <p className="text-lg text-muted-foreground">
              UNICODE 26의 세션 라인업을 확인하세요.
            </p>
          </div>

          {/* Mobile: Tabs */}
          <div className="md:hidden">
            <Tabs defaultValue="saturday">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="saturday" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  1월 10일 (토)
                </TabsTrigger>
                <TabsTrigger value="sunday" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  1월 11일 (일)
                </TabsTrigger>
              </TabsList>

              <TabsContent value="saturday">
                <div className="grid gap-6">
                  {saturdaySessions.map((session) => (
                    <SessionCard key={session.id} session={session} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sunday">
                <div className="grid gap-6">
                  {sundaySessions.map((session) => (
                    <SessionCard key={session.id} session={session} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Desktop: Side by Side */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {/* Saturday Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">1월 10일 (토)</h2>
              </div>
              <div className="grid gap-6">
                {saturdaySessions.map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>
            </div>

            {/* Sunday Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">1월 11일 (일)</h2>
              </div>
              <div className="grid gap-6">
                {sundaySessions.map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sessions;
