interface SpriteIconProps {
  name: string;
  className?: string;
  color?: string;
}

const SpriteIcon = ({ name, className, color }: SpriteIconProps) => (
  <svg
    className={className}
    width={32}
    height={32}
    fill={color ?? "currentColor"}
  >
    <use href={`/sprite.svg#${name}`} />
  </svg>
);

export default SpriteIcon;