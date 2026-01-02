import { Users, Target, Heart, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of community and bringing indie developers together to learn and grow.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We encourage creative experimentation and pushing the boundaries of what indie games can be.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Game development is fueled by passion, and we celebrate the dedication of indie creators.",
  },
  {
    icon: Sparkles,
    title: "Accessibility",
    description: "We strive to make game development knowledge and resources accessible to everyone.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-[1024px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn about UNIDEV and the story behind UNICODE.
            </p>
          </div>

          {/* UNIDEV Section */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl md:text-3xl">What is UNIDEV?</CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  <span className="font-semibold text-foreground">UNIDEV</span> is the union of game development
                  clubs from universities and communities across the region. Founded by passionate indie developers,
                  UNIDEV aims to create a supportive ecosystem where aspiring and established game creators can
                  connect, collaborate, and grow together.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our member clubs span various institutions, each bringing unique perspectives and expertise
                  to our collective mission of advancing indie game development.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* UNICODE Section */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="bg-accent">
                <CardTitle className="text-2xl md:text-3xl text-accent-foreground">What is UNICODE?</CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  <span className="font-semibold text-foreground">UNICODE</span> is UNIDEV's flagship annual
                  conference, bringing together indie game developers, artists, designers, and enthusiasts
                  for three days of learning, networking, and inspiration.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Since its inception, UNICODE has grown to become a premier event in the indie game development
                  community, featuring talks from industry veterans, hands-on workshops, game showcases, and
                  invaluable networking opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Our Values
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <value.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-2">
              Have questions about UNICODE or want to get involved with UNIDEV?
            </p>
            <p className="text-primary font-medium">
              contact@unidev.org
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
