import './ImagePlaceholder.css';

export default function ImagePlaceholder({ label, ratio = '4 / 3', className = '' }) {
  return (
    <div
      className={`img-placeholder ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span>{label}</span>
    </div>
  );
}
