// ควบคุมการ เปิด-ปิด เมนู Drawer ด้านขวา
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("close-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const sidebarLinks = document.querySelectorAll(".sidebar-links a");

  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }

  // กดปุ่ม Hamburger เพื่อเปิด
  menuToggle.addEventListener("click", openSidebar);

  // กดกากบาท หรือคลิกพื้นหลังมืด เพื่อปิด
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // เมื่อกดเลือกลิงก์ในเมนู ให้ปิด Drawer อัตโนมัติแล้วเลื่อนไปส่วนนั้น
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
});
