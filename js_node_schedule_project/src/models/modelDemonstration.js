const mongoose = require('mongoose'); // Importa o módulo Mongoose

/**
 * **Objetivo do Código:** Demonstrar um modelo CRUD básico para gerenciar dados de pessoas no MongoDB utilizando Mongoose,
 * com foco em boas práticas de documentação, comentários e robustez.
 *
 * **Sobre comentários:** É possível criar comentários mais significativos utilizando `@`, não apenas para explicar o
 * funcionamento de uma função para desenvolvedores iniciantes, mas também para detalhar os parâmetros esperados, o
 * retorno da função, possíveis erros, e outros aspectos relevantes.
 *
 * **Tecnologias Utilizadas:**
 * * Mongoose
 * * Node.js
 *
 * **Observações Importantes:**
 * * Este código é apenas um estudo de caso e não deve ser utilizado em produção sem adaptações e testes rigorosos.
 * * Para projetos reais, é recomendável seguir princípios de desacoplamento, versionamento de código e documentação extensiva.
 */

/**
 * **Schema para Documentos da Coleção "Demo"**
 *
 * Define a estrutura dos documentos que serão armazenados na coleção "Demo" no MongoDB.
 * Cada documento representa uma pessoa com os seguintes campos:
 *
 * * **nome:** Nome da pessoa (obrigatório, tipo String)
 * * **sobrenome:** Sobrenome da pessoa (obrigatório, tipo String)
 * * **idade:** Idade da pessoa (obrigatório, tipo Number, mínimo 0)
 * * **dataNascimento:** Data de nascimento da pessoa (obrigatório, tipo Date)
 *
 * **Observações:**
 * * Em produção, o schema deve ser armazenado em um arquivo separado para melhor versionamento e acompanhamento de mudanças.
 * * Ferramentas de versionamento como Git são essenciais para facilitar o rollback da aplicação em caso de necessidade.
 */
const demoSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	sobrenome: { type: String, required: true },
	idade: { type: Number, required: true, min: 0 },
	dataNascimento: { type: Date, required: true }
});

/**
 * **Modelo Mongoose para Coleção "Demo"**
 *
 * Cria um modelo Mongoose para interagir com a coleção "Demo" no MongoDB, utilizando o schema previamente definido.
 * Este modelo permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) nos documentos da coleção.
 */
const DemoModel = mongoose.model('Demo', demoSchema);

/**
 * **Função de Validação de Pessoa**
 *
 * Valida os dados de uma pessoa de acordo com o schema definido.
 *
 * @param {Object} pessoa - Objeto contendo os dados da pessoa a ser validada (nome, sobrenome, idade, dataNascimento).
 * @returns {Object} - Objeto contendo um possível erro caso a validação falhe.
 */
function validatePerson(pessoa) {
	const { nome, sobrenome, idade, dataNascimento } = pessoa;
	let error = null;

	if (!nome || typeof nome !== 'string') {
		error = 'Nome é obrigatório e deve ser uma string.';
	} else if (!sobrenome || typeof sobrenome !== 'string') {
		error = 'Sobrenome é obrigatório e deve ser uma string.';
	} else if (idade === undefined || typeof idade !== 'number' || idade < 0) {
		error =
			'Idade é obrigatória e deve ser um número maior ou igual a zero.';
	} else if (!(dataNascimento instanceof Date) || isNaN(dataNascimento)) {
		error = 'Data de Nascimento é obrigatória e deve ser uma data válida.';
	}

	return { error };
}

/**
 * **Classe de Serviço para Gerenciamento de Pessoas**
 *
 * Esta classe encapsula as operações CRUD para gerenciar dados de pessoas na coleção "Demo" do MongoDB.
 * Ela utiliza o modelo Mongoose `DemoModel` para realizar as operações de forma abstrata e reutilizável.
 */
class DemoService {
	constructor() {
		this.Model = DemoModel; // Armazena o modelo Mongoose na propriedade "Model" da classe
	}

