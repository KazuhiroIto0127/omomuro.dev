import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

interface RiveAnimationProps {
  src: string;
  width?: number;
  height?: number;
}

export default function RiveAnimation({ src, width = 300, height = 300 }: RiveAnimationProps) {
  const { RiveComponent, rive } = useRive({
    src,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
    stateMachines: 'State Machine 1',
  });

  const onMouseEnter = () => {
    if (rive) {
      rive.play('Hover');
    }
  };

  const onMouseLeave = () => {
    if (rive) {
      rive.play('Idle');
    }
  };

  return (
    <div
      style={{ width, height }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <RiveComponent />
    </div>
  );
}
