const fs = require('node:fs/promises');
const path = require('node:path');

const logsDir = path.join(__dirname, 'logs');
const subdirs = ['Users', 'System'];

async function verifyDirExistence(directory) {
	try {
		const status = await fs.stat(directory);
		if (status.isDirectory()) {
			console.log('Diretório existe:', path.parse(directory).base);
		} else {
			console.log('Caminho não é um diretório:', directory);
		}
	} catch (e) {
		console.log('Diretório não existe, criando diretório aguarde... ');
		await fs.mkdir(directory);

		if (
			path.parse(directory).base === 'logs' &&
			path.parse(directory).ext === ''
		) {
			for (let i = 0; i < subdirs.length; i++) {
				await fs.mkdir(path.join(logsDir, subdirs[i]));
			}
		}
	} finally {
		console.log('Tudo pronto para continuar !');
	}
}

const createErrorLog = async (
	message,
	userDescription = { userErrorGenerated: true, userSection: 'Unknown' }
) => {
	await verifyDirExistence(logsDir);
	if (!userDescription.userErrorGenerated) {
		try {
			const errorLogSystemFile = path.join(
				logsDir,
				'System',
				'errors.log'
			);
			const logMessage = `${new Date().toISOString()}\n
			ERROR : ${message}\n\n`;
			await fs.appendFile(errorLogSystemFile, logMessage);
		} catch (e) {
			console.error('Erro ao tentar criar log de erro do sistema :', e);
		}
	}

	try {
		const errorLogUserFile = path.join(logsDir, 'Users', 'errors.log');
		const logMessage = `${new Date().toISOString()},
		\n[${userDescription.userSection === 'Unknown' ?
				undefined : userDescription.userSection}]
		\nERROR : ${message}\n\n`;
		await fs.appendFile(errorLogUserFile, logMessage);
	} catch (e) {
		console.error('Erro ao tentar criar o log de erro do usuario :', e);
	}
};

const createInfoLog = async (
	message,
	userDescription = { userErrorGenerated: true, userSection: 'Unknown' }
) => {
	await verifyDirExistence(logsDir);
	if (!userDescription.userErrorGenerated) {
		try {
			const infoLogSystemFile = path.join(logsDir, 'System', 'info.log');
			const logMessage = `${new Date().toISOString()}
			\nInfo : ${message}\n\n`;
			await fs.appendFile(infoLogSystemFile, logMessage);
		} catch (e) {
			console.error(
				'Erro ao tentar criar log de informação do sistema :',
				e
			);
		}
	}

	try {
		const infoLogUserFile = path.join(logsDir, 'Users', 'info.log');
		const logMessage = `${new Date().toISOString()}
		\n[${userDescription.userSection === 'Unknown' ?
				undefined : userDescription.userSection}]
		\nMessage : ${message}\n\n`;
		await fs.appendFile(infoLogUserFile, logMessage);
	} catch (e) {
		console.error('Erro ao  criar log de informação do usuário :', e);
	}
};

module.exports = { createErrorLog, createInfoLog };
