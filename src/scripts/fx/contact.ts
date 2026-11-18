// Contact card actions shared by the Astro and Next builds.
document.querySelectorAll<HTMLButtonElement>("[data-copy-email]").forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    const email = button.dataset.copyEmail;
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      button.classList.add("is-copied");
      button.setAttribute("aria-label", "이메일 복사 완료");
      window.setTimeout(() => {
        button.classList.remove("is-copied");
        button.setAttribute("aria-label", "이메일 복사");
      }, 1600);
    } catch (error) {
      console.error("이메일을 복사할 수 없습니다.", error);
    }
  });
});

export {};
