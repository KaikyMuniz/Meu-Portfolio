// Gerar efeito de deixar os icones transparentes, e ao passar com o mouse, deixar o icone em questão em destaque
const skillText = document.getElementById("skill");
const buttons = [
    { id: "html", text: " HTML" },
    { id: "css", text: " CSS" },
    { id: "js", text: " JavaScript" },
    { id: "php", text: " PHP" },
    { id: "mysql", text: " MySQL" },
    { id: "git", text: " Git" },
    { id: "github", text: " Github" },
    { id: "figma", text: " Figma" },
    { id: "office", text: " Pacote Office" },
];

buttons.forEach(button => {
    const element = document.getElementById(button.id);
    
    element.addEventListener('mouseover', () => {
        skillText.textContent = button.text;
    });

    element.addEventListener('mouseout', () => {
        skillText.textContent = "";
    });

    element.addEventListener('click', () => {
        skillText.textContent = button.text;
    });
});
