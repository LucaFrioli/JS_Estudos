exports.showMenu = () => {
	// resgata o menu e seus itens
	const menu = document.querySelector('menu');
	const liArray = menu.querySelectorAll('li');
	// resgata as classes dos itens
	const liDisplay = liArray[0].classList;

	// cria a função que irá controlar os estados dos elementos
	const updateMenu = () => {
		// resgata o tamanho da tela do navegador
		const widthScreen = window.innerWidth;

		// averigua o tamanho da tela para poder conduzir de maneira adequada o fluxo do aparecimento e desaparecimento dos botões do menu, caso seja uma tela mobile é acionada as rotinas de controle de burguer menu, caso contŕario é realizada uma rotina garantindo que os botões apareçammesmo após redimencionamento da tela
		if (widthScreen < 769) {
			// caso a largura da tela corresponda a uma largura de dispositivo mobile, é realizada uma averiguação para entender o estado do botão no momento, caso ele esteja em seu estado naturar ou seja = normal, inicia um loop por todos os links do menu adicionando seu display, caso contrario eles voltam ao seu estado normal e são escondidos com a classe hidden
			if (liDisplay.contains('normal')) {
				liArray.forEach((item) => {
					item.classList.remove('normal');
					item.classList.add('display-mobile');
				});
			} else {
				liArray.forEach((item) => {
					item.classList.remove('display-mobile');
					item.classList.add('normal');
					item.classList.add('hidden');
				});
			}
		} else {
			liArray.forEach((item) => item.classList.remove('hidden'));
		}
	};

	updateMenu(); // inicia a rotina de controle

	window.addEventListener('resize', updateMenu); // adiciona um averiguador fazendo com que toda vez que a tela é redimencionada, seja garantido que os itens apareçam e a classe hidden seja removida independentemente do estado em que o botão se encontra
};
