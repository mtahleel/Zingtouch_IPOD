export default function Sidebar() {
  return (
    <div id="Sidebar">
      <h2>ipod.js</h2>
      <p id="cover-flow" className="active">
        <span>Cover Flow</span>
        <i class="fa-solid fa-chevron-right"></i>
      </p>
      <p id="music">
        <span>Music</span>
        <i class="fa-solid fa-chevron-right"></i>
      </p>
      <p id="games">
        <span>Games</span>
        <i class="fa-solid fa-chevron-right"></i>
      </p>
      <p id="settings">
        <span>Settings</span>
        <i class="fa-solid fa-chevron-right"></i>
      </p>
    </div>
  );
}
