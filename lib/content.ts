import type { Locale } from "@/lib/i18n";

export const reservationLink =
  "https://wa.me/5527988510310?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Loft%20na%20Prainha.";

export const contact = {
  whatsapp:
    "https://wa.me/5527988510310?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Loft%20na%20Prainha.",
  instagram: "https://instagram.com/loftprainhaar",
  address: "Av. Alfredo Dante Fassini, Prainha, Arraial do Cabo - RJ",
  mapEmbed:
    "https://www.google.com/maps?q=Prainha%20Arraial%20do%20Cabo&output=embed",
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  cover: string;
  readTime: string;
  publishedAt: string;
  sections: { heading: string; paragraphs: string[] }[];
  finalCtaLabel: string;
  authorHeading: string;
  authorName: string;
  authorBio: string;
};

export type LocalizedContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brandTagline: string;
    home: string;
    loft: string;
    destination: string;
    blog: string;
    contact: string;
    reserve: string;
  };
  common: {
    reserveNow: string;
    reserveExternal: string;
    talkToUs: string;
    readMore: string;
    viewInstagram: string;
    callWhatsapp: string;
    allCategories: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroText: string;
    heroBadge: string;
    heroImageAlt: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    heroHighlights: { title: string; text: string }[];
    metrics: { value: string; label: string }[];
    conversionTitle: string;
    conversionEyebrow: string;
    conversionText: string;
    conversionPoints: string[];
    conversionPrimaryCta: string;
    conversionSecondaryCta: string;
    differentiatorsEyebrow: string;
    differentiatorsTitle: string;
    differentiatorsText: string;
    differentiators: { icon: string; title: string; description: string }[];
    familyEyebrow: string;
    familyTitle: string;
    familyText: string;
    familyBullets: string[];
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    testimonialsText: string;
    testimonials: { quote: string; author: string }[];
    galleryEyebrow: string;
    galleryTitle: string;
    galleryText: string;
    gallery: { title: string; description: string; image: string; size: string }[];
    weatherEyebrow: string;
    weatherTitle: string;
    weatherText: string;
    weatherCta: string;
    blogEyebrow: string;
    blogTitle: string;
    blogText: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaText: string;
  };
  loft: {
    eyebrow: string;
    title: string;
    text: string;
    pills: string[];
    descriptionTitle: string;
    descriptionText: string[];
    capacityTitle: string;
    capacityText: string;
    amenitiesTitle: string;
    amenitiesText: string;
    amenities: string[];
    rulesTitle: string;
    rules: string[];
    condoTitle: string;
    condo: string[];
    ctaTitle: string;
    ctaText: string;
  };
  destination: {
    eyebrow: string;
    title: string;
    text: string;
    tourismTitle: string;
    tourismText: string[];
    prainhaTitle: string;
    prainhaBullets: string[];
    beachesTitle: string;
    beachesText: string;
    beaches: { title: string; text: string }[];
    tipsTitle: string;
    tips: string[];
    threeDaysTitle: string;
    threeDaysText: string[];
    ctaTitle: string;
    ctaText: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    text: string;
    whatsappTitle: string;
    whatsappText: string;
    instagramTitle: string;
    instagramText: string;
    mapTitle: string;
    mapText: string;
    reserveTitle: string;
    reserveText: string;
  };
  seoPage: {
    eyebrow: string;
    title: string;
    text: string;
    highlights: string[];
    differentiatorsEyebrow: string;
    differentiatorsTitle: string;
    differentiatorsText: string;
    locationEyebrow: string;
    locationTitle: string;
    locationText: string;
    locationBullets: string[];
    searchTerms: string[];
    socialEyebrow: string;
    socialTitle: string;
    socialText: string;
    ctaTitle: string;
    ctaText: string;
    primaryCta: string;
    secondaryCta: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    text: string;
    categoriesTitle: string;
    categoriesText: string;
    seoTitle: string;
    seoText: string;
    conversionTitle: string;
    conversionText: string;
    categories: string[];
    posts: BlogPost[];
  };
  contentNotes: {
    title: string;
    items: string[];
  };
};

