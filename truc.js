require("dotenv").config();
// charset = "utf-8";
const PORT = process.env.PORT || 3001;
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //   writeHead avec charset ainsi configuré permet d'afficher les accents dans la réponse du serveur une fois qu'il est lancé.
  // 200 est la réponse qui signiffie "OK la requête a été traitée avec succès en langage HTTP"
  // res.writeHead permet de renvoyer une phrase en texte brute avec la méthode UTF-8, donc avec un accent.
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(
    `Je suis ${process.env.MY_NAME}, actuellement basée sur ${process.env.MY_CITY}, et j'étudie le langage ${process.env.MY_LANGUAGE}`
  );
});

server.listen(PORT, () => {
  console.log(`Server running on port:${PORT}/`);
});

const myName = process.env.MY_NAME || "[Prénom pas trouvé.]";
const myCity = process.env.MY_CITY || "[Ville pas chargée}";
const myLanguage = process.env.MY_LANGUAGE || "[Langage non défini]";

console.log(`I am ${myName}, wilder in ${myCity}, and I love ${myLanguage}.`);
