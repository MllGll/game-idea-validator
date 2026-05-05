import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			title: "Game Idea Validator for Market Potential",
			developedBy: "Game Idea Validator for Market Potential | Developed by",
			home: {
				subtitle:
					"Answer the form and find out how much profit potential your idea may have.",
				start: "Start",
				restart: "Restart",
				understandCalculation: "Understand how the calculation works",
			},
			startModal: {
				title: "Name your project",
				continue: "Continue",
			},
			form: {
				examplePrefix: "Example:",
				yes: "Yes",
				no: "No",
				back: "Back",
				next: "Next",
				calculate: "Calculate",
				feedback: {
					high: "High profit potential",
					good: "Good profit potential",
					moderate: "Moderate potential",
					low: "Low profit potential",
					veryLow: "Very low potential",
				},
				steps: {
					0: {
						question: "Is the product internationally known?",
						example:
							"Suppose your product is related to samurai—their story has worldwide reach.",
					},
					1: {
						question:
							"Has the product been trending in recent years in other media?",
						example:
							'In 2024 the series "Shōgun: The Glorious Saga of Japan" premiered.',
					},
					2: {
						question:
							"Has the product's theme or genre been trending in recent years?",
						example: "The historical warfare theme is almost always trending.",
					},
					3: {
						question:
							"Is there a recently released game focused on the product? (Last 5 years)",
						example:
							'When we think of samurai, we immediately think of "Ghost of Tsushima."',
					},
					4: {
						question:
							"Did it reach a large audience or receive positive feedback?",
						example: "It was extremely acclaimed by critics and players.",
					},
					5: {
						question: "Is there demand for a game about the product?",
						example: "Although demand is regularly met, it is still growing.",
					},
					6: {
						question: "Is the product's target audience in other media large?",
						example:
							"Interest in Japanese history and culture is quite significant in the West.",
					},
					7: {
						question:
							"Is the target audience for a game about the product large?",
						example:
							"It spans a wide age range with shared interest in fighting, action, and adventure games.",
					},
				},
			},
			result: {
				summary:
					'The product "{{name}}" scored {{result}} out of 20 possible points',
				disclaimer:
					'ⓘ Do not treat this result as a guarantee of failure or success for your project. The form rules reflect what we consider most relevant in the market—you can review the details by clicking "Understand how the calculation works".',
			},
			info: {
				title: "Understand how the calculation works",
				back: "Back",
				intro:
					"Each question focuses on different aspects of the product; this scoring system helps measure market value and success potential. Factors such as popularity, relevance, and audience interest were taken into account.",
				chip0: "If yes, <bold>+5 points</bold>",
				chip1: "If yes, <bold>+3 points</bold>",
				chip2: "If yes, <bold>+2 points</bold>",
				chip3: "If no, <bold>+3 points</bold>",
				chip4: "If no, <bold>+1 point</bold>",
				chip5: "If yes, <bold>+3 points</bold>",
				chip6: "If yes, <bold>+1 point</bold>",
				chip7: "If yes, <bold>+3 points</bold>",
				suggestions:
					"If you have suggestions for changes or improvements, email <bold>marcellogallante@gmail.com</bold>",
			},
			lang: {
				pt: "Portuguese",
				en: "English",
			},
		},
	},
	pt: {
		translation: {
			title: "Validador de Ideias de Jogos Lucrativos",
			developedBy: "Validador de Ideias de Jogos Lucrativos | Desenvolvido por",
			home: {
				subtitle:
					"Responda ao formulário e descubra o quanto sua ideia pode ter potencial de lucro.",
				start: "Iniciar",
				restart: "Reiniciar",
				understandCalculation: "Entenda como é feito o cálculo",
			},
			startModal: {
				title: "Nomeie o seu projeto",
				continue: "Continuar",
			},
			form: {
				examplePrefix: "Exemplo:",
				yes: "Sim",
				no: "Não",
				back: "Voltar",
				next: "Próximo",
				calculate: "Calcular",
				feedback: {
					high: "Alto potencial de lucro",
					good: "Bom potencial de lucro",
					moderate: "Potencial moderado",
					low: "Baixo potencial de lucro",
					veryLow: "Potencial muito baixo",
				},
				steps: {
					0: {
						question: "O produto é conhecido internacionalmente?",
						example:
							"Vamos supor que o seu produto está relacionado a Samurais, a história deles tem uma abrangência mundial.",
					},
					1: {
						question:
							"O produto esteve em alta nos últimos anos em outras mídias?",
						example:
							'Em 2024 estreiou a série "Xógum: A Gloriosa Saga do Japão".',
					},
					2: {
						question:
							"O tema/gênero do produto esteve em alta nos últimos anos?",
						example: "A temática guerras históricas quase sempre está em alta.",
					},
					3: {
						question:
							"Existe algum jogo recém-lançado focado no produto? (Últimos 5 anos)",
						example:
							'Se tratando de samurais, logo pensamos em "Ghost of Tsushima."',
					},
					4: {
						question:
							"Alcançou um público grande ou obteve um feedback positivo?",
						example:
							"Foi um jogo extremamente acalamado pela crítica e por jogadores.",
					},
					5: {
						question: "Existe uma demanda por um jogo do produto?",
						example:
							"Apesar da demanda ser suprida regularmente, ela ainda está crescendo.",
					},
					6: {
						question: "O público-alvo do produto em outras mídias é grande?",
						example:
							"O interesse pela história e cultura japonesa é bem significativo no ocidente.",
					},
					7: {
						question: "O público-alvo de um jogo do produto é grande?",
						example:
							"Abrange uma ampla faixa etária e com interesses em comum por jogos de luta, ação e aventura.",
					},
				},
			},
			result: {
				summary:
					'O produto "{{name}}" atingiu um total de {{result}} pontos de 20 possíveis',
				disclaimer:
					'ⓘ Não leve o resultado como garantia de fracasso ou sucesso do seu projeto. As regras do formulário foram definidas com base no que enxergamos como mais relevante no mercado; você pode conferir os detalhes clicando em "Entenda como é feito o cálculo".',
			},
			info: {
				title: "Entenda como é feito o cálculo",
				back: "Voltar",
				intro:
					"Cada pergunta foca em aspectos distintos do produto; esse sistema de pontuação ajuda a medir o valor de mercado e o potencial de sucesso. Foram levados em conta fatores como popularidade, relevância e interesse do público.",
				chip0: "Caso sim, <bold>+5 pontos</bold>",
				chip1: "Caso sim, <bold>+3 pontos</bold>",
				chip2: "Caso sim, <bold>+2 pontos</bold>",
				chip3: "Caso não, <bold>+3 pontos</bold>",
				chip4: "Caso não, <bold>+1 ponto</bold>",
				chip5: "Caso sim, <bold>+3 pontos</bold>",
				chip6: "Caso sim, <bold>+1 ponto</bold>",
				chip7: "Caso sim, <bold>+3 pontos</bold>",
				suggestions:
					"Caso tenha sugestões de alterações ou melhorias, envie um email para <bold>marcellogallante@gmail.com</bold>",
			},
			lang: {
				pt: "Português",
				en: "Inglês",
			},
		},
	},
};

function normalizeLanguage(code) {
	if (!code) return "en";
	const lower = code.toLowerCase();
	if (lower.startsWith("pt")) return "pt";
	return "en";
}

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: "en",
	supportedLngs: ["en", "pt"],
	interpolation: {
		escapeValue: false,
	},
	debug: import.meta.env.DEV,
	lng: normalizeLanguage(
		typeof navigator !== "undefined" ? navigator.language : "en",
	),
});

export default i18n;