	/**
	 * **Cria uma Nova Pessoa**
	 *
	 * Cria e salva um novo documento na coleção "Demo" com os dados da pessoa fornecida.
	 *
	 * @param {Object} pessoa - Objeto contendo os dados da pessoa a ser criada (nome, sobrenome, idade, dataNascimento).
	 * @returns {Promise<Document>} - Promessa que resolve para o documento recém-criado na coleção "Demo".
	 * @throws {Error} - Erro caso haja falha na criação do documento.
	 */
	async createPerson(pessoa) {
		// Valida os dados da pessoa antes de criar o documento
		const { error } = await validatePerson(pessoa); // Utilize uma função de validação (não implementada neste exemplo)
		if (error) {
			throw new Error(error);
		}

		// Cria uma nova instância do modelo "Demo" com os dados da pessoa
		const novaPessoa = new this.Model(pessoa);

		// Salva a nova instância na coleção "Demo"
		await novaPessoa.save();

		// Retorna o documento recém-criado
		return novaPessoa;
	}

	/**
	 * **Recupera Todas as Pessoas**
	 *
	 * Busca e retorna todos os documentos da coleção "Demo".
	 *
	 * @returns {Promise<Array<Document>>} - Promessa que resolve para um array contendo todos os documentos da coleção "Demo".
	 * @throws {Error} - Erro caso haja falha na recuperação dos documentos.
	 */
	async getAllPeople() {
		// Busca todos os documentos da coleção "Demo"
		const pessoas = await this.Model.find();

		// Retorna o array de documentos encontrados
		return pessoas;
	}

	/**
	 * **Busca uma Pessoa por ID**
	 *
	 * Busca um documento específico na coleção "Demo" pela sua ID.
	 *
	 * @param {string} id - ID do documento a ser buscado.
	 * @returns {Promise<Document | null>} - Promessa que resolve para o documento encontrado ou `null` se não encontrado.
	 * @throws {Error} - Erro caso haja falha na busca do documento.
	 */
	async searchPersonById(id) {
		// Valida o ID da pessoa antes de realizar a busca
		if (!mongoose.isValidObjectId(id)) {
			throw new Error('ID inválido: ' + id);
		}

		// Busca o documento na coleção "Demo" pela ID
		const pessoa = await this.Model.findById(id);

		// Retorna o documento encontrado ou `null` se não encontrado
		return pessoa;
	}

	/**
	 * **Atualiza uma Pessoa**
	 *
	 * Atualiza um documento existente na coleção "Demo" com os dados fornecidos.
	 *
	 * @param {string} id - ID do documento a ser atualizado.
	 * @param {Object} pessoaAtualizada - Objeto contendo os novos dados da pessoa.
	 * @returns {Promise<void>} - Promessa que resolve quando a atualização for concluída.
	 * @throws {Error} - Erro caso haja falha na atualização do documento.
	 */
	async updatePerson(id, pessoaAtualizada) {
		// Valida o ID da pessoa antes de realizar a atualização
		if (!mongoose.isValidObjectId(id)) {
			throw new Error('ID inválido: ' + id);
		}

		// Valida os dados da pessoa atualizada antes de atualizar o documento
		const { error } = await validatePerson(pessoaAtualizada); // Utilize uma função de validação (não implementada neste exemplo)
		if (error) {
			throw new Error(error);
		}

		// Atualiza o documento na coleção "Demo" com os novos dados
		await this.Model.findByIdAndUpdate(id, pessoaAtualizada);
	}

	/**
	 * **Exclui uma Pessoa**
	 *
	 * Remove um documento da coleção "Demo" pela sua ID.
	 *
	 * @param {string} id - ID do documento a ser excluído.
	 * @returns {Promise<void>} - Promessa que resolve quando a exclusão for concluída.
	 * @throws {Error} - Erro caso haja falha na exclusão do documento.
	 */
	async deletePerson(id) {
		// Valida o ID da pessoa antes de realizar a exclusão
		if (!mongoose.isValidObjectId(id)) {
			throw new Error('ID inválido: ' + id);
		}

		// Remove o documento da coleção "Demo" pela ID
		await this.Model.findByIdAndDelete(id);
	}

