// Mirrors Webflow `.container`:
// max-width:1340px; margin:0 auto; padding:0 20px; flex column.
export default function Container({ className = "", children }) {
  return (
    <div
      className={`mx-auto flex w-full max-w-container flex-col px-[20px] ${className}`}
    >
      {children}
    </div>
  );
}
