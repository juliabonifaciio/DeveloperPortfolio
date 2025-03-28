document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos que você quer animar
    const elementsToAnimate = document.querySelectorAll('#inicio, #sobre, #habilidades, #servicos, #contato');

    // Função para adicionar a classe de animação aos elementos quando estão visíveis
    function animateElement(element) {
        element.classList.add('fade-in');
    }

    // Criando o observer
    const observerOptions = {
        root: null, // Observando a visibilidade na janela
        rootMargin: '0px', // Margem em torno do root
        threshold: 0.1 // O elemento deve estar 10% visível para disparar a animação
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
                observer.unobserve(entry.target); // Parar de observar depois de animar
            }
        });
    }, observerOptions);

    // Observa cada elemento que queremos animar
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Botão de Voltar ao Topo
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Suavizar rolagem para seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Formulário de contato (sem envio real)
    const contactForm = document.querySelector('#contato form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Alterar o título do modal antes de exibir
        document.getElementById("messageModalLabel").textContent = "Mensagem Enviada com Sucesso!";
        
        // Exibe o modal
        var myModal = new bootstrap.Modal(document.getElementById('messageModal'));
        myModal.show();

        // Resetar o formulário
        contactForm.reset();
    });
});