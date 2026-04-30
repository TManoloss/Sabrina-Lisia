export interface ProjetoData {
    slug: string;
    name: string;
    tipo: string;
    ano: string;
    local: string;
    cover: string;
    images: string[];
    imagesAntes?: string[];
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
        ano: "2025",
        local: "",
        cover: "/images/Renders Port/Banheiro/banheiro 1.png",
        images: [
            "/images/Renders Port/Banheiro/banheiro 1.png",
            "/images/Renders Port/Banheiro/Banheiro 2.png",
        ],
        descricaoCurta:
            "Banheiro spa com banheira freestanding, revestimento ripado em madeira e vista panorâmica para o mar.",
        descricao: [
            "Eu fiz um curso de render para poder aperfeiçoar a minha renderização e hoje faço parte da comunidade Render Class, da arquiteta Letícia de Paula. Neste projeto, a modelagem é provinda do curso, mas o render é totalmente autoral.",
            "O processo foi detalhado: comecei fazendo um pré-render, seguido pela iluminação e depois pela configuração dos materiais. Fui ajustando cada detalhe até chegar a essa imagem final.",
            "Meu objetivo foi unir funcionalidade e estética, transformando este banheiro em um verdadeiro spa privativo com uma vista deslumbrante.",
        ],
        detalhes: [
            { label: "Projeto", value: "Nao autoral" },
            { label: "Render", value: "Autoral" },
            { label: "Curso", value: "Render Class - Letícia de Paula" },
            { label: "Software", value: "Sketchup + V-Ray" },
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
            "Este projeto foi desenvolvido durante o meu aperfeiçoamento na comunidade Render Class, da arquiteta Letícia de Paula. Assim como no restante do meu portfólio de renders, a modelagem foi fornecida pelo curso, mas toda a renderização é de minha autoria.",
            "Iniciei o processo com um pré-render para estudo de volumes, seguido pela iluminação cênica que destaca o grande painel curvo em madeira freijó. A configuração dos materiais, como o linho da cortina e a palhinha do banco, foi essencial para atingir o realismo desejado.",
            "Busquei criar um cenário de descanso sofisticado, onde a luz suave e as texturas naturais convidam ao relaxamento, resultando em uma imagem que equilibra técnica e sensibilidade estética.",
        ],
        detalhes: [
            { label: "Projeto", value: "Nao autoral" },
            { label: "Render", value: "Autoral" },
            { label: "Curso", value: "Render Class - Letícia de Paula" },
            { label: "Software", value: "Sketchup + V-Ray" },
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
            "A Sala Praia é mais um dos projetos que desenvolvi através da comunidade Render Class. Utilizei a modelagem base do curso para focar no aprimoramento da minha técnica de renderização autoral, buscando o máximo de fidelidade visual.",
            "O desenvolvimento envolveu o estudo da iluminação natural abundante e a configuração de materiais reflexivos e foscos. O painel ripado branco e o mobiliário minimalista foram os pontos focais para o ajuste fino do pré-render até a imagem final.",
            "Minha intenção foi capturar a atmosfera leve e sofisticada de um living litorâneo, onde a vista para o mar é potencializada pela clareza dos tons brancos e pela qualidade da luz capturada no render.",
        ],
        detalhes: [
            { label: "Projeto", value: "Nao autoral" },
            { label: "Render", value: "Autoral" },
            { label: "Curso", value: "Render Class - Letícia de Paula" },
            { label: "Software", value: "Sketchup + V-Ray" },
        ],
    },
    {
        slug: "area-gourmet-jeanine",
        name: "Área Gourmet Jeanine",
        tipo: "interiores",
        ano: "2025",
        local: "Curitiba, PR",
        cover: "/images/Renders Port/Cliente Jeanine/Area G/1.jpg.jpeg",
        images: [

            "/images/Renders Port/Cliente Jeanine/Area G/1.jpg.jpeg",
            "/images/Renders Port/Cliente Jeanine/Area G/2.jpg.jpeg",
            "/images/Renders Port/Cliente Jeanine/Area G/3.jpg.jpeg",
            "/images/Renders Port/Cliente Jeanine/Area G/4.jpg.jpeg",
        ],
        descricaoCurta:
            "Área gourmet com cozinha integrada, bancada com ilha, marcenaria verde e vigas de madeira.",
        descricao: [
            "Projetei a Área Gourmet Jeanine como um espaço dedicado a receber com elegância e conforto. Escolhi uma marcenaria em verde musgo com detalhes em madeira natural, que dialoga com a cristaleira e o armário de estilo industrial, resultando em uma composição rica em texturas.",
            "Defini a ilha central com banquetas de madeira e couro como o ponto de encontro do ambiente, ideal para momentos de preparo e confraternização. No teto, as vigas de madeira trazem rusticidade e charme, enquanto a iluminação com pendentes industriais confere personalidade ao conjunto.",
            "Finalizei o espaço com uma mesa de jantar em madeira de demolição e cadeiras em tecido verde, integrando a cozinha e o estar de maneira fluida, natural e acolhedora.",
        ],
        detalhes: [
            { label: "Projeto", value: "Em conjunto com o Arquiteto Murilo Rehder" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2025" },
            { label: "Localização", value: "Curitiba, PR" },
        ],
    },
    {
        slug: "cozinha-jeanine",
        name: "Cozinha Jeanine",
        tipo: "interiores",
        ano: "2025",
        local: "Curitiba, PR",
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
            "Cozinha integrada com acabamento em laca branca, metais em dourado fosco e foco na funcionalidade sofisticada.",
        descricao: [
            "Projetei esta cozinha com o objetivo de unir funcionalidade e estética, criando um espaço integrado que atenda às necessidades do dia a dia sem perder o charme e a elegância.",
            "A escolha da pintura em laca branca confere uma base atemporal ao ambiente, enquanto os metais de linhas retas em tom dourado fosco trazem um toque de sofisticação contemporânea.",
            "Busquei equilibrar a clareza visual da marcenaria com a praticidade indispensável de uma cozinha planejada, resultando em um espaço leve, funcional e visualmente deslumbrante.",
        ],
        detalhes: [
            { label: "Projeto", value: "Em conjunto com o Arquiteto Murilo Rehder" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2025" },
            { label: "Localização", value: "Curitiba, PR" },
        ],
    },
    {
        slug: "sala-estar-jeanine",
        name: "Sala de Estar Jeanine",
        tipo: "interiores",
        ano: "2025",
        local: "Curitiba, PR",
        cover: "/images/Renders Port/Cliente Jeanine/Sala/03.png",
        images: [
            "/images/Renders Port/Cliente Jeanine/Sala/03.png",

            "/images/Renders Port/Cliente Jeanine/Sala/WhatsApp Image 2026-04-29 at 20.52.08.jpeg",
            "/images/Renders Port/Cliente Jeanine/Sala/WhatsApp Image 2026-04-29 at 20.51.31.jpeg"
        ],
        descricaoCurta:
            "Sala de estar clássica com piano de cauda, estante built-in, lareira e sofá modular em linho.",
        descricao: [
            "A Sala Jeanine é um espaço que une sofisticação clássica e conforto contemporâneo. O piano de cauda posicionado junto à parede de tijolos aparentes é o protagonista do ambiente, criando um ponto focal elegante e cultural.",
            "A estante built-in com portas em vidro abriga a biblioteca da família, enquanto a lareira embutida no móvel de TV aquece o ambiente nos dias frios. O sofá modular em linho claro com almofadas em tons terrosos convida ao descanso.",
            "As vigas de madeira no teto e o piso em madeira de demolição trazem rusticidade equilibrada, dialogando com os tecidos nobres e o mobiliário de design. O resultado é um living que acolhe, inspira e celebra a vida em família.",
        ],
        detalhes: [
            { label: "Projeto", value: "Em conjunto com o Arquiteto Murilo Rehder" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2025" },
            { label: "Localização", value: "Curitiba, PR" },
        ],
    },
    {
        slug: "sala-jantar-jeanine",
        name: "Sala de Jantar Jeanine",
        tipo: "interiores",
        ano: "2025",
        local: "Curitiba, PR",
        cover: "/images/Renders Port/Cliente Jeanine/Sala/04.png",
        images: [

            "/images/Renders Port/Cliente Jeanine/Sala/04.png",
            "/images/Renders Port/Cliente Jeanine/Sala/05.png",
            "/images/Renders Port/Cliente Jeanine/Sala/WhatsApp Image 2026-04-29 at 20.59.20.jpeg",

        ],
        descricaoCurta:
            "Sala de jantar atemporal e totalmente integrada, com harmonia de materiais naturais e continuidade visual entre ambientes.",
        descricao: [
            "Estabeleci como premissa para esta sala de jantar a integração total com outros três ambientes: a sala de estar, a cozinha e a área gourmet. O objetivo foi criar uma transição fluida e contínua entre as diferentes dinâmicas da casa.",
            "Para alcançar esse resultado, optei por mesclar os materiais presentes nos cômodos adjacentes. Utilizei lâminas de madeira nas vigas e selecionei uma mesa em madeira maciça, que harmonizam com as cadeiras de estilo clássico em tons neutros.",
            "Para unificar visualmente esses materiais análogos e reforçar a sensação de unidade, apliquei o mesmo piso em todos os ambientes integrados. O resultado é uma sala de jantar atemporal, onde a continuidade estética potencializa a amplitude e o convívio.",
        ],
        detalhes: [
            { label: "Projeto", value: "Em conjunto com o Arquiteto Murilo Rehder" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2025" },
            { label: "Localização", value: "Curitiba, PR" },
        ],
    },
    {
        slug: "escritorio-jeanine",
        name: "Escritório Jeanine",
        tipo: "interiores",
        ano: "2025",
        local: "Curitiba, PR",
        cover: "/images/Renders Port/Cliente Jeanine/escritorio/01.jpeg",
        images: [

            "/images/Renders Port/Cliente Jeanine/escritorio/01.jpeg",
            "/images/Renders Port/Cliente Jeanine/escritorio/02.jpeg",
            "/images/Renders Port/Cliente Jeanine/escritorio/03.jpeg",

        ],
        descricaoCurta:
            "Projeto de escritório com duas versões de acabamento, explorando estéticas que variam do industrial maximalista ao rústico contemporâneo.",
        descricao: [
            "Para este escritório, desenvolvi duas versões de projeto onde a personalização reside nos detalhes. Na primeira proposta, busquei uma estética com toques maximalistas e industriais, utilizando paredes em tijolo de demolição, escada em metal preto fosco e um forro com sancas escalonadas para conferir profundidade e personalidade ao espaço.",
            "A segunda versão apresenta uma abordagem mais contemporânea e rústica. Aqui, optei por um forro liso e paredes neutras, substituindo a escada metálica por uma em madeira e utilizando uma escrivaninha de traços mais robustos. A iluminação também foi reconfigurada, com arandelas aplicadas diretamente no roda teto da estante.",
            "Acredito que os detalhes são fundamentais para refletir tanto as necessidades funcionais quanto o apelo estético desejado pelos clientes. Ambas as versões exploram como a escolha de materiais e acabamentos pode transformar completamente a atmosfera de um mesmo ambiente de trabalho.",
        ],
        detalhes: [
            { label: "Projeto", value: "Em conjunto com o Arquiteto Murilo Rehder" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2025" },
            { label: "Localização", value: "Curitiba, PR" },
        ],
    },
    {
        slug: "lavanderia-jeanine",
        name: "Lavanderia Jeanine",
        tipo: "interiores",
        ano: "2025",
        local: "Curitiba, PR",
        cover: "/images/Renders Port/Cliente Jeanine/lavanderia/04.jpeg",
        images: [

            "/images/Renders Port/Cliente Jeanine/lavanderia/01.jpeg",
            "/images/Renders Port/Cliente Jeanine/lavanderia/02.jpeg",
            "/images/Renders Port/Cliente Jeanine/lavanderia/03.jpeg",
            "/images/Renders Port/Cliente Jeanine/lavanderia/04.jpeg",


        ],
        descricaoCurta:
            "Lavanderia funcional e sofisticada com marcenaria colorida, piso em ladrilho hidráulico e revestimento em clap board.",
        descricao: [
            "O projeto para esta lavanderia buscou transcender a mera funcionalidade, um desafio instigante para ambientes puramente técnicos. A diretriz da cliente era clara: criar um espaço altamente funcional, mas que estivesse plenamente integrado à estética sofisticada e acolhedora do restante da residência.",
            "Atendendo a esse pedido, explorei a versatilidade que os espaços de serviço podem oferecer quando tratados com olhar de design. A composição une um piso em ladrilho hidráulico a uma marcenaria colorida e detalhada, trazendo personalidade ao ambiente.",
            "O uso de arandelas e o revestimento em clap board nas paredes conferem ao cômodo uma atmosfera charmosa e convidativa. O resultado é um espaço que equilibra perfeitamente a eficiência operacional indispensável com um apelo estético diferenciado.",
        ],
        detalhes: [
            { label: "Projeto", value: "Em conjunto com o Arquiteto Murilo Rehder" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2025" },
            { label: "Localização", value: "Curitiba, PR" },
        ],
    },
    {
        slug: "suite-anna-paula",
        name: "Suíte Anna Paula",
        tipo: "interiores",
        ano: "2025",
        local: "Curitiba, PR",
        cover: "/images/Renders Port/Cliente Anna Paula/Suite/antes e depois/depois1.PNG",
        images: [
            "/images/Renders Port/Cliente Anna Paula/Suite/antes e depois/depois1.PNG",
            "/images/Renders Port/Cliente Anna Paula/Suite/antes e depois/depois2.PNG",
            "/images/Renders Port/Cliente Anna Paula/Suite/antes e depois/depois3.PNG",
            "/images/Renders Port/Cliente Anna Paula/Suite/4-enhanced.png",
            "/images/Renders Port/Cliente Anna Paula/Suite/5-enhanced.png",
            "/images/Renders Port/Cliente Anna Paula/Suite/6-enhanced.png",
            "/images/Renders Port/Cliente Anna Paula/Suite/7-enhanced.png",
            "/images/Renders Port/Cliente Anna Paula/Suite/8-enhanced.png",
            "/images/Renders Port/Cliente Anna Paula/Suite/enhanced_1 (1).png",
        ],
        imagesAntes: [
            "/images/Renders Port/Cliente Anna Paula/Suite/antes e depois/antes1.PNG",
            "/images/Renders Port/Cliente Anna Paula/Suite/antes e depois/antes2.PNG",
            "/images/Renders Port/Cliente Anna Paula/Suite/antes e depois/antes3.PNG",
        ],
        descricaoCurta:
            "Suíte com estética praiana sofisticada, marcenaria em painéis frisados e paleta de cores relaxante.",
        descricao: [
            "Desenvolvi este projeto com foco total no conforto e na atemporalidade, buscando um equilíbrio entre o charme clássico e uma sutil estética praiana, atendendo à diretriz solicitada pela cliente.",
            "A marcenaria em tom branco com painéis frisados abraça a dinâmica do bem-estar, complementada pelo uso da madeira natural que reforça a sensação de acolhimento. A seleção de materiais inclui elementos táteis como o tapete em corda náutica, a cabeceira em palha e a base da cama em linho.",
            "A paleta cromática foi pensada para surpreender: optei por um tom de verde neutro aplicado em todo o teto, mantendo as paredes envolventes em tons sóbrios para criar uma atmosfera relaxante, equilibrada e sofisticada.",
        ],
        detalhes: [
            { label: "Projeto", value: "Em conjunto com o Arquiteto Murilo Rehder" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2025" },
            { label: "Localização", value: "Curitiba, PR" },
        ],
    },
    {
        slug: "suite-vanessa",
        name: "Suíte Vanessa",
        tipo: "interiores",
        ano: "2025",
        local: "Curitiba, PR",
        cover: "/images/Renders Port/Cliente Vanessa/Suite/enhanced_6 (1).png",
        images: [
            "/images/Renders Port/Cliente Vanessa/Suite/enhanced_10.png",
            "/images/Renders Port/Cliente Vanessa/Suite/enhanced_6 (1).png",
            "/images/Renders Port/Cliente Vanessa/Suite/enhanced_7.png",
            "/images/Renders Port/Cliente Vanessa/Suite/enhanced_8 (2).png",
            "/images/Renders Port/Cliente Vanessa/Suite/enhanced_9 (3).png",
        ],
        descricaoCurta:
            "Suíte com estética minimalista, inspirada no design japonês, com marcenaria em freijó e iluminação cênica.",
        descricao: [
            "A Suíte Vanessa foi concebida como um exercício de minimalismo acolhedor, onde a simplicidade das formas dialoga com a riqueza das texturas. Projetei o ambiente utilizando uma paleta baseada em tons de branco e bege, complementada pela presença calorosa da madeira freijó, buscando criar uma atmosfera de serenidade e equilíbrio.",
            "Um dos destaques técnicos são os armários com portas inspiradas nos painéis *shoji* japoneses. Ao utilizar uma estrutura de madeira com fechamento em tecido, consegui conferir leveza visual ao mobiliário e uma filtragem de luz suave. A penteadeira, com seu nicho em arco, traz um elemento orgânico e delicado que suaviza as linhas retas do projeto.",
            "A iluminação foi pensada para valorizar a arquitetura e os materiais: a cabeceira em madeira recebe luz lateral indireta, realçando os veios naturais da peça. A escolha da roupa de cama em tons terrosos e os detalhes em verde musgo finalizam a composição, reforçando a premissa de um refúgio que respira sofisticação e calma.",
        ],
        detalhes: [
            { label: "Projeto", value: "Em conjunto com o Arquiteto Murilo Rehder" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2025" },
            { label: "Localização", value: "Curitiba, PR" },
        ],
    },
    {
        slug: "quartos-bernardo-henrique",
        name: "Quartos Bernardo & Henrique",
        tipo: "interiores",
        ano: "2025",
        local: "Curitiba, PR",
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
            "Quartos multifuncionais com marcenaria planejada, áreas de estudo e música, e uso estratégico de cores para ampliação visual.",
        descricao: [
            "A premissa deste projeto foi criar um ambiente que atendesse às necessidades imediatas dos moradores, sem comprometer a identidade e a versatilidade do espaço ao longo do tempo. A composição utiliza cores sóbrias em harmonia com tons amadeirados, resultando em uma atmosfera que equilibra conforto e sofisticação.",
            "O quarto foi planejado como um espaço multifuncional, abrigando tanto uma área dedicada aos estudos quanto um nicho para a prática musical. A escolha por uma bicama amplia a funcionalidade do cômodo, permitindo o acolhimento de hóspedes de maneira prática e organizada, sem sacrificar a circulação no dia a dia.",
            "O diferencial técnico deste projeto foi a aplicação estratégica de cores para criar uma ilusão de ótica, ampliando a percepção de profundidade e transformando a volumetria do espaço. Cada detalhe foi pensado para que a funcionalidade e o apelo estético caminhassem juntos em um design atemporal.",
        ],
        detalhes: [
            { label: "Projeto", value: "Em conjunto com a Arquiteta Ana Lúcia" },
            { label: "Tipologia", value: "Design de interiores" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2025" },
            { label: "Localização", value: "Curitiba, PR" },
        ],
    },
    {
        slug: "area-externa-felipe",
        name: "Área Externa Felipe",
        tipo: "paisagismo",
        ano: "2025",
        local: "Curitiba, PR",
        cover: "/images/Renders Port/Cliente felipe/Externo/externo.png",
        images: [
            "/images/Renders Port/Cliente felipe/Externo/externo.png",
            "/images/Renders Port/Cliente felipe/Externo/1-enhanced (1).png",
            "/images/Renders Port/Cliente felipe/Externo/3-enhanced (1).png",
            "/images/Renders Port/Cliente felipe/Externo/4-enhanced (2).png",
        ],
        descricaoCurta:
            "Revitalização de área externa com deck nivelado, fire pit, jacuzzi sob pérgola e paisagismo com árvores frutíferas.",
        descricao: [
            "Neste projeto de área externa, a premissa foi a revitalização da lateral da residência, um espaço que anteriormente servia apenas como passagem e possuía um declive acentuado. Para otimizar o uso do terreno, projetei um deck totalmente nivelado, criando uma nova e ampla área de convívio integrada à casa.",
            "A composição inclui um ponto de lareira externa (fire pit) em uma base de pedra, garantindo segurança e conforto térmico para o uso nas noites mais frias. Além disso, desenvolvi um refúgio mais reservado sob uma pérgola, que abriga uma jacuzzi, oferecendo aos clientes uma experiência de relaxamento e multifuncionalidade em um espaço antes subutilizado.",
            "O toque final fica por conta da seleção de movelaria solta e da inserção de árvores frutíferas, que trazem vida e uma dimensão sensorial ao ambiente. O resultado é um espaço simples e atemporal que agora possibilita maior interação entre os moradores e celebra o convívio ao ar livre.",
        ],
        detalhes: [
            { label: "Projeto", value: "Em conjunto com o Arquiteto Murilo Rehder" },
            { label: "Tipologia", value: "Paisagismo e área externa" },
            { label: "Status", value: "Concluído" },
            { label: "Ano", value: "2025" },
            { label: "Localização", value: "Curitiba, PR" },
        ],
    },


];

export function getProjetoBySlug(slug: string): ProjetoData | undefined {
    return projetos.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
    return projetos.map((p) => p.slug);
}
