document.addEventListener("DOMContentLoaded", () => {
  // Depoimentos Slider
  const depoimentos = document.querySelectorAll(".depoimento-card")
  const indicadores = document.querySelectorAll(".indicador")
  const prevBtn = document.querySelector(".prev")
  const nextBtn = document.querySelector(".next")
  let currentIndex = 0

  function showDepoimento(index) {
    depoimentos.forEach((depoimento) => depoimento.classList.remove("active"))
    indicadores.forEach((indicador) => indicador.classList.remove("active"))

    depoimentos[index].classList.add("active")
    indicadores[index].classList.add("active")
  }

  function nextDepoimento() {
    currentIndex = (currentIndex + 1) % depoimentos.length
    showDepoimento(currentIndex)
  }

  function prevDepoimento() {
    currentIndex = (currentIndex - 1 + depoimentos.length) % depoimentos.length
    showDepoimento(currentIndex)
  }

  // Event listeners for slider controls
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", prevDepoimento)
    nextBtn.addEventListener("click", nextDepoimento)
  }

  // Event listeners for indicators
  indicadores.forEach((indicador, index) => {
    indicador.addEventListener("click", () => {
      currentIndex = index
      showDepoimento(currentIndex)
    })
  })

  // Auto slide every 5 seconds
  setInterval(nextDepoimento, 5000)
/*
  // WhatsApp Chat
  const chatIcon = document.getElementById("chat-icon")
  const chatBox = document.getElementById("chat-box")
  const closeChat = document.getElementById("close-chat")
  const messageInput = document.getElementById("message-input")
  const sendMessage = document.getElementById("send-message")
  const chatMessages = document.querySelector(".chat-messages")
  const confectionerImg = document.getElementById("confectioner-img")

  // Animated confectioner character
  const confectionerFrames = ["public/images/confectioner.jpeg", "public/images/confectioner.jpeg"]
  let frameIndex = 0

  // Animate the confectioner character
  function animateConfectioner() {
    frameIndex = (frameIndex + 1) % confectionerFrames.length
    confectionerImg.src = confectionerFrames[frameIndex]
  }

  // Start animation
  setInterval(animateConfectioner, 1000)

  // Toggle chat box
  if (chatIcon && chatBox && closeChat) {
    chatIcon.addEventListener("click", () => {
      chatBox.classList.add("active")
    })

    closeChat.addEventListener("click", () => {
      chatBox.classList.remove("active")
    })
  }

  // Send message function
  function sendChatMessage() {
    const message = messageInput.value.trim()
    if (message !== "") {
      // Add user message
      const userMessageElement = document.createElement("div")
      userMessageElement.classList.add("message", "sent")
      userMessageElement.innerHTML = `<p>${message}</p>`
      chatMessages.appendChild(userMessageElement)

      // Clear input
      messageInput.value = ""

      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight

      // Simulate response after a short delay
      setTimeout(() => {
        const botResponses = [
          "Olá! Como posso ajudar com sua encomenda de doces?",
          "Temos diversos tipos de bolos e doces para sua ocasião especial!",
          "Gostaria de saber mais sobre nossos produtos?",
          "Para encomendas, precisamos de pelo menos 3 dias de antecedência.",
          "Posso te enviar nosso catálogo completo por e-mail ou WhatsApp!",
        ]

        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

        const botMessageElement = document.createElement("div")
        botMessageElement.classList.add("message", "received")
        botMessageElement.innerHTML = `<p>${randomResponse}</p>`
        chatMessages.appendChild(botMessageElement)

        // Scroll to bottom again
        chatMessages.scrollTop = chatMessages.scrollHeight
      }, 1000)
    }
  }
  */

  // Event listeners for chat
  if (sendMessage && messageInput) {
    sendMessage.addEventListener("click", sendChatMessage)

    messageInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        sendChatMessage()
      }
    })
  }

  // Form submission
  const encomendaForm = document.getElementById("encomenda-form")
  if (encomendaForm) {
    encomendaForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const nome = document.getElementById("nome").value
      const email = document.getElementById("email").value
      const telefone = document.getElementById("telefone").value
      const mensagem = document.getElementById("mensagem").value

      // Here you would typically send this data to a server
      // For this example, we'll just show an alert
      alert(`Obrigado ${nome}! Sua encomenda foi recebida. Entraremos em contato em breve!`)

      // Reset form
      encomendaForm.reset()
    })
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Add animation to products on scroll
  const productCards = document.querySelectorAll(".produto-card")

  function checkScroll() {
    productCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (cardTop < windowHeight - 100) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  // Initialize product cards with opacity 0
  productCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Check on scroll and on load
  window.addEventListener("scroll", checkScroll)
  checkScroll() // Check on initial load
})
