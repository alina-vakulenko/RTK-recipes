export default function FavoriteButton({ icon, onClickHandler, children }) {
  return (
    <button className="favorite-button" onClick={onClickHandler}>
      {icon}
      {children}
    </button>
  );
}
