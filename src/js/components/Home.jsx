import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {

	const [activo, setActivo] = useState("")
	const [light, setLight] = useState("")

	const colorActivo = (color) => {
		if (activo === color) {
			setActivo("")
		} else {
			setActivo(color);
		}
	}

	const lightOn = () => setLight(true);
	const lightOff = () => setLight(false);

	return (
		<>
			<div className="poste"> </div>
			<div className="box">
				<div className="container">
					<span className={(light || activo == 'rojo') ? 'rojo rojo-activo' : 'rojo'} onClick={() => colorActivo("rojo")} ></span>
					<span className={(light || activo == 'amarillo') ? 'amarillo amarillo-activo' : 'amarillo'} onClick={() => colorActivo("amarillo")}></span>
					<span className={(light || activo == 'verde') ? 'verde verde-activo' : 'verde'} onClick={() => colorActivo("verde")}></span>
					<span className={(light || activo == 'morado') ? 'morado morado-activo' : 'morado'} onClick={() => colorActivo("morado")}></span>
				</div>

			</div>
			<div className="botones">
				<button onClick={lightOn}>On</button>
				<button onClick={lightOff}>Off</button>
				<button onClick={() => colorActivo("morado")}>Purple</button>
			</div>
		</>
	);
};

export default Home;