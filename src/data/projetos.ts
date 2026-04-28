export interface ProjetoData {
    slug: string;
    name: string;
    tipo: string;
    ano: string;
    local: string;
    cover: string;
    images: string[];
    descricaoCurta: string;
    descricao: string[];
    detalhes: { label: string; value: string }[];
}

export const projetos: ProjetoData[] = [
    /* ── Projetos originais ────────────────────────── */
    // {
    //     slug: "jardim-classico",
    //     name: "Jardim Clássico",
    //     tipo: "paisagismo",
    //     ano: "2024",
    //     local: "São Paulo, SP",
    //     cover: "/images/1.png",
    //     images: ["/images/1.png", "/images/2.png", "/images/3.png"],
    //     descricaoCurta:
    //         "Projeto completo de paisagismo com pergolado, espelho d'água e jardim mediterrâneo.",
    //     descricao: [
    //         "Este projeto de paisagismo foi concebido como um refúgio sensorial no coração de São Paulo. A proposta uniu referências clássicas — como o pergolado com colunas e as esculturas de anjos — a um jardim vivo, repleto de lavandas, oliveiras e espécies mediterrâneas.",
    //         "O espelho d'água com iluminação embutida cria uma atmosfera cênica ao entardecer, enquanto os caminhos em pedra natural convidam a um passeio contemplativo. Cada elemento foi pensado para despertar os sentidos: o perfume das lavandas, o som suave da água e a textura das pedras.",
    //         "O resultado é um espaço que transcende a estética — é uma experiência de bem-estar e conexão com a natureza, integrada ao contexto urbano.",
    //     ],
    //     detalhes: [
    //         { label: "Área", value: "320 m²" },
    //         { label: "Tipologia", value: "Paisagismo residencial" },
    //         { label: "Status", value: "Concluído" },
    //         { label: "Ano", value: "2024" },
    //         { label: "Localização", value: "São Paulo, SP" },
    //     ],
    // },
    // {
    //     slug: "capela-verde",
    //     name: "Capela Verde",
    //     tipo: "religioso",
    //     ano: "2024",
    //     local: "Interior de SP",
    //     cover: "/images/second/1.png",
    //     images: [
    //         "/images/second/1.png",
    //         "/images/second/2.png",
    //         "/images/second/3.png",
    //     ],
    //     descricaoCurta:
    //         "Projeto arquitetônico de capela com estrutura metálica verde, vitrais e paisagismo integrado.",
    //     descricao: [
    //         "A Capela Verde nasceu do desejo de criar um espaço de espiritualidade que dialogasse com a natureza ao redor. A estrutura metálica em verde — cor que simboliza renovação e esperança — sustenta amplos vitrais que banham o interior de luz natural filtrada.",
    //         "O interior preserva a solenidade do espaço religioso com bancos em madeira maciça e um pé-direito generoso com cúpula envidraçada. As árvores floridas no entorno — ipês-roxos e cerejeiras — completam a composição, criando um jardim contemplativo que se integra visualmente através dos vitrais.",
    //         "O projeto une tradição e contemporaneidade: respeita a simbologia da arquitetura sacra enquanto propõe uma linguagem leve e transparente, onde dentro e fora se complementam.",
    //     ],
    //     detalhes: [
    //         { label: "Área", value: "480 m²" },
    //         { label: "Tipologia", value: "Arquitetura religiosa" },
    //         { label: "Status", value: "Em projeto" },
    //         { label: "Ano", value: "2024" },
    //         { label: "Localização", value: "Interior de SP" },
    //     ],
    // },
    // {
    //     slug: "centro-de-convivencia",
    //     name: "Centro de Convivência",
    //     tipo: "comercial",
    //     ano: "2023",
    //     local: "Campinas, SP",
    //     cover: "/images/thrd/1.png",
    //     images: ["/images/thrd/1.png", "/images/thrd/2.png", "/images/thrd/3.png"],
    //     descricaoCurta:
    //         "Espaço multiuso com praça coberta, jardim vertical e ambientes de descanso integrados.",
    //     descricao: [
    //         "O Centro de Convivência foi projetado como um ponto de encontro entre urbanidade e natureza. A cobertura orgânica em madeira laminada cria sombras dinâmicas ao longo do dia, enquanto o jardim vertical e os canteiros de flores trazem cor e vida ao espaço.",
    //         "A praça central com mobiliário em concreto curvo convida à pausa e ao convívio. O projeto inclui uma fonte central com árvore de grande porte, criando um microclima agradável e um ponto focal visual para todo o espaço.",
    //         "Os interiores complementam a proposta com ambientes de descanso — sofás, iluminação difusa e grandes panos de vidro curvo que mantêm a conexão visual com o exterior. O resultado é um espaço que acolhe e inspira, pensado para o bem-estar coletivo.",
    //     ],
    //     detalhes: [
    //         { label: "Área", value: "1.200 m²" },
    //         { label: "Tipologia", value: "Espaço comercial / multiuso" },
    //         { label: "Status", value: "Concluído" },
    //         { label: "Ano", value: "2023" },
    //         { label: "Localização", value: "Campinas, SP" },
    //     ],
    // },

    /* ── Renders Port ──────────────────────────────── */
    // {
    //     slug: "adega",
    //     name: "Adega",
    //     tipo: "interiores",
    //     ano: "2024",
    //     local: "São Paulo, SP",
    //     cover: "/images/Renders Port/Adega/1.png",
    //     images: [
    //         "/images/Renders Port/Adega/1.png",
    //         "/images/Renders Port/Adega/2.png",
    //         "/images/Renders Port/Adega/4.png",
    //         "/images/Renders Port/Adega/6.png",
    //     ],
    //     descricaoCurta:
    //         "Wine bar com revestimentos em mármore Calacatta, iluminação cênica e adega climatizada integrada.",
    //     descricao: [
    //         "A Adega é um projeto de interiores que transforma a experiência de degustar vinhos em um ritual sensorial. O revestimento em mármore Calacatta com veios dourados cria uma atmosfera sofisticada, complementada pela iluminação cênica em tons de vermelho no teto.",
    //         "O balcão central em madeira escura com tampo em mármore é o coração do espaço — convidando à conversa e à degustação. As adegas laterais com iluminação embutida exibem a coleção como verdadeiras obras de arte, enquanto o arco principal emoldura a adega ao fundo.",
    //         "Cada detalhe foi pensado para criar uma experiência imersiva: desde a acústica controlada até a temperatura ambiente ideal. O resultado é um espaço que honra a tradição do vinho com uma linguagem contemporânea e autoral.",
    //     ],
    //     detalhes: [
    //         { label: "Área", value: "85 m²" },
    //         { label: "Tipologia", value: "Design de interiores" },
    //         { label: "Status", value: "Concluído" },
    //         { label: "Ano", value: "2024" },
    //         { label: "Localização", value: "São Paulo, SP" },
    //     ],
    // },
    {
        slug: "banheiro-vista-mar",
        name: "Banheiro Vista Mar",
        tipo: "interiores",
        ano: "2024",
        local: "Litoral de SP",
        cover: "/images/Renders Port/Banheiro/banheiro 1.png",
        images: [
            "/images/Renders Port/Banheiro/banheiro 1.png",
            "/images/Renders Port/Banheiro/Banheiro 2.png",
        ],
        descricaoCurta:
            "Banheiro spa com banheira freestanding, revestimento ripado em madeira e vista panorâmica para o mar.",
        descricao: [
            "Este banheiro foi projetado como um verdadeiro spa privativo. A combinação de madeira ripada com tons naturais cria uma atmosfera acolhedora e sofisticada, enquanto a ampla esquadria piso-teto emoldura uma vista deslumbrante do oceano.",
            "A banheira freestanding é o ponto focal do ambiente, posicionada estrategicamente para aproveitar ao máximo a paisagem. O forro em madeira clara e a iluminação indireta reforçam a sensação de conforto e relaxamento.",
            "A bancada flutuante com cuba escultórica e o espelho com iluminação de LED completam o projeto, unindo funcionalidade e estética em um espaço pensado para o bem-estar diário.",
        ],
        detalhes: [
            { label: "Área", value: "18 m²" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2024" },
            { label: "Localização", value: "Litoral de SP" },
        ],
    },
    {
        slug: "suite-anna-paula",
        name: "Suíte Anna Paula",
        tipo: "interiores",
        ano: "2024",
        local: "São Paulo, SP",
        cover: "/images/Renders Port/Cliente Anna Paula/Suite/4-enhanced.png",
        images: [
            "/images/Renders Port/Cliente Anna Paula/Suite/4-enhanced.png",
            "/images/Renders Port/Cliente Anna Paula/Suite/5-enhanced.png",
            "/images/Renders Port/Cliente Anna Paula/Suite/6-enhanced.png",
            "/images/Renders Port/Cliente Anna Paula/Suite/7-enhanced.png",
            "/images/Renders Port/Cliente Anna Paula/Suite/8-enhanced.png",
            "/images/Renders Port/Cliente Anna Paula/Suite/enhanced_1 (1).png",
        ],
        descricaoCurta:
            "Suíte e home office com tons neutros, marcenaria planejada e estantes em madeira natural.",
        descricao: [
            "O projeto da Suíte Anna Paula foi pensado para unir descanso e produtividade em um único ambiente. A paleta neutra com tons de verde musgo e madeira natural cria uma atmosfera serena e acolhedora.",
            "O home office integrado conta com escrivaninha em madeira maciça, estantes com iluminação embutida e cadeira ergonômica. O painel ripado no dormitório delimita visualmente as áreas sem comprometer a amplitude do espaço.",
            "A marcenaria sob medida maximiza o aproveitamento de cada canto, com nichos para livros, objetos pessoais e decoração. O resultado é um ambiente que reflete a personalidade da moradora: funcional, aconchegante e cheio de vida.",
        ],
        detalhes: [
            { label: "Área", value: "28 m²" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2024" },
            { label: "Localização", value: "São Paulo, SP" },
        ],
    },
    {
        slug: "area-gourmet-jeanine",
        name: "Área Gourmet Jeanine",
        tipo: "interiores",
        ano: "2024",
        local: "Campinas, SP",
        cover: "/images/Renders Port/Cliente Jeanine/Area G/1.png",
        images: [

            "/images/Renders Port/Cliente Jeanine/Area G/1.jpg.jpeg",
            "/images/Renders Port/Cliente Jeanine/Area G/2.jpg.jpeg",
            "/images/Renders Port/Cliente Jeanine/Area G/3.jpg.jpeg",
            "/images/Renders Port/Cliente Jeanine/Area G/4.jpg.jpeg",
        ],
        descricaoCurta:
            "Área gourmet com cozinha integrada, bancada com ilha, marcenaria verde e vigas de madeira.",
        descricao: [
            "A Área Gourmet Jeanine é um espaço projetado para receber com elegância e conforto. A marcenaria em verde musgo com detalhes em madeira natural dialoga com a cristaleira e o armário estilo industrial, criando uma composição rica em texturas.",
            "A ilha central com banquetas de madeira e couro é o ponto de encontro do ambiente, ideal para preparo e confraternização. As vigas de madeira no teto trazem rusticidade e charme, enquanto a iluminação com pendentes industriais confere personalidade.",
            "A mesa de jantar em madeira de demolição com cadeiras em tecido verde completa o espaço, integrando cozinha e estar de maneira fluida e natural.",
        ],
        detalhes: [
            { label: "Área", value: "45 m²" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2024" },
            { label: "Localização", value: "Campinas, SP" },
        ],
    },
    {
        slug: "cozinha-jeanine",
        name: "Cozinha Jeanine",
        tipo: "interiores",
        ano: "2024",
        local: "Campinas, SP",
        cover: "/images/Renders Port/Cliente Jeanine/cozinha/01-1.png",
        images: [
            "/images/Renders Port/Cliente Jeanine/cozinha/01-1.png",
            "/images/Renders Port/Cliente Jeanine/cozinha/02.png",
            "/images/Renders Port/Cliente Jeanine/cozinha/03-1.png",
            "/images/Renders Port/Cliente Jeanine/cozinha/op 2/01.png",
            "/images/Renders Port/Cliente Jeanine/cozinha/op 2/02.png",
            "/images/Renders Port/Cliente Jeanine/cozinha/op 2/03.png",
            "/images/Renders Port/Cliente Jeanine/cozinha/op 2/04.png",
        ],
        descricaoCurta:
            "Cozinha clean com marcenaria branca, banquetas em palhinha, adega embutida e piso em madeira natural.",
        descricao: [
            "A Cozinha Jeanine é um projeto que celebra a clareza e a funcionalidade. A marcenaria toda em branco com puxadores discretos cria uma base clean, enquanto os detalhes em madeira natural — banquetas em palhinha, prateleiras abertas e piso — trazem calor e textura.",
            "A adega climatizada com porta em vidro é um destaque funcional e decorativo, posicionada estrategicamente ao lado da bancada. Os armários superiores em vidro com louças expostas adicionam charme e personalidade ao espaço.",
            "O projeto contempla duas propostas de layout, permitindo à cliente escolher a configuração que melhor se adapta à rotina da família. Ambas compartilham a mesma linguagem de materiais e a integração com o jardim através das esquadrias generosas.",
        ],
        detalhes: [
            { label: "Área", value: "22 m²" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2024" },
            { label: "Localização", value: "Campinas, SP" },
        ],
    },
    {
        slug: "sala-jeanine",
        name: "Sala Jeanine",
        tipo: "interiores",
        ano: "2024",
        local: "Campinas, SP",
        cover: "/images/Renders Port/Cliente Jeanine/Sala/03.png",
        images: [
            "/images/Renders Port/Cliente Jeanine/Sala/03.png",
            "/images/Renders Port/Cliente Jeanine/Sala/04.png",
            "/images/Renders Port/Cliente Jeanine/Sala/05.png",
        ],
        descricaoCurta:
            "Sala de estar clássica com piano de cauda, estante built-in, lareira e sofá modular em linho.",
        descricao: [
            "A Sala Jeanine é um espaço que une sofisticação clássica e conforto contemporâneo. O piano de cauda posicionado junto à parede de tijolos aparentes é o protagonista do ambiente, criando um ponto focal elegante e cultural.",
            "A estante built-in com portas em vidro abriga a biblioteca da família, enquanto a lareira embutida no móvel de TV aquece o ambiente nos dias frios. O sofá modular em linho claro com almofadas em tons terrosos convida ao descanso.",
            "As vigas de madeira no teto e o piso em madeira de demolição trazem rusticidade equilibrada, dialogando com os tecidos nobres e o mobiliário de design. O resultado é um living que acolhe, inspira e celebra a vida em família.",
        ],
        detalhes: [
            { label: "Área", value: "55 m²" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2024" },
            { label: "Localização", value: "Campinas, SP" },
        ],
    },
    {
        slug: "suite-vanessa",
        name: "Suíte Vanessa",
        tipo: "interiores",
        ano: "2024",
        local: "São Paulo, SP",
        cover: "/images/Renders Port/Cliente Vanessa/Suite/enhanced_10.png",
        images: [
            "/images/Renders Port/Cliente Vanessa/Suite/enhanced_10.png",
            "/images/Renders Port/Cliente Vanessa/Suite/enhanced_6 (1).png",
            "/images/Renders Port/Cliente Vanessa/Suite/enhanced_7.png",
            "/images/Renders Port/Cliente Vanessa/Suite/enhanced_8 (2).png",
            "/images/Renders Port/Cliente Vanessa/Suite/enhanced_9 (3).png",
        ],
        descricaoCurta:
            "Suíte minimalista com paleta neutra, armários com portas japonesas em freijó e penteadeira com nicho em arco.",
        descricao: [
            "A Suíte Vanessa é um exercício de minimalismo acolhedor. A paleta em tons de branco, bege e madeira freijó cria um ambiente de serenidade, onde cada peça tem seu propósito e seu espaço.",
            "Os armários com portas inspiradas nos shoji japoneses — painéis de tecido em estrutura de madeira — trazem leveza visual e filtragem de luz. A penteadeira com nicho em arco é um destaque delicado, perfeito para a rotina diária.",
            "A cabeceira em madeira com iluminação lateral indireta, a roupa de cama em tons terrosos e os detalhes em verde musgo completam uma composição que respira calma e sofisticação.",
        ],
        detalhes: [
            { label: "Área", value: "22 m²" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2024" },
            { label: "Localização", value: "São Paulo, SP" },
        ],
    },
    {
        slug: "quartos-bernardo-henrique",
        name: "Quartos Bernardo & Henrique",
        tipo: "interiores",
        ano: "2024",
        local: "São Paulo, SP",
        cover: "/images/Renders Port/Cliente bernardo e henrique/Bernardo/1.png",
        images: [
            "/images/Renders Port/Cliente bernardo e henrique/Bernardo/1.png",
            "/images/Renders Port/Cliente bernardo e henrique/Bernardo/2.png",
            "/images/Renders Port/Cliente bernardo e henrique/Bernardo/3.png",
            "/images/Renders Port/Cliente bernardo e henrique/Bernardo/4.png",
            "/images/Renders Port/Cliente bernardo e henrique/Henrique/enhanced_1 (4).png",
            "/images/Renders Port/Cliente bernardo e henrique/Henrique/enhanced_2 (1).png",
        ],
        descricaoCurta:
            "Dois quartos infantis personalizados com marcenaria inteligente, áreas de estudo e personalidade única para cada morador.",
        descricao: [
            "Os Quartos Bernardo & Henrique foram projetados para acompanhar o crescimento de dois irmãos, cada um com sua personalidade. O quarto do Bernardo traz uma estética gamer com estante exibindo coleção de action figures, iluminação em LED e escrivaninha funcional.",
            "Já o quarto do Henrique reflete um espírito mais musical e viajante: quadros de mapas urbanos, violão na parede e uma cama-sofá em madeira que otimiza o espaço. Ambos compartilham a mesma linguagem de materiais — madeira clara e tons neutros — garantindo harmonia visual.",
            "A marcenaria planejada maximiza o armazenamento sem sacrificar a circulação, e cada detalhe foi pensado em conjunto com os moradores para que os quartos sejam verdadeiros refúgios pessoais.",
        ],
        detalhes: [
            { label: "Área", value: "12 m² + 14 m²" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2024" },
            { label: "Localização", value: "São Paulo, SP" },
        ],
    },
    {
        slug: "area-externa-felipe",
        name: "Área Externa Felipe",
        tipo: "paisagismo",
        ano: "2024",
        local: "Interior de SP",
        cover: "/images/Renders Port/Cliente felipe/Externo/externo.png",
        images: [
            "/images/Renders Port/Cliente felipe/Externo/externo.png",
            "/images/Renders Port/Cliente felipe/Externo/1-enhanced (1).png",
            "/images/Renders Port/Cliente felipe/Externo/3-enhanced (1).png",
            "/images/Renders Port/Cliente felipe/Externo/4-enhanced (2).png",
        ],
        descricaoCurta:
            "Área externa com deck em madeira, fire pit em pedra, pergolado e paisagismo tropical.",
        descricao: [
            "A Área Externa do projeto Felipe é um convite ao convívio ao ar livre. O deck em madeira de demolição abraça um fire pit central em pedra, criando um ponto focal perfeito para noites estreladas.",
            "O pergolado em madeira com iluminação em varal de lâmpadas define a área gourmet, enquanto o paisagismo tropical com costelas-de-adão, palmeiras e espécies nativas traz exuberância e privacidade natural.",
            "O mobiliário em tecidos resistentes — sofá em linho e poltronas em fibra sintética — garante conforto ao ar livre. As árvores frutíferas ao redor completam a experiência sensorial deste espaço pensado para viver.",
        ],
        detalhes: [
            { label: "Área", value: "180 m²" },
            { label: "Tipologia", value: "Paisagismo e área externa" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2024" },
            { label: "Localização", value: "Interior de SP" },
        ],
    },
    {
        slug: "sala-praia",
        name: "Sala Praia",
        tipo: "interiores",
        ano: "2024",
        local: "Litoral de SP",
        cover: "/images/Renders Port/Sala Praia/Sala praia 1.png",
        images: [
            "/images/Renders Port/Sala Praia/Sala praia 1.png",
            "/images/Renders Port/Sala Praia/Sala praia 2.png",
            "/images/Renders Port/Sala Praia/Sala praia 3.png",
            "/images/Renders Port/Sala Praia/Sala praia 4.png",
            "/images/Renders Port/Sala Praia/Sala praia 5.png",
            "/images/Renders Port/Sala Praia/Sala praia 6.png",
        ],
        descricaoCurta:
            "Sala de estar com painel ripado, vista para o mar, mobiliário minimalista e paleta branca.",
        descricao: [
            "A Sala Praia é um projeto que celebra a luz natural e a vista oceânica. O painel ripado branco com iluminação embutida emoldura a TV e funciona como elemento central do living, trazendo textura e elegância sem competir com a paisagem.",
            "O mobiliário minimalista em tons de branco e preto — sofá modular, mesa de centro orgânica e rack suspenso — valoriza a amplitude do espaço. Os trilhos de iluminação no teto permitem criar diferentes cenários de luz.",
            "Cada ângulo do projeto foi pensado para manter a conexão visual com o mar. As cortinas em linho claro e os vasos com plantas naturais completam uma composição que respira leveza e sofisticação praiana.",
        ],
        detalhes: [
            { label: "Área", value: "38 m²" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2024" },
            { label: "Localização", value: "Litoral de SP" },
        ],
    },
    {
        slug: "suite-freijo",
        name: "Suíte Freijó",
        tipo: "interiores",
        ano: "2024",
        local: "São Paulo, SP",
        cover: "/images/Renders Port/Suite Freijó/Suíte Freijó 1.png",
        images: [
            "/images/Renders Port/Suite Freijó/Suíte Freijó 1.png",
            "/images/Renders Port/Suite Freijó/Suíte Freijó 2.png",
        ],
        descricaoCurta:
            "Suíte contemporânea com painel curvo em freijó, cortina de linho e mobiliário minimalista.",
        descricao: [
            "A Suíte Freijó é um convite ao descanso sofisticado. O grande painel curvo em madeira freijó — que acompanha a cabeceira e se estende até o teto — é o protagonista do projeto, trazendo calor e personalidade ao ambiente.",
            "A paleta em tons de bege, areia e madeira natural cria uma atmosfera de serenidade, com a cortina de linho branco filtrando a luz e adicionando camadas de textura. O banco em palhinha no pé da cama é um detalhe de design que une forma e função.",
            "A iluminação embutida no forro e os abajures de mesa em vidro completam a composição, criando um cenário perfeito para relaxar.",
        ],
        detalhes: [
            { label: "Área", value: "25 m²" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2024" },
            { label: "Localização", value: "São Paulo, SP" },
        ],
    },
];

export function getProjetoBySlug(slug: string): ProjetoData | undefined {
    return projetos.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
    return projetos.map((p) => p.slug);
}
