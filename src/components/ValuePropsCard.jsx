const ValuePropsCard = ({ icon, title, description, badgeText, linkText }) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-lg bg-surface-container-low p-6 transition-colors hover:bg-surface-container">
      <div className="flex flex-col gap-2">
        <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-sm bg-surface-container-high text-primary">
          <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
        <span className="font-Geist text-label-sm font-semibold tracking-wider text-outline uppercase">
          {badgeText}
        </span>
        <h3 className="font-EB_Garamond text-headline-sm text-on-surface">{title}</h3>
        <p className="font-Hanken_Grotesk text-sm text-on-surface-variant">{description}</p>
      </div>
      <div className="mt-6 flex items-center gap-1 font-Geist text-label-sm font-semibold tracking-wider text-secondary uppercase">
        <span>{linkText}</span>
        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
    </div>
  );
};

export default ValuePropsCard;
