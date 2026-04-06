export const template = (name: string) => `
<!DOCTYPE html>
<head>
  <title>Consulta recibida</title>
  <style type="text/css">
    body,
    table,
    td,
    a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    body,
    html {
      margin: 0;
      padding: 0;
      width: 100% !important;
    }
    footer {
      padding: 1rem 2rem;
      background-color: #808080;
    }
    h1,
    h2,
    p,
    a {
      font-family: Arial, sans-serif;
      display: flex;
      gap: 10px;
      align-items: center;
      flex-direction: row;
      text-decoration: none;
      margin-bottom: 1rem;
    }
    span {
      color: white;
    }

    .btn {
      display: flex;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    img {
      max-width: 600px;
      width: 100%;
      display: block;
    }
    .grow-parent {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .grow {
      flex-grow: 1;
    }
    .container {
      width: 100%;
      padding: 10px;
    }

    h1,
    h2 {
      margin: 0;
    }

    @media only screen and (min-width: 600px) {
      .container {
        width: 100% !important;
        max-width: 600px !important;
        margin: 0 auto !important;
        display: flex;
        flex-direction: column;
      }
    }
  </style>
</head>
<html lang="en">
  <body>
    <div class="grow-parent">
      <div class="container">
        <h1>PsicoValGodoy</h1>
        <h2>Consulta recibida</h2>
        <p>
          ${name}, gracias por enviar tu consulta, a la brevedad nos pondremos
          en contacto contigo.
        </p>
      </div>
      <div class="grow"></div>
      <footer>
        <a
          href="https://www.youtube.com/@psicovalgodoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="btn">
          </button>
          <span>@psicovalgodoy</span>
        </a>
        <a
          href="https://www.tiktok.com/@psicovalgodoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="btn">
          </button>
          <span>@psicovalgodoy</span>
        </a>
        <a
          href="https://www.instagram.com/psicovalgodoy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="btn">
          </button>
          <span>@psicovalgodoy</span>
        </a>
        <a
          class="linkclass"
          href="https://wa.me/541131242384"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="btn">
          </button>
          <span>+54 11 31242384</span>
        </a>
      </footer>
    </div>
  </body>
</html>
`;