export const siteContent: Record<Locale, LocalizedContent> = {
  pt: {
    meta: {
      title: "Loft Prainha Arraial | Loft pé na areia em Arraial do Cabo",
      description:
        "Loft na Prainha, a poucos passos da praia, com conforto, praticidade e tudo por perto para você aproveitar Arraial com facilidade.",
    },
    nav: {
      brandTagline: "Conforto, praia e praticidade",
      home: "Home",
      loft: "O Loft",
      destination: "Prainha e Arraial",
      blog: "Blog",
      contact: "Contato",
      reserve: "Reservar agora",
    },
    common: {
      reserveNow: "Ver disponibilidade",
      reserveExternal: "Consultar disponibilidade",
      talkToUs: "Falar com a hospedagem",
      readMore: "Ler conteúdo",
      viewInstagram: "Ver Instagram",
      callWhatsapp: "Chamar no WhatsApp",
      allCategories: "Todas",
    },
    home: {
      heroEyebrow: "Prainha • Arraial do Cabo",
      heroTitle: "Fique na Prainha com conforto, praticidade e tudo por perto",
      heroText:
        "Loft completo, a poucos passos da praia, ideal para descansar e aproveitar Arraial sem complicação.",
      heroBadge: "A poucos passos da praia e com tudo o que você precisa para uma estadia tranquila.",
      heroImageAlt: "Vista aérea da Prainha com mar turquesa em Arraial do Cabo",
      heroPrimaryCta: "Ver disponibilidade no WhatsApp",
      heroSecondaryCta: "Falar com a hospedagem",
      heroHighlights: [
        {
          title: "Pé na areia de verdade",
          text: "Saia do condomínio e esteja na Prainha em instantes, sem depender de carro para curtir a praia.",
        },
        {
          title: "Excelente para famílias",
          text: "Prainha com rotina prática, ambiente acolhedor e estrutura que facilita viagens com crianças.",
        },
        {
          title: "Perto de tudo",
          text: "Fácil acesso ao centro, restaurantes, mercado, passeios e outras praias famosas de Arraial.",
        },
      ],
      metrics: [
        { value: "4,96", label: "nota média com destaque para localização, conforto e limpeza." },
        { value: "80 m", label: "até a faixa de areia da Prainha para uma rotina leve e sem estresse." },
        { value: "5 hóspedes", label: "com acomodação pensada para famílias e pequenos grupos." },
        { value: "Piscina", label: "do condomínio para alternar descanso, banho de sol e praia." },
      ],
      conversionEyebrow: "Fale com a hospedagem",
      conversionTitle: "Tudo o que você precisa para uma estadia perfeita na Prainha",
      conversionText:
        "Aqui você encontra o equilíbrio ideal entre localização, conforto e praticidade: pé na areia, ambiente tranquilo e tudo por perto para aproveitar Arraial com facilidade.",
      conversionPoints: [
        "A poucos passos da praia, sem precisar de carro no dia a dia",
        "Região tranquila, ideal para descanso e famílias",
        "Estrutura pensada para conforto, praticidade e uma estadia sem preocupação",
      ],
      conversionPrimaryCta: "Ver disponibilidade no WhatsApp",
      conversionSecondaryCta: "Tirar dúvidas rápidas",
      differentiatorsEyebrow: "Diferenciais",
      differentiatorsTitle: "Tudo o que faz a sua estadia ficar mais fácil",
      differentiatorsText:
        "Vantagens reais para você aproveitar Arraial com mais conforto, praticidade e tranquilidade.",
      differentiators: [
        {
          icon: "PA",
          title: "A poucos passos da praia",
          description: "Acorde e vá a pé para a praia, sem depender de carro.",
        },
        {
          icon: "FV",
          title: "Piscina para relaxar após a praia",
          description: "Perfeita para descansar no fim do dia com mais conforto.",
        },
        {
          icon: "PR",
          title: "Localização estratégica",
          description: "Perto de mercado, restaurantes e tudo que você precisa.",
        },
        {
          icon: "FM",
          title: "Perfeito para famílias",
          description: "Ambiente tranquilo e confortável para viajar sem preocupação.",
        },
        {
          icon: "LT",
          title: "Tudo ao seu alcance",
          description: "Praia, comércio e passeios por perto para facilitar o seu dia.",
        },
        {
          icon: "VL",
          title: "Ambientes claros e aconchegantes",
          description: "Espaço pensado para descanso e bem-estar.",
        },
      ],
      familyEyebrow: "Famílias amam a Prainha",
      familyTitle: "Uma região que combina mar bonito, praticidade e estadia mais tranquila.",
      familyText:
        "Para famílias, a Prainha costuma ser uma escolha certeira porque simplifica a logística, facilita pausas ao longo do dia e permite aproveitar a viagem com menos desgaste.",
      familyBullets: [
        "Bom equilíbrio entre praia, conveniência e acesso à cidade.",
        "Menos tempo em deslocamento e mais tempo curtindo a estadia.",
        "Mais conforto para alternar praia, descanso no loft e piscina.",
      ],
      testimonialsEyebrow: "Prova social",
      testimonialsTitle: "Quem se hospeda, recomenda",
      testimonialsText:
        "As avaliações mostram o que realmente importa: conforto, localização e praticidade.",
      testimonials: [
        {
          quote: "A localização fez toda diferença. Conseguimos curtir a Prainha com calma e ainda sair para passeios sem complicação.",
          author: "Renata, Campinas",
        },
        {
          quote: "A piscina do condomínio e o acesso rápido à praia deixaram a viagem muito mais gostosa para nossa família.",
          author: "Mariana e Felipe, Belo Horizonte",
        },
        {
          quote: "É o tipo de hospedagem que transmite confiança. Tudo parece mais organizado e confortável do que nos anúncios comuns.",
          author: "Eduardo, Rio de Janeiro",
        },
      ],
      galleryEyebrow: "Galeria",
      galleryTitle: "Veja onde você vai se hospedar",
      galleryText:
        "Imagens reais do loft para você saber exatamente o que esperar.",
      gallery: [
        {
          title: "Quarto com vista para o mar",
          description: "Acordar com a praia à vista reforça a sensação premium da estadia.",
          image: "/images/gallery-vista.svg",
          size: "large",
        },
        {
          title: "Piscina do condomínio",
          description: "Um espaço agradável para relaxar depois da praia e curtir a estadia com mais conforto.",
          image: "/images/gallery-piscina.svg",
          size: "medium",
        },
        {
          title: "Sala integrada e acolhedora",
          description: "Interior bem resolvido para transmitir conforto, praticidade e confiança.",
          image: "/images/gallery-living.svg",
          size: "small",
        },
        {
          title: "Prainha ao lado",
          description: "A conveniência de uma praia linda a poucos passos.",
          image: "/images/gallery-prainha.svg",
          size: "small",
        },
        {
          title: "Ideal para famílias",
          description: "Uma base prática para viagens em grupo.",
          image: "/images/gallery-family.svg",
          size: "small",
        },
      ],
      weatherEyebrow: "Clima e informações do dia",
      weatherTitle: "Estrutura pronta para mostrar clima, vento, temperatura e dicas do dia.",
      weatherText:
        "O projeto já fica preparado para futura integração com dados ao vivo, ajudando o visitante a planejar praias, passeios de barco e horários mais agradáveis.",
      weatherCta: "Consultar disponibilidade para suas datas",
      blogEyebrow: "Blog turístico",
      blogTitle: "Dicas e informações para aproveitar Arraial",
      blogText:
        "Conteúdos sobre praias, passeios e o que fazer para você planejar melhor sua viagem.",
      ctaEyebrow: "Atendimento rápido",
      ctaTitle: "Gostou? Fale com a gente e reserve agora",
      ctaText:
        "Respondemos rápido pelo WhatsApp para confirmar disponibilidade e valores.",
    },
    loft: {
      eyebrow: "O Loft",
      title: "Uma hospedagem pensada para férias práticas e confortáveis na Prainha.",
      text:
        "O Loft Prainha Arraial combina localização privilegiada, atmosfera premium e uma estrutura que favorece dias leves em família, a dois ou em pequenos grupos.",
      pills: ["Até 5 hóspedes", "Pé na areia", "Piscina do condomínio", "Ideal para famílias"],
      descriptionTitle: "Descrição completa",
      descriptionText: [
        "O imóvel foi desenhado para oferecer uma experiência acima do padrão dos anúncios comuns, reunindo boa apresentação, sensação de cuidado e acesso rápido à praia.",
        "A proposta é simples e forte: ficar bem na Prainha, perto de tudo, com um ambiente tranquilo, organizado e pronto para uma estadia sem improviso.",
      ],
      capacityTitle: "Capacidade de hóspedes",
      capacityText:
        "Recebe com conforto até 5 hóspedes, funcionando muito bem para famílias, casais com crianças e pequenos grupos que valorizam localização e praticidade.",
      amenitiesTitle: "Comodidades",
      amenitiesText:
        "Os itens abaixo reforçam confiança e ajudam o visitante a perceber rapidamente o valor da hospedagem.",
      amenities: [
        "Ambiente climatizado",
        "Layout funcional para até 5 hóspedes",
        "Wi-Fi para trabalho remoto leve e entretenimento",
        "Cozinha equipada para refeições práticas",
        "Enxoval completo",
        "Piscina do condomínio",
        "Portaria e ambiente organizado",
        "Localização privilegiada na Prainha",
      ],
      rulesTitle: "Regras básicas",
      rules: [
        "Check-in e check-out conforme disponibilidade informada na reserva.",
        "Não é permitido fumar dentro do loft.",
        "Eventos e festas não são permitidos.",
        "Respeito ao silêncio e às normas do condomínio.",
      ],
      condoTitle: "Estrutura do condomínio",
      condo: [
        "Piscina do condomínio",
        "Áreas comuns organizadas e bem cuidadas",
        "Acesso facilitado à praia",
        "Ambiente seguro e adequado para famílias",
      ],
      ctaTitle: "Gostou da proposta? Confira disponibilidade no link externo.",
      ctaText:
        "A reserva acontece fora do site, mas toda a jornada aqui foi pensada para levar o visitante até esse clique com mais confiança.",
    },
    destination: {
      eyebrow: "Prainha e Arraial do Cabo",
      title: "Hospedar-se na Prainha é uma das formas mais inteligentes de aproveitar Arraial.",
      text:
        "A região oferece uma combinação rara de mar bonito, rotina prática e boa conexão com os principais pontos da cidade.",
      tourismTitle: "Por que Arraial do Cabo encanta tanto",
      tourismText: [
        "Arraial do Cabo é um destino que mistura praias de águas claras, passeios de barco muito procurados e uma sensação imediata de escapada para quem quer descansar.",
        "Quando a hospedagem fica na Prainha, a viagem ganha ainda mais fluidez porque você reduz deslocamentos e melhora a logística dos dias de praia.",
      ],
      prainhaTitle: "Vantagens de se hospedar na Prainha",
      prainhaBullets: [
        "Praia bonita e prática para ir a pé sempre que quiser.",
        "Excelente base para famílias que querem menos correria.",
        "Boa conexão com o centro, restaurantes, mercado e passeios.",
        "Mais conforto para alternar praia, descanso e piscina.",
      ],
      beachesTitle: "Praias próximas",
      beachesText:
        "A localização facilita um roteiro equilibrado entre praia perto do loft e outros pontos clássicos de Arraial do Cabo.",
      beaches: [
        { title: "Prainha", text: "Excelente para quem valoriza praticidade, mar bonito e uma rotina sem complicação." },
        { title: "Praia do Forno", text: "Visual marcante e águas claras para encaixar no roteiro por trilha ou barco." },
        { title: "Praia Grande", text: "Boa estrutura e um pôr do sol muito lembrado por quem visita a cidade." },
        { title: "Praia dos Anjos", text: "Ponto importante para passeios de barco e deslocamento para outras experiências." },
      ],
      tipsTitle: "Dicas do que fazer",
      tips: [
        "Reservar pelo menos 3 dias para conhecer Arraial sem pressa.",
        "Sair cedo para curtir praias mais concorridas com mais conforto.",
        "Separar um dia mais flexível para passeio de barco conforme o clima.",
        "Aproveitar a noite para jantar com calma e circular pela cidade.",
      ],
      threeDaysTitle: "Três dias é o mínimo ideal para conhecer Arraial.",
      threeDaysText: [
        "Com menos tempo, a viagem costuma ficar corrida demais para aproveitar praia, passeio e descanso de forma equilibrada.",
        "Com três dias, você consegue curtir a Prainha, conhecer outros pontos da cidade e ainda voltar para o loft com tranquilidade.",
      ],
      ctaTitle: "Escolher bem onde ficar muda a qualidade da viagem inteira.",
      ctaText:
        "Uma base na Prainha faz o roteiro render mais e transforma conveniência em percepção real de valor.",
    },
    contactPage: {
      eyebrow: "Contato",
      title: "Canais diretos para tirar dúvidas e seguir para a reserva externa.",
      text:
        "A página de contato reforça confiança com WhatsApp, Instagram, mapa e mais um caminho claro para reservar.",
      whatsappTitle: "Atendimento por WhatsApp",
      whatsappText:
        "Um canal rápido para confirmar detalhes da hospedagem e orientar o visitante antes da reserva.",
      instagramTitle: "Instagram",
      instagramText:
        "Mais presença visual, relacionamento e credibilidade para o loft.",
      mapTitle: "Mapa",
      mapText:
        "A Prainha fica perto de tudo o que faz a viagem render melhor: praia, restaurantes, mercado e passeios.",
      reserveTitle: "Reserva",
      reserveText:
        "O atendimento e a conversão acontecem diretamente pelo WhatsApp da hospedagem.",
    },
    seoPage: {
      eyebrow: "Hospedagem na Prainha",
      title: "Loft na Prainha em Arraial do Cabo",
      text:
        "Se você está buscando hospedagem arraial do cabo com praia por perto, conforto e praticidade, este loft arraial do cabo na Prainha é uma escolha certeira para descansar bem e aproveitar tudo com facilidade.",
      highlights: [
        "A poucos passos da praia para curtir mais e depender menos de carro",
        "Conforto e praticidade para casal, família ou viagem curta",
        "Localização estratégica para quem procura onde ficar em arraial do cabo com tudo por perto",
      ],
      differentiatorsEyebrow: "Diferenciais do loft",
      differentiatorsTitle: "Por que o Loft na Prainha facilita a sua viagem",
      differentiatorsText:
        "Aqui o foco é simples: ficar bem hospedado, perto da praia e com mais conforto para aproveitar Arraial.",
      locationEyebrow: "Localização estratégica",
      locationTitle: "Prainha é uma das melhores bases para ficar em Arraial do Cabo",
      locationText:
        "Quem pesquisa onde ficar em arraial do cabo geralmente quer praticidade de verdade. Na Prainha, você fica perto da areia, com acesso fácil a mercado, restaurantes, passeios e ao restante da cidade, sem perder a sensação de descanso.",
      locationBullets: [
        "Praia perto para aproveitar mais o dia e voltar ao loft sempre que quiser",
        "Região prática para viagens curtas, em casal ou em família",
        "Boa base para quem quer hospedagem arraial do cabo com conforto e rotina leve",
      ],
      searchTerms: [
        "hospedagem arraial do cabo",
        "loft arraial do cabo",
        "onde ficar em arraial do cabo",
      ],
      socialEyebrow: "Prova social",
      socialTitle: "A experiência do hóspede confirma a escolha",
      socialText:
        "Quem se hospeda destaca o que mais pesa na decisão: localização, conforto, praticidade e uma estadia mais tranquila na Prainha.",
      ctaTitle: "Quer saber se está disponível para a sua data?",
      ctaText: "Fale no WhatsApp e receba rápido as informações sobre disponibilidade e valores.",
      primaryCta: "Ver disponibilidade no WhatsApp",
      secondaryCta: "Falar com a hospedagem",
    },
    blog: {
      eyebrow: "Blog",
      title: "Conteúdo turístico para atrair visitantes e construir autoridade.",
      text:
        "O blog amplia a presença do projeto no Google e aproxima o público da reserva ao responder dúvidas reais sobre Arraial do Cabo.",
      categoriesTitle: "Categorias",
      categoriesText:
        "A estrutura foi organizada para crescer com temas que têm potencial de busca e influência direta na decisão de viagem.",
      seoTitle: "SEO",
      seoText:
        "Categorias claras, páginas individuais e conteúdo útil formam uma base consistente para tráfego orgânico.",
      conversionTitle: "Conversão",
      conversionText:
        "Depois de ler um bom conteúdo turístico, o visitante tende a confiar mais na hospedagem e avançar para a reserva.",
      categories: ["Praias", "Dicas", "Roteiro", "Clima", "Gastronomia", "Passeios"],
      posts: [
        {
          slug: "o-que-fazer-em-arraial-do-cabo-em-3-dias",
          category: "Roteiro",
          title: "O que fazer em Arraial do Cabo em 3 dias",
          excerpt:
            "Um roteiro simples para curtir praias lindas, passeio de barco e dias leves em Arraial sem correria.",
          cover: "/images/blog-roteiro.svg",
          readTime: "5 min",
          publishedAt: "13 de abril de 2026",
          sections: [
            {
              heading: "Arraial surpreende rápido",
              paragraphs: [
                "Arraial do Cabo é aquele tipo de destino que surpreende rápido: mar cristalino, praias lindas e um ritmo que convida a desacelerar. Em 3 dias, já dá para aproveitar muito bem sem correria.",
              ],
            },
            {
              heading: "Dia 1: comece leve pela Prainha",
              paragraphs: [
                "Se a ideia é começar a viagem com o pé direito, a Prainha é perfeita. Fácil acesso, praia bonita e tudo por perto. Ideal para chegar, se ambientar e já entrar no clima.",
                "No fim da tarde, vale dar um pulo na Praia Grande para caminhar e curtir o visual.",
              ],
            },
            {
              heading: "Dia 2: passeio de barco",
              paragraphs: [
                "Esse é o passeio que não pode faltar. É nele que você conhece o melhor de Arraial: águas incrivelmente claras, formações naturais e paradas que fazem valer a viagem.",
              ],
            },
            {
              heading: "Dia 3: praia e mirantes",
              paragraphs: [
                "No último dia, escolha sua praia favorita ou explore algum mirante. A ideia aqui é curtir sem pressa e fechar a viagem com tranquilidade.",
              ],
            },
            {
              heading: "Dica importante",
              paragraphs: [
                "Ficar bem localizado faz toda diferença para conseguir fazer tudo isso com facilidade.",
              ],
            },
            {
              heading: "Conclusão",
              paragraphs: [
                "Arraial não precisa de muito para impressionar. Com um roteiro simples e uma boa hospedagem, a experiência já fica completa.",
              ],
            },
          ],
          finalCtaLabel: "Ver disponibilidade no WhatsApp",
          authorHeading: "Sobre a autora",
          authorName: "Larissa Marques",
          authorBio:
            "Larissa Marques é viajante apaixonada por Arraial do Cabo. Já visitou 25 países e compartilha experiências reais para ajudar outros viajantes a aproveitar melhor cada destino.",
        },
        {
          slug: "onde-se-hospedar-em-arraial-do-cabo",
          category: "Dicas",
          title: "Onde se hospedar em Arraial do Cabo",
          excerpt:
            "Entenda por que escolher bem a localização faz a viagem render muito mais em Arraial do Cabo.",
          cover: "/images/blog-prainha.svg",
          readTime: "5 min",
          publishedAt: "13 de abril de 2026",
          sections: [
            {
              heading: "Escolher bem muda a viagem inteira",
              paragraphs: [
                "Escolher bem onde se hospedar em Arraial do Cabo muda completamente a experiência da viagem.",
                "Mais do que beleza, o que importa aqui é praticidade.",
              ],
            },
            {
              heading: "Por que a Prainha é uma das melhores escolhas",
              paragraphs: [
                "Ficar perto da praia, com acesso fácil a mercado, restaurantes e passeios, evita perda de tempo e deixa a viagem muito mais leve.",
                "Porque você resolve praticamente tudo a pé: praia logo ali, fácil deslocamento e um ambiente mais tranquilo.",
              ],
            },
            {
              heading: "O que observar antes de reservar",
              paragraphs: [
                "Proximidade da praia, facilidade de acesso, conforto do ambiente e praticidade no dia a dia fazem toda a diferença, principalmente em viagens curtas ou em família.",
              ],
            },
            {
              heading: "Conclusão",
              paragraphs: [
                "Em Arraial, a melhor hospedagem não é só bonita. É a que facilita sua vida.",
              ],
            },
          ],
          finalCtaLabel: "Ver disponibilidade no WhatsApp",
          authorHeading: "Sobre a autora",
          authorName: "Larissa Marques",
          authorBio:
            "Larissa Marques é viajante apaixonada por Arraial do Cabo. Já visitou 25 países e compartilha experiências reais para ajudar outros viajantes a aproveitar melhor cada destino.",
        },
        {
          slug: "melhor-epoca-para-visitar-arraial-do-cabo",
          category: "Clima",
          title: "Melhor época para visitar Arraial do Cabo",
          excerpt:
            "Entenda o estilo de cada época do ano e escolha o melhor momento para a sua viagem.",
          cover: "/images/blog-clima.svg",
          readTime: "4 min",
          publishedAt: "13 de abril de 2026",
          sections: [
            {
              heading: "A boa notícia é simples",
              paragraphs: [
                "Arraial do Cabo é um destino que funciona o ano inteiro.",
                "Cada época tem seu estilo e entender isso ajuda você a escolher a melhor experiência para o seu perfil.",
              ],
            },
            {
              heading: "Verão",
              paragraphs: [
                "Mais movimento, dias quentes e cidade cheia. Perfeito para quem gosta de energia e clima animado.",
              ],
            },
            {
              heading: "Outono e primavera",
              paragraphs: [
                "Equilíbrio ideal. Clima agradável, menos lotação e ótima experiência geral.",
              ],
            },
            {
              heading: "Inverno",
              paragraphs: [
                "Menos turistas, praias mais vazias e, muitas vezes, água ainda mais clara.",
                "É uma das melhores épocas para quem quer tranquilidade e aproveitar com mais exclusividade.",
              ],
            },
            {
              heading: "Minha dica",
              paragraphs: [
                "Se você quer conforto e menos correria, considere fugir da alta temporada.",
              ],
            },
            {
              heading: "Conclusão",
              paragraphs: [
                "Arraial não tem época ruim. O que existe são estilos diferentes de viagem.",
              ],
            },
          ],
          finalCtaLabel: "Ver disponibilidade no WhatsApp",
          authorHeading: "Sobre a autora",
          authorName: "Larissa Marques",
          authorBio:
            "Larissa Marques é viajante apaixonada por Arraial do Cabo. Já visitou 25 países e compartilha experiências reais para ajudar outros viajantes a aproveitar melhor cada destino.",
        },
      ],
    },
    contentNotes: {
      title: "Conteúdo do imóvel",
      items: [
        "Os textos já foram centralizados para troca rápida pelo conteúdo real do loft.",
        "Quando você enviar descrições, comodidades, regras, avaliações e diferenciais reais, a substituição será direta.",
      ],
    },
  },
  es: {
    meta: {
      title: "Loft Prainha Arraial | Loft frente a la playa en Arraial do Cabo",
      description:
        "Loft en Prainha, a pocos pasos de la playa, con confort, practicidad y todo cerca para disfrutar Arraial con facilidad.",
    },
    nav: {
      brandTagline: "Confort, playa y practicidad",
      home: "Inicio",
      loft: "El Loft",
      destination: "Prainha y Arraial",
      blog: "Blog",
      contact: "Contacto",
      reserve: "Reservar ahora",
    },
    common: {
      reserveNow: "Ver disponibilidad",
      reserveExternal: "Consultar disponibilidad",
      talkToUs: "Hablar con el alojamiento",
      readMore: "Leer contenido",
      viewInstagram: "Ver Instagram",
      callWhatsapp: "Abrir WhatsApp",
      allCategories: "Todas",
    },
    home: {
      heroEyebrow: "Prainha • Arraial do Cabo",
      heroTitle: "Quédate en Prainha con confort, practicidad y todo cerca",
      heroText:
        "Loft completo, a pocos pasos de la playa, ideal para descansar y disfrutar Arraial sin complicaciones.",
      heroBadge: "A pocos pasos de la playa y con todo lo necesario para una estadía tranquila.",
      heroImageAlt: "Vista aérea de Prainha con mar turquesa en Arraial do Cabo",
      heroPrimaryCta: "Ver disponibilidad en WhatsApp",
      heroSecondaryCta: "Hablar con el alojamiento",
      heroHighlights: [
        { title: "Frente a la playa", text: "Salga del condominio y llegue a Prainha en pocos instantes." },
        { title: "Ideal para familias", text: "Zona práctica, acogedora y cómoda para viajar con niños." },
        { title: "Cerca de todo", text: "Acceso fácil al centro, restaurantes, mercado y paseos." },
      ],
      metrics: [
        { value: "4,96", label: "calificación media destacando ubicación, confort y limpieza." },
        { value: "80 m", label: "hasta la arena de Prainha para una rutina ligera y sin estrés." },
        { value: "5 huéspedes", label: "con espacio pensado para familias y pequeños grupos." },
        { value: "Piscina", label: "del condominio para alternar descanso, sol y playa." },
      ],
      conversionEyebrow: "Habla con el alojamiento",
      conversionTitle: "Todo lo que necesitas para una estadía perfecta en Prainha",
      conversionText:
        "Aquí encuentras el equilibrio ideal entre ubicación, confort y practicidad: frente a la playa, ambiente tranquilo y todo cerca para disfrutar Arraial con facilidad.",
      conversionPoints: [
        "A pocos pasos de la playa, sin necesidad de usar coche en el día a día",
        "Zona tranquila, ideal para descansar y viajar en familia",
        "Todo pensado para darte confort, practicidad y una estadía sin preocupación",
      ],
      conversionPrimaryCta: "Ver disponibilidad en WhatsApp",
      conversionSecondaryCta: "Resolver dudas rápidas",
      differentiatorsEyebrow: "Diferenciales",
      differentiatorsTitle: "Todo lo que hace tu estadía más fácil",
      differentiatorsText:
        "Beneficios reales para que disfrutes Arraial con más confort, practicidad y tranquilidad.",
      differentiators: [
        { icon: "PA", title: "A pocos pasos de la playa", description: "Despiértate y ve caminando a la playa, sin depender del coche." },
        { icon: "PV", title: "Piscina para relajarse después de la playa", description: "Perfecta para descansar al final del día con más confort." },
        { icon: "PR", title: "Ubicación estratégica", description: "Cerca de mercado, restaurantes y todo lo que necesitas." },
        { icon: "FM", title: "Perfecto para familias", description: "Ambiente tranquilo y cómodo para viajar sin preocupación." },
        { icon: "CT", title: "Todo a tu alcance", description: "Playa, comercios y paseos cerca para facilitar tu día." },
        { icon: "VL", title: "Ambientes claros y acogedores", description: "Espacio pensado para descanso y bienestar." },
      ],
      familyEyebrow: "Familias eligen Prainha",
      familyTitle: "Una región que combina mar bonito, practicidad y una estadía más tranquila.",
      familyText:
        "Prainha suele ser una elección muy acertada para familias porque simplifica la logística y permite disfrutar el viaje con menos desgaste.",
      familyBullets: [
        "Buen equilibrio entre playa, conveniencia y acceso a la ciudad.",
        "Menos tiempo en traslados y más tiempo disfrutando.",
        "Más comodidad para alternar playa, descanso y piscina.",
      ],
      testimonialsEyebrow: "Prueba social",
      testimonialsTitle: "Quien se hospeda, recomienda",
      testimonialsText:
        "Las evaluaciones muestran lo que de verdad importa: confort, ubicación y practicidad.",
      testimonials: [
        { quote: "La ubicación hizo toda la diferencia. Pudimos disfrutar Prainha y salir a pasear sin complicaciones.", author: "Renata, Campinas" },
        { quote: "La piscina del condominio y el acceso rápido a la playa hicieron el viaje mucho más agradable para nuestra familia.", author: "Mariana y Felipe, Belo Horizonte" },
        { quote: "Es el tipo de alojamiento que transmite confianza y organización desde el primer vistazo.", author: "Eduardo, Río de Janeiro" },
      ],
      galleryEyebrow: "Galería",
      galleryTitle: "Mira dónde te vas a hospedar",
      galleryText:
        "Imágenes reales del loft para que sepas exactamente qué esperar.",
      gallery: [
        { title: "Dormitorio con vista al mar", description: "Despertar con la playa a la vista refuerza la sensación premium de la estadía.", image: "/images/gallery-vista.svg", size: "large" },
        { title: "Piscina del condominio", description: "Un espacio agradable para relajarse después de la playa y disfrutar mejor la estadía.", image: "/images/gallery-piscina.svg", size: "medium" },
        { title: "Sala integrada y acogedora", description: "Interior bien resuelto para transmitir confort, practicidad y confianza.", image: "/images/gallery-living.svg", size: "small" },
        { title: "Prainha al lado", description: "La comodidad de una playa hermosa a pocos pasos.", image: "/images/gallery-prainha.svg", size: "small" },
        { title: "Ideal para familias", description: "Una base práctica para viajar en grupo.", image: "/images/gallery-family.svg", size: "small" },
      ],
      weatherEyebrow: "Clima e información del día",
      weatherTitle: "Estructura lista para mostrar clima, viento, temperatura y sugerencias del día.",
      weatherText:
        "El proyecto ya queda preparado para una futura integración con datos en vivo.",
      weatherCta: "Consultar disponibilidad",
      blogEyebrow: "Blog turístico",
      blogTitle: "Consejos e información para aprovechar Arraial",
      blogText:
        "Contenidos sobre playas, paseos y qué hacer para ayudarte a planear mejor tu viaje.",
      ctaEyebrow: "Atención rápida",
      ctaTitle: "¿Te gustó? Habla con nosotros y reserva ahora",
      ctaText:
        "Respondemos rápido por WhatsApp para confirmar disponibilidad y valores.",
    },
    loft: {
      eyebrow: "El Loft",
      title: "Un alojamiento pensado para vacaciones prácticas y confortables en Prainha.",
      text:
        "Loft Prainha Arraial combina ubicación privilegiada, ambiente premium y una estructura ideal para familias, parejas y pequeños grupos.",
      pills: ["Hasta 5 huéspedes", "Frente a la playa", "Piscina del condominio", "Ideal para familias"],
      descriptionTitle: "Descripción completa",
      descriptionText: [
        "La propiedad fue pensada para ofrecer una experiencia superior a la de los anuncios comunes.",
        "La propuesta es clara: alojarse muy bien en Prainha, cerca de todo y con una rutina más cómoda.",
      ],
      capacityTitle: "Capacidad",
      capacityText: "Recibe cómodamente hasta 5 huéspedes.",
      amenitiesTitle: "Comodidades",
      amenitiesText: "Los puntos principales ayudan a transmitir valor y confianza.",
      amenities: [
        "Ambiente climatizado",
        "Distribución funcional para hasta 5 huéspedes",
        "Wi-Fi",
        "Cocina equipada",
        "Ropa de cama completa",
        "Piscina del condominio",
        "Portería y ambiente organizado",
        "Ubicación privilegiada en Prainha",
      ],
      rulesTitle: "Reglas básicas",
      rules: [
        "Check-in y check-out según disponibilidad informada.",
        "No está permitido fumar dentro del loft.",
        "No se permiten fiestas o eventos.",
        "Respetar las normas del condominio.",
      ],
      condoTitle: "Estructura del condominio",
      condo: [
        "Piscina del condominio",
        "Áreas comunes organizadas",
        "Acceso facilitado a la playa",
        "Ambiente seguro para familias",
      ],
      ctaTitle: "Si te gustó la propuesta, revisa la disponibilidad en el enlace externo.",
      ctaText: "La reserva se realiza fuera del sitio, pero toda la experiencia aquí fue diseñada para llevar a ese clic.",
    },
    destination: {
      eyebrow: "Prainha y Arraial do Cabo",
      title: "Alojarse en Prainha es una de las maneras más inteligentes de disfrutar Arraial.",
      text: "La zona ofrece una combinación rara de mar bonito, practicidad y buena conexión con la ciudad.",
      tourismTitle: "Por qué Arraial do Cabo encanta tanto",
      tourismText: [
        "Arraial mezcla playas de aguas claras, paseos en barco muy buscados y una sensación de escapada muy atractiva.",
        "Con hospedaje en Prainha, el viaje se vuelve más fluido porque se reducen los desplazamientos.",
      ],
      prainhaTitle: "Ventajas de hospedarse en Prainha",
      prainhaBullets: [
        "Playa bonita y práctica para ir caminando.",
        "Excelente base para familias.",
        "Buena conexión con el centro y los paseos.",
        "Más comodidad para alternar playa, descanso y piscina.",
      ],
      beachesTitle: "Playas cercanas",
      beachesText: "La ubicación facilita un itinerario equilibrado entre la playa cercana y otros puntos clásicos.",
      beaches: [
        { title: "Prainha", text: "Ideal para quien valora practicidad y mar bonito." },
        { title: "Praia do Forno", text: "Paisaje impactante y aguas claras." },
        { title: "Praia Grande", text: "Buena estructura y atardecer memorable." },
        { title: "Praia dos Anjos", text: "Punto importante para paseos en barco." },
      ],
      tipsTitle: "Qué hacer",
      tips: [
        "Reservar al menos 3 días para conocer Arraial con calma.",
        "Salir temprano para disfrutar mejor las playas concurridas.",
        "Dejar un día más flexible para paseos en barco según el clima.",
        "Aprovechar la noche para cenar sin prisa.",
      ],
      threeDaysTitle: "Tres días es el mínimo ideal para conocer Arraial.",
      threeDaysText: [
        "Con menos tiempo, el viaje suele quedar demasiado apretado.",
        "Con tres días, puedes equilibrar playa, paseo y descanso.",
      ],
      ctaTitle: "Elegir bien dónde quedarse cambia toda la experiencia del viaje.",
      ctaText: "Una base en Prainha hace que el itinerario rinda mucho más.",
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Canales directos para resolver dudas y avanzar hacia la reserva externa.",
      text: "La página refuerza confianza con WhatsApp, Instagram, mapa y un camino claro hacia la reserva.",
      whatsappTitle: "Atención por WhatsApp",
      whatsappText: "Un canal rápido para confirmar detalles del alojamiento.",
      instagramTitle: "Instagram",
      instagramText: "Más presencia visual y credibilidad para el loft.",
      mapTitle: "Mapa",
      mapText: "Prainha está cerca de todo lo que hace rendir mejor el viaje.",
      reserveTitle: "Reserva",
      reserveText: "La atención y la conversión ocurren directamente por WhatsApp con el alojamiento.",
    },
    seoPage: {
      eyebrow: "Hospedaje en Prainha",
      title: "Loft en Prainha en Arraial do Cabo",
      text:
        "Si estás buscando hospedagem arraial do cabo con la playa cerca, comodidad y practicidad, este loft arraial do cabo en Prainha es una excelente opción para descansar bien y aprovechar todo con facilidad.",
      highlights: [
        "A pocos pasos de la playa para disfrutar más y depender menos del coche",
        "Comodidad y practicidad para pareja, familia o viaje corto",
        "Ubicación estratégica para quien busca onde ficar em arraial do cabo con todo cerca",
      ],
      differentiatorsEyebrow: "Diferenciales del loft",
      differentiatorsTitle: "Por qué el Loft en Prainha hace tu viaje más fácil",
      differentiatorsText:
        "Aquí la idea es simple: hospedarte bien, cerca de la playa y con más comodidad para disfrutar Arraial.",
      locationEyebrow: "Ubicación estratégica",
      locationTitle: "Prainha es una de las mejores bases para quedarse en Arraial do Cabo",
      locationText:
        "Quien busca onde ficar em arraial do cabo normalmente quiere practicidad real. En Prainha te quedas cerca de la arena, con acceso fácil a mercado, restaurantes, paseos y al resto de la ciudad, sin perder la sensación de descanso.",
      locationBullets: [
        "Playa cerca para disfrutar más del día y volver al loft cuando quieras",
        "Zona práctica para viajes cortos, en pareja o en familia",
        "Buena base para quien quiere hospedagem arraial do cabo con comodidad y rutina ligera",
      ],
      searchTerms: [
        "hospedagem arraial do cabo",
        "loft arraial do cabo",
        "onde ficar em arraial do cabo",
      ],
      socialEyebrow: "Prueba social",
      socialTitle: "La experiencia del huésped confirma la elección",
      socialText:
        "Quien se hospeda destaca lo que más importa en la decisión: ubicación, comodidad, practicidad y una estadía más tranquila en Prainha.",
      ctaTitle: "¿Quieres saber si está disponible para tus fechas?",
      ctaText: "Escríbenos por WhatsApp y recibe rápido la información sobre disponibilidad y valores.",
      primaryCta: "Ver disponibilidad en WhatsApp",
      secondaryCta: "Hablar con el alojamiento",
    },
    blog: {
      eyebrow: "Blog",
      title: "Contenido turístico para atraer visitantes y construir autoridad.",
      text: "El blog amplía la presencia del proyecto en Google y acerca al público a la reserva.",
      categoriesTitle: "Categorías",
      categoriesText: "Una base organizada para crecer con temas relevantes de viaje.",
      seoTitle: "SEO",
      seoText: "Categorías claras y contenido útil forman una buena base para tráfico orgánico.",
      conversionTitle: "Conversión",
      conversionText: "Después de leer buen contenido turístico, el visitante suele confiar más en el alojamiento.",
      categories: ["Playas", "Consejos", "Itinerario", "Clima", "Gastronomía", "Paseos"],
      posts: [
        {
          slug: "o-que-fazer-em-arraial-do-cabo-em-3-dias",
          category: "Itinerario",
          title: "Qué hacer en Arraial do Cabo en 3 días",
          excerpt: "Un plan sencillo para disfrutar playas lindas, paseo en barco y días más ligeros en Arraial.",
          cover: "/images/blog-roteiro.svg",
          readTime: "5 min",
          publishedAt: "13 de abril de 2026",
          sections: [
            {
              heading: "Arraial sorprende rápido",
              paragraphs: [
                "Arraial do Cabo es ese tipo de destino que sorprende rápido: mar cristalino, playas hermosas y un ritmo que invita a bajar la velocidad. En 3 días ya se puede aprovechar muy bien sin correr.",
              ],
            },
            {
              heading: "Día 1: empieza tranquilo en Prainha",
              paragraphs: [
                "Si quieres arrancar el viaje con el pie derecho, Prainha es perfecta. Acceso fácil, playa bonita y todo cerca. Ideal para llegar, acomodarte y entrar en clima.",
                "Al final de la tarde, vale la pena pasar por Praia Grande para caminar y disfrutar la vista.",
              ],
            },
            {
              heading: "Día 2: paseo en barco",
              paragraphs: [
                "Es el paseo que no puede faltar. Ahí conoces lo mejor de Arraial: aguas increíblemente claras, formaciones naturales y paradas que hacen valer el viaje.",
              ],
            },
            {
              heading: "Día 3: playa y miradores",
              paragraphs: [
                "En el último día, elige tu playa favorita o explora algún mirador. La idea es disfrutar sin prisa y cerrar el viaje con tranquilidad.",
              ],
            },
            {
              heading: "Consejo importante",
              paragraphs: [
                "Quedarse bien ubicado hace toda la diferencia para hacer todo esto con más facilidad.",
              ],
            },
            {
              heading: "Conclusión",
              paragraphs: [
                "Arraial no necesita mucho para impresionar. Con un itinerario simple y un buen alojamiento, la experiencia ya se siente completa.",
              ],
            },
          ],
          finalCtaLabel: "Ver disponibilidad en WhatsApp",
          authorHeading: "Sobre la autora",
          authorName: "Larissa Marques",
          authorBio:
            "Larissa Marques es una viajera apasionada por Arraial do Cabo. Ya visitó 25 países y comparte experiencias reales para ayudar a otros viajeros a disfrutar mejor cada destino.",
        },
        {
          slug: "onde-se-hospedar-em-arraial-do-cabo",
          category: "Consejos",
          title: "Dónde hospedarse en Arraial do Cabo",
          excerpt: "Entiende por qué elegir bien la ubicación hace que el viaje rinda mucho más en Arraial.",
          cover: "/images/blog-prainha.svg",
          readTime: "5 min",
          publishedAt: "13 de abril de 2026",
          sections: [
            {
              heading: "Elegir bien cambia todo el viaje",
              paragraphs: [
                "Elegir bien dónde hospedarse en Arraial do Cabo cambia completamente la experiencia del viaje.",
                "Más que la belleza, aquí lo que importa es la practicidad.",
              ],
            },
            {
              heading: "Por qué Prainha es una de las mejores opciones",
              paragraphs: [
                "Quedarse cerca de la playa, con acceso fácil a mercado, restaurantes y paseos, evita pérdida de tiempo y hace el viaje mucho más ligero.",
                "Porque prácticamente resuelves todo caminando: playa ahí mismo, desplazamiento fácil y un ambiente más tranquilo.",
              ],
            },
            {
              heading: "Qué mirar antes de reservar",
              paragraphs: [
                "Proximidad a la playa, facilidad de acceso, confort del ambiente y practicidad en el día a día marcan toda la diferencia, sobre todo en viajes cortos o en familia.",
              ],
            },
            {
              heading: "Conclusión",
              paragraphs: [
                "En Arraial, el mejor alojamiento no es solo el más bonito. Es el que te hace la vida más fácil.",
              ],
            },
          ],
          finalCtaLabel: "Ver disponibilidad en WhatsApp",
          authorHeading: "Sobre la autora",
          authorName: "Larissa Marques",
          authorBio:
            "Larissa Marques es una viajera apasionada por Arraial do Cabo. Ya visitó 25 países y comparte experiencias reales para ayudar a otros viajeros a disfrutar mejor cada destino.",
        },
        {
          slug: "melhor-epoca-para-visitar-arraial-do-cabo",
          category: "Clima",
          title: "Mejor época para visitar Arraial do Cabo",
          excerpt: "Descubre el estilo de cada época del año y elige el mejor momento para tu viaje.",
          cover: "/images/blog-clima.svg",
          readTime: "4 min",
          publishedAt: "13 de abril de 2026",
          sections: [
            {
              heading: "La buena noticia es simple",
              paragraphs: [
                "Arraial do Cabo es un destino que funciona todo el año.",
                "Cada época tiene su estilo, y entender eso te ayuda a elegir la experiencia que mejor combina contigo.",
              ],
            },
            {
              heading: "Verano",
              paragraphs: [
                "Más movimiento, días calurosos y ciudad llena. Perfecto para quien disfruta un ambiente animado.",
              ],
            },
            {
              heading: "Otoño y primavera",
              paragraphs: [
                "El equilibrio ideal. Clima agradable, menos gente y una experiencia muy buena en general.",
              ],
            },
            {
              heading: "Invierno",
              paragraphs: [
                "Menos turistas, playas más vacías y, muchas veces, agua todavía más clara.",
                "Es una de las mejores épocas para quien busca tranquilidad y una experiencia más exclusiva.",
              ],
            },
            {
              heading: "Mi consejo",
              paragraphs: [
                "Si quieres más confort y menos corridas, vale la pena evitar la alta temporada.",
              ],
            },
            {
              heading: "Conclusión",
              paragraphs: [
                "Arraial no tiene una mala época. Lo que existen son estilos diferentes de viaje.",
              ],
            },
          ],
          finalCtaLabel: "Ver disponibilidad en WhatsApp",
          authorHeading: "Sobre la autora",
          authorName: "Larissa Marques",
          authorBio:
            "Larissa Marques es una viajera apasionada por Arraial do Cabo. Ya visitó 25 países y comparte experiencias reales para ayudar a otros viajeros a disfrutar mejor cada destino.",
        },
      ],
    },
    contentNotes: {
      title: "Contenido del inmueble",
      items: [
        "La capa de contenido ya está centralizada para reemplazar los textos rápidamente.",
        "Cuando compartas el contenido real del loft, la actualización será directa.",
      ],
    },
  },
  en: {
    meta: {
      title: "Loft Prainha Arraial | Beachfront loft in Arraial do Cabo",
      description:
        "Loft in Prainha, just a few steps from the beach, with comfort, practicality and everything nearby so you can enjoy Arraial with ease.",
    },
    nav: {
      brandTagline: "Comfort, beach and convenience",
      home: "Home",
      loft: "The Loft",
      destination: "Prainha and Arraial",
      blog: "Blog",
      contact: "Contact",
      reserve: "Book now",
    },
    common: {
      reserveNow: "Check availability",
      reserveExternal: "Check availability",
      talkToUs: "Talk to the host",
      readMore: "Read more",
      viewInstagram: "View Instagram",
      callWhatsapp: "Open WhatsApp",
      allCategories: "All",
    },
    home: {
      heroEyebrow: "Prainha • Arraial do Cabo",
      heroTitle: "Stay in Prainha with comfort, convenience and everything nearby",
      heroText:
        "A complete loft just a few steps from the beach, ideal for relaxing and enjoying Arraial without complications.",
      heroBadge: "Just a few steps from the beach, with everything you need for a smooth stay.",
      heroImageAlt: "Aerial view of Prainha with vibrant turquoise water in Arraial do Cabo",
      heroPrimaryCta: "Check availability on WhatsApp",
      heroSecondaryCta: "Talk to the host",
      heroHighlights: [
        { title: "True beachfront", text: "Leave the condo and reach Prainha in moments." },
        { title: "Great for families", text: "A practical, comfortable area for trips with kids." },
        { title: "Close to everything", text: "Easy access to downtown, restaurants, markets and tours." },
      ],
      metrics: [
        { value: "4.96", label: "average rating highlighting location, comfort and cleanliness." },
        { value: "80 m", label: "to the sand at Prainha for an easy vacation routine." },
        { value: "5 guests", label: "with a layout designed for families and small groups." },
        { value: "Pool", label: "in the condo to alternate between beach time, sun and relaxation." },
      ],
      conversionEyebrow: "Talk to the host",
      conversionTitle: "Everything you need for a perfect stay in Prainha",
      conversionText:
        "Here you get the right balance of location, comfort and convenience: near the beach, peaceful surroundings and everything close by to enjoy Arraial with ease.",
      conversionPoints: [
        "Just a few steps from the beach, with no need to rely on a car every day",
        "A peaceful area, ideal for rest and family trips",
        "Set up for comfort, convenience and a worry-free stay",
      ],
      conversionPrimaryCta: "Check availability on WhatsApp",
      conversionSecondaryCta: "Ask quick questions",
      differentiatorsEyebrow: "Highlights",
      differentiatorsTitle: "Everything that makes your stay easier",
      differentiatorsText:
        "Real benefits to help you enjoy Arraial with more comfort, convenience and peace of mind.",
      differentiators: [
        { icon: "BF", title: "Just a few steps from the beach", description: "Wake up and walk to the beach without depending on a car." },
        { icon: "PV", title: "Pool to unwind after the beach", description: "Perfect for relaxing at the end of the day with extra comfort." },
        { icon: "PR", title: "Strategic location", description: "Close to markets, restaurants and everything you need." },
        { icon: "FA", title: "Perfect for families", description: "A calm and comfortable setting for a worry-free trip." },
        { icon: "CE", title: "Everything within reach", description: "Beach, shops and tours nearby to make your days easier." },
        { icon: "NL", title: "Bright and welcoming interiors", description: "A space designed for rest and well-being." },
      ],
      familyEyebrow: "Families love Prainha",
      familyTitle: "A beach area that blends beauty, convenience and a calmer stay.",
      familyText:
        "For families, Prainha is often a smart choice because it simplifies logistics and makes each day easier to enjoy.",
      familyBullets: [
        "Strong balance between beach time, city access and convenience.",
        "Less time commuting and more time enjoying the trip.",
        "Easy to switch between beach, loft downtime and the pool.",
      ],
      testimonialsEyebrow: "Social proof",
      testimonialsTitle: "Guests who stay here recommend it",
      testimonialsText:
        "The reviews highlight what matters most: comfort, location and convenience.",
      testimonials: [
        { quote: "The location changed the whole trip. We enjoyed Prainha and still had easy access to other plans.", author: "Renata, Campinas" },
        { quote: "The condo pool and the quick beach access made the stay much better for our family.", author: "Mariana and Felipe, Belo Horizonte" },
        { quote: "It feels more professional and trustworthy than most vacation listings.", author: "Eduardo, Rio de Janeiro" },
      ],
      galleryEyebrow: "Gallery",
      galleryTitle: "See where you’ll be staying",
      galleryText:
        "Real photos of the loft so you know exactly what to expect.",
      gallery: [
        { title: "Bedroom with an ocean view", description: "Waking up with the beach in sight strengthens the premium feel of the stay.", image: "/images/gallery-vista.svg", size: "large" },
        { title: "Condo pool", description: "A pleasant spot to relax after the beach and enjoy the stay with more comfort.", image: "/images/gallery-piscina.svg", size: "medium" },
        { title: "Welcoming integrated living area", description: "A well-resolved interior that communicates comfort, practicality and trust.", image: "/images/gallery-living.svg", size: "small" },
        { title: "Prainha next door", description: "A beautiful beach only a few steps away.", image: "/images/gallery-prainha.svg", size: "small" },
        { title: "Great for families", description: "A practical base for group travel.", image: "/images/gallery-family.svg", size: "small" },
      ],
      weatherEyebrow: "Weather and daily info",
      weatherTitle: "Prepared for future live weather, wind and daily condition integrations.",
      weatherText:
        "The project is already structured to receive live data that can help guests plan beaches and boat tours.",
      weatherCta: "Check availability",
      blogEyebrow: "Travel blog",
      blogTitle: "Tips and information to enjoy Arraial",
      blogText:
        "Content about beaches, tours and what to do so you can plan your trip better.",
      ctaEyebrow: "Quick reply",
      ctaTitle: "Like it? Talk to us and book now",
      ctaText:
        "We reply quickly on WhatsApp to confirm availability and rates.",
    },
    loft: {
      eyebrow: "The Loft",
      title: "A stay designed for comfortable, easy days in Prainha.",
      text:
        "Loft Prainha Arraial combines a privileged location, a premium feel and a structure that works well for families, couples and small groups.",
      pills: ["Up to 5 guests", "Beachfront", "Condo pool", "Family-friendly"],
      descriptionTitle: "Full description",
      descriptionText: [
        "The property was designed to feel more polished and trustworthy than a typical generic listing.",
        "The promise is clear: stay well in Prainha, close to everything, with a calm and practical routine.",
      ],
      capacityTitle: "Guest capacity",
      capacityText: "Comfortably hosts up to 5 guests.",
      amenitiesTitle: "Amenities",
      amenitiesText: "The key items below help communicate value and trust.",
      amenities: [
        "Air-conditioned environment",
        "Functional layout for up to 5 guests",
        "Wi-Fi",
        "Equipped kitchen",
        "Full linens",
        "Condo pool",
        "Organized condo environment",
        "Prime location in Prainha",
      ],
      rulesTitle: "House rules",
      rules: [
        "Check-in and check-out depend on booking availability.",
        "No smoking inside the loft.",
        "No parties or events.",
        "Guests must follow condo rules.",
      ],
      condoTitle: "Condo structure",
      condo: [
        "Condo pool",
        "Well-kept common areas",
        "Easy beach access",
        "Family-friendly environment",
      ],
      ctaTitle: "Like the property? Check the external booking link.",
      ctaText: "Booking happens off-site, but this journey is designed to lead visitors confidently to that click.",
    },
    destination: {
      eyebrow: "Prainha and Arraial do Cabo",
      title: "Staying in Prainha is one of the smartest ways to enjoy Arraial.",
      text: "The area offers a rare mix of beautiful beach access, convenience and strong city connection.",
      tourismTitle: "Why Arraial do Cabo is so appealing",
      tourismText: [
        "Arraial do Cabo combines clear-water beaches, popular boat tours and a strong sense of escape.",
        "With a stay in Prainha, the trip becomes smoother because you spend less time dealing with logistics.",
      ],
      prainhaTitle: "Benefits of staying in Prainha",
      prainhaBullets: [
        "A beautiful beach you can reach on foot.",
        "A great base for families.",
        "Easy access to downtown, markets and tours.",
        "More comfort when switching between beach, downtime and the pool.",
      ],
      beachesTitle: "Nearby beaches",
      beachesText: "The location makes it easier to build a balanced itinerary around Arraial.",
      beaches: [
        { title: "Prainha", text: "Perfect for guests who value convenience and a beautiful beach." },
        { title: "Praia do Forno", text: "A striking landscape with clear waters." },
        { title: "Praia Grande", text: "Good structure and a memorable sunset." },
        { title: "Praia dos Anjos", text: "A key departure point for boat tours." },
      ],
      tipsTitle: "Things to do",
      tips: [
        "Stay at least 3 days to enjoy Arraial without rushing.",
        "Head out early for the most popular beaches.",
        "Keep one flexible day for a boat tour depending on weather.",
        "Use the evenings for relaxed dinners and city walks.",
      ],
      threeDaysTitle: "Three days is the ideal minimum to experience Arraial.",
      threeDaysText: [
        "With less time, the trip often feels too rushed.",
        "With three days, guests can balance beach time, tours and rest more naturally.",
      ],
      ctaTitle: "Where you stay changes the quality of the whole trip.",
      ctaText: "A Prainha base makes the itinerary easier and more enjoyable.",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Direct channels for questions before booking externally.",
      text: "This page reinforces trust with WhatsApp, Instagram, a map and another clear route to booking.",
      whatsappTitle: "WhatsApp",
      whatsappText: "A quick channel for confirming property details before booking.",
      instagramTitle: "Instagram",
      instagramText: "More visual presence and credibility for the loft.",
      mapTitle: "Map",
      mapText: "Prainha is close to the essentials that make the trip easier to enjoy.",
      reserveTitle: "Booking",
      reserveText: "Inquiries and conversion now happen directly on WhatsApp with the host.",
    },
    seoPage: {
      eyebrow: "Stay in Prainha",
      title: "Loft in Prainha in Arraial do Cabo",
      text:
        "If you are looking for hospedagem arraial do cabo with the beach close by, comfort and practicality, this loft arraial do cabo in Prainha is a smart choice to relax well and enjoy everything with ease.",
      highlights: [
        "A few steps from the beach so you can enjoy more and rely less on a car",
        "Comfort and practicality for couples, families or short trips",
        "A strategic location for anyone searching onde ficar em arraial do cabo with everything nearby",
      ],
      differentiatorsEyebrow: "Loft highlights",
      differentiatorsTitle: "Why this Loft in Prainha makes the trip easier",
      differentiatorsText:
        "The idea here is simple: stay well, stay near the beach and enjoy Arraial with more comfort.",
      locationEyebrow: "Strategic location",
      locationTitle: "Prainha is one of the best places to stay in Arraial do Cabo",
      locationText:
        "People searching onde ficar em arraial do cabo usually want real convenience. In Prainha, you stay close to the sand, with easy access to markets, restaurants, tours and the rest of the city, without losing that relaxed beach feel.",
      locationBullets: [
        "The beach is close so you can enjoy more of the day and return to the loft anytime",
        "A practical area for short trips, couples and families",
        "A smart base for anyone looking for hospedagem arraial do cabo with comfort and an easy routine",
      ],
      searchTerms: [
        "hospedagem arraial do cabo",
        "loft arraial do cabo",
        "onde ficar em arraial do cabo",
      ],
      socialEyebrow: "Social proof",
      socialTitle: "Guest experience backs the choice",
      socialText:
        "Guests highlight what matters most when choosing a stay: location, comfort, practicality and a calmer routine in Prainha.",
      ctaTitle: "Want to check if your dates are available?",
      ctaText: "Message us on WhatsApp and get quick details about availability and rates.",
      primaryCta: "Check availability on WhatsApp",
      secondaryCta: "Talk to the host",
    },
    blog: {
      eyebrow: "Blog",
      title: "Travel content designed to attract visitors and build authority.",
      text: "The blog strengthens SEO while warming up potential guests for booking.",
      categoriesTitle: "Categories",
      categoriesText: "A structure built to grow around useful travel topics.",
      seoTitle: "SEO",
      seoText: "Clear categories and useful content create a strong organic foundation.",
      conversionTitle: "Conversion",
      conversionText: "Useful travel content helps visitors trust the property more.",
      categories: ["Beaches", "Tips", "Itinerary", "Weather", "Food", "Tours"],
      posts: [
        {
          slug: "o-que-fazer-em-arraial-do-cabo-em-3-dias",
          category: "Itinerary",
          title: "What to do in Arraial do Cabo in 3 days",
          excerpt: "A simple plan to enjoy beautiful beaches, a boat tour and easy days in Arraial without rushing.",
          cover: "/images/blog-roteiro.svg",
          readTime: "5 min",
          publishedAt: "April 13, 2026",
          sections: [
            {
              heading: "Arraial makes an impression fast",
              paragraphs: [
                "Arraial do Cabo is the kind of place that impresses fast: crystal-clear water, beautiful beaches and a pace that invites you to slow down. In 3 days, you can already enjoy a lot without feeling rushed.",
              ],
            },
            {
              heading: "Day 1: start easy in Prainha",
              paragraphs: [
                "If you want to start the trip on the right foot, Prainha is perfect. Easy access, a beautiful beach and everything nearby. Ideal for arriving, settling in and getting into vacation mode.",
                "By late afternoon, it’s worth stopping by Praia Grande for a walk and the view.",
              ],
            },
            {
              heading: "Day 2: boat tour",
              paragraphs: [
                "This is the one experience you really shouldn’t skip. It’s where you see the best of Arraial: incredibly clear water, natural formations and stops that make the trip worth it.",
              ],
            },
            {
              heading: "Day 3: beach and viewpoints",
              paragraphs: [
                "On the last day, pick your favorite beach again or explore one of the viewpoints. The goal here is to enjoy everything without rushing and end the trip on a calm note.",
              ],
            },
            {
              heading: "Important tip",
              paragraphs: [
                "Staying in a good location makes all the difference when you want to do all of this with ease.",
              ],
            },
            {
              heading: "Conclusion",
              paragraphs: [
                "Arraial doesn’t need much to impress. With a simple itinerary and a good place to stay, the experience already feels complete.",
              ],
            },
          ],
          finalCtaLabel: "Check availability on WhatsApp",
          authorHeading: "About the author",
          authorName: "Larissa Marques",
          authorBio:
            "Larissa Marques is a traveler who loves Arraial do Cabo. She has visited 25 countries and shares real experiences to help other travelers enjoy each destination even more.",
        },
        {
          slug: "onde-se-hospedar-em-arraial-do-cabo",
          category: "Tips",
          title: "Where to stay in Arraial do Cabo",
          excerpt: "See why choosing the right location makes your trip much easier in Arraial do Cabo.",
          cover: "/images/blog-prainha.svg",
          readTime: "5 min",
          publishedAt: "April 13, 2026",
          sections: [
            {
              heading: "Choosing well changes the whole trip",
              paragraphs: [
                "Choosing where to stay in Arraial do Cabo changes the whole travel experience.",
                "More than beauty, what really matters here is convenience.",
              ],
            },
            {
              heading: "Why Prainha is one of the best choices",
              paragraphs: [
                "Staying close to the beach with easy access to markets, restaurants and tours saves time and makes the trip much lighter.",
                "That’s because you can handle almost everything on foot: the beach right there, easy getting around and a calmer atmosphere.",
              ],
            },
            {
              heading: "What to check before booking",
              paragraphs: [
                "Beach proximity, easy access, comfort and day-to-day practicality make all the difference, especially on short trips or family travel.",
              ],
            },
            {
              heading: "Conclusion",
              paragraphs: [
                "In Arraial, the best place to stay isn’t just the prettiest one. It’s the one that makes your life easier.",
              ],
            },
          ],
          finalCtaLabel: "Check availability on WhatsApp",
          authorHeading: "About the author",
          authorName: "Larissa Marques",
          authorBio:
            "Larissa Marques is a traveler who loves Arraial do Cabo. She has visited 25 countries and shares real experiences to help other travelers enjoy each destination even more.",
        },
        {
          slug: "melhor-epoca-para-visitar-arraial-do-cabo",
          category: "Weather",
          title: "Best time to visit Arraial do Cabo",
          excerpt: "Understand each season’s style and choose the best time for the kind of trip you want.",
          cover: "/images/blog-clima.svg",
          readTime: "4 min",
          publishedAt: "April 13, 2026",
          sections: [
            {
              heading: "The good news is simple",
              paragraphs: [
                "Arraial do Cabo works well all year round.",
                "Each season has its own style, and understanding that helps you choose the experience that fits you best.",
              ],
            },
            {
              heading: "Summer",
              paragraphs: [
                "More movement, hot days and a busier town. Perfect if you like energy and a lively atmosphere.",
              ],
            },
            {
              heading: "Autumn and spring",
              paragraphs: [
                "The ideal balance. Pleasant weather, fewer crowds and a great overall experience.",
              ],
            },
            {
              heading: "Winter",
              paragraphs: [
                "Fewer tourists, emptier beaches and, many times, even clearer water.",
                "It’s one of the best times for anyone looking for peace and a more exclusive feel.",
              ],
            },
            {
              heading: "My tip",
              paragraphs: [
                "If you want more comfort and less rushing around, consider avoiding high season.",
              ],
            },
            {
              heading: "Conclusion",
              paragraphs: [
                "There’s no bad season in Arraial. There are just different styles of travel.",
              ],
            },
          ],
          finalCtaLabel: "Check availability on WhatsApp",
          authorHeading: "About the author",
          authorName: "Larissa Marques",
          authorBio:
            "Larissa Marques is a traveler who loves Arraial do Cabo. She has visited 25 countries and shares real experiences to help other travelers enjoy each destination even more.",
        },
      ],
    },
    contentNotes: {
      title: "Property content",
      items: [
        "The content layer is now centralized for a fast replacement with the real property information.",
        "Once you send the actual loft details, updating the site will be straightforward.",
      ],
    },
  },
};

export function getContent(locale: Locale) {
  return siteContent[locale];
}
