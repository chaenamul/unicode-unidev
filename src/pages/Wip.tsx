import Layout from "@/components/Layout";
import { Construction } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Wip = () => {
  return (
    <Layout>
      <div className="page-fade-in">
        <section className="py-16 md:py-24 min-h-[60vh] flex items-center justify-center">
          <div className="max-w-[1024px] mx-auto px-4">
            <Card className="border-2 border-dashed border-primary/30">
              <CardContent className="flex flex-col items-center justify-center py-16 px-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Construction className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  Work in Progress
                </h1>
                <p className="text-lg text-muted-foreground text-center max-w-md">
                  이 페이지는 현재 준비 중입니다. 곧 찾아뵙겠습니다!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Wip;
