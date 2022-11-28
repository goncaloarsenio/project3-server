const mongoose = require('mongoose');
const Course = require('../models/Courses.model');
const Article = require('../models/Article.model');
const Partner = require('../models/Partner.model');

const MONGO_URI = 'mongodb://127.0.0.1:27017/project3-server';

const courses = [
  {
    name: 'Ser metódico e organizado',
    type: 'Jobtalk',
    description: "A maioria dos alunos não tem método de estudo e demonstra dificuldade em articular matérias. Foi com base nesta constatação que Florbela Samagaio, docente da Escola Superior de Educação (ESE) Paula Frassinetti, no Porto, decidiu organizar, no dia 14 de maio, uma pequena ação de formação dirigida a estudantes universitários e do Ensino Secundário. O objetivo é que estes aprendam a ser organizados e se habituem a um estudo sistemático. Normalmente, os estudantes chegam ao Ensino Superior sem terem um método de estudo. O método de estudo é algo que deve enraizar-se, embora para quem não está habituado a ser organizado isso possa demorar algum tempo, explicou ao EDUCARE.PT a docente de Sociologia da Educação Não-Formal e de Metodologia e Técnicas de Investigação. Pela sua experiência no terreno, a docente universitária estima que apenas 20% dos alunos possuam bons métodos de estudo.",
    duration: "08:00 - 10:00",
    company: "Farfetch",
    topics: "Curriculo / Portefólio",
    person: "Ruben Fernandes",
    occupation: "UX Designer"
  },
  {
    name: 'Prepara-te para uma entrevista online',
    type: 'Webinar',
    description: "O processo de recrutamento e seleção é um grande desafio tanto para o recrutador, quanto para os candidatos. Passar por entrevistas acaba influenciando no comportamento do candidato, assim como realizá-las oferece maior conforto ao recrutador. Mas será que a entrevista online pode ser considerada igual a presencial? Mesmo passando por experiências positivas e negativas durante as entrevistas presenciais, o comportamento  e preparação para entrevista online é diferente. Não apenas por estar em um ambiente diferente, mas a distância causa efeitos psicológicos que acabam influenciando no comportamento do candidato. Entrevista em vídeo ou entrevista gravada, o processo seletivo online é sempre um desafio. Por isso, a preparação correta impacta diretamente no resultado final. No Webinar de hoje, daremos algumas dicas para se ter sucesso nesse processo.",
    duration: "11:00 - 12:00",
    company: "Fullsix",
    topics: "Entrevista",
    person: "Lourenço Pereira",
    occupation: "Recursos Humanos"
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

const partners = [
  {
    description: "Streaming",
    img: "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
  },
  {
    description: "Uma das empresas mais avançadas em UX",
    img: "https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png"
  },
  {
    description: "Tecnologia",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png"
  },
  {
    description: "Video-Conferência",
    img: "https://logos-world.net/wp-content/uploads/2021/03/Zoom-Logo.png"
  },
  {
    description: "Uma das universidades mais reconhecidas em Design",
    img: "https://info.iade.pt/hs-fs/hubfs/Logo_IADE-01-1.png?width=6525&name=Logo_IADE-01-1.png"
  },
  {
    description: "Uma das empresas mais avançadas em UX",
    img: "https://www.escs.ipl.pt/sites/default/files/ESCS-Logo.png"
  },
  {
    description: "Uma das empresas mais avançadas em UX",
    img: "https://www.ceied.ulusofona.pt/wp-content/uploads/sites/75/2022/03/ulht.jpg"
  },
  {
    description: "Um dos melhores bootcamps no mundo",
    img: "https://www.datocms-assets.com/14946/1661408107-logo-ironhack-blue.png?auto=format&fit=max&w=1200"
  },
  {
    description: "Tecnologia",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    description: "Tecnologia",
    img: "https://w7.pngwing.com/pngs/274/336/png-transparent-logo-samsung-electronics-business-television-samsung-television-blue-text.png"
  },
  {
    description: "Tecnologia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png"
  },
  {
    description: "Software",
    img: "https://cdn-icons-png.flaticon.com/512/61/61120.png"
  }
]









async function seeds() {
  try {
    const x = await mongoose.connect(MONGO_URI);
    console.log(`Connected to: ${x.connections[0].name}`);

    const created = await Course.create(courses);

    console.log(`Successfuly created ${createdCourse.length}`);

    x.disconnect();
  } catch (error) {
    console.log(error);
  }

}

seeds();
