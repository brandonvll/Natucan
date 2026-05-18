type ReelItem = { id: string; src: string };

type ReelProps = {
  items: ReelItem[];
  rows?: number;
  pauseOnHover?: boolean;
  applyMask?: boolean;
  maskColor?: string;
  duration?: number;
  direction?: 'alternate' | 'forward' | 'reverse';
  gap?: number;
  itemWidth?: number;
  itemHeight?: number;
};

export function Reel({
  items,
  rows = 2,
  pauseOnHover = true,
  applyMask = true,
  maskColor = '#EBF4E6',
  duration = 30,
  direction = 'alternate',
  gap = 12,
  itemWidth = 240,
  itemHeight = 160,
}: ReelProps) {
  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      {applyMask && (
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: `linear-gradient(to right, ${maskColor} 0%, transparent 12%, transparent 88%, ${maskColor} 100%)`,
        }} />
      )}
      {Array.from({ length: rows }).map((_, i) => {
        const rowDir =
          direction === 'alternate' ? (i % 2 === 0 ? 'forward' : 'reverse') : direction;
        return (
          <div
            key={i}
            className={`reel-row reel-${rowDir}${pauseOnHover ? ' reel-pause-hover' : ''}`}
            style={{
              display: 'flex',
              gap,
              marginBottom: i < rows - 1 ? gap : 0,
              animationDuration: `${duration}s`,
              width: 'max-content',
            }}
          >
            {doubled.map((item, j) => (
              <div
                key={`${item.id}-${j}`}
                style={{ flexShrink: 0, width: itemWidth, height: itemHeight, borderRadius: 14, overflow: 'hidden' }}
              >
                <img
                  src={item.src}
                  alt=""
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
