const quiz =  {
  questions: [
    {
        id: 1,
        temps: "MATIN",
        question: "Tu te lèves et pars prendre ta douche. Est-ce que tu te rases les jambes ?",
        answers: [
            {
                id: 1,
                text: "Oui",
                score: null,
                explanation: {
                    text: "Ton rasoir jetable est rose. Comme les produits de soins du corps, il te coûte environ 13% plus cher que le même rasoir noir pour homme de la même marque selon une moyenne issue de l’une des études sorties sur le sujet, citée par le Forum économique mondial sur le marché américain."
                }
            },
            {
                id: 2,
                text: "Non",
                score: null,
                explanation: {
                    text: "Bravo tu résistes à l’injonction faite aux femmes de vivre sans poil et tu économises ton argent et ton temps ! Tu fais partie des 20% de femmes qui ne se sont pas épilé les jambes au cours des 3 derniers mois selon un sondage de l’IFOP de 2021."
                }
            }
        ]
    },
    {
        id: 2,
        temps: "MATIN",
        question: "Tu te regardes dans le miroir, vérifies tes racines blanches et décide de prendre rendez-vous chez le coiffeur pour une teinture et une coupe de cheveux.",
        answers: [
            {
                id: 1,
                text: "Oui",
                score: null,
                explanation: {
                    text: "Selon les relevés de prix de l’INSEE, il t’en coûtera 61,45 € en mai pour cette prestation. Difficile de comparer avec les prix pour homme car cette donnée n’a jamais été suivi pour les hommes en incluant la coloration. Sur le site d’une enseigne de grande distribution, sur 350 produits de coloration de cheveux disponibles en drive, un seul concerne les hommes."
                }
            },
            {
                id: 2,
                text: "Non",
                score: null,
                explanation: {
                    text: "Bravo comme Lio et Sophie Fontanel, tu résistes à l'injonction de couvrir tes cheveux blancs. Par contre, te couper les cheveux te coûtera quand même plus cher. Pour une coupe + brushing en salon une minute coûte 1,17€ pour les femmes et 0.80 € pour les hommes soit +30%. En 2021, l’organisation professionnelle des coiffeurs rapportait un panier moyen de 45, 69€ pour les femmes et 23,86€ pour les hommes."
                }
            }
        ]
    },
    {
        id: 3,
        temps: "MATIN",
        question: "Une fois préparée, tu pars au travail ou en cours ?",
        answers: [
            {
                id: 1,
                text: "Au travail",
                score: null,
                explanation: {
                    text: "Bravo, tu fais partie des 67,9% de femmes en emploi contre 75,6% d’hommes travaillant. Tu travailles probablement dans un métier où la part des femmes est la plus nombreuses. Elles représentent 90% des personnels de service employés par des particuliers et 80% des métiers de la santé humaine et de l’action sociale."
                }
            },
            {
                id: 2,
                text: "En cours",
                score: null,
                explanation: {
                    text: "Ça ne m’étonne pas. 45,6% de femmes font des études supérieures pour 39% d’hommes. Fais-tu partie des 23 % de femmes qui ont réussi à intégrer un DUT production / informatique. Évidemment, la part des étudiantes en science est la plus importante… dans les facs de médecine 65,6%. Pas étonnant lorsqu’on sait que les métiers de la santé humaine sont constitués à 80% de femmes."
                }
            }
        ]
    },
{
        id: 4,
        temps: "MATIN",
        question: "Pour aller au travail / en cours, tu prends le bus ou la voiture ?",
        answers: [
            {
                id: 1,
                text: "En bus",
                score: null,
                explanation: {
                    text: "C’est cool, tu es écolo mais tu cours le risque d’être victime d’agression sexuelles. Tu croiseras probablement un frotteur ou te prendra une main aux fesses. En 2022, le nombre de victimes. Si tu vis à Paris, ton risque est plus grand (4,2 % contre 2 % à subir une agression sexuelle, 3% à subir un exhibitionniste contre 1 %)"						}
            },
            {
                id: 2,
                text: "En voiture",
                score: null,
                explanation: {
                    text: "Tu conduis mieux qu’un homme parce que tu es impliquée dans moins d’accidents mais tu as pourtant 73% de risque en plus d’être blessée qu’un homme en cas de choc frontal parce que les tests automobiles sont uniquement réalisés avec des mannequins de morphologie masculine ! Le premier mannequin fémin a été developpé en 2022"
                }
            }
        ]
    },
{
        id: 5,
        temps: "MIDI",
        question: "Ta matinée a été un peu difficile. Ton cœur palpite ; ton souffle est court et tu sues. Tu t’inquiètes un peu. Prends-tu un doliprane ? ",
        answers: [
            {
                id: 1,
                text: "Oui",
                score: null,
                explanation: {
                    text: "J’espère pour toi qu’il agira sans trop d’effet secondaire. En effet, la plupart des tests cliniques sont passés sur des hommes et aboutissent à des médicaments mal calibrés pour le corps des femmes. Les femmes ne comptent que pour 11% des testeuses dans la recherche contre le Sida. Pour les vaccins elles ne sont que 38%."	
    }
            },
            {
                id: 2,
                text: "Non",
                score: null,
                explanation: {
                    text: "Espérons que ce ne soit pas une crise cardiaque. Une femme sur 3 meurent d’un infarctus en France. 54% des décès par infarctus sont des femmes. Or le sénat notait en 2019 que “sur 300 articles recensés dans un travail de 2015, trois seulement mentionnent une analyse différenciée selon le sexe "
                }
            }
        ]
    },
{
        id: 6,
        temps: "MIDI",
        question: "A la cantine, Jean-Michel – ton manager puisque 60,4 % des managers sont des hommes – te propose du vin en te faisant un clin d'œil et en disant “après tout tu n’es pas enceinte hein ?” ",
        answers: [
            {
                id: 1,
                text: "Tu acceptes",
                score: null,
                explanation: {
                    text: "Bien sûr que tu acceptes, et pourquoi pas. Après tout, comme Jean-Michel, tu as déjà eu tes enfants alors tu fais bien comme tu veux, comme Jean-Mimi. Par contre ton salaire, à cause de tes enfants, lui ne suit pas la même courbe que celui de Jean-Michel et ce jusqu’à la fin de ta carrière. La perte moyenne en salaire mensuel en France pour les mères a été évaluée à -23,5 %"	
    }
            },
            {
                id: 2,
                text: "Tu refuses",
                score: null,
                explanation: {
                    text: "Jean-Michel insiste “Non ? Ah, tu vois, tu es enceinte j’en suis sûr. Je savais que je n’aurais pas dû t’embaucher si c’est pour me claquer en congé mat pour 2 ans et puis partir à 16h tous les jours.” Il extrapole vite mais toi tu sais que tu viens de rejoindre la cohorte des 11,3 % de femmes s’estimant victimes de discrimination au travail (contre 7 % d’hommes), 30 % jugeant ces discriminations sexistes. 3,1 % des saisines auprès du Défenseur des droits sont en lien avec la grossesse. Il s’agit de la troisième cause de discrimination cité par les femmes selon une étude réalisée et citée par la sociologie Elsa Boulet devant le Sénat "
                }
            }
        ]
    },
{
        id: 7,
        temps: "MIDI",
        question: " La remarque de Jean-Michel te reste en travers de la gorge et tu aimerais bien qu’une loi soit votée pour corriger cette inégalité salariale des mères qui s’ajoute à l’inégalité salariale des femmes.",
        answers: [
            {
                id: 1,
                text: "Oui",
                score: null,
                explanation: {
                    text: "Pour une loi spécifique aux mères : manque de bol, la plupart des lois favorisant les avancées sociales (patricapitalisme) sont principalement dûes aux femmes. Or, début juillet 2024 ces dernières ne représentent que 37,3 % de l’Assemblée nationale, 36 % du Sénat et 20% des maires de France. Au gouvernement, la parité est respectée mais aucune femme ne détient de portefeuille d’importance. Sans la loi sur la parité de juin 2000, la place des femmes aurait évolué encore plus lentement."	
    }
            },
            {
                id: 2,
                text: "Non",
                score: null,
                explanation: {
                    text: "Avec 37,3 % de l’Assemblée nationale, 36 % du Sénat et 20% des maires de France, une telle loi n’avait pas beaucoup de chances d’aboutir. Tu décides de te focaliser sur faire appliquer l’égalité salariale entre hommes et femmes déjà, car celle-ci n’existe toujours pas. Les Nations unies ont estimé qu’il faudrait 131 ans pour l’atteindre. Aujourd’hui les hommes gagnent toujours 24 % de plus que les femmes en moyenne. A temps de travail et poste équivalent, cette différence reste de 4 %. Sur une carrière de cadre, il a été estimé que cela constituait un iatus de 400 000 euros, soit une maison."
                }
            }
        ]
    },
{
        id: 8,
        temps: "APRÈS-MIDI",
        question: "Il est 16h ; la bien-mal nommée “heures des mamans” à l’école approche. Tu pars maintenant chercher des enfants à l’école et entame ton temps partiel ou tu restes jusqu’à 18h pour aller faire la cuisine et le ménage ?",
        answers: [
            {
                id: 1,
                text: "À l'école",
                score: null,
                explanation: {
                    text: "Tu peux partir plus tôt car comme 26,9% des femmes, tu travailles à temps partiel contre 7,7% des hommes. Ce taux moyen augmente avec le nombre d’enfant jusqu’à 33,4 % pour les mères de 3 enfants ou plus. Pour les, ce taux est stable quelque soit le nombre d’enfant ; il y a même plus d’hommes travaillant à temps partiel sans enfant (8,5 %) qu’avec enfant(s). Par ailleurs, les femmes sont le plus souvent le parent par défaut pour l’éducation nationale. Si aucune donnée n’existe sur le nombre d’appel passé aux mères plutôt qu’aux pères, on sait que les mères assistent dans 89,7% des cas aux réunions parents/profs dont seule dans 54,5 % des cas."	
    }
            },
            {
                id: 2,
                text: "À la maison",
                score: null,
                explanation: {
                    text: "En arrivant à la maison, ton conjoint t’appelle pour te dire qu’il part à un afterwork pour discuter avec Jean-Claude et ne pas rater la prochaine promotion. Toi aussi tu aurais bien aimé pouvoir avancer tes dossiers pour obtenir une promotion et changer de service afin de devenir manager et ne plus avoir à subir Jean-Michel. Mais bon, la maison ne va pas se nettoyer toute seule alors comme 80 % des femmes (36 % des hommes) tu pars pour une heure de tâches domestiques. En moyenne tu y consacres 3h34 par jour en y ajoutant le soin aux enfants (données INSEE 2010), 1h37 pour les hommes. "
                }
            }
        ]
    },
{
        id: 9,
        temps: "APRÈS-MIDII",
        question: "En arrivant à l’école, la maîtresse te rend un enfant fiévreux qui tousse. Elle te dit qu’il ne pourra revenir à l’école qu’avec un certificat médical attestant du fait qu’il n’est pas contagieux. Qui appelle et va chez le médecin ?",
        answers: [
            {
                id: 1,
                text: "Toi",
                score: null,
                explanation: {
                    text: "C’est toi comme environ 70 % des femmes qui te charge de la santé des enfants. La charge médicale retombe bien souvent sur les mères. (enquête OpinionWay/Qare"	
    }
            },
            {
                id: 2,
                text: "Ton conjoint",
                score: null,
                explanation: {
                    text: "Bravo, tu as de la chance car en règle générale ce sont 70 % des femmes qui portent la charge médicale des enfants. Manque de pot, il t’appelle en plein consultation pour te demander la dernière date de vaccination du petit. Tu réponds excédée que c’est noté dans le carnet de santé que tu lui as donné en partant car il ne savait pas où il était rangé. "
                }
            }
        ]
    },
{
        id: 10,
        temps: "APRÈS-MIDII",
        question: "C’est la goutte de trop. En attendant qu’ils reviennent, tu envisages sérieusement de plier bagage et demander le divorce… ",
        answers: [
            {
                id: 1,
                text: "Tu demandes le divorce",
                score: null,
                explanation: {
                    text: "Et c’est un pari risqué. car les femmes qui divorcent ont deux fois plus de risque de tomber dans la pauvreté que leurs ex-conjoints, et subissent une chute de 18% de leur niveau de vie antérieur à la séparation (contre 8% pour les hommes). La voiture était au nom de ton mec ; la maison est celle de ton conjoint qu’il avait hérité de son père qui lui avait fait une donation de son vivant. Toi tu avais payé les factures d’électricité, les couches et remplis le frigo (Le genre du Capital, Sibylle Gollac, Céline Bessière). Seulement tout ceci ne constitue pas un capital pour repartir d’un bon pied. De plus, 25 % des parents non gardiens ne versent pas de pension alimentaire en moyenne."	
    }
            },
            {
                id: 2,
                text: "Tu restes",
                score: null,
                explanation: {
                    text: "Et tu fais bien car les femmes qui divorcent ont deux fois plus de risques de tomber dans la pauvreté que leurs ex-conjoints, et subissent une chute de 18% de leur niveau de vie antérieur à la séparation (contre 8% pour les hommes). Tu te rappelles ta copine Carole qui est partie et qui a tout perdu. La voiture était au nom de son mec ; la maison était celle qu’il avait hérité de son père qui lui avait fait une donation de son vivant. Carole, elle, avait payé les factures d’électricité, les couches et remplit le frigo. Seulement tout ceci ne constitue pas un capital pour repartir d’un bon pied. De plus, 25 % des parents non gardiens ne versent pas de pension alimentaire en moyenne."
                }
            }
        ]
    },
{
        id: 11,
        temps: "SOIR",
        question: "Fatiguée de cette journée, tu décides d’aller boire un verre avec ta copine Carole. Arrivée au bar, ton plus vieux pote Jean-Jean est là. Carole part plus tôt que toi. A ton tour de partir lors de la fermeture du bar, que fais-tu ? ",
        answers: [
            {
                id: 1,
                text: "Tu pars avec Jean-Jean",
                score: null,
                explanation: {
                    text: "Un peu éméchée, tu lui demandes de t’accompagner aux toilettes. Toi, dans ta tête c’est pour qu’il éloigne les mecs chelou qui y rodent. Une fois arrivé aux toilettes, il force le passage et entre avec toi dans la cabine. Après une grande déclaration d’amour, il t’embrasse de force. Tu dis non, tente de le repousser mais il finit par te violer. Comme dans 82% des cas d’agressions sexuelles, ton agresseur est donc quelqu’un de ton entourage que tu connais et non un inconnu dans un parking sombre. Tu rejoins les 217 000 femmes par ans victimes de viols, tentatives de viol et/ou agressions sexuelles. Tu choisis de ne pas porter plainte car tu sais que 86% des affaires sont classées sans suite. "	
    }
            },
            {
                id: 2,
                text: "Tu pars sans Jean-Jean",
                score: null,
                explanation: {
                    text: "Tu as peur dans la rue pleine de gens éméchés en fin de soirée. Tu serres tes clés dans ta main, prends une allure rapide alors qu’un groupe d’homme te siffle et se met à te suivre. Avec un peu de chance, tu ne seras pas l’une des 14,5 % de femmes victimes d’agression (3,9 % des hommes) mais le harcèlement de rue lui est bien là, toujours difficile à quantifier. 80 % des femmes seraient victimes de harcèlement de rue selon un sondage Ipsos de 2022. "
                }
            }
        ]
    },
{
        id: 12,
        temps: "SOIR",
        question: "Quand tu rentres,",
        answers: [
            {
                id: 1,
                text: "Monsieur dort",
                score: null,
                explanation: {
                    text: "Tu as de la chance ; il ne te frappera pas comme la dernière fois. Il ne te fera pas non plus subir de pression psychologique. Tu échappes pour ce soir à ton sort d’une des 244  000 femmes victimes de violence conjugale. Parmi ces victimes, 66 % sont victimes de violences physiques, 30 % de violences psychologiques et 4 % de violences sexuelles. Ces violences mènent jusqu’à 118 féminicides par an. "	
    }
            },
            {
                id: 2,
                text: "Monsieur est fâché",
                score: null,
                explanation: {
                    text: "Il est jaloux et te dit qu’il est fatigué de faire le baby sitter (de ses propres enfants donc). Il te frappe, comme les 244 000 femmes victimes de violence conjugale. Parmi ces victimes, 66 % sont victimes de violences physiques, 30 % de violences psychologiques et 4 % de violences sexuelles. Ces violences mènent jusqu’à 118 féminicides par an."
                }
            }
        ]
    },
{
        id: 13,
        temps: "SOIR",
        question: "Avant de te coucher, ton téléphone émet une petite sonnerie que tu connais bien. C’est que malgré tous les événements de la journée, il ne faudrait pas non plus oublier de prendre ta pilule. ",
        answers: [
            {
                id: 1,
                text: "Tu prends ta pilule",
                score: null,
                explanation: {
                    text: "En plus de devoir y penser, ta pilule te coûte de 36 à 120€ par an pour 5 à 7 jours de fertilité par mois contre 365 jours de fertilité par an pour les hommes et peu de solutions de contraception. Si tu as de la chance, tu as un bon gynéco qui t’a prescrit une pilule bien adaptée et non une troisième génération sans examen qui ont causé des problèmes médicaux dans les années 2010. Les effets secondaires eux… (revoir la question n°5) sont bien là."	
    }
            },
            {
                id: 2,
                text: "Tu oublies ta pilule",
                score: null,
                explanation: {
                    text: "Heureusement en France, le droit à l’avortement a été inscrit dans la consitution et est ouvert et gratuit jusqu’à 14 semaines. En Europe 2 pays ont officiellement restreint l’accès à l’avortement. Et même lorsque l’avortement est autorisé, l’accès y est parfois empêché. En Italie, 67% des médecins font jouer leur clause de conscience, un dispositif qui existe dans 23 pays, et le gouvernement de Georgia Mélonie a autorisé les groupes anti avortement à intervenir dans les cliniques. "
                }
            }
          ]
      }
  ]
}

export default quiz;

