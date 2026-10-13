const express = require('express');
const cors = require('cors'); // Essencial para permitir a integração com o Front-end

const app = express();
const PORT = 3000;

// Configuração de middlewares
app.use(cors());
app.use(express.json());

// Rota principal da API (Ajuste de rotas - Sprint 3)
app.get('/api/videos', (req, res) => {
    // Lógica de negócio: Dados que serão enviados para a interface
    const linksDosVideos = {
        daniel: "https://drive.google.com/file/d/11HQFByboQxFSij-8pr3A9xp1JHkX03oZ/preview",
        alexia: "https://drive.google.com/file/d/1pVN17-iJOT5cJwpbLpqYKwo0n_jxhtj7/preview",
        thais: "https://drive.google.com/file/d/1LJLQ4N_XW-0bdysQCvNCIh4OhG-BY2s7/preview"
    };

    // Retorna a resposta em formato JSON
    res.status(200).json(linksDosVideos);
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor do Portfólio G4 rodando na porta ${PORT}`);
    console.log(`Acesse a API em: http://localhost:${PORT}/api/videos`);
});