	/**
	 * **Altera o Schema da Coleção e/ou os Dados dos Documentos**
	 *
	 * Atualiza o schema da coleção "Demo" e/ou os dados dos documentos existentes
	 * de acordo com as configurações fornecidas.
	 * Este método utiliza transações para garantir a consistência dos dados
	 * durante as operações complexas.
	 *
	 * @param {Object} [filter={}] - Objeto de filtro para especificar quais documentos devem ser atualizados (opcional).
	 * @param {{ alterSchemaVersionAdd: {}; alterSchemaVersionRemove: string[]; }} [alterConfig] - Objeto contendo as configurações de alteração do schema:
	 *   * `alterSchemaVersionAdd`: Objeto contendo os novos campos a serem adicionados ao schema.
	 *   * `alterSchemaVersionRemove`: Array contendo os nomes dos campos a serem removidos do schema.
	 * @returns {Promise<void>} Promessa que resolve quando a atualização for concluída com sucesso.
	 * @throws {Error} Erro caso haja falha na atualização do schema ou dos dados dos documentos.
	 */
	async alterSpecificSchema(
		filter = {},
		alterConfig = {
			alterSchemaVersionAdd: {},
			alterSchemaVersionRemove: []
		}
	) {
		// Valida o objeto de filtro (opcional)
		if (filter && typeof filter !== 'object') {
			throw new Error('O filtro deve ser um objeto ou nulo.');
		}

		// Valida o objeto de configuração de alteração do schema
		if (
			typeof alterConfig !== 'object' ||
			!Object.keys(alterConfig).length ||
			!alterConfig.alterSchemaVersionAdd ||
			!alterConfig.alterSchemaVersionRemove
		) {
			throw new Error('A configuração de alteração é inválida.');
		}

		// Inicia uma sessão do MongoDB para transação
		const session = await this.Model.startSession();
		session.startTransaction();

		try {
			// Atualiza o schema da coleção "Demo" adicionando novos campos (se houver)
			if (Object.keys(alterConfig.alterSchemaVersionAdd).length > 0) {
				await demoSchema.add(alterConfig.alterSchemaVersionAdd);

				// Atualiza todos os documentos existentes na coleção com os novos campos
				await this.Model.updateMany(
					{},
					{ $set: alterConfig.alterSchemaVersionAdd },
					{ session }
				);
			}

			// Remove campos do schema da coleção "Demo" (se houver)
			if (alterConfig.alterSchemaVersionRemove.length > 0) {
				await demoSchema.remove(alterConfig.alterSchemaVersionRemove);

				// Remove os campos especificados de todos os documentos na coleção
				await this.Model.updateMany(
					{},
					{ $unset: alterConfig.alterSchemaVersionRemove },
					{ session }
				);
			}

			// Atualiza os dados dos documentos existentes de acordo com o filtro fornecido
			const updatedCount = await this.Model.updateMany(
				filter,
				alterConfig.alterSchemaVersionAdd,
				{ session }
			);

			// Registra o log da atualização
			console.log(
				`${updatedCount.modifiedCount} documentos atualizados com sucesso!`
			);

			// Mostra os campos adicionados, se houver
			if (Object.keys(alterConfig.alterSchemaVersionAdd).length > 0) {
				console.log('\nCampos Inseridos:');
				console.log(alterConfig.alterSchemaVersionAdd);
			}

			// Mostra os campos removidos, se houver
			if (alterConfig.alterSchemaVersionRemove.length > 0) {
				console.log('\nCampos Removidos:');
				console.log(alterConfig.alterSchemaVersionRemove);
			}

			// Comita a transação para salvar as alterações no MongoDB
			await session.commitTransaction();
		} catch (error) {
			// Reverte a transação em caso de erro para manter a consistência dos dados
			await session.abortTransaction();
			throw error;
		} finally {
			// Encerra a sessão após concluir a transação
			session.endSession();
		}
	}
	/**
	 * Exemplo de uso do método alterSpecificSchema :
	 *
	 *  const DemoService = require('./DemoService'); // Importa a classe de serviço
	 *
	 *	const demoService = new DemoService(); // Cria uma instância da classe de serviço
	 *
	 *	// Define as configurações de alteração do schema
	 *	const alterConfig = {
	 *	    alterSchemaVersionAdd: {
	 *	        novoCampo: { type: String }
	 *	    },
	 *	    alterSchemaVersionRemove: ['campoAntigo']
	 *	};
	 *
	 *	// Chama o método para alterar o schema e/ou os dados dos documentos
	 *	demoService.alterSpecificSchema({}, alterConfig)
	 *	    .then(() => {
	 *	        console.log('Schema e/ou dados atualizados com sucesso!');
	 *	    })
	 *	    .catch((error) => {
	 *	        console.error('Erro ao atualizar schema e/ou dados:', error);
	 *	    });
	 */
}

// Exporta a classe de serviço para uso em outras partes do aplicativo
module.exports = DemoService;
