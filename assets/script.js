function  changeMode ( )  {
	changeClass ( ) ;
	changeText( ) ;
}

function  mudançaClasses ( )  {
	button . classList . alternar ( darkModeClass ) ;
	h1 . classList . alternar ( darkModeClass ) ;
	corpo . classList . alternar ( darkModeClass ) ;
	rodapé . classList . alternar ( darkModeClass ) ;
}

function  changeText ( )  {
	const  lightMode  =  'Modo de luz' ;
	const  darkMode  =  'darkmode' ;

	if  ( body . classList . contém ( darkModeClass ) )  {
		button . innerHTML  =  lightMode ;
		h1 . innerHTML  =  darkMode  +  'ON' ;
		retorno ;
	}

	button . innerHTML  =  darkMode ;
	h1 . innerHTML  =  lightMode  +  'ON' ;
}

const  darkModeClass  =  'darkmode' ;
const button =  document . getElementById ( 'mode-selector' ) ;
const  h1  =  document.getElementById ( 'page-title' ) ;
const  corpo  =  document . getElementsByTagName ( 'body' ) [ 0 ] ;
const  rodapé  =  document . getElementsByTagName ( 'main' ) [ 0 ] ;

button.addEventListener( 'click' , changeMode )