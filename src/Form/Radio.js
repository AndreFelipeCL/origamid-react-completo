import React from "react";

const Radio = ({
	active,
	pergunta,
	options,
	onChangeOpt,
	currentValue,
	id,
}) => {
	return (
		<>
			{active && (
				<fieldset
					style={{
						padding: "2rem",
						marginBottom: "1rem",
						border: "2px solid #eee",
					}}
				>
					<legend
						style={{
							fontWeight: "bold",
						}}
					>
						{pergunta}
					</legend>
					{options.map((opt) => (
						<label
							key={opt}
							style={{ marginBottom: "1rem", fontFamily: "monospace" }}
						>
							<input
								id={id}
								type="radio"
								checked={currentValue === opt}
								value={opt}
								onChange={onChangeOpt}
							/>
							{opt}
						</label>
					))}
				</fieldset>
			)}
		</>
	);
};

export default Radio;
