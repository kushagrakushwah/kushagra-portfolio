import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

const SectionHeader = ({ number, title, className }: SectionHeaderProps) => {
  return (
    <div className={cn("flex items-center gap-4 mb-12", className)}>
      <span className="text-secondary font-mono text-sm">{number}</span>
      <h2 className="font-display text-2xl md:text-3xl text-primary tracking-wider">
        <span className="text-muted-foreground">//</span> {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
    </div>
  );
};

export default SectionHeader;
