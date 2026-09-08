import './ImagePlaceholder.css';

export default function ImagePlaceholder({
  label,
  ratio = '4 / 3',
  className = '',
  image,
}) {
  return (
    <div
      className={`img-placeholder ${image ? 'img-placeholder-photo' : ''} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {image ? (
        <>
          <img src={image.src} alt={image.alt || label} loading="lazy" />
          <a
            className="image-credit"
            href={image.creditHref}
            target="_blank"
            rel="noreferrer"
          >
            {image.credit}
          </a>
        </>
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}
