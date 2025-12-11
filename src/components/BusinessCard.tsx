import { Phone, MessageCircle, Clock } from "lucide-react";
import cardConfig from "@/config/cardConfig";
import { getServiceIcon } from "@/utils/serviceIcons";

export default function BusinessCard() {
  const {
    nome,
    descricao,
    fotoPerfil,
    servicos,
    atende24h,
    telefone,
    whatsapp,
  } = cardConfig;

  return (
    <div className="h-full w-full flex items-center justify-center p-4 overflow-hidden">
      {/* Card Container */}
      <div className="w-full max-w-[420px] md:max-w-[700px] bg-card rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-card-hover overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col gap-4 md:gap-5">
          
          {/* Header Section */}
          <header className="flex flex-col items-center text-center gap-3 opacity-0 animate-fade-in-up">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
                <img
                  src={fotoPerfil}
                  alt={`Foto de ${nome}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 24h Badge Indicator */}
              {atende24h && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md animate-pulse-glow">
                  <Clock className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
            </div>

            {/* Name & Badge */}
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                {nome}
              </h1>
              
              {/* Availability Badge */}
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                atende24h 
                  ? 'bg-primary/10 text-accent-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <Clock className="w-3 h-3" />
                {atende24h ? "Atende 24 horas" : "Horário comercial"}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs md:max-w-md">
              {descricao}
            </p>
          </header>

          {/* Services Grid */}
          <section className="opacity-0 animate-fade-in-up delay-200">
            <div className={`grid gap-2 md:gap-3 ${
              servicos.length <= 4 ? 'grid-cols-2' : 'grid-cols-3'
            }`}>
              {servicos.map((servico, index) => {
                const Icon = getServiceIcon(servico);
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1.5 p-3 md:p-4 bg-accent/50 rounded-xl transition-all duration-200 hover:bg-accent hover:scale-[1.02]"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <span className="text-[10px] md:text-xs font-medium text-center text-foreground leading-tight">
                      {servico}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Action Buttons */}
          <section className="flex flex-col sm:flex-row gap-3 mt-1 opacity-0 animate-fade-in-up delay-400">
            {/* Call Button */}
            <a
              href={`tel:${telefone}`}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" />
              Ligar agora
            </a>

            {/* WhatsApp Button */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </section>

        </div>
      </div>
    </div>
  );
}
