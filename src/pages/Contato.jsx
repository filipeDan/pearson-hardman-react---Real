import styles from "./Contato.module.css";

export function Contato() {
  return (
  <>
    <section id="contact" class="text-image-section">
      <div id="contact-image-container" class="image-container">
        <img src="images/office.jpg" alt="Advogados no escritório" />
      </div>
      <div id="contact-information" class="text-container">
        <i className={bi bi-envelope}></i>
        <p className={section-subtitle}>Entre em contato</p>
        <form>
          <div className={form-control}>
            <input type="text" name="name" id="name" placeholder="Nome" />
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </div>
          <input type="text" name="phone" id="phone" placeholder="Telefone" />
          <textarea
            name="message"
            id="message"
            placeholder="Sua mensagem..."
          ></textarea>
          <input type="submit" value="Enviar" class="btn" />
        </form>
      </div>
    </section>

   </>
  )
}
