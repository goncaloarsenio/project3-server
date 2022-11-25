const mongoose = require('mongoose');
const Course = require('../models/Courses.model');
const Article = require('../models/Article.model');
const Partner = require('../models/Partner.model');

const MONGO_URI = 'mongodb://127.0.0.1:27017/project3-server';

const courses = [
  {
    name: 'Ser metódico e organizado',
    type: 'JobTalk',
    company: 'Farfetch',
    img: "",
    description:`"A maioria dos alunos não tem método de estudo e demonstra dificuldade em articular matérias". Foi com base nesta constatação que Florbela Samagaio, docente da Escola Superior de Educação (ESE) Paula Frassinetti, no Porto, decidiu organizar, no dia 14 de maio, uma pequena ação de formação dirigida a estudantes universitários e do Ensino Secundário. O objetivo é que estes aprendam "a ser organizados e se habituem a um estudo sistemático".

    "Normalmente, os estudantes chegam ao Ensino Superior sem terem um método de estudo. O método de estudo é algo que deve enraizar-se, embora para quem não está habituado a ser organizado isso possa demorar algum tempo", explicou ao EDUCARE.PT a docente de Sociologia da Educação Não-Formal e de Metodologia e Técnicas de Investigação. Pela sua experiência no terreno, a docente universitária estima que apenas 20% dos alunos possuam bons métodos de estudo.`,
    duration: "1h",
  },


  {
    name: 'Prepara-te para uma entrevista online ',
    type: 'Webinar',
    company: 'Fullsix',
    img:"",
    description: `O processo de recrutamento e seleção é um grande desafio tanto para o recrutador, quanto para os candidatos. Passar por entrevistas acaba influenciando no comportamento do candidato, assim como realizá-las oferece maior conforto ao . Mas ser O processo de recrutamento e seleção é um grande desafio tanto para o recrutador, quanto para os candidatos. Passar por entrevistas acaba influenciando no comportamento do candidato, assim como realizá-las oferece maior conforto ao recrutador. Mas será que a entrevista online pode ser considerada igual a presencial?

    Mesmo passando por experiências positivas e negativas durante as entrevistas presenciais, o comportamento  e preparação para entrevista online é diferente. Não apenas por estar em um ambiente diferente, mas a distância causa efeitos psicológicos que acabam influenciando no comportamento do candidato.
    
    Entrevista em vídeo ou entrevista gravada, o processo seletivo online é sempre um desafio. Por isso, a preparação correta impacta diretamente no resultado final. No Webinar de hoje, daremos algumas dicas para se ter sucesso nesse processo. a entrevista online pode ser considerada igual a presencial? Mesmo passando por experiências positivas e negativas durante as entrevistas presenciais, o comportamento  e preparação para entrevista online é diferente. Não apenas por estar em um ambiente diferente, mas a distância causa efeitos psicológicos que acabam influenciando no comportamento do candidato.Entrevista em vídeo ou entrevista gravada, o processo seletivo online é sempre um desafio. Por isso, a preparação correta impacta diretamente no resultado final. No Webinar de hoje, daremos algumas dicas para se ter sucesso nesse processo.`,
    duration: '2h',
  },


  {
    name:"Como treinar Soft Skills",
    type:"Workshop",
    company:"StartUp PT",
    img: "",
    description:`Soft skills são as competências que competem a personalidade e comportamento do profissional. Envolvem aptidões mentais, emocionais e sociais. Podemos dizer que são habilidades particulares, pois nascem de acordo com as experiências, cultura, criação e educação de cada pessoa, entre outros fatores. Soft skills são as competências que competem a personalidade e comportamento do profissional. Envolvem aptidões mentais, emocionais e sociais. Podemos dizer que são habilidades particulares, pois nascem de acordo com as experiências, cultura, criação e educação de cada pessoa, entre outros fatores.  

    As soft skills também estão relacionadas à sua forma de se relacionar e interagir com as pessoas e afetam os relacionamentos no ambiente corporativo e, por consequência, a produtividade da equipe. Além de serem difíceis de avaliar e não são adquiridas com capacitação técnica.As soft skills também estão relacionadas à sua forma de se relacionar e interagir com as pessoas e afetam os relacionamentos no ambiente corporativo e, por consequência, a produtividade da equipe. Além de serem difíceis de avaliar e não são adquiridas com capacitação técnica.`,
    duration: "2:30h"
  }
];



