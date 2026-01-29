import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code2, Puzzle, Zap, Shield, LineChart } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Desenvolvimento SaaS",
    description: "Criamos plataformas SaaS escaláveis e modernas, prontas para atender milhares de usuários com alta performance.",
    features: ["Multi-tenant", "APIs robustas", "Escalabilidade"]
  },
  {
    icon: Puzzle,
    title: "Integração de Sistemas",
    description: "Conectamos suas ferramentas do dia a dia - SharePoint, Google Workspace, ERPs e muito mais.",
    features: ["SharePoint", "Google Workspace", "HubSpot", "Zoho"]
  },
  {
    icon: Code2,
    title: "Software Licenciado",
    description: "Desenvolvemos soluções personalizadas com licenciamento exclusivo para sua empresa.",
    features: ["Código próprio", "Suporte dedicado", "Customização total"]
  }
];

const benefits = [
  { icon: Zap, label: "Entrega rápida" },
  { icon: Shield, label: "Segurança garantida" },
  { icon: LineChart, label: "Métricas em tempo real" }
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Tudo que você precisa para evoluir
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Combinamos expertise técnica com visão de negócio para entregar soluções que realmente funcionam.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits bar */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-8 border-t border-border/30">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 text-muted-foreground">
              <benefit.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{benefit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
