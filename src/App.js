import "./App.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const App = () => {
	const [ativar, setAtivar] = React.useState(false);
	return (
		<>
			<Button onClick={() => setAtivar(!ativar)}>Ativar</Button>
			{ativar && (
				<div className="animeLeft">
					<div
						className="card bg-dark text-white m-5"
						style={{ maxWidth: "18rem" }}
					>
						<div className="card-header">Notebook</div>
						<div className="card-body">
							<h5 className="card-title">R$ 2500</h5>
							<p className="card-text">Esse é um notebook com 16Gb de RAM.</p>
						</div>
					</div>

					<Card
						bg="dark"
						text="white"
						className="m-5"
						style={{ maxWidth: "18rem" }}
					>
						<Card.Header>Notebook</Card.Header>
						<Card.Body>
							<Card.Title>R$ 2500</Card.Title>
							<Card.Text>Esse é um notebook com 16Gb de RAM.</Card.Text>
						</Card.Body>
					</Card>
				</div>
			)}
		</>
	);
};

export default App;