const articles =  [
  {
    article: "Carta de apresentação",
    name: "Todos os pontos cruciais para a Carta de Apresentação ideal.",
    intro: "Fazer com que a tua Carta de Apresentação se destaque de todas as outras e com todas as informações essenciais para estar completa.",
    img: "",
    date:"10 de agosto, 2021 ",
    description: `A carta de apresentação tem sido cada vez mais solicitada pelas empresas, uma vez que permite aos contratantes conhecerem melhor as características, habilidades e experiências dos candidatos. O documento deve seguir algumas regras para encantar recrutadores de diversos segmentos. Após a leitura deste artigo, até quem não tem habilidade com escrita saberá como produzir um belo conteúdo. Duvidas? Então, lê o nosso guia, que abordará os principais temas sobre o assunto. O que é uma carta de apresentação?           Por que fazer uma carta de apresentação?                                     Qual é a melhor estrutura para uma carta de apresentação?
    Como fazer uma carta de apresentação?
    Quais são os tipos de carta de apresentação?
    Quais são os melhores modelos de carta de apresentação?
    
    O que é uma carta de apresentação?
    Geralmente, é anexada ao currículo dos candidatos que procuram a tão sonhada vaga de emprego. 
    
    Ela é uma ferramenta para apresentar habilidade aos recrutadores e pode ser desenvolvida em versão online ou impressa. A carta de apresentação é uma ferramenta para promover o teu Marketing pessoal, pois ela pode ser lida por gerentes e profissionais de uma empresa. 
    
    Por isso, uma carta de apresentação não pode ser desenvolvida de qualquer jeito. Ela deve mostrar, por exemplo, os motivos pelos quais queres entrar naquela empresa, quais foram as tuas conquistas e quais são as tuas principais habilidades. 
    
    Neste documento, um erro de português é inaceitável, já que pode prejudicar a tua credibilidade. É fundamental deixar claro que a carta de apresentação não exclui a necessidade do currículo. Os dois documentos são complementares. 
    
    O envio da carta de apresentação e do currículo mostra aos recrutadores que és uma pessoa preocupada com a tua carreira, é organizado e atento em relação à qualidade dos materiais. Acredite! O desenvolvimento desse documento é mais fácil do que responder às perguntas de entrevista de emprego. 
    
    Por que fazer uma carta de apresentação? 
    Existem diversos motivos pelos quais deves fazer uma carta de apresentação em um processo seletivo. Ela é tão importante como procurar o emprego ideal. 
    
    Esse documento tem a possibilidade de mostrar aos recrutadores experiências que não são possíveis de abordar com mais clareza em um currículo. 
    
    Outro ponto positivo é que ela permite incluir motivos pelos quais estás interessado em entrar na empresa. Isso é muito importante, especialmente quando esquecemos alguma questão durante a entrevista de emprego. 
    
    A carta de apresentação também melhora a tua credibilidade junto à empresa. O recrutador percebe que tiveste um carinho especial com o trabalho, já que escreveu um documento personalizado de acordo com aquela vaga. 
    
    A carta de apresentação tem um poder incrível e pode ser determinante para que um recrutador escolha o teu perfil em um processo seletivo. Ela pode ajudar-te a encontrar o emprego ideal no Marketing Digital. 
    
    Qual é a melhor estrutura para uma carta de apresentação?
    A carta de apresentação tem uma estrutura de texto que é considerada a melhor opção para os recrutadores. É muito importante seguir essas recomendações, pois ninguém tem tempo de ler um conteúdo com mais de 20 páginas, seja em um time de vendas, ou em qualquer área. 
    
    É importante destacar que deve seguir apenas a estrutura do texto. A melhor carta de apresentação é aquela que tem um conteúdo personalizado e que foi desenvolvido para a vaga divulgada. 
    
    Portanto, esqueça aqueles textos geniais da internet. Eles devem servir apenas como inspiração. Deves usar a sua criatividade para atrair os recrutadores e conseguir a vaga desejada. Em um primeiro momento, a tarefa pode parecer complicada, mas aos poucos perceberá que é mais fácil do que parece. 
    
    A carta de apresentação lembra bastante as redações que fazíamos no período da escola. Nelas, era necessário seguir a lógica de introdução, desenvolvimento e conclusão. Aqui, a situação não é diferente. 
    
    Como fazer uma carta de apresentação?
    Agora que já sabes o que é uma carta de apresentação, por que ela é importante e qual é a sua estrutura, que tal aprender a criar esse documento? Vê abaixo algumas dicas
    
    Pesquisa sobre a empresa 
    Deves demostrar que pesquisaste bastante sobre a organização/empresa. No texto, coloca detalhes referentes ao posicionamento, missões e valores. Se tiveres mais dados sobre a tua área também ganharás mais pontos em relação aos outros candidatos. Porém, incluiu apenas os dados que fizerem sentido ao contexto. 
    
    Evita colocar pontos negativos 
    Outra dica interessante é que não deves adicionar pontos negativos sobre o teu perfil. Se não sabes utilizar um software ou não tens conhecimento em um idioma, por exemplo, evite incluir isso no texto. 
    
    Deves lembrar-te que a carta de apresentação é marketing pessoal. Portanto, os pontos negativos podem prejudicar a tua credibilidade. 
    
    Inclui habilidades 
    Deves adicionar quais são as tuas habilidades e como elas podem ajudar na evolução do negócio. Se tens ótimas experiências no cargo, mostre como esses desafios ajudaram a fortalecer o seu papel como profissional. 
    
    Sê claro 
    Já destacamos que o texto deve prender a atenção do leitor. Por isso, se a vaga pede cinco anos de experiência e o conhecimento em uma determinada ferramenta, deixe isso claro na introdução. 
    
    O teu objetivo é fazer um texto de fácil leitura. Então, se preferires, coloca as suas habilidades de forma escaneável para os leitores. Caso não tenhas boas experiências de trabalho, destaque os projetos que desenvolveste em período escolar. 
    
    Usa a cultura da empresa ao teu favor 
    Sem dúvidas, esse é uma das dicas mais importantes para a carta de apresentação. Se queres chamar a atenção dos recrutadores, provura contextualizar o teu texto de acordo com a cultura da organização.
    
    Quais são os melhores templates de carta de apresentação? 
    Cada carta de apresentação é única, porém, veja algumas ideias para te inspirar na produção do teu documento.`
    
  }
]

const partners = [
  {
    img:'',
    description: '',
  }
]


async function seeds() {
  try {
    const x = await mongoose.connect(MONGO_URI);
    console.log(`Connected to: ${x.connections[0].name}`);

    const createdCourse = await Course.create(courses);
    const createdArticle = await Article.create(articles)
    const createdPartners = await Partner.create(partners)

    console.log(`Successfuly created ${created.length}`);

    x.disconnect();
  } catch (error) {
    console.log(error);
  }

}

seeds();
