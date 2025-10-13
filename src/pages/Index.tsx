import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Video, MessageSquare, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-health.jpg";
import aiImage from "@/assets/ai-health.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full p-4 mb-6">
            <Heart className="h-12 w-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            HealthCare+
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Seu plano de saúde inteligente com assistente de IA e conteúdo educacional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-large"
            >
              Começar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher o HealthCare+?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tecnologia de ponta para cuidar da sua saúde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-primary rounded-full p-3 w-fit mb-4">
                  <MessageSquare className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Assistente com IA</h3>
                <p className="text-muted-foreground">
                  Tire suas dúvidas sobre saúde 24/7 com nossa inteligência artificial avançada
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-secondary rounded-full p-3 w-fit mb-4">
                  <Video className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Biblioteca de Vídeos</h3>
                <p className="text-muted-foreground">
                  Acesso a centenas de vídeos educacionais sobre saúde e bem-estar
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-primary rounded-full p-3 w-fit mb-4">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cobertura Completa</h3>
                <p className="text-muted-foreground">
                  Plano de saúde completo com ampla rede credenciada
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-secondary rounded-full p-3 w-fit mb-4">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Atendimento Humanizado</h3>
                <p className="text-muted-foreground">
                  Equipe dedicada pronta para atender você e sua família
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-primary rounded-full p-3 w-fit mb-4">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualidade Certificada</h3>
                <p className="text-muted-foreground">
                  Reconhecido pela excelência no atendimento e cuidado
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-secondary rounded-full p-3 w-fit mb-4">
                  <Heart className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prevenção em Foco</h3>
                <p className="text-muted-foreground">
                  Programas de prevenção e promoção da saúde
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Feature Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aiImage}
                alt="IA Health Assistant"
                className="rounded-2xl shadow-large"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Assistente Inteligente de Saúde
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa IA foi treinada para responder suas dúvidas sobre saúde, 
                sintomas, tratamentos e muito mais. Disponível 24/7 para ajudá-lo 
                a tomar decisões informadas sobre sua saúde.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="bg-secondary rounded-full p-1">
                    <Shield className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span>Respostas baseadas em evidências científicas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-secondary rounded-full p-1">
                    <Shield className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span>Privacidade e segurança garantidas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-secondary rounded-full p-1">
                    <Shield className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span>Orientações personalizadas para você</span>
                </li>
              </ul>
              <Button
                size="lg"
                onClick={() => navigate("/auth")}
                className="bg-gradient-primary text-lg px-8"
              >
                Experimentar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para cuidar melhor da sua saúde?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já confiam no HealthCare+
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/auth")}
            className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6"
          >
            Criar Conta Grátis
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 HealthCare+. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
