window.addEventListener('scroll',onScroll) 

onScroll()

// função para o scroll da view
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
  activeMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {  
    navigation.classList.remove("scroll");
  }
}


/*Função Criada para verificar o Scroll.
* Função para 
*innerHeight = é o tamanho da tela dividivo por dois para ter a visão da linha imaginaria da tela
*
*Vamos definir uma váriavel const targetLine(linha alvo)
*
*
*/

function activeMenuAtCurrentSection(section) {
  // Linha alvo
  const targetLine = scroll + innerHeight / 2;
   
  // vefiricar se a sessão passou da linha
  // quias dados vou verificar? console.log(home.offsetTop) = nome para vericar o numero do posicionamento console

  // O topo da da seção
  const sectionTop = section.offsetTop
  
  // A altura da seção
  const sectionHeight = section.offsetHeight

  // O topo da seção chegou ou ultrapassou a linha alto
  // Linha alvo passou do top
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // Informações dos dados e da lógica 
   
  // Verficicar se a base está abaixo  da linha alvo
  // Quias dados vou precisar?

  // A seção termina a onde ? 
  const sectionEndAt = sectionTop + sectionHeight

  // O final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  // Limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id') //
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}







/* Adição de um Button para subir a pagina  */
function showBackToTopButtonOnScroll() {
  if (scrollY > 700) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}


//função para abrir o menu
function openMenu() {
    document.body.classList.add('menu-expanded')
}
// função para fechar o menu
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}
/** todo Obejto tem propiedade e funcionalidade 
 * Atributos e métodos
 * Atributos de cor = Vervemelho, azul
 * atributos de peso = 700kg, 120kg 50kg
 * 
 * Métodos relacionado a ação ligar, desligar celular, bixar volume
 * 
 * O que é DOM? = D= document O= object M= model
 * documento modelado como JavaScript referenciamos com id
 */


/**Criando um objeto no javascript  objeto vazio = '{}' 
 * definindo propriedades dentro do objeto
*/

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
 }).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content
    `); /*colocando o efeito em cada sessão*/




