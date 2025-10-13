import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20 bg-gradient-primary">
          <AvatarFallback className="bg-transparent">
            <User className="h-10 w-10 text-primary-foreground" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-semibold">João Silva</h3>
          <p className="text-sm text-muted-foreground">joao.silva@email.com</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" defaultValue="João Silva" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="joao.silva@email.com" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" type="tel" placeholder="(11) 99999-9999" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthdate">Data de nascimento</Label>
          <Input id="birthdate" type="date" />
        </div>

        <Button className="w-full bg-gradient-primary">
          Salvar alterações
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
