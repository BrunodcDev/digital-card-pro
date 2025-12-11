import { Key, Lock, DoorOpen, Copy, Shield, Wrench, Clock, Settings } from "lucide-react";

// Mapa de ícones para serviços
// Adicione mais ícones conforme necessário
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "abertura de portas": DoorOpen,
  "chaves codificadas": Key,
  "troca de cilindro": Lock,
  "cópias de chaves": Copy,
  "segurança": Shield,
  "manutenção": Wrench,
  "24 horas": Clock,
  "instalação": Settings,
};

export function getServiceIcon(serviceName: string): React.ComponentType<{ className?: string }> {
  const normalizedName = serviceName.toLowerCase();
  
  for (const [key, icon] of Object.entries(iconMap)) {
    if (normalizedName.includes(key)) {
      return icon;
    }
  }
  
  // Ícone padrão caso não encontre correspondência
  return Key;
}
