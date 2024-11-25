// Disable Search Key
document.addEventListener(
  "keydown",
  function (event) {
    if (event.key === "/") {
      event.stopImmediatePropagation();
    }
  },
  true
);

// Salt
const SALT0 =
  "oMKyBLM$!&jx^@^*!8#NwPLvF&pki4Ma0wd#2Qr956xyIy*wU5JdT$SW@2BgHL*bDbode4cQ^fw@91@&1u0$Up7UI^dLTg5*gj&JJxVQazNFdaKGI!5oABYEdf#f7PYR";
const SALT1 =
  "tqLtGzxQH4%TFIRh7mJM6C&rNOF3sjiC4k0kAX9#ejh8U89$H^AGNP78k$nSB#7u$H4*QxVIL7ody20th0opYnIqLjdBJ&vgP7cTbScrZ*KIOm^mLgAcIqAIhqQwgjj%";
const SALT2 =
  "yegO6926hMZ9EtR12bryh1VxuK^IqrdqV6%VE1Q8agyzFH8ULrZ!4P0qDvQg@C8A1kXwGQcK3^gr8Ys23&AFr@k5qa*GZ*Dw7mAwSR2DTOBZCM%nSVbKBo5Jq5ts#3r1";
const SALT = SALT0 + SALT1 + SALT2 + "#";

// Markdown Preview
const messageDiv = document.querySelector(".private-paste__message");
const messageTextarea = document.getElementById("message");
const passwordInput = document.getElementById("password");
const previewDiv = document.querySelector(".private-paste__preview");
const preview = document.getElementById("preview");
const toggleViewButton = document.getElementById("toggleView");
const qrCodeDiv = document.querySelector(".private-paste__qr-code");
const qrCode = document.getElementById("qrCode");
const qrCodeButton = document.getElementById("toggleQrCode");

let isEditing = false;
let isQrVisible = false;

// Edit links in markdown
const updatePreview = () => {
  const markdownText = messageTextarea.value;
  preview.innerHTML = marked.parse(markdownText);

  mdLinks = document.querySelectorAll("#preview a").forEach((mdLinks) => {
    mdLinks.setAttribute("target", "privatepastelink");
    mdLinks.setAttribute("rel", "noreferrer nofollow noopener");

    let mdLinks_href = mdLinks.href;
    mdLinks.setAttribute("href", "https://href.li/?" + mdLinks_href);
  });
};

// Update buttons state
const updateToggleButtonState = () => {
  if (isEditing && messageTextarea.value.trim() === "") {
    toggleViewButton.classList.add("disabled");
    toggleViewButton.disabled = true; // Disable button if editing mode and messageTextarea empty
  } else {
    toggleViewButton.classList.remove("disabled");
    toggleViewButton.disabled = false; // Enable button in other
  }
};

const updateToggleQrCodeState = () => {
  // Проверяем, есть ли хэш в URL и пусто ли содержимое textarea
  let hasHashInUrl = window.location.hash.trim() !== "";

  if (isQrVisible != hasHashInUrl) {
    qrCodeButton.classList.remove("disabled");
    qrCodeButton.disabled = false;
  }
};

// Input (textareaMessage) event listeners
messageTextarea.addEventListener("input", () => {
  updateToggleButtonState();
});

// Edit\Markdown mode
toggleViewButton.addEventListener("click", () => {
  isEditing = !isEditing;
  previewDiv.style.display = isEditing ? "none" : "block";
  messageDiv.style.display = isEditing ? "block" : "none";
  toggleViewButton.textContent = isEditing ? "👁️ Markdown" : "✏️ Редактировать";

  if (!isEditing) updatePreview();
  updateToggleButtonState();
});

// Hashing Function
const hashPassword = async (password) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(SALT + password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

// getUrl Function
const getUrl = (url) => {
  const link = document.createElement("a");
  link.href = url;
  const path = [
    link.protocol,
    "//",
    link.host,
    link.pathname,
    link.search,
    link.hash,
  ].join("");

  location.href = path;
  location.reload();

  updateToggleQrCodeState();
};

// Get QrCode Function
const getQrCode = async () => {
  let qrCodeUrl = window.location.href;
  qrCode.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&qzone=2&ecc=M&data=" +
    qrCodeUrl;
  isQrVisible = !isQrVisible;
  qrCodeDiv.style.display = isQrVisible ? "block" : "none";
  messageDiv.style.display = isQrVisible ? "none" : "block";
  previewDiv.style.display = isQrVisible ? "none" : "block";
  toggleViewButton.style.display = isQrVisible ? "none" : "block";
  passwordInput.style.display = isQrVisible ? "none" : "block";
  document.getElementById("encryptButton").style.display = isQrVisible ? "none" : "block";
  document.getElementById("decryptButton").style.display = isQrVisible ? "none" : "block";
};

// Encrypt Function
const encrypt = async () => {
  const password = passwordInput.value;
  const usedPassword =
    password.length == 0 ? SALT : await hashPassword(password);

  const message = messageTextarea.value;

  if (message.length > 0) {
    const s = mjsCrypt.encryptUint8Array(
      LZString.compressToUint8Array(message),
      usedPassword
    );
    const url = "#" + s + "#";

    messageTextarea.value = "";
    passwordInput.value = "";
    getUrl(url);
  }
};

const isValidContent = (content) => {
  // Здесь можно добавить логику проверки, например:
  // Проверка на наличие хотя бы одной буквы
  return /[a-zA-Zа-яА-Я]/.test(content);
};

// Decrypt Function
const decrypt = async () => {
  const password = passwordInput.value;
  const usedPassword =
    password.length == 0 ? SALT : await hashPassword(password);

  const urlHash = window.location.hash.slice(1);
  const splithash = urlHash.split("#");

  try {
    const decryptedContent = LZString.decompressFromUint8Array(
      mjsCrypt.decryptUint8Array(splithash[0], usedPassword)
    );

    if (!decryptedContent) {
      messageTextarea.value = "";
      passwordInput.value = "";
      preview.innerHTML = `
      <div style="display:flex; justify-content: center;">
        <i><strong>❌ ERROR ❌</strong></i>
      </div>
      `;
      return;
    }

    messageTextarea.value = decryptedContent;
    passwordInput.value = "";

    updatePreview();
    updateToggleButtonState();
  } catch {
    //pass
  }
};

// Handlers
updateToggleQrCodeState();

// Buttons Handlers
document.getElementById("encryptButton").addEventListener("click", encrypt);
document.getElementById("decryptButton").addEventListener("click", decrypt);
document.getElementById("toggleQrCode").addEventListener("click", getQrCode);

// document.getElementById("decryptButton").addEventListener("click", decrypt);

// Очистка cookies и хранилищ
// document.cookie.split(";").forEach((c) => {
//   document.cookie = c
//     .replace(/^ +/, "")
//     .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
// });
// try {
//   window.localStorage.clear();
//   window.sessionStorage.clear();
// } catch {
// most likely in private mode
// }
