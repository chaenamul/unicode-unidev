import { MapPin, Train, Bus, Car } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const transportOptions = [
  {
    icon: Train,
    title: "지하철",
    description: "7호선 청담역 3번 출구에서 도보 10분, 또는 분당선 압구정로데오역 5번 출구에서 도보 15분",
  },
  {
    icon: Bus,
    title: "버스",
    description: "청담사거리 정류장 하차 (143, 240, 401, 463번 등)",
  },
  {
    icon: Car,
    title: "주차",
    description: "한성청담빌딩 지하 주차장 이용 가능 (유료)",
  },
];

const Directions = () => {
  return (
    <Layout>
      <div className="page-fade-in">
      <section className="py-16 md:py-24">
        <div className="max-w-[1024px] mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              오시는 길
            </h1>
            {/* <p className="text-lg text-muted-foreground">
              UNICODE 26 행사장으로 오시는 방법을 안내해 드립니다.
            </p> */}
          </div>

          {/* Venue Info */}
          <div className="mb-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="flex flex-row items-start md:items-center gap-4 p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">
                    서울특별시 강남구 청담동 도산대로 414 한성청담빌딩 9층
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Embedded Map */}
          <div className="mb-12">
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2!2d127.0436!3d37.5232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3f8c3c3c3c3%3A0x0!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDssq3ri7Trj5kg64-E7IKw64yA66GcIDQxNA!5e0!3m2!1sko!2skr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DEVSISTERS 위치"
              />
            </div>
          </div>

          {/* Transportation Options */}
          {/* <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              교통 안내
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {transportOptions.map((option) => (
                <Card key={option.title}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <option.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {option.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default Directions;
