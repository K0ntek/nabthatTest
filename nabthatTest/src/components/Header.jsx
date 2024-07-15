import React, { useState } from 'react';
import '../stylesheet/header.scss';
import data from '../data.json';

const Header = ({text, setText, option, setOption}) => {
	const [prevOption, setPrevOption] = useState();
	const [textUsed, setTextUsed] = useState(Array(data.length).fill(false));

	const change = () => {
		let tmpText = text.slice(0, -1);
		let tmpTextUsed = textUsed.map((value, index) => (prevOption - 1 === index ? false : value));
		let tmpPrevOption = option;

		if (option === 1 && !tmpTextUsed[0]) {
			tmpText.push(data[0]);
			tmpTextUsed[0] = true;
		} else if (option === 2 && !tmpTextUsed[1]) {
			tmpText.push(data[1]);
			tmpTextUsed[1] = true;
		} else if (option === 3) {
			const unusedIndexes = tmpTextUsed
				.slice(2)
				.flatMap((value, index) => (!value ? index + 2 : []));

			if (unusedIndexes.length === 0) return;

			const textIndex = unusedIndexes[Math.floor(Math.random() * unusedIndexes.length)];

			tmpText.push(data[textIndex]);
			tmpTextUsed[textIndex] = true;
			tmpPrevOption = textIndex + 1;
		} else return;

		setText(tmpText);
		setTextUsed(tmpTextUsed);
		setPrevOption(tmpPrevOption);
	};

	const add = () => {
		let tmpText = [...text];
		let tmpTextUsed = [...textUsed];
		let tmpPrevOption = option;

		if (option === 1 && !tmpTextUsed[0]) {
			tmpText.push(data[0]);
			tmpTextUsed[0] = true;
		} else if (option === 2 && !tmpTextUsed[1]) {
			tmpText.push(data[1]);
			tmpTextUsed[1] = true;
		} else if (option === 3) {
			const unusedIndexes = tmpTextUsed
				.slice(2)
				.flatMap((value, index) => (!value ? index + 2 : []));

			if (unusedIndexes.length === 0) return;

			const textIndex = unusedIndexes[Math.floor(Math.random() * unusedIndexes.length)];

			tmpText.push(data[textIndex]);
			tmpTextUsed[textIndex] = true;
			tmpPrevOption = textIndex + 1;
		} else return;

		setText(tmpText);
		setTextUsed(tmpTextUsed);
		setPrevOption(tmpPrevOption);
	};

	return (
		<div className=" header">
			<div className=" headingWrapper">
				<h1>Nagłówek H1</h1>
				<div className="headingBorder"></div>
			</div>
			<div className="gridWrapper">
				<div>
					<h2 className="gridHeading">BLOK PIERWSZY</h2>
					<div className="inputWrapper">
						<label htmlFor="option1">
							<input type="radio" name="option" id="option1" onClick={() => setOption(1)} />
							<span>Opcja pierwsza</span>
						</label>
					</div>
					<div className="inputWrapper">
						<label htmlFor="option2">
							<input type="radio" name="option" id="option2" onClick={() => setOption(2)} />
							<span>Opcja druga</span>
						</label>
					</div>
					<div className="inputWrapper">
						<label htmlFor="option3">
							<input type="radio" name="option" id="option3" onClick={() => setOption(3)} />
							<span>Opcja losowa</span>
						</label>
					</div>
				</div>

				<div>
					<h2 className="gridHeading">BLOK DRUGI</h2>
					<div className="buttonWrapper">
						<button onClick={() => change()}>ZASTĄP</button>
						<button onClick={() => add()}>DOKLEJ</button>
					</div>
				</div>

				<div className='headerContent'>
					<h2 className="gridHeading longHeading">BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE</h2>
					{text.map((textElement, i) => (
						<p key={i}>{textElement}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
