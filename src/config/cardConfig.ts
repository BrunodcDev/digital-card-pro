// ============================================
// CONFIGURAÇÃO DO CARTÃO DE VISITA DIGITAL
// Altere os valores abaixo para personalizar
// ============================================

export interface CardConfig {
  nome: string;
  descricao: string;
  fotoPerfil: string;
  corPrimaria: string;
  corSecundaria: string;
  servicos: string[];
  atende24h: boolean;
  telefone: string;
  whatsapp: string;
}

const cardConfig: CardConfig = {
  // Nome do profissional ou empresa
  nome: "Chaveiro Gilvan Doria",
  
  // Descrição curta dos serviços
  descricao: "Soluções rápidas e seguras para todas as suas necessidades em chaves e fechaduras",
  
  // URL da foto de perfil (pode usar URL externa ou importar imagem local)
  fotoPerfil: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=face",
  
  // Cor principal (botões, destaques)
  corPrimaria: "#FFA500",
  
  // Cor secundária (textos, ícones)
  corSecundaria: "#1a1a1a",
  
  // Lista de serviços oferecidos
  servicos: [
    "Abertura de portas",
    "Chaves codificadas",
    "Troca de cilindro",
    "Cópias de chaves"
  ],
  
  // Define se atende 24 horas (true) ou horário comercial (false)
  atende24h: true,
  
  // Número de telefone (apenas números)
  telefone: "79900000000",
  
  // Link do WhatsApp com código do país
  whatsapp: "https://wa.me/5579900000000"
};

export default cardConfig;
