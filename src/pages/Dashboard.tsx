import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Video, MessageSquare, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AIChat from "@/components/AIChat";
import VideoLibrary from "@/components/VideoLibrary";
import UserProfile from "@/components/UserProfile";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("ai-chat");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary rounded-full p-2">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">HealthCare+</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
          <p className="text-muted-foreground">Bem-vindo ao seu painel de saúde</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl">
            <TabsTrigger value="ai-chat" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              IA Assistente
            </TabsTrigger>
            <TabsTrigger value="videos" className="gap-2">
              <Video className="h-4 w-4" />
              Vídeos
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              Perfil
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai-chat" className="space-y-4">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Assistente de Saúde com IA</CardTitle>
                <CardDescription>
                  Tire suas dúvidas sobre saúde com nossa inteligência artificial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AIChat />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="space-y-4">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Biblioteca de Vídeos Educacionais</CardTitle>
                <CardDescription>
                  Aprenda sobre saúde e bem-estar com nossos especialistas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <VideoLibrary />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Meu Perfil</CardTitle>
                <CardDescription>
                  Gerencie suas informações pessoais e preferências
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UserProfile />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
