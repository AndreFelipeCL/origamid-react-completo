import React from "react";
import Radio from "./Form/Radio";

const perguntas = [
	{
		pergunta: "Qual método é utilizado para criar componentes?",
		options: [
			"React.makeComponent()",
			"React.createComponent()",
			"React.createElement()",
		],
		resposta: "React.createElement()",
		id: "p1",
	},
	{
		pergunta: "Como importamos um componente externo?",
		options: [
			'import Component from "./Component"',
			'require("./Component")',
			'import "./Component"',
		],
		resposta: 'import Component from "./Component"',
		id: "p2",
	},
	{
		pergunta: "Qual hook não é nativo?",
		options: ["useEffect()", "useFetch()", "useCallback()"],
		resposta: "useFetch()",
		id: "p3",
	},
	{
		pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
		options: ["set", "get", "use"],
		resposta: "use",
		id: "p4",
	},
];

const App = () => {
	const [respostas, setRespostas] = React.useState({
		p1: "",
		p2: "",
		p3: "",
		p4: "",
	});

	const [slide, setSlide] = React.useState(0);
	const [correctCount, setCorrectCount] = React.useState(null);

	const handleNextSlide = () => {
		if (slide <= perguntas.length - 1) {
			setSlide(slide + 1);
		} else {
			setSlide(slide + 1);
		}
	};

	const handlePreviousSlide = () => {
		if (slide > 0) {
			setSlide(slide - 1);
		}
	};

	React.useEffect(() => {
		if (slide === perguntas.length) {
			const corrects = perguntas.filter(
				({ id, resposta }) => respostas[id] === resposta
			);
			setCorrectCount(
				`Você acertou ${corrects.length} de ${perguntas.length}.`
			);
		} else {
			setCorrectCount(null);
		}
	}, [slide]);

	const handleChange = ({ target }) => {
		setRespostas({ ...respostas, [target.id]: target.value });
	};

	return (
		<form onSubmit={(event) => event.preventDefault()}>
			{perguntas.map((pergunta, index) => (
				<Radio
					active={slide === index}
					key={pergunta.id}
					currentValue={respostas[pergunta.id]}
					onChangeOpt={handleChange}
					{...pergunta}
				/>
			))}
			{correctCount ? (
				<p>{correctCount}</p>
			) : (
				<>
					<button onClick={handlePreviousSlide}>Anterior</button>
					<button onClick={handleNextSlide}>Próxima</button>
				</>
			)}
		</form>
	);
};

export default App;
