import { useTheme } from '../useTheme';

type ThemeCoverPreviewProps = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  label: string;
  onPreview: (src: string, alt: string) => void;
};

const ThemeCoverPreview = ({
  lightSrc,
  darkSrc,
  alt,
  label,
  onPreview,
}: ThemeCoverPreviewProps) => {
  const { theme } = useTheme();
  const activeSrc = theme === 'dark' ? darkSrc : lightSrc;

  return (
    <button
      type="button"
      aria-label={alt}
      onClick={() => onPreview(activeSrc, alt)}
      className="group relative block w-full overflow-hidden rounded-[28px] border border-black/8 bg-[#f6f6f6] text-left"
    >
      <div className="grid">
        <img
          src={lightSrc}
          alt=""
          aria-hidden="true"
          className={`col-start-1 row-start-1 block h-auto w-full object-contain transition-opacity duration-300 ease-out ${
            theme === 'dark' ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={darkSrc}
          alt=""
          aria-hidden="true"
          className={`col-start-1 row-start-1 block h-auto w-full object-contain transition-opacity duration-300 ease-out ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <img
        src={activeSrc}
        alt={alt}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent opacity-90" />
      <span className="sr-only">Open {label}</span>
    </button>
  );
};

export default ThemeCoverPreview;
