import { Check } from "lucide-react";

const features = [
  {
    title: "Atendimento próximo",
    description: "Você fala direto com quem faz. Sem burocracia, sem enrolação.",
    items: [
      "Contato direto com especialistas",
      "Comunicação transparente",
      "Acompanhamento de verdade",
      "Respostas rápidas"
    ]
  },
  {
    title: "Soluções sob medida",
    description: "Cada projeto é pensado junto com você, para resolver o que realmente importa.",
    items: [
      "Entendimento profundo do seu contexto",
      "Adaptação às suas necessidades",
      "Entrega enxuta e validada",
      "Flexibilidade para ajustar o caminho"
    ]
  },
  {
    title: "Parceria de verdade",
    description: "Mais do que fornecedores, queremos ser parceiros no seu crescimento.",
    items: [
      "Compromisso com o resultado",
      "Transparência em cada etapa",
      "Apoio após a entrega",
      "Crescimento lado a lado"
    ]
  }
];

export function FeaturesSection() {
  return (
    <section id="solucoes" className="py-24 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Por que escolher a Vime?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Tecnologia de verdade ao seu alcance
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
      </div>
    </section>
  );
}
