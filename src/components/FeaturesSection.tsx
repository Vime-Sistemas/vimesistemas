import { Check } from "lucide-react";

const features = [
  {
    title: "Arquitetura moderna",
    description: "Utilizamos as tecnologias mais recentes do mercado para garantir performance e segurança.",
    items: ["React & Next.js", "Node.js & Python", "Cloud Native", "CI/CD automatizado"]
  },
  {
    title: "Foco em resultados",
    description: "Cada projeto é pensado para gerar valor real para o seu negócio, com métricas claras de sucesso.",
    items: ["Métricas de impacto", "ROI mensurável", "Entregas incrementais", "Feedback contínuo"]
  },
  {
    title: "Suporte contínuo",
    description: "Não deixamos você na mão. Nossa equipe está sempre disponível para ajudar.",
    items: ["Suporte 24/7", "SLA garantido", "Documentação completa", "Treinamento incluso"]
  }
];

export function FeaturesSection() {
  return (
    <section id="solucoes" className="py-24 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Por que escolher a Vime
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Tecnologia que entrega
          </h2>
        </div>

        {/* Features list */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <ul className="space-y-3">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border/30">
          {[
            { value: "50+", label: "Projetos entregues" },
            { value: "98%", label: "Satisfação" },
            { value: "24/7", label: "Suporte" },
            { value: "5 anos", label: "De experiência" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
